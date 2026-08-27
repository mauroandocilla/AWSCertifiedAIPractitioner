// One-off translation script: translates src/quiz/data/set-*.json (English,
// from SkillCertPro) into src/quiz/data-es/set-*.json (Spanish), using the
// Anthropic Batch API with claude-haiku-4-5 (cheap, good enough for this —
// see conversation notes). Runs OUTSIDE Claude Code, billed on your own
// Anthropic API key, at ~50% off standard price via batching.
//
// Setup:
//   1. Get an API key at https://console.anthropic.com/settings/keys
//   2. export ANTHROPIC_API_KEY=sk-ant-...
//
// Usage:
//   node scripts/translate-quiz.mjs test      # translate 2 questions synchronously, print result — sanity check before spending on the real batch
//   node scripts/translate-quiz.mjs submit    # build + submit the full batch (~1218 requests), save the batch id locally
//   node scripts/translate-quiz.mjs status    # check progress of the saved batch
//   node scripts/translate-quiz.mjs collect   # poll until the batch finishes, then write src/quiz/data-es/set-N.json
import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';

const root = new URL('..', import.meta.url).pathname;
const dataDir = path.join(root, 'src/quiz/data');
const outDir = path.join(root, 'src/quiz/data-es');
const batchStateFile = path.join(root, '.quiz-translate-batch.json');

const MODEL = 'claude-haiku-4-5';

const TranslationSchema = z.object({
  text: z.string(),
  options: z.array(z.string()),
  explanationHtml: z.string(),
});
const outputFormat = zodOutputFormat(TranslationSchema);

const SYSTEM_PROMPT = `Sos un traductor técnico especializado en contenido de certificaciones de AWS.
Traducí el siguiente ítem de un quiz de práctica para la certificación AWS Certified AI Practitioner
del inglés al español neutro, natural y conversacional (no literal palabra por palabra) — el mismo
tono que usa el resto de esta guía de estudio.

Reglas:
- NO traduzcas nombres de servicios/productos de AWS (Amazon Bedrock, SageMaker, Amazon Comprehend, etc.)
  ni jerga técnica que se usa en inglés en la industria (prompt, embedding, fine-tuning, token, endpoint, etc.).
- El campo "explanationHtml" contiene HTML. Traducí SOLO el texto legible entre etiquetas. No modifiques,
  elimines ni traduzcas las etiquetas, atributos, URLs, ni el contenido de <code>.
- Mantené exactamente la misma cantidad de opciones, en el mismo orden.
- Es una traducción, no un resumen: no agregues ni quites información.`;

function readSets() {
  const files = fs
    .readdirSync(dataDir)
    .filter((f) => /^set-\d+\.json$/.test(f))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8')));
}

function buildParams(question) {
  return {
    model: MODEL,
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    output_config: { format: outputFormat },
    messages: [
      {
        role: 'user',
        content: JSON.stringify({
          text: question.text,
          options: question.options.map((o) => o.text),
          explanationHtml: question.explanationHtml,
        }),
      },
    ],
  };
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
  const sets = readSets();
  const sample = sets[0].questions.slice(0, 2);
  for (const q of sample) {
    const response = await client.messages.parse({ ...buildParams(q) });
    console.log(`\n--- ${q.id} ---`);
    console.log('EN:', q.text);
    console.log('ES:', response.parsed_output?.text);
    console.log('Opciones ES:', response.parsed_output?.options);
    console.log('Explicación ES (primeros 300 chars):', response.parsed_output?.explanationHtml?.slice(0, 300));
  }
}

