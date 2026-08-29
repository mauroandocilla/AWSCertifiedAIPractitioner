import { useEffect, useMemo, useRef, useState } from 'react';
import { glossaryById } from '../glossaryData.ts';
import { parseGlossaryCards, buildReadAloudSegments, stripHtml } from '../glossaryCards.ts';
import type { ReadAloudSegmentKind } from '../glossaryCards.ts';
import { useReadAloud, RATE_OPTIONS } from '../hooks/useReadAloud.ts';
import type { ReadAloudSegment } from '../hooks/useReadAloud.ts';
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

interface QueueEntry extends ReadAloudSegment {
  /** null = the bullet/"resumen" segment; else which term-card this belongs
   *  to, so playback can highlight/scroll the right one regardless of
   *  whether it's currently on the title, body, or "en corto" part. */
  cardIndex: number | null;
  displayTitle: string;
}

const PAUSE_BY_KIND: Record<ReadAloudSegmentKind, number> = {
  bullet: 550,
  title: 350,
  paragraph: 450,
  'short-label': 300,
  'short-text': 700,
};

export default function GlossaryEntryContent({ id, highlightCardIndex }: Props) {
  const entry = glossaryById[id];
  const cards = useMemo(() => (entry ? parseGlossaryCards(entry.html) : []), [entry]);
  const bulletTextHtml = useMemo(() => {
    const m = entry?.html.match(/<p class="gloss-bullet-text">([\s\S]*?)<\/p>/);
    return m ? m[1] : '';
  }, [entry]);
  const cardTitles = useMemo(() => cards.map((c) => stripHtml(c.titleHtml)), [cards]);

  // buildReadAloudSegments is the single source of truth for what gets read
  // and in what pieces -- shared with scripts/generate-domain-audio.mjs so a
  // future pre-rendered-audio player lines up with this exact same queue.
  // Pacing (how long to pause between pieces) is a browser-voice-only
  // concern, added here rather than in that shared builder.
  const { queue, cardRanges } = useMemo(() => {
    const segments = entry ? buildReadAloudSegments(id, entry.html) : [];
    const items: QueueEntry[] = segments.map((s, i) => {
      let pauseAfterMs = PAUSE_BY_KIND[s.kind];
      if (s.kind === 'paragraph') {
        const next = segments[i + 1];
        // No "en corto" follows (next segment belongs to a different card,
        // or there isn't one) -- this is the card's last part, so it gets
        // the longer "next concept" pause instead of the mid-card one.
        if (!next || next.cardIndex !== s.cardIndex) pauseAfterMs = 700;
      }
      return { text: s.text, pauseAfterMs, cardIndex: s.cardIndex, displayTitle: s.cardIndex === null ? 'Resumen' : (cardTitles[s.cardIndex] ?? '') };
    });
    const ranges: { start: number; end: number }[] = cardTitles.map(() => ({ start: -1, end: -1 }));
    items.forEach((item, idx) => {
      if (item.cardIndex === null) return;
      const r = ranges[item.cardIndex];
      if (r.start === -1) r.start = idx;
      r.end = idx;
    });
    return { queue: items, cardRanges: ranges };
  }, [entry, id, cardTitles]);

  const [flash, setFlash] = useState<number | 'bullet' | null>(null);
  const bulletRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { status, activeIndex, rate, setRate, playAll, playRange, pause, resume, stop } = useReadAloud();
  const activeCardIndex = activeIndex !== null ? (queue[activeIndex]?.cardIndex ?? null) : null;
  const activeTitle = activeIndex !== null ? (queue[activeIndex]?.displayTitle ?? null) : null;

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

  // Keep the currently-read card in view.
  useEffect(() => {
    if (activeIndex === null) return;
    const target = activeCardIndex === null ? bulletRef.current : cardRefs.current[activeCardIndex];
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [activeIndex]);

  if (!entry) return <p>Entrada de glosario no encontrada ({id}).</p>;

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

  const hasPrev = activeCardIndex !== null;
  const hasNext = activeCardIndex === null ? cardRanges.length > 0 : activeCardIndex + 1 < cardRanges.length;

  return (
    <div className="gloss-group" id={entry.id}>
      <div className="gloss-bullet-row">
        <p
          ref={bulletRef}
          className={flash === 'bullet' ? 'gloss-bullet-text search-highlight' : activeCardIndex === null && activeIndex !== null ? 'gloss-bullet-text reading-highlight' : 'gloss-bullet-text'}
          dangerouslySetInnerHTML={{ __html: bulletTextHtml }}
        />
        <button type="button" className="gloss-read-all-btn" onClick={() => (status === 'idle' ? playAll(queue) : stop())}>
          {status === 'idle' ? <PlayIcon /> : <CrossIcon />}
          {status === 'idle' ? 'Escuchar' : 'Detener'}
        </button>
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
              <button type="button" className="term-card-speak-btn" onClick={() => playRange(queue, cardRanges[i].start, cardRanges[i].end)} aria-label="Escuchar este término">
                <SpeakerIcon />
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: card.bodyHtml }} />
          </div>
        );
      })}

      {status !== 'idle' && (
        <div className="read-aloud-player">
          <button type="button" className="read-aloud-step" onClick={() => stepCard(-1)} disabled={!hasPrev} aria-label="Concepto anterior">
            ‹
          </button>
          <button type="button" className="read-aloud-toggle" onClick={status === 'playing' ? pause : resume} aria-label={status === 'playing' ? 'Pausar' : 'Reanudar'}>
            {status === 'playing' ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button type="button" className="read-aloud-step" onClick={() => stepCard(1)} disabled={!hasNext} aria-label="Siguiente concepto">
            ›
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
