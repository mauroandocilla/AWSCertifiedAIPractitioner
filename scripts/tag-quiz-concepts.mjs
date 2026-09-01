// One-off script: tags each question in src/quiz/data/set-*.json with the
// glossary term-card(s) (src/glossaryData.ts, `${glossId}#${cardIndex}` per
// src/conceptGraph.ts) it actually tests -- same idea as
// classify-quiz-scope.mjs's tag-domains, but at concept granularity instead
// of domain granularity. Candidates are scoped to the question's own
// (already-tagged) `domain` to keep the prompt small and avoid cross-domain
// false matches; questions without a domain fall back to the full 310-card
// list. Idempotent: only (re)classifies questions missing `relatedConcepts`.
//
// Setup: export ANTHROPIC_API_KEY=sk-ant-... (https://console.anthropic.com/settings/keys)
//
// Usage:
//   node scripts/tag-quiz-concepts.mjs test      # classify 3 questions synchronously, print result
//   node scripts/tag-quiz-concepts.mjs submit    # submit a batch for every question missing relatedConcepts
//   node scripts/tag-quiz-concepts.mjs status    # check progress of the saved batch
//   node scripts/tag-quiz-concepts.mjs collect   # poll until done, write relatedConcepts back into data/ + data-es/
//
// Pass --force after submit/collect to re-classify every question (not just
// ones missing relatedConcepts) and overwrite existing results -- e.g. after
// switching MODEL to a more capable one:
//   node scripts/tag-quiz-concepts.mjs submit --force
//   node scripts/tag-quiz-concepts.mjs collect --force
//
// After this (and tag-quiz-v2-concepts.mjs) have both been collected, run
// scripts/generate-concept-index.mjs to build src/quiz/conceptIndex.ts.
import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { glossaryEntries } from '../src/glossaryData.ts';
import { parseGlossaryCards, stripHtml } from '../src/glossaryCards.ts';

const root = new URL('..', import.meta.url).pathname;
const dataDir = path.join(root, 'src/quiz/data');
const dataDirEs = path.join(root, 'src/quiz/data-es');
const batchStateFile = path.join(root, '.quiz-concept-tag-batch.json');

const MODEL = 'claude-sonnet-5';
const FORCE = process.argv.includes('--force');
const MAX_CONCEPTS_PER_QUESTION = 3;

// ---- candidate concept list, built straight from the glossary itself -----
// (same idea as classify-quiz-scope.mjs's buildDomainReference: grounding
// context pulled from the repo's own real source, never hand-duplicated).

function buildConceptCandidates() {
  const all = [];
  const byDomain = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (const entry of glossaryEntries) {
    parseGlossaryCards(entry.html).forEach((card, i) => {
      const item = { id: `${entry.id}#${i}`, title: stripHtml(card.titleHtml) };
      all.push(item);
      if (byDomain[entry.domain]) byDomain[entry.domain].push(item);
    });
  }
  return { all, byDomain };
}

function formatCandidates(items) {
  return items.map((c) => `${c.id}: ${c.title}`).join('\n');
}

function buildSystemPrompt(candidateItems) {
  return `Sos un asistente que vincula preguntas de un banco de práctica para la certificación AWS Certified AI Practitioner (AIF-C01) con los conceptos puntuales del glosario de esta guía de estudio que esa pregunta evalúa.

Te paso una pregunta (con sus opciones, la respuesta correcta y la explicación) y una lista de conceptos candidatos, cada uno con su id exacto. Elegí solo los ids de los conceptos que la pregunta evalúa de forma directa -- no cualquier término que aparezca mencionado de pasada en el enunciado o las opciones. Como mucho ${MAX_CONCEPTS_PER_QUESTION} conceptos, priorizando los más centrales. Si ninguno aplica con confianza razonable, devolvé una lista vacía.

Usá EXCLUSIVAMENTE ids de esta lista, tal cual están escritos -- nunca inventes uno nuevo ni cambies el formato:

${formatCandidates(candidateItems)}`;
}

