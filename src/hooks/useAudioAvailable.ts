import { useEffect, useState } from 'react';
import { AUDIO_BASE } from '../audioBase.ts';

// Checked once per page load (module-level cache, not per-component) via a
// HEAD request for one known file on the GitHub Release; every
// GlossaryEntryContent instance shares the same result instead of each
// re-checking on its own. Fails closed (falls back to the browser voice)
// until the release has actually been published -- see audioBase.ts.
const PROBE_URL = `${AUDIO_BASE}gloss-d1-t1-b1--bullet.mp3`;

let cached: boolean | null = null;
let inflight: Promise<boolean> | null = null;

function checkAvailability(): Promise<boolean> {
  if (cached !== null) return Promise.resolve(cached);
  if (!inflight) {
    inflight = fetch(PROBE_URL, { method: 'HEAD' })
      .then((res) => res.ok)
      .catch(() => false)
      .then((ok) => {
        cached = ok;
        return ok;
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
