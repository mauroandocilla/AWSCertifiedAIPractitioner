// One-off script: tags each question in src/quiz-v2/data/questions.json with
// its AIF-C01 exam domain (1-5), same idea as classify-quiz-scope.mjs's
// tag-domains for the original quiz, adapted to quiz-v2's single-file,
// bilingual, three-question-type ({single,multiple,matching}) data shape.
// quiz-v2 content is already confirmed to be in-scope (sourced from a
// TutorialsDojo AIF-C01 practice test), so this only classifies domain, no
// scope check.
//
// Setup: export ANTHROPIC_API_KEY=sk-ant-... (https://console.anthropic.com/settings/keys)
//
// Usage:
//   node scripts/tag-quiz-v2-domains.mjs test      # classify 3 questions synchronously, print result
//   node scripts/tag-quiz-v2-domains.mjs submit    # submit a batch for every question still missing a domain
//   node scripts/tag-quiz-v2-domains.mjs status    # check progress of the saved batch
//   node scripts/tag-quiz-v2-domains.mjs collect   # poll until done, write domain back into questions.json
import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';

const root = new URL('..', import.meta.url).pathname;
const questionsPath = path.join(root, 'src/quiz-v2/data/questions.json');
const batchStateFile = path.join(root, '.quiz-v2-domain-tag-batch.json');

const MODEL = 'claude-haiku-4-5';

function buildDomainReference() {
  const src = fs.readFileSync(path.join(root, 'src/domainData.ts'), 'utf8');
  const startMarker = 'export const domains: DomainData[] = ';
  const start = src.indexOf(startMarker) + startMarker.length;
  const end = src.indexOf('\n\nexport const domainByNumber');
  const domains = JSON.parse(src.slice(start, end).trim().replace(/;$/, ''));
  const lines = [];
  for (const d of domains) {
    lines.push(`Dominio ${d.number} (${d.weight}): ${d.name}`);
    for (const ss of d.subsections) {
      lines.push(`  ${ss.id} ${ss.title}`);
      for (const b of ss.bullets) lines.push(`    - ${b.text}`);
    }
  }
  return lines.join('\n');
}

const SYSTEM_PROMPT = `Sos un revisor de contenido para una guía de estudio de la certificación AWS Certified AI Practitioner (AIF-C01).
Te paso una pregunta de un banco de práctica (ya confirmado en alcance del examen) y necesito que digas a cuál
de los 5 dominios oficiales pertenece principalmente.

Este es el temario oficial completo del examen (los 5 dominios y sus task statements):

${buildDomainReference()}

Elegí el dominio cuyo task statement evalúa más directamente lo que la pregunta pone a prueba. Si de verdad no
se puede determinar con confianza razonable (pregunta ambigua, toca varios dominios por igual), devolvé domain=null.`;

const VerdictSchema = z.object({
  domain: z.number().int().min(1).max(5).nullable(),
  confidence: z.enum(['high', 'medium', 'low']),
  reason: z.string(),
});
const outputFormat = zodOutputFormat(VerdictSchema);

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function readQuestions() {
  return JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
}

function en(localizedOrPlain) {
  return typeof localizedOrPlain === 'object' && localizedOrPlain !== null ? localizedOrPlain.en : localizedOrPlain;
}

function buildParams(q) {
  let userContent;
  if (q.type === 'matching') {
    const pairs = q.prompts.map((p) => `${en(p.text)} -> ${en(q.optionPool[p.correctIndex])}`).join(' | ');
    userContent = [`Pregunta: ${en(q.text)}`, `Pares correctos (prompt -> opción): ${pairs}`, `Explicación: ${stripHtml(en(q.explanationHtml))}`].join('\n');
  } else {
    const correct = q.options.find((o) => o.correct);
    userContent = [
      `Pregunta: ${en(q.text)}`,
      `Opciones: ${q.options.map((o) => en(o.text)).join(' | ')}`,
      `Respuesta correcta: ${correct ? en(correct.text) : ''}`,
      `Explicación: ${stripHtml(en(q.explanationHtml))}`,
    ].join('\n');
  }
  return {
    model: MODEL,
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    output_config: { format: outputFormat },
    messages: [{ role: 'user', content: userContent }],
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
  const questions = readQuestions();
  const sample = [questions.find((q) => q.type === 'single'), questions.find((q) => q.type === 'multiple'), questions.find((q) => q.type === 'matching')].filter(Boolean);
  for (const q of sample) {
    const response = await client.messages.parse(buildParams(q));
    console.log(`\n--- ${q.id} (${q.type}) ---`);
    console.log('Pregunta:', en(q.text));
    console.log('Veredicto:', response.parsed_output);
  }
}

async function cmdSubmit() {
  requireApiKey();
  if (fs.existsSync(batchStateFile)) {
    console.error(`Ya existe un batch guardado en ${batchStateFile}. Corré "collect" primero, o borralo para arrancar de cero.`);
    process.exit(1);
  }
  const client = new Anthropic();
  const questions = readQuestions().filter((q) => q.domain == null);
  if (questions.length === 0) {
    console.log('Todas las preguntas ya tienen un dominio asignado.');
    return;
  }
  const requests = questions.map((q) => ({ custom_id: q.id, params: buildParams(q) }));
  console.log(`Enviando batch de clasificación de dominio con ${requests.length} preguntas...`);
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(batchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Guardado en ${batchStateFile}. Corré "node scripts/tag-quiz-v2-domains.mjs collect" para esperarlo.`);
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

  const domainById = {};
  const errors = [];
  for await (const result of await client.messages.batches.results(batchId)) {
    if (result.result.type === 'succeeded') {
      const textBlock = result.result.message.content.find((b) => b.type === 'text');
      try {
        const v = VerdictSchema.parse(JSON.parse(textBlock.text));
        domainById[result.custom_id] = v.domain;
      } catch (err) {
        errors.push({ custom_id: result.custom_id, reason: `parse error: ${err.message}` });
      }
    } else {
      errors.push({ custom_id: result.custom_id, reason: result.result.type });
    }
  }

  const questions = readQuestions();
  let tagged = 0;
  const byDomain = {};
  for (const q of questions) {
    const domain = domainById[q.id];
    if (domain != null && q.domain !== domain) {
      q.domain = domain;
      tagged++;
      byDomain[domain] = (byDomain[domain] || 0) + 1;
    }
  }
  fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2) + '\n');

  console.log(`\nEtiquetadas: ${tagged}. Errores: ${errors.length}.`);
  console.log('Por dominio:', byDomain);
  if (errors.length) console.log('Con error (quedan sin domain):', errors);
  fs.rmSync(batchStateFile);
}

const cmd = process.argv[2];
const commands = { test: cmdTest, submit: cmdSubmit, status: cmdStatus, collect: cmdCollect };
if (!commands[cmd]) {
  console.error('Uso: node scripts/tag-quiz-v2-domains.mjs <test|submit|status|collect>');
  process.exit(1);
}
await commands[cmd]();