// No .max() here on purpose: the prompt asks for at most
// MAX_CONCEPTS_PER_QUESTION, but the model doesn't always respect that cap in
// structured output -- a hard schema max would reject the whole response
// (losing every concept for that question) instead of just trimming the
// overshoot. Capping happens after parsing instead, once invalid/hallucinated
// ids are already filtered out (see cmdCollect).
const VerdictSchema = z.object({
  relatedConcepts: z.array(z.string()),
});
const outputFormat = zodOutputFormat(VerdictSchema);

function buildSystemPromptsByDomain() {
  const { all, byDomain } = buildConceptCandidates();
  const byDomainPrompt = {};
  for (const d of [1, 2, 3, 4, 5]) byDomainPrompt[d] = buildSystemPrompt(byDomain[d]);
  const fullPrompt = buildSystemPrompt(all);
  const validIds = new Set(all.map((c) => c.id));
  return { byDomainPrompt, fullPrompt, validIds };
}

function systemPromptFor(question, { byDomainPrompt, fullPrompt }) {
  return question.domain && byDomainPrompt[question.domain] ? byDomainPrompt[question.domain] : fullPrompt;
}

function buildParams(question, systemPrompt) {
  const correct = question.options
    .filter((o) => o.correct)
    .map((o) => o.text)
    .join(' | ');
  const userContent = [
    `Pregunta: ${question.text}`,
    `Opciones: ${question.options.map((o) => o.text).join(' | ')}`,
    `Respuesta(s) correcta(s): ${correct}`,
    `Explicación: ${stripHtml(question.explanationHtml)}`,
  ].join('\n');
  return {
    model: MODEL,
    max_tokens: 512,
    system: systemPrompt,
    output_config: { format: outputFormat },
    messages: [{ role: 'user', content: userContent }],
  };
}

function readSets() {
  const files = fs
    .readdirSync(dataDir)
    .filter((f) => /^set-\d+\.json$/.test(f))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8')));
}

function requireApiKey() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error(
      'Falta ANTHROPIC_API_KEY.\n' +
        'Conseguí una key en https://console.anthropic.com/settings/keys y corré:\n' +
        '  export ANTHROPIC_API_KEY=sk-ant-...\n',
    );
    process.exit(1);
  }
}

async function cmdTest() {
  requireApiKey();
  const client = new Anthropic();
  const prompts = buildSystemPromptsByDomain();
  const sets = readSets();
  const samples = [sets[0].questions[0], sets[0].questions[7], sets[5].questions[0]];
  for (const q of samples) {
    const response = await client.messages.parse(buildParams(q, systemPromptFor(q, prompts)));
    console.log(`\n${q.id} (domain ${q.domain ?? 'null'}): ${q.text.slice(0, 70)}...`);
    console.log(' ->', response.parsed_output);
  }
}

