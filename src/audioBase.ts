// Where the pre-rendered read-aloud audio (scripts/generate-domain-audio.mjs)
// actually lives: a GitHub Release on this repo, not the deployed site's own
// static files -- 999 files (~72MB) is too much to want bundled into every
// visitor's page weight, and release assets are free, plain HTTPS URLs
// reachable from any device (not just whatever machine ran the generator),
// which is the whole point (listening on a phone, not just localhost).
//
// To publish: gh release create domain-audio-v1 --repo mauroandocilla/AWSCertifiedAIPractitioner --title "Domain audio v1" --notes "Pre-rendered read-aloud audio"
//             gh release upload domain-audio-v1 public/domain-audio/*.mp3 --repo mauroandocilla/AWSCertifiedAIPractitioner
export const AUDIO_BASE = 'https://github.com/mauroandocilla/AWSCertifiedAIPractitioner/releases/download/domain-audio-v1/';
