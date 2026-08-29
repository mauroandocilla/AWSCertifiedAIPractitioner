#!/usr/bin/env node
// Uploads public/domain-audio/*.mp3 to the domain-audio-v1 GitHub Release in
// small batches with a pause between them -- uploading all ~999 files in one
// `gh release upload` call trips GitHub's secondary rate limit (HTTP 403).
// Safe to re-run: skips files the release already has.
//
// Usage:
//   node scripts/upload-domain-audio.mjs
//
// Requires: gh CLI, already authenticated (gh auth status), and the release
// already created:
//   gh release create domain-audio-v1 --repo mauroandocilla/AWSCertifiedAIPractitioner --title "Domain audio v1" --notes "Pre-rendered read-aloud audio"

import { readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const AUDIO_DIR = join(ROOT, 'public', 'domain-audio');
const REPO = 'mauroandocilla/AWSCertifiedAIPractitioner';
const TAG = 'domain-audio-v1';
const BATCH_SIZE = 20;
const PAUSE_MS = 8000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function existingAssetNames() {
  const out = execFileSync('gh', ['release', 'view', TAG, '--repo', REPO, '--json', 'assets', '--jq', '.assets[].name'], {
    encoding: 'utf8',
  });
  return new Set(out.split('\n').filter(Boolean));
}

async function main() {
  const already = existingAssetNames();
  const allFiles = readdirSync(AUDIO_DIR).filter((f) => f.endsWith('.mp3'));
  const toUpload = allFiles.filter((f) => !already.has(f));

  console.log(`Total: ${allFiles.length}. Ya en el release: ${already.size}. Por subir: ${toUpload.length}.`);
  if (toUpload.length === 0) {
    console.log('Nada que subir.');
    return;
  }

  let done = 0;
  for (let i = 0; i < toUpload.length; i += BATCH_SIZE) {
    const batch = toUpload.slice(i, i + BATCH_SIZE).map((f) => join(AUDIO_DIR, f));
    execFileSync('gh', ['release', 'upload', TAG, ...batch, '--repo', REPO], { stdio: 'inherit' });
    done += batch.length;
    console.log(`${done} / ${toUpload.length}...`);
    if (i + BATCH_SIZE < toUpload.length) await sleep(PAUSE_MS);
  }
  console.log('\nListo.');
}

await main();
