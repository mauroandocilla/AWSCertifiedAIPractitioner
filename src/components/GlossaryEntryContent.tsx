import { useEffect, useMemo, useRef, useState } from 'react';
import { Volume2, Play, X } from 'lucide-react';
import { glossaryById } from '../glossaryData.ts';
import { glossarySpokenById } from '../glossaryDataSpoken.ts';
import { parseGlossaryCards } from '../glossaryCards.ts';
import { useGlossaryAudio } from './GlossaryAudioProvider.tsx';

interface Props {
  id: string;
  /** undefined = no scroll/flash requested. null = flash the bullet's own
   *  official-text paragraph. A number = flash the Nth term-card in this
   *  bullet's explanation. See DomainDetail.tsx. */
  highlightCardIndex?: number | null;
}

type DisplayMode = 'tecnico' | 'profesor';
const DISPLAY_MODE_KEY = 'glossary-display-mode';
const DISPLAY_MODE_LABELS: Record<DisplayMode, string> = { tecnico: 'Técnico', profesor: 'Profesor' };

function loadDisplayMode(): DisplayMode {
  const stored = localStorage.getItem(DISPLAY_MODE_KEY);
  return stored === 'profesor' ? 'profesor' : 'tecnico';
}

export default function GlossaryEntryContent({ id, highlightCardIndex }: Props) {
  const [displayMode, setDisplayModeState] = useState<DisplayMode>(loadDisplayMode);
  const entry = displayMode === 'profesor' ? glossarySpokenById[id] : glossaryById[id];

  function setDisplayMode(next: DisplayMode) {
    setDisplayModeState(next);
    localStorage.setItem(DISPLAY_MODE_KEY, next);
  }
  const cards = useMemo(() => (entry ? parseGlossaryCards(entry.html) : []), [entry]);
  const bulletTextHtml = useMemo(() => {
    const m = entry?.html.match(/<p class="gloss-bullet-text">([\s\S]*?)<\/p>/);
    return m ? m[1] : '';
  }, [entry]);

  const [flash, setFlash] = useState<number | 'bullet' | null>(null);
  const bulletRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The read-aloud engine and its player UI live in GlossaryAudioProvider,
  // mounted once above <Routes> -- not here. That's deliberate: this
  // component (re)mounts constantly (every domain bullet click builds a new
  // instance, /glosario mounts ~70 of these at once, and DomainDetail.tsx
  // fully remounts its panel when isMobile flips, e.g. on a phone rotation),
  // and none of that should be able to interrupt playback. See that file for
  // the full rationale. `session.entryId === id` is how this instance knows
  // whether IT is the one currently playing, as opposed to some other entry
  // (possibly on a page you've since navigated away from).
  const session = useGlossaryAudio();
  const isActiveEntry = session.entryId === id;
  const activeCardIndex = isActiveEntry ? session.activeCardIndex : null;
  const isReading = isActiveEntry && session.status !== 'idle';
  // Pressing "Escuchar" already flips this button to "Detener" the instant
  // it's clicked (status goes 'playing' synchronously) -- but the real
  // pre-rendered audio can still take a beat to actually start producing
  // sound (segment metadata not loaded yet, duration === 0), which read as
  // "did that even work?" with no visible difference from a normal playing
  // state. This makes that specific window visible instead of silent.
  const isLoadingAudio = isReading && session.audioAvailable && session.duration === 0;

  // Search-driven: scroll to and briefly flash whatever matched. Delayed
  // past .mobile-pane's 280ms slide-in animation (index.css) -- this effect
  // fires right on mount, which on mobile is often WHILE that pane is still
  // sliding in. scrollIntoView measures the target's position at call time,
  // so calling it mid-animation scrolls to wherever the (still-moving)
  // element happened to be that instant, not its final resting spot --
  // landing a card or two off from the real target once the slide settles.
  // The delay is a no-op in cases with no such animation (desktop, or
  // /glosario's single static page), just an imperceptible extra beat.
  const SCROLL_SETTLE_MS = 320;
  useEffect(() => {
    if (highlightCardIndex === undefined) return;
    const scrollTimer = setTimeout(() => {
      const target = highlightCardIndex === null ? bulletRef.current : cardRefs.current[highlightCardIndex];
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, SCROLL_SETTLE_MS);
    setFlash(highlightCardIndex === null ? 'bullet' : highlightCardIndex);
    const flashTimer = setTimeout(() => setFlash(null), SCROLL_SETTLE_MS + 2400);
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(flashTimer);
    };
  }, [id, highlightCardIndex]);

  // Keep the currently-read card in view -- only while this instance is the
  // one actually playing. Same settle delay, for the same reason: this can
  // also fire right as a fresh mobile pane mounts (e.g. "siguiente" landing
  // on the next bullet).
  useEffect(() => {
    if (!isReading) return;
    const timer = setTimeout(() => {
      const target = activeCardIndex === null ? bulletRef.current : cardRefs.current[activeCardIndex];
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, SCROLL_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [isReading, activeCardIndex]);

  if (!entry) return <p>Entrada de glosario no encontrada ({id}).</p>;

  return (
    <div className="gloss-group" id={entry.id}>
      <div className="gloss-bullet-row">
        <p
          ref={bulletRef}
          className={flash === 'bullet' ? 'gloss-bullet-text search-highlight' : activeCardIndex === null && isReading ? 'gloss-bullet-text reading-highlight' : 'gloss-bullet-text'}
          dangerouslySetInnerHTML={{ __html: bulletTextHtml }}
        />
        <button
          type="button"
          className={isLoadingAudio ? 'gloss-read-all-btn loading' : 'gloss-read-all-btn'}
          onClick={() => (isReading ? session.stop() : session.playEntry(id))}
        >
          {isReading ? <X size={22} strokeWidth={2.5} /> : <Play size={14} strokeWidth={0} fill="currentColor" />}
          {isLoadingAudio ? 'Cargando…' : isReading ? 'Detener' : 'Escuchar'}
        </button>
      </div>

      <div className="gloss-display-mode-row">
        <div className="display-mode-toggle">
          {(Object.keys(DISPLAY_MODE_LABELS) as DisplayMode[]).map((m) => (
            <button key={m} type="button" className={displayMode === m ? 'active' : ''} onClick={() => setDisplayMode(m)}>
              {DISPLAY_MODE_LABELS[m]}
            </button>
          ))}
        </div>
      </div>

      {cards.map((card, i) => {
        let cls = 'term-card';
        if (flash === i) cls += ' search-highlight';
        if (activeCardIndex === i) cls += ' reading-highlight';
        return (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={cls}
          >
            <div className="term-card-head">
              <h4 dangerouslySetInnerHTML={{ __html: card.titleHtml }} />
              <button type="button" className="term-card-speak-btn" onClick={() => session.playEntryRange(id, i)} aria-label="Escuchar este término">
                <Volume2 size={15} strokeWidth={2} />
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: card.bodyHtml }} />
          </div>
        );
      })}
    </div>
  );
}
