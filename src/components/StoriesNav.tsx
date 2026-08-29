import { useRef } from 'react';

export type StoriesNavState = 'current' | 'correct' | 'incorrect' | 'unanswered';

interface StoriesNavProps {
  states: StoriesNavState[];
  onSelect: (index: number) => void;
}

// Instagram-stories-style progress bar: one thin segment per item instead of
// a numbered grid. At a few hundred items, individual segments are too
// narrow to tap precisely -- so instead of a click handler per segment, a
// single handler on the track computes the nearest index from tap position,
// like a video scrubber.
export default function StoriesNav({ states, onSelect }: StoriesNavProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function handlePick(clientX: number) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    onSelect(Math.min(states.length - 1, Math.floor(ratio * states.length)));
  }

  return (
    <div
      ref={trackRef}
      className="stories-nav"
      role="slider"
      aria-label="Ir a pregunta"
      aria-valuemin={1}
      aria-valuemax={states.length}
      aria-valuenow={states.findIndex((s) => s === 'current') + 1}
      tabIndex={0}
      onClick={(e) => handlePick(e.clientX)}
      onKeyDown={(e) => {
        const current = states.findIndex((s) => s === 'current');
        if (e.key === 'ArrowRight') onSelect(Math.min(states.length - 1, current + 1));
        else if (e.key === 'ArrowLeft') onSelect(Math.max(0, current - 1));
      }}
    >
      {states.map((state, i) => (
        <span key={i} className={`stories-nav-seg ${state}`} />
      ))}
    </div>
  );
}
