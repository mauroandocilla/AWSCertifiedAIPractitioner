import { RotateCcw } from 'lucide-react';

// Composite, not a plain library icon -- there's no "skip N seconds"
// variant in lucide, so the seconds count is overlaid as text centered on
// top of the rotate-arrow glyph (same idea the old hand-drawn version used,
// just built from a library icon instead of a custom arc+arrowhead path).
export default function SkipBackIcon({ seconds }: { seconds: number }) {
  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <RotateCcw size={20} strokeWidth={1.75} />
      <span
        style={{
          position: 'absolute',
          fontSize: '7px',
          fontWeight: 700,
          fontFamily: "'IBM Plex Mono', monospace",
          lineHeight: 1,
          transform: 'translateY(0.5px)',
        }}
      >
        {seconds}
      </span>
    </span>
  );
}
