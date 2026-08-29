// One-off review script: checks every question in src/quiz/data/set-*.json
// (SkillCertPro practice sets) against the actual AIF-C01 scope this repo
// already documents (src/domainData.ts task statements + the in/out-of-scope
// service lists in src/components/ServiceScope.tsx), and flags questions that
// don't map to any of the 5 domains — e.g. generic AWS trivia with no AI/ML
// tie-in. Read-only: writes a report, never touches src/quiz/data*.
//
// Setup: same as translate-quiz.mjs — export ANTHROPIC_API_KEY=sk-ant-... in
// your own terminal (get one at https://console.anthropic.com/settings/keys).
//
// Usage:
//   node scripts/classify-quiz-scope.mjs test      # classify 3 questions synchronously, print result
//   node scripts/classify-quiz-scope.mjs submit    # submit the full batch (~1218 requests)
//   node scripts/classify-quiz-scope.mjs status    # check progress
//   node scripts/classify-quiz-scope.mjs collect   # poll until done, write others/quiz-scope-report.json + print summary
import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';

const root = new URL('..', import.meta.url).pathname;
const dataDir = path.join(root, 'src/quiz/data');
const reportFile = path.join(root, 'others/quiz-scope-report.json');
const batchStateFile = path.join(root, '.quiz-scope-batch.json');
const recheckReportFile = path.join(root, 'others/quiz-scope-recheck-report.json');
const recheckBatchStateFile = path.join(root, '.quiz-scope-recheck-batch.json');
const dataDirEs = path.join(root, 'src/quiz/data-es');
const tagDomainsBatchStateFile = path.join(root, '.quiz-domain-tag-batch.json');

// Sets 6/7/8 are being dropped wholesale (93-100% out of scope) — no point re-checking them.
const DROPPED_SETS = new Set([6, 7, 8]);

const MODEL = 'claude-haiku-4-5';

// ---- build grounding context from the repo's own curated scope data ------

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

function buildServiceScopeReference() {
  const src = fs.readFileSync(path.join(root, 'src/components/ServiceScope.tsx'), 'utf8');
  const inStart = src.indexOf('<div className="scope-col in">');
  const outStart = src.indexOf('<div className="scope-col out">');
  const sectionEnd = src.indexOf('</section>', outStart);
  const extractCol = (colSrc) => {
    const cats = [...colSrc.matchAll(/<div className="cat-name">([^<]+)<\/div><div className="chips">([\s\S]*?)<\/div><\/div>/g)];
    return cats
      .map(([, name, chipsSrc]) => {
        const chips = [...chipsSrc.matchAll(/<span className="chip">([^<]+)<\/span>/g)].map((m) => m[1]);
        return `  ${name}: ${chips.join(', ')}`;
      })
      .join('\n');
  };
  const inText = extractCol(src.slice(inStart, outStart));
  const outText = extractCol(src.slice(outStart, sectionEnd));
  return `Servicios EN alcance (ejemplos, la lista oficial de AWS es más larga):\n${inText}\n\nServicios FUERA de alcance (muestra):\n${outText}`;
}