async function cmdSubmit() {
  requireApiKey();
  if (fs.existsSync(batchStateFile)) {
    console.error(
      `Ya existe un batch guardado en ${batchStateFile}. Corré "collect" o "status" primero, ` +
        `o borrá ese archivo si querés arrancar de cero.`,
    );
    process.exit(1);
  }
  const client = new Anthropic();
  const sets = readSets();
  const requests = sets.flatMap((set) =>
    set.questions.map((q) => ({ custom_id: q.id, params: buildParams(q) })),
  );
  console.log(`Enviando batch con ${requests.length} preguntas...`);
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(batchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Estado: ${batch.processing_status}`);
  console.log(`Guardado en ${batchStateFile}. Corré "node scripts/translate-quiz.mjs collect" para esperarlo y bajar los resultados.`);
}

function loadBatchState() {
  if (!fs.existsSync(batchStateFile)) {
    console.error(`No hay ningún batch guardado (${batchStateFile} no existe). Corré "submit" primero.`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(batchStateFile, 'utf8'));
}

async function cmdStatus() {
  requireApiKey();
  const { batchId } = loadBatchState();
  const client = new Anthropic();
  const batch = await client.messages.batches.retrieve(batchId);
  console.log(`Batch ${batchId}: ${batch.processing_status}`);
  console.log(batch.request_counts);
}

async function cmdCollect() {
  requireApiKey();
  const { batchId } = loadBatchState();
  const client = new Anthropic();

  let batch = await client.messages.batches.retrieve(batchId);
  while (batch.processing_status !== 'ended') {
    console.log(`Estado: ${batch.processing_status} — ${JSON.stringify(batch.request_counts)}`);
    await new Promise((resolve) => setTimeout(resolve, 60_000));
    batch = await client.messages.batches.retrieve(batchId);
  }
  console.log('Batch terminado. Bajando resultados...');
  console.log(batch.request_counts);

  const translations = new Map();
  const errors = [];
  for await (const result of await client.messages.batches.results(batchId)) {
    if (result.result.type === 'succeeded') {
      const textBlock = result.result.message.content.find((b) => b.type === 'text');
      try {
        const parsed = TranslationSchema.parse(JSON.parse(textBlock.text));
        translations.set(result.custom_id, parsed);
      } catch (err) {
        errors.push({ custom_id: result.custom_id, reason: `parse error: ${err.message}` });
      }
    } else {
      errors.push({ custom_id: result.custom_id, reason: result.result.type });
    }
  }
  console.log(`Traducidas: ${translations.size}. Errores: ${errors.length}.`);
  if (errors.length) console.log('Preguntas con error (quedan en inglés, reintentar después):', errors);

  fs.mkdirSync(outDir, { recursive: true });
  const sets = readSets();
  for (const set of sets) {
    const translatedQuestions = set.questions.map((q) => {
      const t = translations.get(q.id);
      if (!t || t.options.length !== q.options.length) return q;
      return {
        ...q,
        text: t.text,
        options: q.options.map((o, i) => ({ ...o, text: t.options[i] })),
        explanationHtml: t.explanationHtml,
      };
    });
    const outSet = { ...set, questions: translatedQuestions };
    fs.writeFileSync(path.join(outDir, `set-${set.setNumber}.json`), JSON.stringify(outSet, null, 2) + '\n');
  }
  console.log(`Escrito en ${outDir}`);
}

async function cmdRetry() {
  requireApiKey();
  if (!fs.existsSync(outDir)) {
    console.error(`${outDir} no existe todavía — corré "collect" primero.`);
    process.exit(1);
  }
  const client = new Anthropic();
  const files = fs.readdirSync(outDir).filter((f) => /^set-\d+\.json$/.test(f));
  let fixed = 0;
  let stillBroken = [];
  for (const f of files) {
    const en = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
    const es = JSON.parse(fs.readFileSync(path.join(outDir, f), 'utf8'));
    let changed = false;
    for (let i = 0; i < es.questions.length; i++) {
      const enQ = en.questions[i];
      const esQ = es.questions[i];
      if (esQ.text !== enQ.text) continue; // already translated
      console.log(`Reintentando ${esQ.id}...`);
      const response = await client.messages.parse(buildParams(enQ));
      const t = response.parsed_output;
      if (t && t.options.length === enQ.options.length) {
        es.questions[i] = {
          ...enQ,
          text: t.text,
          options: enQ.options.map((o, j) => ({ ...o, text: t.options[j] })),
          explanationHtml: t.explanationHtml,
        };
        changed = true;
        fixed++;
      } else {
        stillBroken.push(esQ.id);
      }
    }
    if (changed) fs.writeFileSync(path.join(outDir, f), JSON.stringify(es, null, 2) + '\n');
  }
  console.log(`Arregladas: ${fixed}. Siguen en inglés: ${stillBroken.length}${stillBroken.length ? ' (' + stillBroken.join(', ') + ')' : ''}.`);
}

const cmd = process.argv[2];
const commands = { test: cmdTest, submit: cmdSubmit, status: cmdStatus, collect: cmdCollect, retry: cmdRetry };
if (!commands[cmd]) {
  console.error('Uso: node scripts/translate-quiz.mjs <test|submit|status|collect|retry>');
  process.exit(1);
}
await commands[cmd]();
