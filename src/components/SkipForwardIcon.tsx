import { RotateCw } from 'lucide-react';

// See SkipBackIcon.tsx -- same composite approach, mirrored rotate direction.
export default function SkipForwardIcon({ seconds }: { seconds: number }) {
  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <RotateCw size={20} strokeWidth={1.75} />
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