const SYSTEM_PROMPT = `Sos un revisor de contenido para una guía de estudio de la certificación AWS Certified AI Practitioner (AIF-C01).
Te paso una pregunta de un banco de práctica de terceros (SkillCertPro) y necesito que juzgues si de verdad
pertenece al temario oficial de este examen, o si es una pregunta genérica de otra certificación AWS (arquitectura,
redes, DevOps, etc.) que no tiene nada que ver con IA/ML/GenAI.

Este es el temario oficial completo del examen (los 5 dominios y sus task statements):

${buildDomainReference()}

${buildServiceScopeReference()}

Importante: que una pregunta mencione un servicio de la lista "en alcance" NO la hace automáticamente parte del
examen — el examen evalúa el uso de esos servicios PARA casos de IA/ML/GenAI, no conocimiento genérico de AWS.
Por ejemplo, una pregunta sobre "escanear virus en uploads a S3" o "orquestar microservicios" NO pertenece al
temario aunque mencione S3 o Lambda, porque no evalúa ningún task statement de arriba. Al revés: una pregunta
puede estar en alcance aunque mencione un servicio "fuera de alcance" si el foco real es un concepto de IA/ML.

Excepción importante — Dominio 5 (seguridad, cumplimiento y gobernanza): el Dominio 5 consiste, literalmente, en
aplicar mecanismos genéricos de seguridad/gobernanza de AWS (IAM, KMS, CloudTrail, Config, PrivateLink, Secrets
Manager, Macie, Inspector, Artifact, Trusted Advisor, Well-Architected Tool) A sistemas, datos o modelos de IA.
Que el mecanismo en sí sea "genérico de AWS" NO la saca de alcance si se está usando específicamente para proteger,
controlar el acceso a, o gobernar un sistema/dataset/modelo de IA — eso SÍ es Dominio 5. Marcá inScope=false por
este motivo solo si la pregunta sería idéntica sin importar si el sistema usa IA o no, y no evalúa ningún concepto
propio de IA (gobernanza del ciclo de vida del modelo, sesgo de datos, explicabilidad, trazabilidad de modelos,
etc.) — es decir, si "IA" es solo decoración en el enunciado y el conocimiento evaluado es 100% genérico de AWS.

Juzgá por el tema real que la pregunta evalúa, no por qué nombres de servicio aparecen.`;

const VerdictSchema = z.object({
  inScope: z.boolean(),
  domain: z.number().int().min(1).max(5).nullable(),
  confidence: z.enum(['high', 'medium', 'low']),
  reason: z.string(),
});
const outputFormat = zodOutputFormat(VerdictSchema);

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function readSets() {
  const files = fs
    .readdirSync(dataDir)
    .filter((f) => /^set-\d+\.json$/.test(f))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8')));
}

function buildParams(question) {
  const correct = question.options.find((o) => o.correct)?.text ?? '';
  const userContent = [
    `Pregunta: ${question.text}`,
    `Opciones: ${question.options.map((o) => o.text).join(' | ')}`,
    `Respuesta correcta: ${correct}`,
    `Explicación: ${stripHtml(question.explanationHtml)}`,
  ].join('\n');
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
  const sets = readSets();
  const sample = [sets[0].questions[0], sets[0].questions[7], sets[5].questions[0]];
  for (const q of sample) {
    const response = await client.messages.parse(buildParams(q));
    console.log(`\n--- ${q.id} ---`);
    console.log('Pregunta:', q.text);
    console.log('Veredicto:', response.parsed_output);
  }
}

