import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { domainSearchIndex } from '../domainSearch.ts';
import type { DomainSearchEntry } from '../domainSearch.ts';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock.ts';

const MAX_RESULTS = 20;

export default function DomainSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useBodyScrollLock(open);

  // iOS Safari never shrinks window.innerHeight/vh/dvh for the on-screen
  // keyboard -- only window.visualViewport does. Without this, the overlay
  // (sized via inset:0, i.e. the full un-shrunk layout viewport) extends
  // behind the keyboard, and the results list inside it "has room" to
  // scroll past where anything is actually visible.
  useEffect(() => {
    if (!open) return;
    const vv = window.visualViewport;
    const el = overlayRef.current;
    if (!vv || !el) return;
    function update() {
      if (!vv) return;
      el!.style.top = `${vv.offsetTop}px`;
      el!.style.height = `${vv.height}px`;
      el!.style.bottom = 'auto';
    }
    update();
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    return () => {
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
      el.style.top = '';
      el.style.height = '';
      el.style.bottom = '';
    };
  }, [open]);

  const fuse = useMemo(
    () =>
      new Fuse(domainSearchIndex, {
        keys: [
          { name: 'matchText', weight: 2 },
          { name: 'cardTitle', weight: 1.5 },
          { name: 'subsectionTitle', weight: 1 },
          { name: 'domainName', weight: 0.5 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [],
  );

  const results: DomainSearchEntry[] = query.trim()
    ? fuse.search(query.trim(), { limit: MAX_RESULTS }).map((r) => r.item)
    : [];

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  function close() {
    setOpen(false);
    setQuery('');
  }

  function goToResult(entry: DomainSearchEntry) {
    // highlightCardIndex travels as router navigation state, not a URL param
    // -- DomainDetail.tsx uses it to scroll to and flash the exact match.
    // Keeping it out of the URL means a reload (which has no navigation
    // state) never re-triggers it, and a shared /dominio/N?b=X link never
    // carries an unwanted flash either.
    navigate(`/dominio/${entry.domainNumber}?b=${entry.glossId}`, { state: { highlightCardIndex: entry.cardIndex } });
    close();
  }

  return (
    <>
      <button
        type="button"
        className="search-trigger"
        onClick={() => setOpen(true)}
        aria-label="Buscar en los dominios"
        title="Buscar (Ctrl+K)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {open && (
        <div className="search-overlay" ref={overlayRef} onClick={close}>
          <div className="search-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-row">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en el contenido de los dominios…"
              />
              <button type="button" className="search-close" onClick={close} aria-label="Cerrar búsqueda">
                Esc
              </button>
            </div>

            {query.trim() && (
              <div className="search-results">
                {results.length === 0 ? (
                  <p className="search-empty">Sin resultados para “{query.trim()}”.</p>
                ) : (
                  results.map((r, i) => (
                    <button key={`${r.glossId}-${r.cardIndex}-${i}`} type="button" className="search-result" onClick={() => goToResult(r)}>
                      <span className={`quiz-domain-badge d${r.domainNumber}`}>D{r.domainNumber}</span>
                      <span className="search-result-body">
                        {r.cardIndex != null ? (
                          <>
                            <span className="search-result-sub">
                              {r.subsectionTitle} · {r.bulletText}
                              <span className="search-result-kind card"> · detalle</span>
                            </span>
                            <span className="search-result-text">{r.cardTitle}</span>
                          </>
                        ) : (
                          <>
                            <span className="search-result-sub">
                              {r.subsectionTitle}
                              <span className="search-result-kind bullet"> · resumen</span>
                            </span>
                            <span className="search-result-text">{r.bulletText}</span>
                          </>
                        )}
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
