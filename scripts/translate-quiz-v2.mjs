// One-off translation script: translates src/quiz-v2/data/questions.json
// (English) in place, turning text/options/explanationHtml/optionPool/prompts
// into { en, es } pairs -- same file, both languages, so they can never drift
// out of sync like the original quiz's separate data/data-es folders can.
// Uses the Anthropic Batch API with claude-haiku-4-5, billed on your own key.
//
// Setup:
//   1. Get an API key at https://console.anthropic.com/settings/keys
//   2. export ANTHROPIC_API_KEY=sk-ant-...
//
// Usage:
//   node scripts/translate-quiz-v2.mjs test      # translate 2 questions synchronously, print result — sanity check before spending on the real batch
//   node scripts/translate-quiz-v2.mjs submit    # build + submit the full batch (209 requests), save the batch id locally
//   node scripts/translate-quiz-v2.mjs status    # check progress of the saved batch
//   node scripts/translate-quiz-v2.mjs collect   # poll until the batch finishes, then rewrite questions.json with { en, es } fields
//   node scripts/translate-quiz-v2.mjs retry     # re-translate synchronously any question collect couldn't fill in
import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';

const root = new URL('..', import.meta.url).pathname;
const questionsPath = path.join(root, 'src/quiz-v2/data/questions.json');
const batchStateFile = path.join(root, '.quiz-v2-translate-batch.json');

const MODEL = 'claude-haiku-4-5';

const OptionsTranslationSchema = z.object({
  text: z.string(),
  options: z.array(z.string()),
  explanationHtml: z.string(),
});
const MatchingTranslationSchema = z.object({
  text: z.string(),
  optionPool: z.array(z.string()),
  prompts: z.array(z.string()),
  explanationHtml: z.string(),
});
const optionsOutputFormat = zodOutputFormat(OptionsTranslationSchema);
const matchingOutputFormat = zodOutputFormat(MatchingTranslationSchema);

const SYSTEM_PROMPT = `Sos un traductor técnico especializado en contenido de certificaciones de AWS.
Traducí el siguiente ítem de un quiz de práctica para la certificación AWS Certified AI Practitioner
del inglés al español neutro, natural y conversacional (no literal palabra por palabra) — el mismo
tono que usa el resto de esta guía de estudio.

Reglas:
- NO traduzcas nombres de servicios/productos de AWS (Amazon Bedrock, Amazon SageMaker, Amazon
  Comprehend, AWS Key Management Service, Bedrock Guardrails, Bedrock Knowledge Base, etc.) ni siglas
  técnicas (BERT, RMSE, KMS, VPC, RAG, etc.) ni jerga técnica que se usa en inglés en la industria
  (prompt, embedding, fine-tuning, token, endpoint, etc.). Si dos términos en inglés son distintos
  (ej. "Mean Squared Error" y "Root Mean Squared Error"), tienen que seguir siendo distintos en español,
  nunca colapsarlos en la misma frase.
- El campo "explanationHtml" contiene HTML. Traducí SOLO el texto legible entre etiquetas. No modifiques,
  elimines ni traduzcas las etiquetas, atributos, URLs, ni el contenido de <code>.
- Mantené exactamente la misma cantidad de opciones (o de optionPool/prompts en preguntas de tipo
  matching), en el mismo orden.
- Es una traducción, no un resumen: no agregues ni quites información.`;

function readQuestions() {
  return JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
}

function buildParams(q) {
  if (q.type === 'matching') {
    return {
      model: MODEL,
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      output_config: { format: matchingOutputFormat },
      messages: [
        {
          role: 'user',
          content: JSON.stringify({
            text: q.text,
            optionPool: q.optionPool,
            prompts: q.prompts.map((p) => p.text),
            explanationHtml: q.explanationHtml,
          }),
        },
      ],
    };
  }
  return {
    model: MODEL,
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    output_config: { format: optionsOutputFormat },
    messages: [
      {
        role: 'user',
        content: JSON.stringify({
          text: q.text,
          options: q.options.map((o) => o.text),
          explanationHtml: q.explanationHtml,
        }),
      },
    ],
  };
}