async function cmdSubmit() {
  requireApiKey();
  if (fs.existsSync(batchStateFile)) {
    console.error(`Ya existe un batch guardado en ${batchStateFile}. Corré "collect" o "status" primero, o borralo para arrancar de cero.`);
    process.exit(1);
  }
  const client = new Anthropic();
  const sets = readSets();
  const requests = sets.flatMap((set) => set.questions.map((q) => ({ custom_id: q.id, params: buildParams(q) })));
  console.log(`Enviando batch con ${requests.length} preguntas...`);
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(batchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Guardado en ${batchStateFile}. Corré "node scripts/classify-quiz-scope.mjs collect" para esperarlo.`);
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

  const verdicts = {};
  const errors = [];
  for await (const result of await client.messages.batches.results(batchId)) {
    if (result.result.type === 'succeeded') {
      const textBlock = result.result.message.content.find((b) => b.type === 'text');
      try {
        verdicts[result.custom_id] = VerdictSchema.parse(JSON.parse(textBlock.text));
      } catch (err) {
        errors.push({ custom_id: result.custom_id, reason: `parse error: ${err.message}` });
      }
    } else {
      errors.push({ custom_id: result.custom_id, reason: result.result.type });
    }
  }

  const sets = readSets();
  const flagged = [];
  for (const set of sets) {
    for (const q of set.questions) {
      const v = verdicts[q.id];
      if (v && !v.inScope) {
        flagged.push({ id: q.id, set: set.setNumber, text: q.text, confidence: v.confidence, reason: v.reason });
      }
    }
  }

  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify({ totalClassified: Object.keys(verdicts).length, errors, flagged }, null, 2) + '\n');

  console.log(`\nClasificadas: ${Object.keys(verdicts).length}. Errores: ${errors.length}.`);
  console.log(`Fuera de alcance: ${flagged.length} de ${sets.reduce((s, x) => s + x.questionCount, 0)}.`);
  const bySet = {};
  for (const f of flagged) bySet[f.set] = (bySet[f.set] || 0) + 1;
  console.log('Por set:', bySet);
  console.log(`Reporte completo en ${reportFile}`);
}

function loadFlaggedQuestions() {
  if (!fs.existsSync(reportFile)) {
    console.error(`${reportFile} no existe — corré "collect" primero.`);
    process.exit(1);
  }
  const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
  const sets = readSets();
  const byId = new Map();
  for (const set of sets) for (const q of set.questions) byId.set(q.id, q);
  return report.flagged.filter((f) => !DROPPED_SETS.has(f.set)).map((f) => byId.get(f.id));
}

async function cmdRecheck() {
  requireApiKey();
  if (fs.existsSync(recheckBatchStateFile)) {
    console.error(`Ya existe un batch de recheck guardado en ${recheckBatchStateFile}. Corré "recheck-collect", o borralo para arrancar de cero.`);
    process.exit(1);
  }
  const client = new Anthropic();
  const toRecheck = loadFlaggedQuestions();
  console.log(`Re-chequeando ${toRecheck.length} preguntas marcadas (fuera de los sets 6/7/8, que se sacan enteros)...`);
  const requests = toRecheck.map((q) => ({ custom_id: q.id, params: buildParams(q) }));
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(recheckBatchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Guardado en ${recheckBatchStateFile}. Corré "node scripts/classify-quiz-scope.mjs recheck-collect" para esperarlo.`);
}

async function cmdRecheckCollect() {
  requireApiKey();
  if (!fs.existsSync(recheckBatchStateFile)) {
    console.error(`No hay ningún batch de recheck guardado (${recheckBatchStateFile} no existe). Corré "recheck" primero.`);
    process.exit(1);
  }
  const { batchId } = JSON.parse(fs.readFileSync(recheckBatchStateFile, 'utf8'));
  const client = new Anthropic();

  let batch = await client.messages.batches.retrieve(batchId);
  while (batch.processing_status !== 'ended') {
    console.log(`Estado: ${batch.processing_status} — ${JSON.stringify(batch.request_counts)}`);
    await new Promise((resolve) => setTimeout(resolve, 60_000));
    batch = await client.messages.batches.retrieve(batchId);
  }
  console.log('Batch terminado. Bajando resultados...');

  const verdicts = {};
  const errors = [];
  for await (const result of await client.messages.batches.results(batchId)) {
    if (result.result.type === 'succeeded') {
      const textBlock = result.result.message.content.find((b) => b.type === 'text');
      try {
        verdicts[result.custom_id] = VerdictSchema.parse(JSON.parse(textBlock.text));
      } catch (err) {
        errors.push({ custom_id: result.custom_id, reason: `parse error: ${err.message}` });
      }
    } else {
      errors.push({ custom_id: result.custom_id, reason: result.result.type });
    }
  }

  const sets = readSets();
  const byId = new Map();
  for (const set of sets) for (const q of set.questions) byId.set(q.id, q);

  const confirmedOutOfScope = [];
  const reclassifiedInScope = [];
  for (const [id, v] of Object.entries(verdicts)) {
    const q = byId.get(id);
    const setNumber = Number(id.split('-')[0]);
    const entry = { id, set: setNumber, text: q.text, confidence: v.confidence, reason: v.reason };
    if (v.inScope) reclassifiedInScope.push(entry);
    else confirmedOutOfScope.push(entry);
  }

  fs.writeFileSync(
    recheckReportFile,
    JSON.stringify({ droppedSetsWholesale: [...DROPPED_SETS], errors, confirmedOutOfScope, reclassifiedInScope }, null, 2) + '\n',
  );

  console.log(`\nRe-chequeadas: ${Object.keys(verdicts).length}. Errores: ${errors.length}.`);
  console.log(`Confirmadas fuera de alcance: ${confirmedOutOfScope.length}.`);
  console.log(`Reclasificadas a DENTRO de alcance (falsos positivos de la primera pasada): ${reclassifiedInScope.length}.`);
  console.log(`Reporte en ${recheckReportFile}`);
}

