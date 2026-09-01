import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Pause, X, ArrowUpRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { domains } from '../domainData.ts';
import { glossaryById } from '../glossaryData.ts';
import { glossarySpokenById } from '../glossaryDataSpoken.ts';
import { parseGlossaryCards, buildReadAloudSegments, stripHtml } from '../glossaryCards.ts';
import type { ReadAloudSegmentKind } from '../glossaryCards.ts';
import { useReadAloud, RATE_OPTIONS } from '../hooks/useReadAloud.ts';
import { useAudioReadAloud } from '../hooks/useAudioReadAloud.ts';
import { useAudioAvailable } from '../hooks/useAudioAvailable.ts';
import SkipBackIcon from './SkipBackIcon.tsx';
import SkipForwardIcon from './SkipForwardIcon.tsx';

// Reading order of every bullet across all 5 domains -- flattened once at
// module load (domainData.ts is static content), same approach
// domainSearch.ts already uses. Lets "next concept" fall through into the
// next BULLET once the current one's own cards run out, instead of just
// stopping -- a continuous listen across the whole glossary, not one
// bullet at a time.
const orderedGlossIds: string[] = domains.flatMap((d) => d.subsections.flatMap((ss) => ss.bullets.map((b) => b.glossId)));

function adjacentGlossId(id: string, delta: 1 | -1): string | null {
  const i = orderedGlossIds.indexOf(id);
  if (i === -1) return null;
  const j = i + delta;
  return j >= 0 && j < orderedGlossIds.length ? orderedGlossIds[j] : null;
}

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

// "Continuar escuchando" -- not a completion tracker, just the single most
// recent playback position across the whole app (any entry, any page),
// restorable to the exact second for the real-audio engine. segmentId (not
// a queue index) is what makes this stable across mode changes -- resuming
// re-derives the queue from (glossId, mode) and looks the segment up by id.
export interface ResumeState {
  glossId: string;
  mode: ReadAloudMode;
  segmentId: string;
  /** Which term-card the saved position was on -- null means the bullet's
   *  own "Resumen" segment. Needed to scroll/highlight the right spot on
   *  "ir al contenido", the same way search results already do. */
  cardIndex: number | null;
  displayTitle: string;
  timeSeconds: number;
  savedAt: number;
}
const RESUME_KEY = 'glossary-audio-resume';

