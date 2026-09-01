import { useEffect, useMemo, useRef, useState } from 'react';
import { glossaryById } from '../glossaryData.ts';
import { glossarySpokenById } from '../glossaryDataSpoken.ts';
import { parseGlossaryCards } from '../glossaryCards.ts';
import { useGlossaryAudio } from './GlossaryAudioProvider.tsx';
import SpeakerIcon from './SpeakerIcon.tsx';
import PlayIcon from './PlayIcon.tsx';
import CrossIcon from './CrossIcon.tsx';

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

  // Search-driven: scroll to and briefly flash whatever matched.
  useEffect(() => {
    if (highlightCardIndex === undefined) return;
    const target = highlightCardIndex === null ? bulletRef.current : cardRefs.current[highlightCardIndex];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setFlash(highlightCardIndex === null ? 'bullet' : highlightCardIndex);
    const timer = setTimeout(() => setFlash(null), 2400);
    return () => clearTimeout(timer);
  }, [id, highlightCardIndex]);

  // Keep the currently-read card in view -- only while this instance is the
  // one actually playing.
  useEffect(() => {
    if (!isReading) return;
    const target = activeCardIndex === null ? bulletRef.current : cardRefs.current[activeCardIndex];
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        <button type="button" className="gloss-read-all-btn" onClick={() => (isReading ? session.stop() : session.playEntry(id))}>
          {isReading ? <CrossIcon /> : <PlayIcon />}
          {isReading ? 'Detener' : 'Escuchar'}
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
                <SpeakerIcon />
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: card.bodyHtml }} />
          </div>
        );
      })}
    </div>
  );
}
