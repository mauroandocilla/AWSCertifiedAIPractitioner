import { useState } from 'react';

// Whether to use the real pre-rendered audio (GitHub Release, see
// audioBase.ts) or fall back to the browser voice -- optimistic by default
// (assume it's there), flipped to false the first time useAudioReadAloud
// actually hits a load/playback error, cached at module level so one
// failure counts for every GlossaryEntryContent instance in the session,
// not just the one that hit it.
//
// This used to be an upfront active probe (create an <audio>, .load() it,
// see if it errors) run on mount, before any user interaction. iOS Safari
// doesn't reliably fire load events for a <audio>.load() that wasn't
// triggered by a real user gesture (its autoplay/preload policy), so that
// probe's promise could simply never resolve there -- falling back to the
// browser voice forever, even once the release genuinely had the files.
// Tying availability to an actual playback *attempt* (always gesture-
// triggered, since it only ever happens from a click) sidesteps that
// entirely instead of trying to out-guess iOS's policy with a probe.
let cachedUnavailable = false;

export function useAudioAvailable(): [boolean, () => void] {
  const [unavailable, setUnavailable] = useState(cachedUnavailable);
  function markUnavailable() {
    cachedUnavailable = true;
    setUnavailable(true);
  }
  return [!unavailable, markUnavailable];
}
