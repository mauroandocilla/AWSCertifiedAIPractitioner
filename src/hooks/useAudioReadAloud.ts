import { useEffect, useRef, useState } from 'react';
import { RATE_OPTIONS } from './useReadAloud.ts';

export type AudioReadAloudStatus = 'idle' | 'playing' | 'paused';

export interface AudioReadAloudSegment {
  id: string;
  pauseAfterMs?: number;
  displayTitle?: string;
}

// Same key useReadAloud.ts uses -- one shared speed preference regardless of
// which engine (pre-rendered audio vs. browser voice) ends up playing.
const RATE_KEY = 'read-aloud-rate';
function loadRate(): number {
  const stored = Number(localStorage.getItem(RATE_KEY));
  return RATE_OPTIONS.includes(stored) ? stored : 1;
}

const AUDIO_BASE = `${import.meta.env.BASE_URL}domain-audio/`;

// Plays pre-rendered per-segment audio files (scripts/generate-domain-audio.mjs)
// through a real <audio> element -- same play/pause/rate API shape as
// useReadAloud.ts (the browser-voice engine) so GlossaryEntryContent.tsx can
// use either one interchangeably. Unlike speechSynthesis, a real <audio>
// element keeps playing with the screen locked once paired with
// navigator.mediaSession (wired by the component, not here, since it also
// needs prev/next which depend on card boundaries this hook doesn't know
// about) -- no visibilitychange workaround needed, and playbackRate changes
// apply live instead of requiring a restart.
export function useAudioReadAloud() {
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<AudioReadAloudStatus>('idle');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rate, setRateState] = useState(loadRate);
  const rateRef = useRef(rate);
  const queueRef = useRef<AudioReadAloudSegment[]>([]);
  const stopAtRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generationRef = useRef(0);

  useEffect(() => {
    const el = new Audio();
    audioElRef.current = el;
    return () => {
      el.pause();
      el.removeAttribute('src');
      audioElRef.current = null;
    };
  }, []);

  useEffect(() => {
    rateRef.current = rate;
    localStorage.setItem(RATE_KEY, String(rate));
    // Unlike a speechSynthesis utterance, a real <audio> element's rate can
    // change live while it's already playing -- no restart needed.
    if (audioElRef.current) audioElRef.current.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  function playIndex(i: number, generation: number) {
    const queue = queueRef.current;
    const el = audioElRef.current;
    if (!el || i >= queue.length) {
      setStatus('idle');
      setActiveIndex(null);
      return;
    }
    const segment = queue[i];
    el.src = `${AUDIO_BASE}${segment.id}.mp3`;
    el.playbackRate = rateRef.current;
    el.onended = () => {
      if (generation !== generationRef.current) return;
      if (stopAtRef.current !== null && i >= stopAtRef.current) {
        setStatus('idle');
        setActiveIndex(null);
        return;
      }
      pauseTimerRef.current = setTimeout(() => {
        if (generation !== generationRef.current) return;
        playIndex(i + 1, generation);
      }, segment.pauseAfterMs ?? 300);
    };
    el.onerror = () => {
      if (generation !== generationRef.current) return;
      setStatus('idle');
      setActiveIndex(null);
    };
    setActiveIndex(i);
    setStatus('playing');
    el.play().catch(() => {});
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: segment.displayTitle || 'Guía de estudio',
        artist: 'AWS Certified AI Practitioner',
      });
      navigator.mediaSession.playbackState = 'playing';
    }
  }

  function cancelPending() {
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    audioElRef.current?.pause();
  }

  function playAll(segments: AudioReadAloudSegment[], fromIndex = 0) {
    cancelPending();
    const generation = ++generationRef.current;
    queueRef.current = segments;
    stopAtRef.current = null;
    playIndex(fromIndex, generation);
  }

  function playRange(segments: AudioReadAloudSegment[], startIndex: number, endIndex: number) {
    cancelPending();
    const generation = ++generationRef.current;
    queueRef.current = segments;
    stopAtRef.current = endIndex;
    playIndex(startIndex, generation);
  }

  function pause() {
    audioElRef.current?.pause();
    setStatus('paused');
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  }

  function resume() {
    audioElRef.current?.play().catch(() => {});
    setStatus('playing');
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
  }

  function stop() {
    generationRef.current++;
    cancelPending();
    setStatus('idle');
    setActiveIndex(null);
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
  }

  function setRate(newRate: number) {
    setRateState(newRate);
  }

  return { status, activeIndex, rate, setRate, playAll, playRange, pause, resume, stop };
}
