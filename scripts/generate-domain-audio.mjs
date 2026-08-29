#!/usr/bin/env node
// Pre-renders real audio files (MP3) for every read-aloud segment across the
// domain content (bullet text + every term-card's title/paragraph/"en
// corto") via Azure's neural TTS -- unlike the browser voice
// (src/hooks/useReadAloud.ts), a real audio file played through <audio> can
// keep going with the screen locked, same as any music/podcast site.
//
// Segments come from src/glossaryCards.ts's buildReadAloudSegments(), the
// same function the live browser-voice path uses, so file ids always match
// what the frontend will look up later.
//
// English/technical terms (AWS service names, ML/AI vocabulary, acronyms)
// need to actually be read in English -- Azure's SSML <lang> tag for
// switching languages mid-utterance turned out not to work on the Mexican
// Spanish voice used here (silently ignored, everything came out Spanish).
// The reliable fix: split each segment's text into runs of consecutive
// Spanish/English (splitIntoRuns()), synthesize each run with its own
// single-language voice (a real es-MX call, a real en-US call), and
// concatenate the resulting audio -- correct pronunciation guaranteed
// regardless of any one voice's cross-lingual support.
//
// Output is private/personal use only (others/ is gitignored, same as the
// TutorialsDojo quiz images) -- these are your own Azure-generated files,
// not committed or deployed.
//
// Setup:
//   1. Create an Azure Speech resource (free tier: 500,000 characters/month) --
//      https://portal.azure.com -> create a resource -> "Speech service"
//   2. export AZURE_SPEECH_KEY=...
//      export AZURE_SPEECH_REGION=...   (e.g. eastus -- must match your resource's region)
//
// Usage:
//   node scripts/generate-domain-audio.mjs test        # synthesize 3 sample segments, save to others/domain-audio-test/, print the runs
//   node scripts/generate-domain-audio.mjs generate     # synthesize every segment into others/domain-audio/ (skips files that already exist -- safe to re-run)
//   node scripts/generate-domain-audio.mjs stats        # no API calls: prints segment/character counts

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { domains } from '../src/domainData.ts';
import { glossaryEntries } from '../src/glossaryData.ts';
import { buildReadAloudSegments } from '../src/glossaryCards.ts';

const ROOT = join(import.meta.dirname, '..');
const OUT_DIR = join(ROOT, 'others', 'domain-audio');
const TEST_OUT_DIR = join(ROOT, 'others', 'domain-audio-test');

// Mexican Spanish neural voice (not es-ES) -- Dalia is one of Azure's
// original, most stable neural voices for this locale. Jorge (male) is the
// other standard option if you'd rather try that: es-MX-JorgeNeural.
const ES_VOICE = 'es-MX-DaliaNeural';
const EN_VOICE = 'en-US-JennyNeural';
const OUTPUT_FORMAT = 'audio-24khz-48kbitrate-mono-mp3';

// ---- English/technical term detection -------------------------------------

// Amazon/AWS/Bedrock/SageMaker/AgentCore product names, e.g. "Amazon
// SageMaker Model Cards", "Bedrock AgentCore Identity".
const AWS_SERVICE_RE = /\b(Amazon|AWS|Bedrock|SageMaker|AgentCore)\s+[A-Z][A-Za-z0-9]*(\s+[A-Z][A-Za-z0-9]*){0,4}/g;

// Multi-word technical phrases, longest-first so e.g. "prompt engineering"
// wins over a bare "prompt" also being in SINGLE_WORDS. Matched
// case-insensitively (mid-sentence lowercase mentions are common) but the
// original casing found in the text is what gets read, not this list's.
const PHRASES = [
  'Retrieval Augmented Generation',
  'Model Context Protocol',
  'Generative AI Security Scoping Matrix',
  'reinforcement learning',
  'in-context learning',
  'instruction tuning',
  'continued pre-training',
  'continuous pre-training',
  'transfer learning',
  'deep learning',
  'domain adaptation',
  'model distillation',
  'data cataloging',
  'data curation',
  'data lineage',
  'data residency',
  'data drift',
  'concept drift',
  'model fit',
  'knowledge bases',
  'knowledge base',
  'foundation models',
  'foundation model',
  'custom models',
  'time-series',
  'real-time',
  'chain-of-thought',
  'zero-shot',
  'one-shot',
  'single-shot',
  'few-shot',
  'prompt engineering',
  'prompt caching',
  'prompt templates',
  'prompt injection',
  'fine-tuning',
  'human-in-the-loop',
  'cross-domain performance',
  'confidence scoring',
  'provisioned throughput',
  'time-to-market',
  'speech recognition',
  'computer vision',
  'neural networks',
  'machine learning',
].sort((a, b) => b.length - a.length);

