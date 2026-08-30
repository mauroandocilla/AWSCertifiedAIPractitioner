#!/usr/bin/env node
// Uploads public/domain-audio/*.mp3 to Cloudflare R2 with an explicit
// audio/mpeg Content-Type -- the whole reason for switching away from
// GitHub Releases: it serves every asset as Content-Disposition: attachment
// + application/octet-stream regardless of file type, and iOS Safari
// refuses to load/play audio served that way (confirmed via curl -I on an
// actual release asset). Safe to re-run: skips keys the bucket already has.
//
// Setup:
//   1. Create an R2 bucket (e.g. aws-ai-practitioner-audio) and enable its
//      public r2.dev URL -- https://dash.cloudflare.com -> R2 -> your bucket
//      -> Settings -> Public Development URL -> Enable. That URL is what
//      src/audioBase.ts needs to point at.
//   2. Create an Account API Token (Object Read & Write, scoped to that
//      bucket) at R2 -> Manage API Tokens.
//   3. export R2_ACCOUNT_ID=...
//      export R2_ACCESS_KEY_ID=...
//      export R2_SECRET_ACCESS_KEY=...
//
// Usage:
//   node scripts/upload-domain-audio.mjs

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

const ROOT = join(import.meta.dirname, '..');
const AUDIO_DIR = join(ROOT, 'public', 'domain-audio');
const BUCKET = process.env.R2_BUCKET || 'aws-ai-practitioner-audio';

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(
      `Falta ${name}.\n` +
        'Creá un Account API Token (Object Read & Write) en R2 -> Manage API Tokens y corré:\n' +
        '  export R2_ACCOUNT_ID=...\n' +
        '  export R2_ACCESS_KEY_ID=...\n' +
        '  export R2_SECRET_ACCESS_KEY=...\n',
    );
    process.exit(1);
  }
  return v;
}

// R2_ACCOUNT_ID accepts either the bare account id or the full endpoint URL
// Cloudflare's dashboard shows (labeled "Endpoint", easy to paste as-is by
// mistake) -- normalized here instead of assuming one or the other.
const accountId = requireEnv('R2_ACCOUNT_ID');
const accessKeyId = requireEnv('R2_ACCESS_KEY_ID');
const secretAccessKey = requireEnv('R2_SECRET_ACCESS_KEY');
const endpoint = accountId.startsWith('http') ? accountId : `https://${accountId}.r2.cloudflarestorage.com`;

const client = new S3Client({
  region: 'auto',
  endpoint,
  credentials: { accessKeyId, secretAccessKey },
});

async function existingKeys() {
  const keys = new Set();
  let ContinuationToken;
  do {
    const res = await client.send(new ListObjectsV2Command({ Bucket: BUCKET, ContinuationToken }));
    for (const obj of res.Contents ?? []) if (obj.Key) keys.add(obj.Key);
    ContinuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (ContinuationToken);
  return keys;
}

// Re-upload specific files even if the bucket already has them -- for when
// a file was regenerated locally (fixing bad audio) and needs to overwrite
// a stale copy already in R2, without re-uploading the other 990+ unchanged
// files: FORCE_FILES=gloss-d1-t1-b1--c3-body.mp3,gloss-d3-t1-b3--c0-body.mp3
const forceFiles = new Set((process.env.FORCE_FILES || '').split(',').map((s) => s.trim()).filter(Boolean));
// Re-upload EVERYTHING regardless of what the bucket already has -- for when
// the underlying source text changed but the filenames didn't (e.g. the
// glossary content generate-domain-audio.mjs reads from was swapped out),
// so the "already there" check would otherwise skip stale audio entirely:
// FORCE_ALL=1
const forceAll = process.env.FORCE_ALL === '1';

async function main() {
  const already = await existingKeys();
  const allFiles = readdirSync(AUDIO_DIR).filter((f) => f.endsWith('.mp3'));
  const toUpload = forceAll ? allFiles : allFiles.filter((f) => !already.has(f) || forceFiles.has(f));

  console.log(`Total: ${allFiles.length}. Ya en el bucket: ${already.size}. Por subir: ${toUpload.length}.${forceAll ? ' (FORCE_ALL)' : forceFiles.size ? ` (forzando ${forceFiles.size})` : ''}`);
  if (toUpload.length === 0) {
    console.log('Nada que subir.');
    return;
  }

  let done = 0;
  let failed = 0;
  for (const file of toUpload) {
    try {
      const body = readFileSync(join(AUDIO_DIR, file));
      await client.send(new PutObjectCommand({ Bucket: BUCKET, Key: file, Body: body, ContentType: 'audio/mpeg' }));
      done++;
    } catch (err) {
      failed++;
      console.error(`Falló ${file}: ${err.message}`);
    }
    if ((done + failed) % 25 === 0) console.log(`${done + failed} / ${toUpload.length}...`);
  }
  console.log(`\nSubidos: ${done}. Fallidos: ${failed}.`);
}

await main();
