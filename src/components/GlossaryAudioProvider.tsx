import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { glossarySpokenById } from '../glossaryDataSpoken.ts';
import { parseGlossaryCards, buildReadAloudSegments, stripHtml } from '../glossaryCards.ts';
import type { ReadAloudSegmentKind } from '../glossaryCards.ts';
import { useReadAloud, RATE_OPTIONS } from '../hooks/useReadAloud.ts';
import { useAudioReadAloud } from '../hooks/useAudioReadAloud.ts';
import { useAudioAvailable } from '../hooks/useAudioAvailable.ts';
import PlayIcon from './PlayIcon.tsx';
import PauseIcon from './PauseIcon.tsx';
import CrossIcon from './CrossIcon.tsx';

interface QueueEntry {
  id: string;
  text: string;
  pauseAfterMs: number;
  cardIndex: number | null;
  displayTitle: string;
}

const PAUSE_BY_KIND: Record<ReadAloudSegmentKind, number> = {
  bullet: 550,
  title: 350,
  paragraph: 450,
  'short-text': 700,
};

export type ReadAloudMode = 'all' | 'content' | 'short';
const MODE_KEY = 'read-aloud-mode';
const MODE_LABELS: Record<ReadAloudMode, string> = { all: 'Todo', content: 'Contenido', short: 'En corto' };

function loadMode(): ReadAloudMode {
  const stored = localStorage.getItem(MODE_KEY);
  return stored === 'content' || stored === 'short' ? stored : 'all';
}

// Builds the audio queue for one glossary entry -- pure function of (id,
// mode), independent of whatever GlossaryEntryContent instance ends up
// triggering playback. Always narrates the "profesor" (spoken-style) version
// regardless of what a given instance is currently displaying -- see the
// design note in GlossaryEntryContent.tsx. Titles for the player/mediaSession
// also come from that same profesor version, not whichever displayMode the
// triggering instance happens to be in -- term names read the same either
// way, and this keeps queue-building fully self-contained here.
function buildQueue(id: string, mode: ReadAloudMode): { queue: QueueEntry[]; cardRanges: { start: number; end: number }[] } {
  const audioEntry = glossarySpokenById[id];
  if (!audioEntry) return { queue: [], cardRanges: [] };
  const cards = parseGlossaryCards(audioEntry.html);
  const cardTitles = cards.map((c) => stripHtml(c.titleHtml));
  const segments = buildReadAloudSegments(id, audioEntry.html);
  const filtered = segments.filter((s) => {
    if (mode === 'content') return s.kind !== 'short-text';
    if (mode === 'short') return s.kind !== 'paragraph';
    return true;
  });

  const items: QueueEntry[] = [];
  filtered.forEach((s, i) => {
    const displayTitle = s.cardIndex === null ? 'Resumen' : (cardTitles[s.cardIndex] ?? '');
    if (mode === 'short' && s.kind === 'short-text') {
      items.push({ id: '_resumen-label', text: 'Resumen.', pauseAfterMs: 300, cardIndex: s.cardIndex, displayTitle });
    }
    let pauseAfterMs = PAUSE_BY_KIND[s.kind];
    if (s.kind === 'paragraph') {
      const next = filtered[i + 1];
      if (!next || next.cardIndex !== s.cardIndex) pauseAfterMs = 700;
    }
    items.push({ id: s.id, text: s.text, pauseAfterMs, cardIndex: s.cardIndex, displayTitle });
  });

  const ranges: { start: number; end: number }[] = cardTitles.map(() => ({ start: -1, end: -1 }));
  items.forEach((item, idx) => {
    if (item.cardIndex === null) return;
    const r = ranges[item.cardIndex];
    if (r.start === -1) r.start = idx;
    r.end = idx;
  });
  return { queue: items, cardRanges: ranges };
}

