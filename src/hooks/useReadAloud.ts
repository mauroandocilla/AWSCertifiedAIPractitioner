import { useEffect, useRef, useState } from 'react';

export type ReadAloudStatus = 'idle' | 'playing' | 'paused';

interface ReadAloudSegment {
  title: string;
  text: string;
}

const RATE_KEY = 'read-aloud-rate';

function loadRate(): number {
  const stored = Number(localStorage.getItem(RATE_KEY));
  return stored > 0 ? stored : 0.85;
}

// Wraps window.speechSynthesis into a simple sequential-queue player: play a
// whole list of segments in order (playAll) or just one (playOne), with
// pause/resume/stop and a persisted playback rate. Built for GlossaryEntryContent's
// read-aloud feature but has no DOM/React-specific assumptions otherwise.
export function useReadAloud() {
  const [status, setStatus] = useState<ReadAloudStatus>('idle');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [rate, setRate] = useState(loadRate);
  const rateRef = useRef(rate);
  const queueRef = useRef<ReadAloudSegment[]>([]);
  // If set, stop after finishing this index instead of continuing (single-segment mode).
  const stopAtRef = useRef<number | null>(null);
  // Bumped by every play*/stop call. Each utterance's callbacks capture the
  // generation they were started under and bail if it's no longer current --
  // browsers don't consistently fire onerror("canceled") vs. onend for an
  // utterance killed by a *later* speechSynthesis.cancel(), so without this a
  // stale callback from a just-superseded utterance could still advance the
  // (by-then-different) queue.
  const generationRef = useRef(0);

  useEffect(() => {
    rateRef.current = rate;
    localStorage.setItem(RATE_KEY, String(rate));
  }, [rate]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  function speakIndex(i: number, generation: number) {
    const queue = queueRef.current;
    if (i >= queue.length) {
      setStatus('idle');
      setActiveIndex(null);
      setActiveTitle(null);
      return;
    }
    const segment = queue[i];
    const utterance = new SpeechSynthesisUtterance(segment.text);
    utterance.lang = 'es-ES';
    utterance.rate = rateRef.current;
    utterance.onend = () => {
      if (generation !== generationRef.current) return;
      if (stopAtRef.current !== null && i >= stopAtRef.current) {
        setStatus('idle');
        setActiveIndex(null);
        setActiveTitle(null);
        return;
      }
      speakIndex(i + 1, generation);
    };
    utterance.onerror = () => {
      if (generation !== generationRef.current) return;
      setStatus('idle');
      setActiveIndex(null);
      setActiveTitle(null);
    };
    setActiveIndex(i);
    setActiveTitle(segment.title);
    setStatus('playing');
    window.speechSynthesis.speak(utterance);
  }

  function playAll(segments: ReadAloudSegment[], fromIndex = 0) {
    window.speechSynthesis.cancel();
    const generation = ++generationRef.current;
    queueRef.current = segments;
    stopAtRef.current = null;
    speakIndex(fromIndex, generation);
  }

  function playOne(segments: ReadAloudSegment[], index: number) {
    window.speechSynthesis.cancel();
    const generation = ++generationRef.current;
    queueRef.current = segments;
    stopAtRef.current = index;
    speakIndex(index, generation);
  }

  function pause() {
    window.speechSynthesis.pause();
    setStatus('paused');
  }

  function resume() {
    window.speechSynthesis.resume();
    setStatus('playing');
  }

  function stop() {
    generationRef.current++;
    window.speechSynthesis.cancel();
    setStatus('idle');
    setActiveIndex(null);
    setActiveTitle(null);
  }

  return { status, activeIndex, activeTitle, rate, setRate, playAll, playOne, pause, resume, stop };
}
