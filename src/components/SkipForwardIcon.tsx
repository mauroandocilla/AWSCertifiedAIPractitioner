// Same arc+arrowhead as SkipBackIcon.tsx, mirrored -- but only the arrow
// group, not the whole <svg>. Mirroring the whole thing (a lone CSS
// `transform: scaleX(-1)` on the <svg>) would flip the "10" text glyph
// itself into backwards/mirrored text, which is a real, easy-to-miss bug.
export default function SkipForwardIcon({ seconds }: { seconds: number }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <g transform="scale(-1,1) translate(-24,0)">
        <path d="M17.5 12A5.5 5.5 0 1 1 12 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 3.2 12 7.4 8.3 5.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="12" y="16.3" fontSize="7.2" fontWeight="700" textAnchor="middle" fill="currentColor" fontFamily="'IBM Plex Mono', monospace">
        {seconds}
      </text>
    </svg>
  );
}