async function cmdSubmit() {
  requireApiKey();
  if (fs.existsSync(batchStateFile)) {
    console.error(`Ya existe un batch guardado en ${batchStateFile}. Corré "collect", o borralo para arrancar de cero.`);
    process.exit(1);
  }
  const client = new Anthropic();
  const prompts = buildSystemPromptsByDomain();
  const sets = readSets();
  const requests = sets.flatMap((set) =>
    set.questions
      .filter((q) => FORCE || q.relatedConcepts == null)
      .map((q) => ({ custom_id: q.id, params: buildParams(q, systemPromptFor(q, prompts)) })),
  );
  if (requests.length === 0) {
    console.log('Todas las preguntas ya tienen relatedConcepts. Pasá --force para re-clasificar todo de nuevo (ej. con otro modelo).');
    return;
  }
  console.log(`Enviando batch de vinculación de conceptos con ${requests.length} preguntas...`);
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(batchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Guardado en ${batchStateFile}. Corré "node scripts/tag-quiz-concepts.mjs collect" para esperarlo.`);
}

async function cmdStatus() {
  requireApiKey();
  if (!fs.existsSync(batchStateFile)) {
    console.error(`No hay ningún batch guardado (${batchStateFile} no existe). Corré "submit" primero.`);
    process.exit(1);
  }
  const { batchId } = JSON.parse(fs.readFileSync(batchStateFile, 'utf8'));
  const client = new Anthropic();
  const batch = await client.messages.batches.retrieve(batchId);
  console.log(`Batch ${batchId}: ${batch.processing_status}`);
  console.log(batch.request_counts);
}

async function cmdCollect() {
  requireApiKey();
  if (!fs.existsSync(batchStateFile)) {
    console.error(`No hay ningún batch guardado (${batchStateFile} no existe). Corré "submit" primero.`);
    process.exit(1);
  }
  const { batchId } = JSON.parse(fs.readFileSync(batchStateFile, 'utf8'));
  const client = new Anthropic();

  let batch = await client.messages.batches.retrieve(batchId);
  while (batch.processing_status !== 'ended') {
    console.log(`Estado: ${batch.processing_status} — ${JSON.stringify(batch.request_counts)}`);
    await new Promise((resolve) => setTimeout(resolve, 60_000));
    batch = await client.messages.batches.retrieve(batchId);
  }
  console.log('Batch terminado. Bajando resultados...');

  const { validIds } = buildSystemPromptsByDomain();
  const conceptsById = {};
  const errors = [];
  const invalidIds = [];
  for await (const result of await client.messages.batches.results(batchId)) {
    if (result.result.type === 'succeeded') {
      const textBlock = result.result.message.content.find((b) => b.type === 'text');
      try {
        if (!textBlock) throw new Error('la respuesta no trae ningún bloque de texto');
        const v = VerdictSchema.parse(JSON.parse(textBlock.text));
        const clean = v.relatedConcepts.filter((id) => {
          const ok = validIds.has(id);
          if (!ok) invalidIds.push({ custom_id: result.custom_id, id });
          return ok;
        });
        conceptsById[result.custom_id] = clean.slice(0, MAX_CONCEPTS_PER_QUESTION);
      } catch (err) {
        errors.push({ custom_id: result.custom_id, reason: `parse error: ${err.message}` });
      }
    } else {
      // result.result.type is just 'errored'/'canceled'/'expired' -- the
      // actual reason (rate limit, overloaded, invalid request, etc.) lives
      // in result.result.error for 'errored', so surface that instead of
      // just the bare type, or we're guessing blind at why a retry failed.
      const detail = result.result.type === 'errored' ? (result.result.error?.error?.message ?? JSON.stringify(result.result.error)) : result.result.type;
      errors.push({ custom_id: result.custom_id, reason: `${result.result.type}: ${detail}` });
    }
  }

  let tagged = 0;
  let withConcepts = 0;
  for (const dir of [dataDir, dataDirEs]) {
    const files = fs.readdirSync(dir).filter((f) => /^set-\d+\.json$/.test(f));
    for (const file of files) {
      const filePath = path.join(dir, file);
      const set = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let changed = false;
      for (const q of set.questions) {
        if (Object.prototype.hasOwnProperty.call(conceptsById, q.id) && (FORCE || q.relatedConcepts == null)) {
          q.relatedConcepts = conceptsById[q.id];
          changed = true;
          if (dir === dataDir) {
            tagged++;
            if (q.relatedConcepts.length > 0) withConcepts++;
          }
        }
      }
      if (changed) fs.writeFileSync(filePath, JSON.stringify(set, null, 2) + '\n');
    }
  }

  console.log(`\nEtiquetadas: ${tagged} (con al menos un concepto: ${withConcepts}). Errores: ${errors.length}.`);
  if (invalidIds.length) console.log(`Ids inválidos descartados (alucinados por el modelo): ${invalidIds.length}`, invalidIds.slice(0, 10));
  if (errors.length) {
    const byReason = {};
    for (const e of errors) byReason[e.reason] = (byReason[e.reason] || 0) + 1;
    console.log('Con error, agrupado por motivo (quedan sin relatedConcepts):', byReason);
    console.log('Primeros 5 con detalle:', errors.slice(0, 5));
  }
  fs.rmSync(batchStateFile);
}

const cmd = process.argv[2];
const commands = { test: cmdTest, submit: cmdSubmit, status: cmdStatus, collect: cmdCollect };
if (!commands[cmd]) {
  console.error('Uso: node scripts/tag-quiz-concepts.mjs <test|submit|status|collect>');
  process.exit(1);
}
await commands[cmd]();
