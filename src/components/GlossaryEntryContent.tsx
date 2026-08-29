import { useEffect, useRef } from 'react';
import { glossaryById } from '../glossaryData.ts';

interface Props {
  id: string;
  /** undefined = no scroll/highlight requested. null = highlight the
   *  bullet's own official-text paragraph. A number = highlight the Nth
   *  term-card in this bullet's explanation. See DomainDetail.tsx. */
  highlightCardIndex?: number | null;
}

export default function GlossaryEntryContent({ id, highlightCardIndex }: Props) {
  const entry = glossaryById[id];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (highlightCardIndex === undefined || !containerRef.current) return;
    const target =
      highlightCardIndex === null
        ? containerRef.current.querySelector<HTMLElement>('.gloss-bullet-text')
        : containerRef.current.querySelectorAll<HTMLElement>('.term-card')[highlightCardIndex];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('search-highlight');
    const timer = setTimeout(() => target.classList.remove('search-highlight'), 2400);
    return () => clearTimeout(timer);
  }, [id, highlightCardIndex]);

  if (!entry) return <p>Entrada de glosario no encontrada ({id}).</p>;
  return <div ref={containerRef} className="gloss-group" id={entry.id} dangerouslySetInnerHTML={{ __html: entry.html }} />;
}
