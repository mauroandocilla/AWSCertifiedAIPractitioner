import { useEffect, useMemo, useRef, useState } from 'react';
import { glossaryById } from '../glossaryData.ts';
import { parseGlossaryCards, extractBulletTextHtml, stripHtml } from '../glossaryCards.ts';
import { useReadAloud } from '../hooks/useReadAloud.ts';
import SpeakerIcon from './SpeakerIcon.tsx';
import PlayIcon from './PlayIcon.tsx';
import PauseIcon from './PauseIcon.tsx';
import CrossIcon from './CrossIcon.tsx';

interface Props {
  id: string;
  /** undefined = no scroll/flash requested. null = flash the bullet's own
   *  official-text paragraph. A number = flash the Nth term-card in this
   *  bullet's explanation. See DomainDetail.tsx. */
  highlightCardIndex?: number | null;
}

const RATE_OPTIONS = [0.75, 1, 1.25];

export default function GlossaryEntryContent({ id, highlightCardIndex }: Props) {
  const entry = glossaryById[id];
  const cards = useMemo(() => (entry ? parseGlossaryCards(entry.html) : []), [entry]);
  const bulletTextHtml = useMemo(() => (entry ? extractBulletTextHtml(entry.html) : ''), [entry]);
  // The read-aloud queue: index 0 is the official bullet text, then one
  // segment per term-card (so playOne(i) for card i plays queue[i + 1]).
  const segments = useMemo(
    () => [{ title: 'Resumen', text: stripHtml(bulletTextHtml) }, ...cards.map((c) => ({ title: stripHtml(c.titleHtml), text: stripHtml(c.bodyHtml) }))],
    [bulletTextHtml, cards],
  );

  const [flash, setFlash] = useState<number | 'bullet' | null>(null);
  const bulletRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { status, activeIndex, activeTitle, rate, setRate, playAll, playOne, pause, resume, stop } = useReadAloud();

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

  // Stop reading (and let the floating player disappear) whenever the bullet
  // changes -- deliberately only depending on `id`: stop isn't memoized, so
  // including it here would re-run (and call stop()) on every unrelated
  // re-render, killing playback almost immediately.
  useEffect(() => stop, [id]);

  // Keep the currently-read segment in view.
  useEffect(() => {
    if (activeIndex === null) return;
    const target = activeIndex === 0 ? bulletRef.current : cardRefs.current[activeIndex - 1];
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [activeIndex]);

  if (!entry) return <p>Entrada de glosario no encontrada ({id}).</p>;

  return (
    <div className="gloss-group" id={entry.id}>
      <div className="gloss-bullet-row">
        <p
          ref={bulletRef}
          className={flash === 'bullet' ? 'gloss-bullet-text search-highlight' : activeIndex === 0 ? 'gloss-bullet-text reading-highlight' : 'gloss-bullet-text'}
          dangerouslySetInnerHTML={{ __html: bulletTextHtml }}
        />
        <button
          type="button"
          className="gloss-read-all-btn"
          onClick={() => (status === 'idle' ? playAll(segments) : stop())}
        >
          {status === 'idle' ? <PlayIcon /> : <CrossIcon />}
          {status === 'idle' ? 'Escuchar' : 'Detener'}
        </button>
      </div>

      {cards.map((card, i) => {
        let cls = 'term-card';
        if (flash === i) cls += ' search-highlight';
        if (activeIndex === i + 1) cls += ' reading-highlight';
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
              <button type="button" className="term-card-speak-btn" onClick={() => playOne(segments, i + 1)} aria-label="Escuchar este término">
                <SpeakerIcon />
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: card.bodyHtml }} />
          </div>
        );
      })}

      {status !== 'idle' && (
        <div className="read-aloud-player">
          <button type="button" className="read-aloud-toggle" onClick={status === 'playing' ? pause : resume} aria-label={status === 'playing' ? 'Pausar' : 'Reanudar'}>
            {status === 'playing' ? <PauseIcon /> : <PlayIcon />}
          </button>
          <span className="read-aloud-title">{activeTitle}</span>
          <div className="read-aloud-rates">
            {RATE_OPTIONS.map((r) => (
              <button key={r} type="button" className={rate === r ? 'active' : ''} onClick={() => setRate(r)}>
                {r}x
              </button>
            ))}
          </div>
          <button type="button" className="read-aloud-stop" onClick={stop} aria-label="Detener lectura">
            <CrossIcon />
          </button>
        </div>
      )}
    </div>
  );
}
