import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Each page mounts its own QuickJumpBar instance, so the pill row's horizontal
// scroll would otherwise reset to 0 on every navigation. Module-level (not React
// state) on purpose — it just needs to survive across mounts within this SPA session.
let savedScrollLeft = 0;

const ITEMS = [
  { key: 'd1', label: 'D1', to: '/dominio/1' },
  { key: 'd2', label: 'D2', to: '/dominio/2' },
  { key: 'd3', label: 'D3', to: '/dominio/3' },
  { key: 'd4', label: 'D4', to: '/dominio/4' },
  { key: 'd5', label: 'D5', to: '/dominio/5' },
  { key: 'servicios', label: 'Servicios', to: '/servicios' },
  { key: 'glosario', label: 'Glosario', to: '/glosario' },
  { key: 'estudiar', label: 'Cómo estudiarlo', to: '/como-estudiarlo' },
  { key: 'formato', label: 'Formato del examen', to: '/formato-examen' },
  { key: 'quiz', label: 'Quiz', to: '/quiz' },
  { key: 'examen', label: 'Examen', to: '/examen' },
];

export default function QuickJumpBar({ current }: { current: string }) {
  const pillsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (pillsRef.current) pillsRef.current.scrollLeft = savedScrollLeft;
  }, []);

  return (
    <div className="quickjump">
      <Link to="/" className="quickjump-back">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M19 12H5" />
          <path d="M11 18l-6-6 6-6" />
        </svg>
        <span className="quickjump-back-label">Resumen</span>
      </Link>
      <div
        className="quickjump-pills"
        ref={pillsRef}
        onScroll={(e) => {
          savedScrollLeft = e.currentTarget.scrollLeft;
        }}
      >
        {ITEMS.map((item) => (
          <Link
            key={item.key}
            to={item.to}
            className={item.key === current ? 'quickjump-pill active' : 'quickjump-pill'}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
