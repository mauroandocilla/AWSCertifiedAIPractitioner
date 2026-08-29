import { useEffect, useState } from 'react';
import { AUDIO_BASE } from '../audioBase.ts';

// Checked once per page load (module-level cache, not per-component) by
// probe-loading one known file on the GitHub Release; every
// GlossaryEntryContent instance shares the same result instead of each
// re-checking on its own. Fails closed (falls back to the browser voice)
// until the release has actually been published -- see audioBase.ts.
//
// This has to be a real <audio> element load, not fetch()/XHR: github.com's
// releases/download/ URLs don't send Access-Control-Allow-Origin, so a
// cross-origin fetch (even a plain HEAD) is blocked by CORS -- but CORS only
// governs JS reading a cross-origin response's content, not the browser's
// own resource loading. A media element's src can load (and later play)
// cross-origin just fine without any CORS header at all.
const PROBE_URL = `${AUDIO_BASE}gloss-d1-t1-b1--bullet.mp3`;

let cached: boolean | null = null;
let inflight: Promise<boolean> | null = null;

function checkAvailability(): Promise<boolean> {
  if (cached !== null) return Promise.resolve(cached);
  if (!inflight) {
    inflight = new Promise<boolean>((resolve) => {
      const probe = new Audio();
      const finish = (ok: boolean) => {
        probe.removeEventListener('loadedmetadata', onSuccess);
        probe.removeEventListener('error', onError);
        cached = ok;
        resolve(ok);
      };
      const onSuccess = () => finish(true);
      const onError = () => finish(false);
      probe.addEventListener('loadedmetadata', onSuccess, { once: true });
      probe.addEventListener('error', onError, { once: true });
      probe.src = PROBE_URL;
      probe.load();
    });
  }
  return inflight;
}

/** null while the one-time check is still in flight. */
export function useAudioAvailable(): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(cached);

  useEffect(() => {
    if (cached !== null) return;
    let cancelled = false;
    checkAvailability().then((ok) => {
      if (!cancelled) setAvailable(ok);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return available;
}
