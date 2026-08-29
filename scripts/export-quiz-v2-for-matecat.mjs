#!/usr/bin/env node
// Exports src/quiz-v2/data/questions.json's English text into a plain .txt
// file for a free MateCat translation (no API cost). Each translatable
// segment is prefixed with a unique bracketed marker (e.g. [Q14518-TEXT]) so
// the companion import-quiz-v2-from-matecat.mjs script can find and place
// each piece back correctly, regardless of how MateCat re-wraps lines.
//
// The explanationHtml is split at paragraph level: HTML tags never leave this
// machine (only each paragraph's inner text does), so nothing depends on
// MateCat preserving markup. A local manifest keeps the original HTML shell
// to splice translations back into after import.
//
// Usage: node scripts/export-quiz-v2-for-matecat.mjs
// Writes others/quiz-v2-matecat-export.txt (upload this to MateCat)
// and others/quiz-v2-matecat-manifest.json (keep, needed for import)

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const QUESTIONS_PATH = join(ROOT, 'src', 'quiz-v2', 'data', 'questions.json');
const OUT_DIR = join(ROOT, 'others');
const TXT_PATH = join(OUT_DIR, 'quiz-v2-matecat-export.txt');
const MANIFEST_PATH = join(OUT_DIR, 'quiz-v2-matecat-manifest.json');

const questions = JSON.parse(readFileSync(QUESTIONS_PATH, 'utf-8'));

const lines = [];
const manifest = []; // { id, field, index, html? } -- html present only for EXPL entries (the original paragraph tag, e.g. "<p>...</p>")

function addSegment(id, field, index, text, htmlShell) {
  const marker = `[Q${id}-${field}${index != null ? '-' + index : ''}]`;
  lines.push(marker);
  lines.push(text);
  lines.push('');
  manifest.push({ id, field, index, marker, htmlShell });
}

// Splits explanationHtml into top-level <p>...</p> blocks (matches the shape
// build-quiz-other.mjs already produces for this content -- flat paragraphs,
// no nesting). A paragraph whose only content is an <img> or a bare <a> link
// is skipped entirely (URLs/images need no translation) but kept verbatim in
// the shell for reassembly.
function splitParagraphs(html) {
  return [...html.matchAll(/<p[^>]*>[\s\S]*?<\/p>/g)].map((m) => m[0]);
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const NO_TRANSLATE_PARAGRAPH = /^<p[^>]*>\s*(<img[^>]*>|<a[^>]*>[\s\S]*?<\/a>)\s*<\/p>$/i;

for (const q of questions) {
  addSegment(q.id, 'TEXT', null, q.text);

  q.options?.forEach((opt, i) => {
    addSegment(q.id, 'OPT', i, opt.text);
  });

  const paragraphs = splitParagraphs(q.explanationHtml || '');
  paragraphs.forEach((p, i) => {
    if (NO_TRANSLATE_PARAGRAPH.test(p)) {
      manifest.push({ id: q.id, field: 'EXPL', index: i, marker: null, htmlShell: p, skip: true });
      return;
    }
    addSegment(q.id, 'EXPL', i, stripTags(p), p);
  });

  // Matching-type extras: optionPool entries and per-prompt text.
  q.optionPool?.forEach((opt, i) => {
    addSegment(q.id, 'POOL', i, opt);
  });
  q.prompts?.forEach((p, i) => {
    addSegment(q.id, 'PROMPT', i, p.text);
  });
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(TXT_PATH, lines.join('\n'), 'utf-8');
writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8');

console.log(`Preguntas: ${questions.length}`);
console.log(`Segmentos a traducir: ${manifest.filter((m) => !m.skip).length}`);
console.log(`Escrito: ${TXT_PATH}  <- subí este archivo a MateCat`);
console.log(`Escrito: ${MANIFEST_PATH}  <- no lo toques, lo necesita el import`);