const SINGLE_WORDS = [
  'Chunking',
  'Embeddings',
  'Embedding',
  'Vectors',
  'Vector',
  'Tokens',
  'Token',
  'Guardrails',
  'Guardrail',
  'Jailbreaking',
  'Hijacking',
  'Poisoning',
  'Grounding',
  'Safety',
  'Compliance',
  'Throughput',
  'Workflows',
  'Workflow',
  'Overfitting',
  'Underfitting',
  'Kiro',
  'Strands',
  'Latency',
  'Playground',
  'Endpoint',
  'Dataset',
  'Datasets',
  'Framework',
  'Benchmark',
  'Serverless',
  'Bias',
  'Fairness',
  'Distillation',
  'Accuracy',
  'Precision',
  'Recall',
  'Performance',
  'Responsiveness',
  'Observability',
  'Discovery',
  'Labeling',
  'Exposure',
  'Batch',
  'Asynchronous',
  'MLOps',
  'GenAI',
  'Scope',
  'Scopes',
  // AWS service names that sometimes appear bare, without a preceding
  // "Amazon"/"AWS" (which AWS_SERVICE_RE above already catches).
  'Comprehend',
  'Transcribe',
  'Rekognition',
  'Aurora',
  'Lex',
  'Polly',
  'Neptune',
  'Trainium',
  'Inferentia',
  'JumpStart',
  'OpenSearch',
];

// Bare acronyms (2-6 uppercase letters, optionally plural: "LLMs", "FMs").
// "IA" is Spanish (Inteligencia Artificial) and reads fine in Spanish --
// excluded so it isn't force-read as English "I-A".
const ACRONYM_EXCLUDE = new Set(['IA']);
const ACRONYM_RE = /\b[A-Z]{2,6}s?\b/g;

// Finds every span of `text` that should be read in English, merged so
// overlapping/adjacent matches (e.g. an acronym inside an AWS service name)
// collapse into one.
function findEnglishSpans(text) {
  const spans = [];
  const addMatches = (re) => {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) spans.push([m.index, m.index + m[0].length]);
  };
  addMatches(new RegExp(AWS_SERVICE_RE.source, 'g'));
  for (const phrase of PHRASES) addMatches(new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'));
  for (const word of SINGLE_WORDS) addMatches(new RegExp(`\\b${word}\\b`, 'gi'));
  {
    let m;
    ACRONYM_RE.lastIndex = 0;
    while ((m = ACRONYM_RE.exec(text))) {
      if (!ACRONYM_EXCLUDE.has(m[0])) spans.push([m.index, m.index + m[0].length]);
    }
  }
  spans.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const merged = [];
  for (const [start, end] of spans) {
    const last = merged[merged.length - 1];
    if (last && start <= last[1]) last[1] = Math.max(last[1], end);
    else merged.push([start, end]);
  }
  return merged;
}

