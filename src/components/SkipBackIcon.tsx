export default function SkipBackIcon({ seconds }: { seconds: number }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 12A5.5 5.5 0 1 1 12 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3.2 12 7.4 8.3 5.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="12" y="16.3" fontSize="7.2" fontWeight="700" textAnchor="middle" fill="currentColor" fontFamily="'IBM Plex Mono', monospace">
        {seconds}
      </text>
    </svg>
  );
}
