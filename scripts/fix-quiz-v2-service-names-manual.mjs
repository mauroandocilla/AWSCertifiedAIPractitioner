#!/usr/bin/env node
// Second, targeted pass over quiz-v2-matecat-export-es-fixed.txt: a short,
// hand-identified list of service-name manglings the automatic pass in
// fix-quiz-v2-service-names.mjs couldn't reach (usually because the name
// never appeared bare anywhere, so there was no "learned" phrase to search
// for). Each entry here was manually confirmed as genuinely broken -- not a
// detector false positive -- before being added.
//
// Usage: node scripts/fix-quiz-v2-service-names-manual.mjs
// Overwrites others/quiz-v2-matecat-export-es-fixed.txt in place.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PATH = join(import.meta.dirname, '..', 'others', 'quiz-v2-matecat-export-es-fixed.txt');

const REPLACEMENTS = [
  ['PartyRock, un patio de recreo en el lecho rocoso del Amazonas', 'Amazon Bedrock Playground'],
  [/Servicio de administraci[oó]n de claves Stargate \(KMS\)/gi, 'AWS Key Management Service (KMS)'],
  [/Barandillas Amazon Bedrock/gi, 'Amazon Bedrock Guardrails'],
  [/Barandas de contenido de Amazon Bedrock\.?/gi, 'Amazon Bedrock Content Guardrails.'],
  [/servicio de token de seguridad/gi, 'AWS Security Token Service'],
  [/Amazon Comprenda la detecci[oó]n de toxicidad/gi, 'Use Amazon Comprehend toxicity detection'],
  [/S3 Estratificaci[oó]n inteligente/gi, 'Amazon S3 Intelligent-Tiering'],
  [/servicio de capacitaci[oó]n de Amazon SageMaker/gi, 'Amazon SageMaker Training'],
];

let text = readFileSync(PATH, 'utf-8');
let totalReplacements = 0;
for (const [find, replaceWith] of REPLACEMENTS) {
  const pattern = typeof find === 'string' ? new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g') : find;
  const matches = text.match(pattern);
  if (matches) totalReplacements += matches.length;
  text = text.replace(pattern, replaceWith);
}

writeFileSync(PATH, text, 'utf-8');
console.log(`Reemplazos aplicados: ${totalReplacements}`);
console.log(`Actualizado: ${PATH}`);
