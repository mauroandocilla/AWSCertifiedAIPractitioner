import { useEffect, useRef, useState } from 'react';

export type ReadAloudStatus = 'idle' | 'playing' | 'paused';

export interface ReadAloudSegment {
  text: string;
  /** Silence before the next segment starts, in ms. Defaults to 300. */
  pauseAfterMs?: number;
}

const RATE_KEY = 'read-aloud-rate';
export const RATE_OPTIONS = [0.75, 1, 1.25];

function loadRate(): number {
  const stored = Number(localStorage.getItem(RATE_KEY));
  return RATE_OPTIONS.includes(stored) ? stored : 1;
}

// Wraps window.speechSynthesis into a sequential-queue player with real
// pauses between segments (SpeechSynthesisUtterance has no SSML-style
// <break>, so a pause is just "wait, then speak the next one"), pause/
// resume/stop, and a playback rate that actually takes effect immediately --
// the Web Speech API can't change an in-flight utterance's rate, so
// setRate restarts the current segment instead of silently doing nothing
// until whatever segment happens to play next.
export function useReadAloud() {
  const [status, setStatus] = useState<ReadAloudStatus>('idle');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rate, setRateState] = useState(loadRate);
  const rateRef = useRef(rate);
  const statusRef = useRef(status);
  const activeIndexRef = useRef(activeIndex);
  const queueRef = useRef<ReadAloudSegment[]>([]);
  // If set, stop after finishing this index instead of continuing.
  const stopAtRef = useRef<number | null>(null);
  // Bumped by every play*/stop call; each utterance's callbacks capture the
  // generation they started under and bail if it's no longer current, so a
  // stale callback from a just-superseded utterance can't advance a
  // (by-then-different) queue.
  const generationRef = useRef(0);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    rateRef.current = rate;
    localStorage.setItem(RATE_KEY, String(rate));
  }, [rate]);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      window.speechSynthesis?.cancel();
    };
  }, []);

  function cancelPending() {
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    window.speechSynthesis.cancel();
  }

  function speakIndex(i: number, generation: number) {
    const queue = queueRef.current;
    if (i >= queue.length) {
      setStatus('idle');
      setActiveIndex(null);
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
        return;
      }
      pauseTimerRef.current = setTimeout(() => {
        if (generation !== generationRef.current) return;
        speakIndex(i + 1, generation);
      }, segment.pauseAfterMs ?? 300);
    };
    utterance.onerror = () => {
      if (generation !== generationRef.current) return;
      setStatus('idle');
      setActiveIndex(null);
    };
    setActiveIndex(i);
    setStatus('playing');
    window.speechSynthesis.speak(utterance);
  }

  function playAll(segments: ReadAloudSegment[], fromIndex = 0) {
    cancelPending();
    const generation = ++generationRef.current;
    queueRef.current = segments;
    stopAtRef.current = null;
    speakIndex(fromIndex, generation);
  }

  function playRange(segments: ReadAloudSegment[], startIndex: number, endIndex: number) {
    cancelPending();
    const generation = ++generationRef.current;
    queueRef.current = segments;
    stopAtRef.current = endIndex;
    speakIndex(startIndex, generation);
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
    cancelPending();
    setStatus('idle');
    setActiveIndex(null);
  }

  function setRate(newRate: number) {
    setRateState(newRate);
    rateRef.current = newRate;
    const current = activeIndexRef.current;
    if (current !== null && statusRef.current !== 'idle') {
      const generation = ++generationRef.current;
      cancelPending();
      speakIndex(current, generation);
    }
  }

  return { status, activeIndex, rate, setRate, playAll, playRange, pause, resume, stop };
}