function loadResume(): ResumeState | null {
  try {
    const raw = localStorage.getItem(RESUME_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ResumeState;
  } catch {
    return null;
  }
}

// "Resumen" or a term-card name on its own doesn't say what BULLET it's
// part of -- this pulls the short human label off the end of the entry's
// `indexLabel` (e.g. "D1 · 1.1 · B1 — términos básicos" -> "Términos
// básicos") so the player/resume banner can show topic + part together
// ("Términos básicos · Resumen") instead of just the ambiguous part alone.
export function entryTopicLabel(id: string): string {
  const entry = glossaryById[id];
  if (!entry) return '';
  const parts = entry.indexLabel.split(' — ');
  const label = parts.length > 1 ? parts[parts.length - 1] : entry.indexLabel;
  return label.charAt(0).toUpperCase() + label.slice(1);
}

// Where "ir al contenido" (both the player and the resume banner) should
// navigate to -- the domain page this bullet lives on, deep-linked to the
// exact card that was playing. Mirrors DomainSearch.tsx's goToResult()
// exactly: highlightCardIndex travels as router navigation state (not a URL
// param), which is what actually makes GlossaryEntryContent scroll to and
// flash the right spot -- a bare `?b=` query param on its own does neither;
// it just re-renders whichever bullet's panel already happens to be open,
// which is the "no hace scroll" bug this replaces.
export function contentNavTarget(id: string, cardIndex: number | null): { url: string; state: { highlightCardIndex: number | null } } {
  const entry = glossaryById[id];
  const url = entry ? `/dominio/${entry.domain}?b=${id}` : '/glosario';
  return { url, state: { highlightCardIndex: cardIndex } };
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
  /** The most recent playback position across the whole app -- null once
   *  dismissed or never played anything yet. See ResumeState above. */
  resumeState: ResumeState | null;
  resumeEntry: () => void;
  dismissResume: () => void;
  /** The full-screen "where am I" view -- see NowPlayingButton.tsx, which is
   *  the only thing that opens it, mounted once in App.tsx so it's reachable
   *  from every page regardless of what's playing or whether anything is. */
  nowPlayingOpen: boolean;
  setNowPlayingOpen: (v: boolean) => void;
}

const GlossaryAudioContext = createContext<GlossaryAudioSession | null>(null);

export function useGlossaryAudio(): GlossaryAudioSession {
  const ctx = useContext(GlossaryAudioContext);
  if (!ctx) throw new Error('useGlossaryAudio must be used inside GlossaryAudioProvider');
  return ctx;
}

const SKIP_SECONDS = 5;

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
  const navigate = useNavigate();
  const [mode, setModeState] = useState<ReadAloudMode>(loadMode);
  const [entryId, setEntryId] = useState<string | null>(null);
  const [cardRanges, setCardRanges] = useState<{ start: number; end: number }[]>([]);
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [resumeState, setResumeState] = useState<ResumeState | null>(loadResume);
  const [nowPlayingOpen, setNowPlayingOpen] = useState(false);

  const [audioAvailable, markAudioUnavailable] = useAudioAvailable();
  const audioEngine = useAudioReadAloud(markAudioUnavailable);
  const speechEngine = useReadAloud();
  const engine = audioAvailable ? audioEngine : speechEngine;
  const { status, activeIndex, rate, setRate, currentTime, duration, seek, seekTo, playAll, playRange, pause, resume, stop } = engine;

  const activeCardIndex = activeIndex !== null ? (queue[activeIndex]?.cardIndex ?? null) : null;
  const activeTitle = activeIndex !== null ? (queue[activeIndex]?.displayTitle ?? null) : null;
  const hasMoreCardsBack = activeCardIndex !== null;
  const hasMoreCardsForward = activeCardIndex === null ? cardRanges.length > 0 : activeCardIndex + 1 < cardRanges.length;
  const hasPrev = hasMoreCardsBack || (entryId !== null && adjacentGlossId(entryId, -1) !== null);
  const hasNext = hasMoreCardsForward || (entryId !== null && adjacentGlossId(entryId, 1) !== null);

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

  // Kept in sync every render (cheap -- just an assignment) rather than
  // recomputed only on some subset of changes, so persistSnapshot() below
  // always has a fresh position to write regardless of which event
  // triggered it.
  const snapshotRef = useRef<Omit<ResumeState, 'savedAt'> | null>(null);
  useEffect(() => {
    if (entryId !== null && activeIndex !== null && queue[activeIndex]) {
      snapshotRef.current = {
        glossId: entryId,
        mode,
        segmentId: queue[activeIndex].id,
        cardIndex: queue[activeIndex].cardIndex,
        displayTitle: queue[activeIndex].displayTitle,
        timeSeconds: currentTime,
      };
    }
  });

  function persistSnapshot() {
    if (!snapshotRef.current) return;
    const payload: ResumeState = { ...snapshotRef.current, savedAt: Date.now() };
    try {
      localStorage.setItem(RESUME_KEY, JSON.stringify(payload));
    } catch {
      // localStorage can throw (private browsing, quota) -- resuming is a
      // convenience, not worth surfacing an error over.
    }
    setResumeState(payload);
  }

  function handlePause() {
    persistSnapshot();
    pause();
  }

  function handleStop() {
    persistSnapshot();
    stop();
  }

  function resumeEntry() {
    if (!resumeState) return;
    const built = buildQueue(resumeState.glossId, resumeState.mode);
    const startIndex = built.queue.findIndex((q) => q.id === resumeState.segmentId);
    setEntryId(resumeState.glossId);
    setQueue(built.queue);
    setCardRanges(built.cardRanges);
    if (resumeState.mode !== mode) {
      // Restore the mode it was actually recorded under -- setMode() also
      // calls stop(), which would immediately kill the playback we're
      // starting, so update the preference directly instead.
      setModeState(resumeState.mode);
      localStorage.setItem(MODE_KEY, resumeState.mode);
    }
    playAll(built.queue, startIndex === -1 ? 0 : startIndex);
    // Queued by the browser until the segment's metadata loads (standard
    // <audio> behavior) -- a no-op on the browser-voice fallback, which just
    // restarts the segment from its start instead.
    seekTo(resumeState.timeSeconds);
  }

  function dismissResume() {
    localStorage.removeItem(RESUME_KEY);
    setResumeState(null);
  }

  // Covers the two moments a session can end without an explicit
  // pause/stop click: backgrounding the tab (visibilitychange) and actually
  // closing/navigating away from the page (pagehide). Also flushes every 4s
  // while playing, so a hard crash/kill doesn't lose more than a few
  // seconds of position. No dependency array (matches the mediaSession
  // effect below) -- persistSnapshot always reads the latest ref either way.
  useEffect(() => {
    function onVisibilityChange() {
      if (document.hidden) persistSnapshot();
    }
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', persistSnapshot);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', persistSnapshot);
    };
  });

  useEffect(() => {
    if (status !== 'playing') return;
    const id = setInterval(persistSnapshot, 4000);
    return () => clearInterval(id);
  }, [status]);

  function goToContent() {
    if (!entryId) return;
    const target = contentNavTarget(entryId, activeCardIndex);
    navigate(target.url, { state: target.state });
  }

  // "Next"/"previous" step within the current entry's cards -- and once
  // those run out, fall through into the next/previous BULLET in reading
  // order (see orderedGlossIds above) instead of just stopping, so playback
  // can continue across the whole glossary, not just one bullet at a time.
  function stepCard(delta: number) {
    if (activeIndex === null || !entryId) return;
    if (delta > 0) {
      const nextCard = activeCardIndex === null ? 0 : activeCardIndex + 1;
      if (nextCard < cardRanges.length) {
        playAll(queue, cardRanges[nextCard].start);
        return;
      }
      const nextId = adjacentGlossId(entryId, 1);
      if (nextId) playEntry(nextId);
      return;
    }
    if (activeCardIndex !== null) {
      const target = activeCardIndex === 0 ? 0 : cardRanges[activeCardIndex - 1].start;
      playAll(queue, target);
      return;
    }
    // Already on this entry's own "Resumen" -- step back lands on the
    // PREVIOUS bullet's last card, not its first, so "back" always means
    // "the concept right before this one" regardless of the bullet boundary.
    const prevId = adjacentGlossId(entryId, -1);
    if (!prevId) return;
    const built = buildQueue(prevId, mode);
    setEntryId(prevId);
    setQueue(built.queue);
    setCardRanges(built.cardRanges);
    const lastCard = built.cardRanges.length - 1;
    playAll(built.queue, lastCard >= 0 ? built.cardRanges[lastCard].start : 0);
  }

  // Lock-screen/notification controls -- only meaningful for the real-audio
  // engine (a speechSynthesis session isn't a MediaSession-backed player).
  useEffect(() => {
    if (!audioAvailable || !('mediaSession' in navigator)) return;
    navigator.mediaSession.setActionHandler('play', resume);
    navigator.mediaSession.setActionHandler('pause', handlePause);
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
      pause: handlePause,
      resume,
      stop: handleStop,
      resumeState,
      resumeEntry,
      dismissResume,
      nowPlayingOpen,
      setNowPlayingOpen,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entryId, status, activeCardIndex, activeTitle, mode, rate, currentTime, duration, audioAvailable, expanded, hasPrev, hasNext, queue, cardRanges, resumeState, nowPlayingOpen],
  );

  const pct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  // Whether we're even trying to use the real pre-rendered audio -- true for
  // the whole session once resolved, so switching on this (rather than on
  // `duration > 0`) means the progress row's layout never changes shape
  // mid-playback. `duration` briefly resets to 0 between every segment (see
  // playIndex in useAudioReadAloud.ts), so keying the track-vs-fallback-note
  // choice on it instead used to swap the whole row's markup (and height)
  // dozens of times during a single listen -- the "ugly jump" this replaces.
  const usingRealAudio = audioAvailable;
  // Separately: whether seeking/skipping can actually do anything right now
  // -- not yet, if this specific segment's metadata hasn't loaded.
  const canSeek = audioAvailable && duration > 0;

  // Escape closes the full-screen "Now Playing" view same as the visible
  // close button -- standard modal behavior.
  useEffect(() => {
    if (!nowPlayingOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setNowPlayingOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [nowPlayingOpen]);

  // Shared between the small floating bar and the full-screen view below --
  // same classes in both places, sized up in the latter via a `.now-playing-
  // card` ancestor selector in index.css rather than duplicating rules.
  function renderProgressRow() {
    return (
      <div className="gap-progress-row">
        {usingRealAudio ? (
          <>
            <span className="gap-time">{canSeek ? formatTime(currentTime) : '--:--'}</span>
            <span
              className={canSeek ? 'gap-scrub-track' : 'gap-scrub-track gap-scrub-track-loading'}
              onClick={(e) => {
                if (!canSeek) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                seekTo(ratio * duration);
              }}
            >
              <span className="gap-scrub-fill" style={{ width: `${pct}%` }} />
              {canSeek && <span className="gap-scrub-thumb" style={{ left: `${pct}%` }} />}
            </span>
            <span className="gap-time">{canSeek ? formatTime(duration) : '--:--'}</span>
          </>
        ) : (
          <p className="gap-no-scrub">Usando la voz del dispositivo — sin progreso ni salto disponibles.</p>
        )}
      </div>
    );
  }

  function renderControlsRow() {
    return (
      <div className="gap-controls-row">
        <button type="button" className="gap-step" onClick={() => stepCard(-1)} disabled={!hasPrev} aria-label="Concepto anterior">
          <ChevronLeft size={20} strokeWidth={2.25} />
        </button>
        <button type="button" className="gap-skip" onClick={() => seek(-SKIP_SECONDS)} disabled={!canSeek} aria-label={`Retroceder ${SKIP_SECONDS} segundos`}>
          <SkipBackIcon seconds={SKIP_SECONDS} />
        </button>
        <button type="button" className="gap-play-lg" onClick={status === 'playing' ? handlePause : resume} aria-label={status === 'playing' ? 'Pausar' : 'Reanudar'}>
          {status === 'playing' ? (
            <Pause size={14} strokeWidth={0} fill="currentColor" />
          ) : (
            <Play size={14} strokeWidth={0} fill="currentColor" />
          )}
        </button>
        <button type="button" className="gap-skip" onClick={() => seek(SKIP_SECONDS)} disabled={!canSeek} aria-label={`Adelantar ${SKIP_SECONDS} segundos`}>
          <SkipForwardIcon seconds={SKIP_SECONDS} />
        </button>
        <button type="button" className="gap-step" onClick={() => stepCard(1)} disabled={!hasNext} aria-label="Siguiente concepto">
          <ChevronRight size={20} strokeWidth={2.25} />
        </button>
      </div>
    );
  }

  return (
    <GlossaryAudioContext.Provider value={value}>
      {children}
      {status !== 'idle' && (
        <div className="glossary-audio-player">
          <div className="gap-bar">
            <div className="gap-title-row">
              <span className="gap-title">
                <span className="gap-title-topic">{entryId ? entryTopicLabel(entryId) : ''}</span>
                {activeTitle && <span className="gap-title-content"> · {activeTitle}</span>}
              </span>
              <button type="button" className="gap-goto" onClick={goToContent} aria-label="Ir al contenido">
                <ArrowUpRight size={15} strokeWidth={2.25} />
              </button>
              <button type="button" className="gap-close" onClick={handleStop} aria-label="Detener lectura">
                <X size={22} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                className="gap-expand-btn"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label={expanded ? 'Menos opciones' : 'Más opciones'}
              >
                {expanded ? <ChevronUp size={15} strokeWidth={2.25} /> : <ChevronDown size={15} strokeWidth={2.25} />}
              </button>
            </div>

            {renderProgressRow()}
            {renderControlsRow()}

            {expanded && (
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
            )}
          </div>
        </div>
      )}

      {nowPlayingOpen && (
        <div className="now-playing-overlay" role="dialog" aria-modal="true" aria-label="Dónde estás escuchando" onClick={() => setNowPlayingOpen(false)}>
          <div className="now-playing-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="now-playing-close" onClick={() => setNowPlayingOpen(false)} aria-label="Cerrar">
              <X size={22} strokeWidth={2.5} />
            </button>

            {status !== 'idle' ? (
              <>
                <span className="now-playing-topic">{entryId ? entryTopicLabel(entryId) : ''}</span>
                <h2 className="now-playing-title">{activeTitle}</h2>
                {renderProgressRow()}
                {renderControlsRow()}
                <button
                  type="button"
                  className="now-playing-action"
                  onClick={() => {
                    goToContent();
                    setNowPlayingOpen(false);
                  }}
                >
                  Ir al contenido <ArrowUpRight size={14} strokeWidth={2.25} />
                </button>
              </>
            ) : resumeState ? (
              <>
                <span className="now-playing-topic">{entryTopicLabel(resumeState.glossId)}</span>
                <h2 className="now-playing-title">{resumeState.displayTitle}</h2>
                <p className="now-playing-meta">Quedaste en {formatTime(resumeState.timeSeconds)}</p>
                <button
                  type="button"
                  className="now-playing-action primary"
                  onClick={() => {
                    resumeEntry();
                    setNowPlayingOpen(false);
                  }}
                >
                  <Play size={14} strokeWidth={0} fill="currentColor" /> Continuar escuchando
                </button>
                <button
                  type="button"
                  className="now-playing-action"
                  onClick={() => {
                    const target = contentNavTarget(resumeState.glossId, resumeState.cardIndex);
                    navigate(target.url, { state: target.state });
                    setNowPlayingOpen(false);
                  }}
                >
                  Ir al contenido <ArrowUpRight size={14} strokeWidth={2.25} />
                </button>
              </>
            ) : (
              <p className="now-playing-empty">No estás escuchando nada todavía. Elegí un término del glosario y tocá "Escuchar" para empezar.</p>
            )}
          </div>
        </div>
      )}
    </GlossaryAudioContext.Provider>
  );
}

export function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${String(rem).padStart(2, '0')}`;
}