interface GlossaryAudioSession {
  /** Which glossary entry's queue is currently loaded -- null if nothing has
   *  ever been played this session. A GlossaryEntryContent instance should
   *  only read activeCardIndex/status as "about me" when this equals its
   *  own id -- otherwise some other entry (possibly on a different page) is
   *  what's actually playing. */
  entryId: string | null;
  status: 'idle' | 'playing' | 'paused';
  activeCardIndex: number | null;
  activeTitle: string | null;
  mode: ReadAloudMode;
  setMode: (m: ReadAloudMode) => void;
  rate: number;
  setRate: (r: number) => void;
  currentTime: number;
  duration: number;
  /** Whether the real pre-rendered audio is driving playback (vs. the
   *  browser-voice fallback) -- only the former has a real position/duration
   *  to scrub, so the player hides the progress bar/skip buttons otherwise. */
  audioAvailable: boolean;
  expanded: boolean;
  setExpanded: (v: boolean) => void;
  hasPrev: boolean;
  hasNext: boolean;
  playEntry: (id: string) => void;
  playEntryRange: (id: string, cardIndex: number) => void;
  stepCard: (delta: number) => void;
  seek: (deltaSeconds: number) => void;
  seekTo: (seconds: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

const GlossaryAudioContext = createContext<GlossaryAudioSession | null>(null);

export function useGlossaryAudio(): GlossaryAudioSession {
  const ctx = useContext(GlossaryAudioContext);
  if (!ctx) throw new Error('useGlossaryAudio must be used inside GlossaryAudioProvider');
  return ctx;
}

const SKIP_SECONDS = 10;

// Mounted once, above <Routes> (see App.tsx) -- deliberately NOT nested
// inside any per-page component. Two bugs this fixes structurally rather
// than papering over:
//  1. Rotating the phone crosses the same 720px breakpoint DomainDetail.tsx
//     uses to switch its whole layout branch, which used to unmount/remount
//     GlossaryEntryContent (and with it, whatever was reading aloud) as a
//     side effect. Since the engine now lives up here, that remount never
//     touches it.
//  2. The mini-player render output sits as a DOM sibling of <Routes>, so it
//     can never end up a descendant of `.mobile-pane` (the mobile slide
//     transition's container) -- that element's `animation-fill-mode: both`
//     leaves a permanent `transform: translateX(0)` on itself after the
//     slide finishes, which (per the CSS spec, even for a translateX(0)
//     no-op) turns it into the containing block for any `position: fixed`
//     descendant instead of the viewport. A player nested in there would
//     end up pinned to the bottom of the *pane's content*, not the screen.
export function GlossaryAudioProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ReadAloudMode>(loadMode);
  const [entryId, setEntryId] = useState<string | null>(null);
  const [cardRanges, setCardRanges] = useState<{ start: number; end: number }[]>([]);
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [expanded, setExpanded] = useState(false);

  const [audioAvailable, markAudioUnavailable] = useAudioAvailable();
  const audioEngine = useAudioReadAloud(markAudioUnavailable);
  const speechEngine = useReadAloud();
  const engine = audioAvailable ? audioEngine : speechEngine;
  const { status, activeIndex, rate, setRate, currentTime, duration, seek, seekTo, playAll, playRange, pause, resume, stop } = engine;

  const activeCardIndex = activeIndex !== null ? (queue[activeIndex]?.cardIndex ?? null) : null;
  const activeTitle = activeIndex !== null ? (queue[activeIndex]?.displayTitle ?? null) : null;
  const hasPrev = activeCardIndex !== null;
  const hasNext = activeCardIndex === null ? cardRanges.length > 0 : activeCardIndex + 1 < cardRanges.length;

  useEffect(() => {
    if (status === 'idle') setExpanded(false);
  }, [status]);

  function setMode(next: ReadAloudMode) {
    setModeState(next);
    localStorage.setItem(MODE_KEY, next);
    stop(); // the old queue's indices don't line up with the new one
  }

  function playEntry(id: string) {
    const built = buildQueue(id, mode);
    setEntryId(id);
    setQueue(built.queue);
    setCardRanges(built.cardRanges);
    playAll(built.queue);
  }

  function playEntryRange(id: string, cardIndex: number) {
    const built = buildQueue(id, mode);
    setEntryId(id);
    setQueue(built.queue);
    setCardRanges(built.cardRanges);
    const r = built.cardRanges[cardIndex];
    if (!r || r.start === -1) return;
    playRange(built.queue, r.start, r.end);
  }

  function stepCard(delta: number) {
    if (activeIndex === null) return;
    if (delta > 0) {
      const nextCard = activeCardIndex === null ? 0 : activeCardIndex + 1;
      if (nextCard >= cardRanges.length) return;
      playAll(queue, cardRanges[nextCard].start);
    } else {
      if (activeCardIndex === null) return;
      const target = activeCardIndex === 0 ? 0 : cardRanges[activeCardIndex - 1].start;
      playAll(queue, target);
    }
  }

  // Lock-screen/notification controls -- only meaningful for the real-audio
  // engine (a speechSynthesis session isn't a MediaSession-backed player).
  useEffect(() => {
    if (!audioAvailable || !('mediaSession' in navigator)) return;
    navigator.mediaSession.setActionHandler('play', resume);
    navigator.mediaSession.setActionHandler('pause', pause);
    navigator.mediaSession.setActionHandler('previoustrack', () => stepCard(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => stepCard(1));
    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  });

  const value = useMemo<GlossaryAudioSession>(
    () => ({
      entryId,
      status,
      activeCardIndex,
      activeTitle,
      mode,
      setMode,
      rate,
      setRate,
      currentTime,
      duration,
      audioAvailable,
      expanded,
      setExpanded,
      hasPrev,
      hasNext,
      playEntry,
      playEntryRange,
      stepCard,
      seek,
      seekTo,
      pause,
      resume,
      stop,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entryId, status, activeCardIndex, activeTitle, mode, rate, currentTime, duration, audioAvailable, expanded, hasPrev, hasNext, queue, cardRanges],
  );

  const pct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  const showScrubber = audioAvailable && duration > 0;

  return (
    <GlossaryAudioContext.Provider value={value}>
      {children}
      {status !== 'idle' && (
        <div className="glossary-audio-player">
          <div
            className="gap-collapsed"
            role="button"
            tabIndex={0}
            onClick={() => setExpanded(!expanded)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setExpanded(!expanded);
              }
            }}
            aria-expanded={expanded}
            aria-label={expanded ? 'Minimizar reproductor' : 'Expandir reproductor'}
          >
            {showScrubber && (
              <span className="gap-track">
                <span className="gap-fill" style={{ width: `${pct}%` }} />
              </span>
            )}
            <span className="gap-title">{activeTitle}</span>
            <button
              type="button"
              className="gap-play"
              onClick={(e) => {
                e.stopPropagation();
                status === 'playing' ? pause() : resume();
              }}
              aria-label={status === 'playing' ? 'Pausar' : 'Reanudar'}
            >
              {status === 'playing' ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>

          {expanded && (
            <div className="gap-expanded">
              <div className="gap-expanded-head">
                <button type="button" className="gap-step" onClick={() => stepCard(-1)} disabled={!hasPrev} aria-label="Concepto anterior">
                  ‹
                </button>
                <span className="gap-expanded-title">{activeTitle}</span>
                <button type="button" className="gap-step" onClick={() => stepCard(1)} disabled={!hasNext} aria-label="Siguiente concepto">
                  ›
                </button>
                <button type="button" className="gap-close" onClick={stop} aria-label="Detener lectura">
                  <CrossIcon />
                </button>
              </div>

              {showScrubber ? (
                <div className="gap-scrub-row">
                  <span className="gap-time">{formatTime(currentTime)}</span>
                  <span
                    className="gap-scrub-track"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                      seekTo(ratio * duration);
                    }}
                  >
                    <span className="gap-scrub-fill" style={{ width: `${pct}%` }} />
                    <span className="gap-scrub-thumb" style={{ left: `${pct}%` }} />
                  </span>
                  <span className="gap-time">{formatTime(duration)}</span>
                </div>
              ) : (
                <p className="gap-no-scrub">Usando la voz del dispositivo — sin progreso ni salto disponibles.</p>
              )}

              <div className="gap-controls-row">
                <button type="button" className="gap-skip" onClick={() => seek(-SKIP_SECONDS)} disabled={!showScrubber} aria-label="Retroceder 10 segundos">
                  −10s
                </button>
                <button type="button" className="gap-play-lg" onClick={status === 'playing' ? pause : resume} aria-label={status === 'playing' ? 'Pausar' : 'Reanudar'}>
                  {status === 'playing' ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button type="button" className="gap-skip" onClick={() => seek(SKIP_SECONDS)} disabled={!showScrubber} aria-label="Adelantar 10 segundos">
                  +10s
                </button>
              </div>

              <div className="gap-settings-row">
                <div className="gap-rates">
                  {RATE_OPTIONS.map((r) => (
                    <button key={r} type="button" className={rate === r ? 'active' : ''} onClick={() => setRate(r)}>
                      {r}x
                    </button>
                  ))}
                </div>
                <div className="gap-mode-toggle">
                  {(Object.keys(MODE_LABELS) as ReadAloudMode[]).map((m) => (
                    <button key={m} type="button" className={mode === m ? 'active' : ''} onClick={() => setMode(m)}>
                      {MODE_LABELS[m]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </GlossaryAudioContext.Provider>
  );
}

function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${String(rem).padStart(2, '0')}`;
}
