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
// single-language voice (a real es-MX call, a real en-US call), and splice
// the audio back together with ffmpeg -- correct pronunciation guaranteed
// regardless of any one voice's cross-lingual support.
//
// Naively concatenating separate Azure calls left a very noticeable gap at
// every splice point -- each call comes back with its own lead-in/lead-out
// silence, and those stack up when several short calls (a single acronym,
// say) are glued together back to back. trimSilence() cuts each run's own
// padding down first, then a short *controlled* gap (SILENCE_GAP_SECONDS)
// is inserted between runs instead, for a consistent, natural-feeling pace
// regardless of how many pieces a given segment got split into. Requires
// ffmpeg on PATH (brew install ffmpeg).
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
//   3. Make sure ffmpeg is installed: brew install ffmpeg
//
// Usage:
//   node scripts/generate-domain-audio.mjs test        # synthesize 3 sample segments, save to others/domain-audio-test/, print the runs
//   node scripts/generate-domain-audio.mjs generate     # synthesize every segment into others/domain-audio/ (skips files that already exist -- safe to re-run)
//   node scripts/generate-domain-audio.mjs stats        # no API calls: prints segment/character counts

import { writeFileSync, readFileSync, mkdirSync, existsSync, rmSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { domains } from '../src/domainData.ts';
import { glossaryEntries } from '../src/glossaryData.ts';
import { buildReadAloudSegments } from '../src/glossaryCards.ts';

const ROOT = join(import.meta.dirname, '..');
// public/domain-audio/ is just the local staging area -- gitignored, never
// committed. The frontend (src/audioBase.ts) actually reads these from a
// GitHub Release, not the deployed site's own files, so after generating
// here you still need to publish them:
//   gh release create domain-audio-v1 --repo mauroandocilla/AWSCertifiedAIPractitioner --title "Domain audio v1" --notes "Pre-rendered read-aloud audio"
//   gh release upload domain-audio-v1 public/domain-audio/*.mp3 --repo mauroandocilla/AWSCertifiedAIPractitioner
const OUT_DIR = join(ROOT, 'public', 'domain-audio');
const TEST_OUT_DIR = join(ROOT, 'others', 'domain-audio-test');
const SILENCE_GAP_SECONDS = 0.12;
const SAMPLE_RATE = 24000;

// Same multilingual voice for both -- one consistent persona for the whole
// clip instead of an audible switch between two different voices at every
// splice point. Andrew's supported-languages list includes Spanish
// (Mexico), which is what makes this work; a single-locale voice like
// es-MX-DaliaNeural can't do this (confirmed: its xml:lang="en-US" runs
// still came out sounding Spanish-accented when tried).
const ES_VOICE = 'en-US-AndrewMultilingualNeural';
const EN_VOICE = 'en-US-AndrewMultilingualNeural';
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

export function allSegments() {
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
  // One shared file, reused before every short-summary segment in the
  // frontend's "solo en corto" playback mode -- not part of
  // buildReadAloudSegments() since it's a synthetic UI-mode label, not real
  // bullet/glossary content.
  segments.push({ id: '_resumen-label', text: 'Resumen.', kind: 'label' });
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

// Azure's neural TTS (especially with an mstts:express-as style applied)
// sometimes cuts a run's audio off early and still returns 200 OK with a
// short-but-valid mp3 -- confirmed by comparing generated files' duration
// against their source text length across the whole library: truncated
// files clock in at 100-750+ chars/sec of "speech", versus ~15-40 chars/sec
// for every normal file. Retquerying the same run a couple of times reliably
// gets a full-length take, so treat a too-fast result as a transient failure
// and retry before accepting it.
// Exported (not just module-local) so scripts/check-audio-truncation.mjs can
// re-run this exact same test against already-generated files, instead of
// duplicating the threshold and risking it drifting out of sync.
export const MIN_PLAUSIBLE_CHARS_PER_SEC = 60;
const MAX_SYNTHESIS_ATTEMPTS = 4;

function mp3DurationSeconds(path) {
  try {
    const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', path]).toString().trim();
    return parseFloat(out);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('\nFalta ffprobe (viene con ffmpeg, se usa para detectar audio truncado).');
      console.error('Instalalo con: brew install ffmpeg\n');
      process.exit(1);
    }
    throw err;
  }
}

async function synthesizeRunChecked(run, creds, workDir, index) {
  for (let attempt = 1; attempt <= MAX_SYNTHESIS_ATTEMPTS; attempt++) {
    const audio = await synthesizeRaw(ssmlFor(run.text, run.lang), creds);
    const probePath = join(workDir, `probe-${index}.mp3`);
    writeFileSync(probePath, audio);
    const dur = mp3DurationSeconds(probePath);
    const charsPerSec = run.text.length / Math.max(dur, 0.05);
    if (charsPerSec <= MIN_PLAUSIBLE_CHARS_PER_SEC || run.text.length < 15) return audio;
    console.error(`  (run ${index} salió sospechosamente corto: "${run.text.slice(0, 50)}..." -> ${dur.toFixed(2)}s, reintento ${attempt}/${MAX_SYNTHESIS_ATTEMPTS})`);
  }
  throw new Error(`El run "${run.text.slice(0, 60)}" salió truncado tras ${MAX_SYNTHESIS_ATTEMPTS} intentos`);
}

// "relieved" style + a touch slower -- if the voice doesn't support this
// particular style, Azure falls back to its default style silently rather
// than erroring the whole request, so this is safe to just try.
const SPEAKING_STYLE = 'relieved';
const RATE_ADJUSTMENT = '-9%';

function ssmlFor(text, lang) {
  const voice = lang === 'en' ? EN_VOICE : ES_VOICE;
  const xmlLang = lang === 'en' ? 'en-US' : 'es-MX';
  return (
    `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${xmlLang}">` +
    `<voice name="${voice}"><mstts:express-as style="${SPEAKING_STYLE}"><prosody rate="${RATE_ADJUSTMENT}">${escapeXml(text)}</prosody></mstts:express-as></voice>` +
    `</speak>`
  );
}

// ---- ffmpeg splicing ------------------------------------------------------

let tmpDir = null;
function getTmpDir() {
  if (!tmpDir) tmpDir = mkdtempSync(join(tmpdir(), 'domain-audio-'));
  return tmpDir;
}

function runFfmpeg(args) {
  try {
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: ['ignore', 'ignore', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('\nFalta ffmpeg (se usa para recortar el silencio de sobra entre los pedazos en inglés/español).');
      console.error('Instalalo con: brew install ffmpeg\n');
      process.exit(1);
    }
    throw new Error(`ffmpeg falló: ${err.stderr?.toString().slice(0, 400) || err.message}`);
  }
}

let silencePath = null;
// A short, reusable silence clip -- the deliberate pause inserted between
// spliced runs, replacing whatever inconsistent lead-in/lead-out padding
// Azure's own response for each run happened to have.
function getSilencePath() {
  if (silencePath) return silencePath;
  silencePath = join(getTmpDir(), 'silence.mp3');
  runFfmpeg(['-f', 'lavfi', '-i', `anullsrc=r=${SAMPLE_RATE}:cl=mono`, '-t', String(SILENCE_GAP_SECONDS), '-b:a', '48k', silencePath]);
  return silencePath;
}

// Trims near-silent audio off both ends of `inputPath` (the reverse-twice
// trick: trim the start, reverse, trim what's now the start (the original
// end), reverse back) -- Azure's per-utterance lead-in/lead-out silence is
// what made runs.length > 1 segments have such a large gap at each splice.
function trimSilence(inputPath, outputPath) {
  runFfmpeg([
    '-i',
    inputPath,
    '-af',
    'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05:detection=peak,' +
      'areverse,' +
      'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05:detection=peak,' +
      'areverse',
    '-ar',
    String(SAMPLE_RATE),
    '-ac',
    '1',
    '-b:a',
    '48k',
    outputPath,
  ]);
}

function concatWithGaps(paths, outputPath) {
  const silence = getSilencePath();
  const withGaps = paths.flatMap((p, i) => (i === 0 ? [p] : [silence, p]));
  const listPath = join(getTmpDir(), `concat-${Date.now()}.txt`);
  writeFileSync(listPath, withGaps.map((p) => `file '${p.replace(/'/g, "'\\''")}'`).join('\n'));
  runFfmpeg(['-f', 'concat', '-safe', '0', '-i', listPath, '-ar', String(SAMPLE_RATE), '-ac', '1', '-b:a', '48k', outputPath]);
  rmSync(listPath);
}

// Synthesizes one segment's full text, splicing in a real English voice for
// any English runs, ffmpeg-trimmed and re-joined with a short controlled
// pause instead of each run's own (much larger, inconsistent) padding.
async function synthesizeSegment(text, creds) {
  const runs = splitIntoRuns(text);
  if (runs.length === 0) return { runs, audio: Buffer.alloc(0) };

  const workDir = getTmpDir();
  const rawPaths = [];
  const rawBuffers = [];
  for (let i = 0; i < runs.length; i++) {
    const run = runs[i];
    const audio = await synthesizeRunChecked(run, creds, workDir, i);
    rawBuffers.push(audio);
    const rawPath = join(workDir, `raw-${i}.mp3`);
    writeFileSync(rawPath, audio);
    rawPaths.push(rawPath);
    if (runs.length > 1) await sleep(120); // be gentle with the free tier's rate limit
  }

  try {
    const trimmedPaths = rawPaths.map((p, i) => {
      const trimmedPath = join(workDir, `trimmed-${i}.mp3`);
      trimSilence(p, trimmedPath);
      return trimmedPath;
    });

    const outPath = join(workDir, 'segment-out.mp3');
    if (trimmedPaths.length === 1) {
      execFileSync('cp', [trimmedPaths[0], outPath]);
    } else {
      concatWithGaps(trimmedPaths, outPath);
    }
    return { runs, audio: readFileSync(outPath) };
  } catch (err) {
    // ffmpeg/libmp3lame occasionally chokes on a specific buffer ("inadequate
    // AVFrame plane padding", a known libmp3lame quirk, reproducibly on some
    // audio) -- rather than failing the whole segment, fall back to the raw,
    // untrimmed audio concatenated directly. Bigger gap at the splice than
    // usual for this one segment, but "generate" never gets stuck on it.
    console.error(`  (ffmpeg falló recortando/pegando, uso audio sin recortar: ${String(err.message).split('\n')[0]})`);
    return { runs, audio: Buffer.concat(rawBuffers) };
  }
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

// Only run the CLI dispatch when this file is executed directly -- guarded
// so scripts/check-audio-truncation.mjs can import allSegments()/
// MIN_PLAUSIBLE_CHARS_PER_SEC from here without triggering "Uso: ..." and a
// process.exit(1).
if (import.meta.url === `file://${process.argv[1]}`) {
  const cmd = process.argv[2];
  const commands = { stats: cmdStats, test: cmdTest, generate: cmdGenerate };
  if (!commands[cmd]) {
    console.error('Uso: node scripts/generate-domain-audio.mjs <stats|test|generate>');
    process.exit(1);
  }
  await commands[cmd]();
}
