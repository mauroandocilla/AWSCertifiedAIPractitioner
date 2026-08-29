#!/usr/bin/env node
// Merges the raw TutorialsDojo "Randomized Test" exports in others/quiz-other/
// (quiz.json, "quiz (1).json", "quiz (2).json", ...) into one deduplicated,
// cleaned-up JSON. Pure text parsing, no LLM calls, no API cost, no network.
//
// Each source file is a full 65-question randomized draw from the same
// underlying TutorialsDojo question bank, so the same question (same `id`)
// repeats across many files, only reshuffled. This script:
//   1. Dedupes by `id` across every source file (first occurrence wins).
//   2. Cleans the `explanation` HTML: strips the doubled outer <p><p>...</p></p>
//      (or <div>...) wrap every entry comes with, and cuts the trailing
//      TutorialsDojo self-promotion block ("Check out this ... Cheat Sheet"
//      + its link). Images are left untouched.
//   3. For "single"/"multiple" questions, finds the "Hence/Thus, the correct
//      answer(s) is/are: ..." statement inside the (already cleaned) HTML and
//      matches it against the plain-string `options` list to mark which
//      option(s) are correct -- pure text search, never guessed.
//   4. For "laq_jumbled_sentence" (matching-style: several prompts, each with
//      its own small select drawn from a shared pool of choices) questions,
//      collapses the per-prompt option lists into one deduplicated
//      `optionPool` plus a `prompts` list referencing the correct choice by
//      index into that pool, instead of repeating the pool per prompt.
//   5. Downloads every <img> referenced in an explanation into
//      public/quiz-other-images/ (gitignored -- personal/local use only, never
//      committed or deployed) and rewrites the <img src> to point at the local
//      copy instead of TutorialsDojo's CDN. An image already present locally
//      is never re-downloaded -- safe to re-run after adding more source
//      files, it only fetches what's new.
//
// Anything that can't be resolved by plain text matching is written out with
// status "needs_review" and a reason, instead of guessed at.
//
// Usage: node scripts/build-quiz-other.mjs
// Writes others/quiz-other/merged.json and downloads into public/quiz-other-images/

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(import.meta.dirname, '..', 'others', 'quiz-other');
const OUT_PATH = join(DIR, 'merged.json');
const IMAGES_DIR = join(import.meta.dirname, '..', 'public', 'quiz-other-images');
const IMAGES_URL_PREFIX = '/quiz-other-images';
// Hand-supplied explanation HTML (same raw shape as a source file's `explanation`
// field) for questions whose source `explanation` came back empty from every
// randomized-test draw -- e.g. id 15338, confirmed empty in all 6 files it
// appears in. Keyed by question id, applied before cleaning/parsing.
const MANUAL_EXPLANATIONS_PATH = join(DIR, 'manual-explanations.json');

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8216;|&lsquo;/g, '‘')
    .replace(/&#8220;|&ldquo;/g, '“')
    .replace(/&#8221;|&rdquo;/g, '”')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

// Removes the single doubled outer wrap (<div>...</div> and/or <p><p>...</p></p>)
// that every explanation in this source arrives with.
function unwrapOuter(raw) {
  let html = raw.trim();
  const divMatch = html.match(/^<div>([\s\S]*)<\/div>$/);
  if (divMatch) html = divMatch[1].trim();
  const pMatch = html.match(/^<p><p>([\s\S]*)<\/p>\s*<\/p>$/);
  if (pMatch) html = pMatch[1].trim();
  return html;
}

function getParagraphs(html) {
  return [...html.matchAll(/<p[^>]*>[\s\S]*?<\/p>/g)].map((m) => m[0]);
}

// Cuts the trailing TutorialsDojo self-promotion block: a "Check out ...
// Cheat Sheet(s):" (or similarly worded) heading paragraph followed by one
// or more tutorialsdojo.com link paragraphs. The heading wording varies too
// much to match by phrase, so this trims structurally instead: drop
// paragraphs off the end while each one is either a bare <strong> heading or
// a bare tutorialsdojo.com link, stopping at the first paragraph that is
// neither -- which keeps the legit References block (docs.aws.amazon.com /
// aws.amazon.com links) untouched.
const HEADING_ONLY = /^<p>\s*<strong>[\s\S]*<\/strong>\s*<\/p>$/i;
const TUTORIALSDOJO_LINK_ONLY = /^<p>\s*<a[^>]+tutorialsdojo\.com[^>]*>[\s\S]*<\/a>\s*<\/p>$/i;

function removeSelfPromo(html) {
  const paragraphs = getParagraphs(html);
  let end = paragraphs.length;
  while (end > 0 && (HEADING_ONLY.test(paragraphs[end - 1]) || TUTORIALSDOJO_LINK_ONLY.test(paragraphs[end - 1]))) {
    end--;
  }
  return paragraphs.slice(0, end).join('\n');
}

function cleanExplanationHtml(raw) {
  return removeSelfPromo(unwrapOuter(raw));
}

// The source occasionally leaves the URL HTML-entity-encoded (&amp; for &)
// and/or with a literal space or two in the filename (sometimes with a stray
// leading space right after the opening quote) -- neither fetches as-is.
function localFilenameFor(rawUrl) {
  const decoded = decodeEntities(rawUrl.trim());
  return decodeURIComponent(decoded.split('/').pop());
}

function fetchableUrlFor(rawUrl) {
  const decoded = decodeEntities(rawUrl.trim());
  const parts = decoded.split('/');
  parts[parts.length - 1] = encodeURIComponent(decodeURIComponent(parts[parts.length - 1]));
  return parts.join('/');
}

// Downloads every <img src="https://media.tutorialsdojo.com/..."> referenced
// in `html` into IMAGES_DIR -- skipping any filename already in `already`
// (mutated in place as new ones land, so a later call in the same run sees
// them too) -- and rewrites each src to the local IMAGES_URL_PREFIX path.
// Returns the rewritten html. A download failure leaves that one <img>
// pointing at the original URL and is reported back via `stats.failures`,
// rather than breaking the whole run.
async function localizeImages(html, already, stats) {
  const rawSrcs = new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]));
  let result = html;
  for (const rawSrc of rawSrcs) {
    const filename = localFilenameFor(rawSrc);
    if (!already.has(filename)) {
      try {
        const res = await fetch(fetchableUrlFor(rawSrc));
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        writeFileSync(join(IMAGES_DIR, filename), Buffer.from(await res.arrayBuffer()));
        already.add(filename);
        stats.downloaded++;
      } catch (err) {
        stats.failures.push(`${rawSrc} -- ${err.message}`);
        continue; // leave this one pointing at the original URL
      }
    }
    result = result.split(rawSrc).join(`${IMAGES_URL_PREFIX}/${filename}`);
  }
  return result;
}

