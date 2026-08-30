// Where the pre-rendered read-aloud audio (scripts/generate-domain-audio.mjs)
// actually lives: a Cloudflare R2 bucket's public r2.dev URL, not the
// deployed site's own static files -- 999 files (~72MB) is too much to
// bundle into every visitor's page weight, and R2's free tier serves them
// as plain HTTPS URLs reachable from any device (not just whatever machine
// ran the generator), which is the whole point (listening on a phone, not
// just localhost).
//
// GitHub Releases was tried first and doesn't work for this: it serves
// every asset as Content-Disposition: attachment + application/octet-stream
// regardless of file type, and iOS Safari refuses to load/play audio served
// that way. R2 lets scripts/upload-domain-audio.mjs set a real
// Content-Type: audio/mpeg per file, which is what actually fixes it.
//
// To publish: node scripts/upload-domain-audio.mjs (see that script for setup)
export const AUDIO_BASE = 'https://pub-62072dcddb554430a5e97dc089629633.r2.dev/';
