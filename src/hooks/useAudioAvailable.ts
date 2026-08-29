import { useEffect, useState } from 'react';

// public/domain-audio/ (see scripts/generate-domain-audio.mjs) is gitignored
// -- present only on your own machine after you've generated it yourself,
// never in the deployed site. Checked once per page load (module-level
// cache, not per-component) via a HEAD request for one known file; every
// GlossaryEntryContent instance shares the same result instead of each
// re-checking on its own.
const PROBE_URL = `${import.meta.env.BASE_URL}domain-audio/gloss-d1-t1-b1--bullet.mp3`;

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