function normalizeForMatch(s) {
  return s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\.+$/, '')
    .trim();
}

// Matches free-text `answerText` (pulled from the explanation prose) against
// the plain-string `options` list. Exact match first, substring as fallback
// (mirrors the old PDF-pipeline's matching heuristic). Returns -1 if
// ambiguous or not found -- caller must treat that as unresolved, not guess.
function matchOption(answerText, options) {
  const target = normalizeForMatch(answerText);
  if (!target) return -1;
  let idx = options.findIndex((o) => normalizeForMatch(o) === target);
  if (idx !== -1) return idx;
  const candidates = options
    .map((o, i) => ({ i, n: normalizeForMatch(o) }))
    .filter(({ n }) => n && (target.includes(n) || n.includes(target)));
  return candidates.length === 1 ? candidates[0].i : -1;
}

function findSingleAnswerIndex(paragraphs, options) {
  const re = /^(?:Hence|Thus),?\s*the correct answer is:?\s*(.+?)\.?\s*$/i;
  for (const p of paragraphs) {
    const m = stripTags(p).match(re);
    if (m) return matchOption(m[1], options);
  }
  return -1;
}

function findMultiAnswerIndices(paragraphs, options) {
  const startRe = /^(?:Hence|Thus),?\s*the correct answers are:?\s*$/i;
  const startIdx = paragraphs.findIndex((p) => startRe.test(stripTags(p)));
  if (startIdx === -1) return null;

  const bulletRe = /^[–-]\s*(.+)$/;
  const indices = [];
  let i = startIdx + 1;
  while (i < paragraphs.length) {
    const text = stripTags(paragraphs[i]);
    const m = text.match(bulletRe);
    if (!m) break;
    const idx = matchOption(m[1], options);
    if (idx === -1) return null;
    indices.push(idx);
    i++;
  }
  return indices.length > 0 ? indices : null;
}