async function cmdTagDomains() {
  requireApiKey();
  if (fs.existsSync(tagDomainsBatchStateFile)) {
    console.error(`Ya existe un batch guardado en ${tagDomainsBatchStateFile}. Corré "tag-domains-collect", o borralo para arrancar de cero.`);
    process.exit(1);
  }
  const client = new Anthropic();
  const sets = readSets();
  // Only questions still missing a domain -- re-running this after a previous
  // pass shouldn't re-classify (and re-bill) everything that already has one.
  const requests = sets.flatMap((set) =>
    set.questions.filter((q) => q.domain == null).map((q) => ({ custom_id: q.id, params: buildParams(q) })),
  );
  if (requests.length === 0) {
    console.log('Todas las preguntas ya tienen un dominio asignado.');
    return;
  }
  console.log(`Enviando batch de clasificación de dominio con ${requests.length} preguntas...`);
  const batch = await client.messages.batches.create({ requests });
  fs.writeFileSync(tagDomainsBatchStateFile, JSON.stringify({ batchId: batch.id, createdAt: new Date().toISOString() }, null, 2));
  console.log(`Batch creado: ${batch.id}`);
  console.log(`Guardado en ${tagDomainsBatchStateFile}. Corré "node scripts/classify-quiz-scope.mjs tag-domains-collect" para esperarlo.`);
}

async function cmdTagDomainsCollect() {
  requireApiKey();
  if (!fs.existsSync(tagDomainsBatchStateFile)) {
    console.error(`No hay ningún batch guardado (${tagDomainsBatchStateFile} no existe). Corré "tag-domains" primero.`);
    process.exit(1);
  }
  const { batchId } = JSON.parse(fs.readFileSync(tagDomainsBatchStateFile, 'utf8'));
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

  let tagged = 0;
  const byDomain = {};
  for (const dir of [dataDir, dataDirEs]) {
    const files = fs.readdirSync(dir).filter((f) => /^set-\d+\.json$/.test(f));
    for (const file of files) {
      const filePath = path.join(dir, file);
      const set = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let changed = false;
      for (const q of set.questions) {
        const domain = domainById[q.id];
        if (domain != null && q.domain !== domain) {
          q.domain = domain;
          changed = true;
          if (dir === dataDir) {
            tagged++;
            byDomain[domain] = (byDomain[domain] || 0) + 1;
          }
        }
      }
      if (changed) fs.writeFileSync(filePath, JSON.stringify(set, null, 2) + '\n');
    }
  }

  console.log(`\nEtiquetadas: ${tagged}. Errores: ${errors.length}.`);
  console.log('Por dominio:', byDomain);
  if (errors.length) console.log('Con error (quedan sin domain):', errors);
  fs.rmSync(tagDomainsBatchStateFile);
}

const cmd = process.argv[2];
const commands = {
  test: cmdTest,
  submit: cmdSubmit,
  status: cmdStatus,
  collect: cmdCollect,
  recheck: cmdRecheck,
  'recheck-collect': cmdRecheckCollect,
  'tag-domains': cmdTagDomains,
  'tag-domains-collect': cmdTagDomainsCollect,
};
if (!commands[cmd]) {
  console.error('Uso: node scripts/classify-quiz-scope.mjs <test|submit|status|collect|recheck|recheck-collect|tag-domains|tag-domains-collect>');
  process.exit(1);
}
await commands[cmd]();