function applyTranslation(q, t) {
  const bi = (en, es) => ({ en, es });
  if (q.type === 'matching') {
    return {
      ...q,
      text: bi(q.text, t.text),
      optionPool: q.optionPool.map((en, i) => bi(en, t.optionPool[i])),
      prompts: q.prompts.map((p, i) => ({ ...p, text: bi(p.text, t.prompts[i]) })),
      explanationHtml: bi(q.explanationHtml, t.explanationHtml),
    };
  }
  return {
    ...q,
    text: bi(q.text, t.text),
    options: q.options.map((o, i) => ({ ...o, text: bi(o.text, t.options[i]) })),
    explanationHtml: bi(q.explanationHtml, t.explanationHtml),
  };
}

function isValidTranslation(q, t) {
  if (!t) return false;
  if (q.type === 'matching') {
    return t.optionPool?.length === q.optionPool.length && t.prompts?.length === q.prompts.length;
  }
  return t.options?.length === q.options.length;
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

function alreadyTranslated(q) {
  return typeof q.text === 'object' && q.text !== null && 'es' in q.text;
}

async function cmdTest() {
  requireApiKey();
  const client = new Anthropic();
  const questions = readQuestions();
  const sample = [questions.find((q) => q.type === 'single'), questions.find((q) => q.type === 'multiple'), questions.find((q) => q.type === 'matching')].filter(Boolean);
  for (const q of sample) {
    const response = await client.messages.parse({ ...buildParams(q) });
    console.log(`\n--- ${q.id} (${q.type}) ---`);
    console.log('EN:', q.text);
    console.log('ES:', response.parsed_output?.text);
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
  const questions = readQuestions().filter((q) => !alreadyTranslated(q));
  if (questions.length === 0) {
    console.log('Todas las preguntas ya están traducidas.');
    return;
  }
  const requests = questions.map((q) => ({ custom_id: q.id, params: buildParams(q) }));
  console.log(`Enviando batch con ${requests.length} preguntas...`);
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(batchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Estado: ${batch.processing_status}`);
  console.log(`Guardado en ${batchStateFile}. Corré "node scripts/translate-quiz-v2.mjs collect" para esperarlo y bajar los resultados.`);
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
        translations.set(result.custom_id, JSON.parse(textBlock.text));
      } catch (err) {
        errors.push({ custom_id: result.custom_id, reason: `parse error: ${err.message}` });
      }
    } else {
      errors.push({ custom_id: result.custom_id, reason: result.result.type });
    }
  }
  console.log(`Traducidas: ${translations.size}. Errores: ${errors.length}.`);
  if (errors.length) console.log('Preguntas con error (quedan en inglés, reintentar después):', errors);

  const questions = readQuestions();
  const merged = questions.map((q) => {
    if (alreadyTranslated(q)) return q;
    const t = translations.get(q.id);
    if (!isValidTranslation(q, t)) return q;
    return applyTranslation(q, t);
  });
  fs.writeFileSync(questionsPath, JSON.stringify(merged, null, 2) + '\n');
  console.log(`Escrito en ${questionsPath}`);
  fs.rmSync(batchStateFile);
}

async function cmdRetry() {
  requireApiKey();
  const client = new Anthropic();
  const questions = readQuestions();
  let fixed = 0;
  const stillBroken = [];
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (alreadyTranslated(q)) continue;
    console.log(`Reintentando ${q.id}...`);
    const response = await client.messages.parse(buildParams(q));
    const t = response.parsed_output;
    if (isValidTranslation(q, t)) {
      questions[i] = applyTranslation(q, t);
      fixed++;
    } else {
      stillBroken.push(q.id);
    }
  }
  fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2) + '\n');
  console.log(`Arregladas: ${fixed}. Siguen en inglés: ${stillBroken.length}${stillBroken.length ? ' (' + stillBroken.join(', ') + ')' : ''}.`);
}

const cmd = process.argv[2];
const commands = { test: cmdTest, submit: cmdSubmit, status: cmdStatus, collect: cmdCollect, retry: cmdRetry };
if (!commands[cmd]) {
  console.error('Uso: node scripts/translate-quiz-v2.mjs <test|submit|status|collect|retry>');
  process.exit(1);
}
await commands[cmd]();