function processSingle(q, explanationHtml) {
  const paragraphs = getParagraphs(explanationHtml);
  const idx = findSingleAnswerIndex(paragraphs, q.options);
  if (idx === -1) {
    return {
      id: q.id,
      type: 'single',
      question: q.question,
      options: q.options.map((text) => ({ text, correct: false })),
      explanationHtml,
      status: 'needs_review',
      reason: 'could not resolve the stated correct answer against the options list',
    };
  }
  return {
    id: q.id,
    type: 'single',
    question: q.question,
    options: q.options.map((text, i) => ({ text, correct: i === idx })),
    explanationHtml,
    status: 'ok',
  };
}

function processMultiple(q, explanationHtml) {
  const paragraphs = getParagraphs(explanationHtml);
  const indices = findMultiAnswerIndices(paragraphs, q.options);
  if (!indices) {
    return {
      id: q.id,
      type: 'multiple',
      question: q.question,
      options: q.options.map((text) => ({ text, correct: false })),
      explanationHtml,
      status: 'needs_review',
      reason: 'could not resolve the stated correct answers against the options list',
    };
  }
  const correctSet = new Set(indices);
  return {
    id: q.id,
    type: 'multiple',
    question: q.question,
    options: q.options.map((text, i) => ({ text, correct: correctSet.has(i) })),
    explanationHtml,
    status: 'ok',
  };
}

function processMatching(q, explanationHtml) {
  const pool = [];
  const poolNorm = [];
  for (const item of q.options) {
    for (const opt of item.options) {
      const n = normalizeForMatch(opt);
      if (!poolNorm.includes(n)) {
        poolNorm.push(n);
        pool.push(opt.trim());
      }
    }
  }

  const prompts = [];
  for (const item of q.options) {
    const idx = matchOption(item.correct, pool);
    if (idx === -1) {
      return {
        id: q.id,
        type: 'matching',
        question: q.question,
        explanationHtml,
        status: 'needs_review',
        reason: `correct value "${item.correct}" not found in its own option pool`,
      };
    }
    prompts.push({ text: item.prompt.trim(), correctIndex: idx });
  }

  return {
    id: q.id,
    type: 'matching',
    question: q.question,
    optionPool: pool,
    prompts,
    explanationHtml,
    status: 'ok',
  };
}

