#!/usr/bin/env node
// Builds a TMX glossary of AWS/technical terms that must stay in English,
// for import into MateCat's Termbase/TM ("Import TMX" in project settings) so
// its MT engine stops translating them in the first place -- cheaper and more
// reliable than catching manglings after the fact.
//
// Term source: every "Amazon/AWS/Bedrock/SageMaker <Name...>" phrase found in
// the English export, plus a short hand-picked list of other terms already
// seen mistranslated (BERT, RMSE, ...) that don't fit that pattern.
//
// Usage: node scripts/build-quiz-v2-glossary-tmx.mjs
// Writes others/quiz-v2-glossary.tmx

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const SRC_PATH = join(ROOT, 'others', 'quiz-v2-matecat-export.txt');
const OUT_PATH = join(ROOT, 'others', 'quiz-v2-glossary.tmx');

const src = readFileSync(SRC_PATH, 'utf-8');
const RE = /\b(Amazon|AWS|Bedrock|SageMaker)\s+[A-Z][A-Za-z0-9]*(\s+[A-Z][A-Za-z0-9]*){0,3}/g;
const found = new Set([...src.matchAll(RE)].map((m) => m[0].trim()));

// Drop a term if it's a strict prefix of another (longer) term already found
// -- keep the longest form ("Amazon SageMaker Autopilot", not also the
// redundant shorter "Amazon SageMaker").
const byLengthDesc = [...found].sort((a, b) => b.length - a.length);
const terms = [];
for (const term of byLengthDesc) {
  if (!terms.some((kept) => kept === term || kept.startsWith(term + ' '))) terms.push(term);
}

// Doesn't fit the "Amazon/AWS/Bedrock/SageMaker X" shape but was seen
// mistranslated or is a standalone product/technical name worth protecting.
const EXTRA_TERMS = [
  'BERT',
  'RMSE',
  'Mean Squared Error',
  'Root Mean Squared Error',
  'ROUGE',
  'BLEU',
  'RAG',
  'MLOps',
  'PartyRock',
];

const allTerms = [...new Set([...terms, ...EXTRA_TERMS])].sort();

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const tuEntries = allTerms
  .map(
    (term) => `    <tu>
      <tuv xml:lang="en"><seg>${escapeXml(term)}</seg></tuv>
      <tuv xml:lang="es"><seg>${escapeXml(term)}</seg></tuv>
    </tu>`,
  )
  .join('\n');

const tmx = `<?xml version="1.0" encoding="UTF-8"?>
<tmx version="1.4">
  <header creationtool="quiz-v2-glossary" creationtoolversion="1.0" datatype="plaintext" segtype="phrase" adminlang="en" srclang="en" o-tmf="quiz-v2"/>
  <body>
${tuEntries}
  </body>
</tmx>
`;

writeFileSync(OUT_PATH, tmx, 'utf-8');
console.log(`Términos en el glosario: ${allTerms.length}`);
console.log(`Escrito: ${OUT_PATH}`);