// Splits `text` into ordered { lang, text } runs covering the whole string --
// English spans become 'en' runs, everything between/around them becomes
// 'es' runs. Empty/whitespace-only runs are dropped.
function splitIntoRuns(text) {
  const spans = findEnglishSpans(text);
  const runs = [];
  let cursor = 0;
  for (const [start, end] of spans) {
    const before = text.slice(cursor, start);
    if (before.trim()) runs.push({ lang: 'es', text: before });
    runs.push({ lang: 'en', text: text.slice(start, end) });
    cursor = end;
  }
  const rest = text.slice(cursor);
  if (rest.trim()) runs.push({ lang: 'es', text: rest });
  return runs;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---- segment collection -----------------------------------------------

function allSegments() {
  const htmlById = new Map(glossaryEntries.map((g) => [g.id, g.html]));
  const segments = [];
  for (const d of domains) {
    for (const ss of d.subsections) {
      for (const b of ss.bullets) {
        const html = htmlById.get(b.glossId);
        if (!html) continue;
        segments.push(...buildReadAloudSegments(b.glossId, html));
      }
    }
  }
  return segments;
}

// ---- Azure calls --------------------------------------------------------

function requireAzureCreds() {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) {
    console.error(
      'Faltan AZURE_SPEECH_KEY / AZURE_SPEECH_REGION.\n' +
        'Creá un recurso "Speech service" en https://portal.azure.com (tiene nivel gratis) y corré:\n' +
        '  export AZURE_SPEECH_KEY=...\n' +
        '  export AZURE_SPEECH_REGION=...   (ej. eastus, el mismo de tu recurso)\n',
    );
    process.exit(1);
  }
  return { key, region };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function synthesizeRaw(ssml, { key, region }, attempt = 0) {
  const res = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': OUTPUT_FORMAT,
      'User-Agent': 'aws-ai-practitioner-study-guide',
    },
    body: ssml,
  });
  if (res.status === 429 && attempt < 4) {
    await sleep(1000 * 2 ** attempt);
    return synthesizeRaw(ssml, { key, region }, attempt + 1);
  }
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Azure TTS ${res.status}: ${body.slice(0, 300)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function ssmlFor(text, lang) {
  const voice = lang === 'en' ? EN_VOICE : ES_VOICE;
  const xmlLang = lang === 'en' ? 'en-US' : 'es-MX';
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${xmlLang}"><voice name="${voice}">${escapeXml(text)}</voice></speak>`;
}

// Synthesizes one segment's full text, splicing in a real English voice for
// any English runs. A short pause (silence-padded via a tiny gap between
// concatenated MP3 buffers isn't reliable, so this just concatenates the
// audio directly) happens between runs naturally from each utterance's own
// leading/trailing silence.
async function synthesizeSegment(text, creds) {
  const runs = splitIntoRuns(text);
  if (runs.length === 0) return { runs, audio: Buffer.alloc(0) };
  if (runs.length === 1) {
    const audio = await synthesizeRaw(ssmlFor(runs[0].text, runs[0].lang), creds);
    return { runs, audio };
  }
  const buffers = [];
  for (const run of runs) {
    buffers.push(await synthesizeRaw(ssmlFor(run.text, run.lang), creds));
    await sleep(120); // be gentle with the free tier's rate limit
  }
  return { runs, audio: Buffer.concat(buffers) };
}

// ---- commands -------------------------------------------------------------

function cmdStats() {
  const segments = allSegments();
  const totalChars = segments.reduce((s, seg) => s + seg.text.length, 0);
  const byKind = {};
  for (const s of segments) byKind[s.kind] = (byKind[s.kind] || 0) + 1;
  console.log(`Segmentos: ${segments.length}`);
  console.log(`Caracteres totales: ${totalChars}`);
  console.log('Por tipo:', byKind);
}

async function cmdTest() {
  const creds = requireAzureCreds();
  const segments = allSegments();
  const sample = [segments.find((s) => s.kind === 'title'), segments.find((s) => s.kind === 'paragraph'), segments.find((s) => s.kind === 'short-text')].filter(Boolean);
  if (!existsSync(TEST_OUT_DIR)) mkdirSync(TEST_OUT_DIR, { recursive: true });
  for (const seg of sample) {
    console.log(`\n--- ${seg.id} ---`);
    console.log('Texto:', seg.text);
    const { runs, audio } = await synthesizeSegment(seg.text, creds);
    console.log('Partes:', runs.map((r) => `[${r.lang}] ${r.text}`).join('  '));
    const path = join(TEST_OUT_DIR, `${seg.id}.mp3`);
    writeFileSync(path, audio);
    console.log(`Guardado: ${path} (${(audio.length / 1024).toFixed(1)} KB)`);
  }
  console.log(`\nEscuchá los archivos en ${TEST_OUT_DIR} antes de correr "generate" (que sí gasta tu cuota completa).`);
}

async function cmdGenerate() {
  const creds = requireAzureCreds();
  const segments = allSegments();
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  let done = 0;
  let skipped = 0;
  let failed = 0;
  for (const seg of segments) {
    const path = join(OUT_DIR, `${seg.id}.mp3`);
    if (existsSync(path)) {
      skipped++;
      continue;
    }
    try {
      const { audio } = await synthesizeSegment(seg.text, creds);
      writeFileSync(path, audio);
      done++;
      if (done % 25 === 0) console.log(`${done + skipped} / ${segments.length}...`);
    } catch (err) {
      failed++;
      console.error(`Falló ${seg.id}: ${err.message}`);
    }
  }
  console.log(`\nGenerados: ${done}. Ya existían (saltados): ${skipped}. Fallidos: ${failed}.`);
  console.log(`Archivos en ${OUT_DIR}`);
}

const cmd = process.argv[2];
const commands = { stats: cmdStats, test: cmdTest, generate: cmdGenerate };
if (!commands[cmd]) {
  console.error('Uso: node scripts/generate-domain-audio.mjs <stats|test|generate>');
  process.exit(1);
}
await commands[cmd]();