async function main() {
  // merged.json is cumulative: whatever's already in it from a previous run
  // is kept as-is, even if the source file it came from gets deleted later.
  // Each run only ever adds ids that aren't in it yet -- it never removes or
  // reprocesses an existing entry.
  const baseline = new Map();
  try {
    const existing = JSON.parse(readFileSync(OUT_PATH, 'utf-8'));
    for (const r of existing) baseline.set(r.id, r);
  } catch {
    // no merged.json yet -- fine, first run.
  }

  const files = readdirSync(DIR)
    .filter((f) => /^quiz(\s\(\d+\))?\.json$/.test(f))
    .sort();

  const byId = new Map();
  const driftWarnings = [];
  for (const file of files) {
    const raw = JSON.parse(readFileSync(join(DIR, file), 'utf-8'));
    for (const q of raw) {
      if (baseline.has(q.id)) continue; // already resolved in a previous run
      const existing = byId.get(q.id);
      if (!existing) {
        byId.set(q.id, q);
      } else if (existing.question.trim() !== q.question.trim()) {
        driftWarnings.push(`id ${q.id}: question text differs between sources (kept first occurrence)`);
      }
    }
  }

  let manualExplanations = {};
  try {
    manualExplanations = JSON.parse(readFileSync(MANUAL_EXPLANATIONS_PATH, 'utf-8'));
  } catch {
    // no manual overrides file -- fine, none needed yet.
  }
  const appliedManual = [];
  for (const [id, explanation] of Object.entries(manualExplanations)) {
    const q = byId.get(id);
    if (!q) continue;
    if (q.explanation.trim().length > 0) continue; // don't override real source content
    q.explanation = explanation;
    appliedManual.push(id);
  }

  if (!existsSync(IMAGES_DIR)) mkdirSync(IMAGES_DIR, { recursive: true });
  const alreadyDownloaded = new Set(readdirSync(IMAGES_DIR));
  const imageStats = { downloaded: 0, failures: [] };

  const newResults = [];
  for (const q of byId.values()) {
    let explanationHtml = cleanExplanationHtml(q.explanation);
    explanationHtml = await localizeImages(explanationHtml, alreadyDownloaded, imageStats);
    if (q.type_question === 'single') {
      newResults.push(processSingle(q, explanationHtml));
    } else if (q.type_question === 'multiple') {
      newResults.push(processMultiple(q, explanationHtml));
    } else if (q.type_question === 'laq_jumbled_sentence') {
      newResults.push(processMatching(q, explanationHtml));
    } else {
      newResults.push({
        id: q.id,
        type: q.type_question,
        question: q.question,
        explanationHtml,
        status: 'needs_review',
        reason: `unrecognized type_question "${q.type_question}"`,
      });
    }
  }

  const results = [...baseline.values(), ...newResults];
  writeFileSync(OUT_PATH, JSON.stringify(results, null, 2), 'utf-8');

  const newOk = newResults.filter((r) => r.status === 'ok');
  const newReview = newResults.filter((r) => r.status === 'needs_review');
  const totalReview = results.filter((r) => r.status === 'needs_review');
  const byType = {};
  for (const r of results) byType[r.type] = (byType[r.type] || 0) + 1;

  console.log(`Read ${files.length} source file(s).`);
  console.log(`Kept ${baseline.size} question(s) already in merged.json, added ${newResults.length} new one(s) -- ${results.length} total.`);
  if (appliedManual.length) console.log(`Applied manual explanation override for: ${appliedManual.join(', ')}`);
  console.log(`By type (all): ${JSON.stringify(byType)}`);
  console.log(`New this run: ${newOk.length} OK, ${newReview.length} flagged needs_review.`);
  console.log(`Total needs_review across the whole merge: ${totalReview.length}.`);
  console.log(`Images: ${imageStats.downloaded} newly downloaded, ${alreadyDownloaded.size - imageStats.downloaded} already had, ${imageStats.failures.length} failed.`);
  if (imageStats.failures.length) {
    console.log('\nImage download failures (left pointing at the original TutorialsDojo URL):');
    for (const f of imageStats.failures) console.log(`  ${f}`);
  }
  if (driftWarnings.length) {
    console.log(`\n${driftWarnings.length} drift warning(s):`);
    for (const w of driftWarnings) console.log(`  ${w}`);
  }
  if (totalReview.length) {
    console.log('\nNeeds review:');
    for (const r of totalReview) console.log(`  id ${r.id} (${r.type}): ${r.reason}`);
  }
  console.log(`\nWrote ${OUT_PATH}`);
}

main();
