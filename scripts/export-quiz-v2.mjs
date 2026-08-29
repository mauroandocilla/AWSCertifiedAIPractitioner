#!/usr/bin/env node
// Publishes others/quiz-other/merged.json (the private staging merge, gitignored,
// built by build-quiz-other.mjs) into src/quiz-v2/data/questions.json --
// additively: an id already present in questions.json (already translated
// into { en, es } by translate-quiz-v2.mjs and/or domain-tagged by
// tag-quiz-v2-domains.mjs) is left completely untouched. Only ids from
// merged.json that aren't in questions.json yet get appended, in plain
// English shape (matching build-quiz-other.mjs's "ok" status entries, with
// `question` renamed to `text` for consistency with the original quiz's
// QuizQuestion.text) -- ready for translate-quiz-v2.mjs / tag-quiz-v2-domains.mjs
// to pick up on their next run.
//
// Usage: node scripts/export-quiz-v2.mjs
// Writes src/quiz-v2/data/questions.json

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const MERGED_PATH = join(import.meta.dirname, '..', 'others', 'quiz-other', 'merged.json');
const OUT_DIR = join(import.meta.dirname, '..', 'src', 'quiz-v2', 'data');
const OUT_PATH = join(OUT_DIR, 'questions.json');

const merged = JSON.parse(readFileSync(MERGED_PATH, 'utf-8'));

let existing = [];
if (existsSync(OUT_PATH)) existing = JSON.parse(readFileSync(OUT_PATH, 'utf-8'));
const existingIds = new Set(existing.map((q) => q.id));

const skipped = merged.filter((q) => q.status !== 'ok');
const newQuestions = merged
  .filter((q) => q.status === 'ok' && !existingIds.has(q.id))
  .map((q) => {
    const base = { id: q.id, type: q.type, text: q.question, explanationHtml: q.explanationHtml };
    if (q.type === 'matching') {
      return { ...base, optionPool: q.optionPool, prompts: q.prompts };
    }
    return { ...base, options: q.options };
  });

const questions = [...existing, ...newQuestions];

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(questions, null, 2) + '\n', 'utf-8');

const byType = {};
for (const q of questions) byType[q.type] = (byType[q.type] || 0) + 1;

console.log(`Read ${merged.length} question(s) from merged.json, ${existing.length} already in questions.json.`);
if (skipped.length) console.log(`Skipped ${skipped.length} not-yet-resolved (status != "ok") in merged.json.`);
console.log(`Added ${newQuestions.length} new question(s).`);
console.log(`By type (all): ${JSON.stringify(byType)}`);
console.log(`Wrote ${questions.length} question(s) total to ${OUT_PATH}`);
