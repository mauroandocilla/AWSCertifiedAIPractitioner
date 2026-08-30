#!/usr/bin/env node
// Scans every file already generated in public/domain-audio/ and flags ones
// that were likely cut off early by Azure TTS (see generate-domain-audio.mjs
// for why that happens) -- a truncated file has way fewer seconds of audio
// than its source text should take to read out loud. No API calls, no
// network access: just ffprobe on local files, so it's free to re-run
// anytime you want to double-check the library, not just right after a
// "generate" run.
//
// Usage:
//   node scripts/check-audio-truncation.mjs             # list suspicious files
//   node scripts/check-audio-truncation.mjs --delete     # also delete them locally,
//                                                          # so the next "generate" redoes them,
//                                                          # and print the FORCE_FILES=... line
//                                                          # for the matching re-upload

import { execFileSync } from 'node:child_process';
import { existsSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { allSegments, MIN_PLAUSIBLE_CHARS_PER_SEC } from './generate-domain-audio.mjs';

const ROOT = join(import.meta.dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'domain-audio');

function duration(path) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', path])
    .toString()
    .trim();
  return parseFloat(out);
}

function main() {
  const shouldDelete = process.argv.includes('--delete');
  const segments = allSegments();
  console.log(`Chequeando ${segments.length} segmentos en ${OUT_DIR}...`);

  const suspicious = [];
  let checked = 0;
  for (const seg of segments) {
    const path = join(OUT_DIR, `${seg.id}.mp3`);
    if (!existsSync(path)) continue;
    checked++;
    const dur = duration(path);
    const charsPerSec = seg.text.length / Math.max(dur, 0.05);
    if (charsPerSec > MIN_PLAUSIBLE_CHARS_PER_SEC && seg.text.length >= 15) {
      suspicious.push({ id: seg.id, path, len: seg.text.length, dur, charsPerSec });
    }
  }

  console.log(`Chequeados: ${checked}. Sospechosos: ${suspicious.length}.\n`);
  suspicious.sort((a, b) => b.charsPerSec - a.charsPerSec);
  for (const s of suspicious) {
    console.log(`${s.id}\tlen=${s.len}\tdur=${s.dur.toFixed(2)}s\tchars/s=${s.charsPerSec.toFixed(1)}`);
  }

  if (suspicious.length === 0) return;

  if (shouldDelete) {
    for (const s of suspicious) unlinkSync(s.path);
    console.log(`\nBorrados ${suspicious.length} archivos. Corré:`);
    console.log('  node scripts/generate-domain-audio.mjs generate');
    console.log('para regenerarlos (con el reintento automático ya activado), y después:');
    console.log(`  FORCE_FILES=${suspicious.map((s) => `${s.id}.mp3`).join(',')} node scripts/upload-domain-audio.mjs`);
    console.log('para subir los reemplazos a R2 (si no, el upload los saltea porque ya existen).');
  } else {
    console.log('\nCorré con --delete para borrarlos y dejarlos listos para regenerar.');
  }
}

main();
