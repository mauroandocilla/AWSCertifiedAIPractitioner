#!/usr/bin/env node
// MateCat's free MT translates AWS/Amazon service names as if they were plain
// text (e.g. "AWS Secrets Manager" -> "Gerente de secretos"), which this site's
// convention explicitly forbids -- service names stay in English always.
//
// Fix strategy, entirely mechanical (no LLM calls, no re-translating):
//   1. Detect every "Amazon/AWS <Name...>" mention in the English export that
//      is missing verbatim from the matching Spanish segment.
//   2. For a segment that IS just the bare name (a standalone option/pool
//      entry), override it directly with the English name -- we know with
//      certainty what it must say.
//   3. For a name that appears embedded in a longer sentence, learn its
//      "mangled phrase" from wherever that same name occurred bare elsewhere,
//      then replace that exact phrase (case-insensitive) -- but only inside
//      segments already flagged as mismatched for THAT name, never a blind
//      site-wide replace (so a correctly-untouched shorter name, e.g. "Amazon
//      Comprehend", is never touched while fixing "Amazon Comprehend Medical").
//   4. Anything that can't be fixed this way is left as-is and reported, not
//      guessed at.
//
// Usage: node scripts/fix-quiz-v2-service-names.mjs
// Reads:  others/quiz-v2-matecat-export.txt (English, source of truth for names)
//         <translated file path, passed as argv[2]>
// Writes: others/quiz-v2-matecat-export-es-fixed.txt

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const SRC_PATH = join(ROOT, 'others', 'quiz-v2-matecat-export.txt');
const OUT_PATH = join(ROOT, 'others', 'quiz-v2-matecat-export-es-fixed.txt');

const translatedPath = process.argv[2];
if (!translatedPath) {
  console.error('Uso: node scripts/fix-quiz-v2-service-names.mjs <ruta al .txt traducido>');
  process.exit(1);
}

function buildMap(text) {
  const lines = text.split('\n');
  const map = new Map();
  const order = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(/^\[Q[\w-]+\]$/);
    if (m) {
      const marker = lines[i];
      let j = i + 1;
      const content = [];
      while (j < lines.length && lines[j] !== '') {
        content.push(lines[j]);
        j++;
      }
      map.set(marker, content.join('\n'));
      order.push(marker);
      i = j + 1;
    } else {
      i++;
    }
  }
  return { map, order };
}

const { map: srcMap, order } = buildMap(readFileSync(SRC_PATH, 'utf-8'));
const { map: tgtMap } = buildMap(readFileSync(translatedPath, 'utf-8'));

const SERVICE_RE = /\b(Amazon|AWS)\s+[A-Z][A-Za-z0-9]*(\s+[A-Z][A-Za-z0-9]*){0,3}/g;

// Learn each name's "mangled phrase" from any segment where the source is
// bare (source text === the name, nothing else) -- that target is 100% the
// MT's rendering of just this name, uncontaminated by surrounding sentence.
const mangledPhraseByName = new Map();
for (const marker of order) {
  const src = srcMap.get(marker) ?? '';
  const tgt = tgtMap.get(marker);
  if (tgt === undefined) continue;
  const trimmedSrc = src.trim();
  const names = [...trimmedSrc.matchAll(SERVICE_RE)].map((m) => m[0]);
  if (names.length === 1 && names[0] === trimmedSrc && !tgt.includes(names[0])) {
    if (!mangledPhraseByName.has(names[0])) mangledPhraseByName.set(names[0], tgt.trim());
  }
}

let bareOverrideFixes = 0;
let embeddedReplaceFixes = 0;
const unresolved = [];
const fixedMap = new Map(tgtMap);

for (const marker of order) {
  const src = srcMap.get(marker) ?? '';
  let tgt = tgtMap.get(marker);
  if (tgt === undefined) continue;
  const trimmedSrc = src.trim();
  const names = [...trimmedSrc.matchAll(SERVICE_RE)].map((m) => m[0]);

  for (const name of names) {
    if (tgt.includes(name)) continue; // already fine

    if (names.length === 1 && names[0] === trimmedSrc) {
      // Bare segment: we know exactly what it should say.
      tgt = name;
      bareOverrideFixes++;
      continue;
    }

    const mangled = mangledPhraseByName.get(name);
    if (mangled) {
      const re = new RegExp(mangled.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      if (re.test(tgt)) {
        tgt = tgt.replace(re, name);
        embeddedReplaceFixes++;
        continue;
      }
    }
    unresolved.push({ marker, name, current: tgt.slice(0, 100) });
  }
  fixedMap.set(marker, tgt);
}

// Reassemble the file in original order, same marker/blank-line shape.
const outLines = [];
for (const marker of order) {
  outLines.push(marker);
  outLines.push(fixedMap.get(marker));
  outLines.push('');
}
writeFileSync(OUT_PATH, outLines.join('\n'), 'utf-8');

console.log(`Nombres de servicio aprendidos (de menciones sueltas): ${mangledPhraseByName.size}`);
console.log(`Corregidos (segmento completo era solo el nombre): ${bareOverrideFixes}`);
console.log(`Corregidos (nombre incrustado en una oración): ${embeddedReplaceFixes}`);
console.log(`Sin resolver (necesitan revisión manual): ${unresolved.length}`);
if (unresolved.length) {
  console.log(JSON.stringify(unresolved, null, 1));
}
console.log(`\nEscrito: ${OUT_PATH}`);
