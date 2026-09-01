import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { domainByNumber } from '../domainData.ts';
import GlossaryEntryContent from './GlossaryEntryContent.tsx';
import { useIsMobile } from '../hooks/useIsMobile.ts';

interface HighlightState {
  highlightCardIndex: number | null;
}

export default function DomainDetail({ number }: { number: number }) {
  const domain = domainByNumber[number];
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileDetailActive, setMobileDetailActive] = useState(false);
  const [animDirection, setAnimDirection] = useState<'forward' | 'back'>('forward');
  const [animKey, setAnimKey] = useState(0);
  const listScrollY = useRef(0);
  const wasDetailActive = useRef(false);
  const hasInteracted = useRef(false);

  // Only one pane is ever mounted on mobile (see render below), so there's nothing for
  // it to fight over height/scroll with. This just points the window scroll at the
  // right place: top of the detail pane when entering it, back to where the list was
  // when returning to it.
  useLayoutEffect(() => {
    if (isMobile) {
      if (mobileDetailActive && !wasDetailActive.current) {
        window.scrollTo(0, 0);
      } else if (!mobileDetailActive && wasDetailActive.current) {
        window.scrollTo(0, listScrollY.current);
      }
    }
    wasDetailActive.current = mobileDetailActive;
  }, [mobileDetailActive, isMobile]);

  const explicitBulletParam = searchParams.get('b');

  // A bullet target arriving in the URL from outside this component (a
  // shared deep link, browser back/forward into a new domain, or the search
  // dialog) needs to actually land on it -- on mobile that means switching
  // from the sidebar to the detail pane. selectBullet already does this
  // itself for in-component clicks, so redoing it here on every b-change is
  // harmless (same value) rather than something that needs guarding against.
  useEffect(() => {
    if (explicitBulletParam && isMobile) setMobileDetailActive(true);
  }, [explicitBulletParam, isMobile]);

  // DomainSearch.tsx's goToResult passes { highlightCardIndex } as router
  // navigation state -- never part of the URL, so unlike a query param it
  // can't linger and re-fire on a later reload (a fresh page load has no
  // navigation state at all) or leak into a shared link. Only actually used
  // while it still matches what's on screen (the `activeId` check below), so
  // it can't go stale and flash something after an unrelated later click.
  const highlightState = location.state as HighlightState | null;
  const [highlight, setHighlight] = useState<{ glossId: string; cardIndex: number | null } | null>(null);
  useEffect(() => {
    if (!highlightState || !explicitBulletParam) return;
    setHighlight({ glossId: explicitBulletParam, cardIndex: highlightState.highlightCardIndex });
  }, [highlightState, explicitBulletParam]);

  if (!domain) return <p>Dominio no encontrado.</p>;

  const firstBulletId = domain.subsections[0]?.bullets[0]?.glossId;
  const activeId = explicitBulletParam || firstBulletId;
  const activeSubsection = domain.subsections.find((ss) => ss.bullets.some((b) => b.glossId === activeId));

  function selectBullet(glossId: string) {
    if (isMobile && !mobileDetailActive) listScrollY.current = window.scrollY;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('b', glossId);
      return next;
    });
    hasInteracted.current = true;
    setAnimDirection('forward');
    setAnimKey((k) => k + 1);
    setMobileDetailActive(true);
  }

  function backToList() {
    hasInteracted.current = true;
    setAnimDirection('back');
    setAnimKey((k) => k + 1);
    setMobileDetailActive(false);
  }

  const sidebar = (
    <aside className="domain-sidebar">
      {domain.subsections.map((ss) => (
        <div className="ds-subsection" key={ss.id}>
          <h3 className="ds-subtitle"><span className="tcode">{ss.id}</span> {ss.title}</h3>
          <ul className="ds-bullets">
            {ss.bullets.map((b) => (
              <li key={b.glossId}>
                <button
                  type="button"
                  className={b.glossId === activeId ? 'ds-bullet active' : 'ds-bullet'}
                  onClick={() => selectBullet(b.glossId)}
                >
                  {b.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );

  const panel = (
    <div className="domain-split-panel">
      <div className="mobile-panel-header">
        <button type="button" className="mobile-back-btn" onClick={backToList}>
          <ChevronLeft size={16} strokeWidth={2.25} /> Ver lista
        </button>
        <span className="mobile-panel-crumb">D{domain.number}{activeSubsection ? ` · ${activeSubsection.id}` : ''}</span>
      </div>
      <div className="domain-head">
        <div>
          <span className="kicker">{domain.kicker}</span>
          <h2>{domain.name}</h2>
          <p className="domain-orig">{domain.nameOrig}</p>
        </div>
        <span className="weight-badge">{domain.weight}</span>
      </div>
      {activeId ? (
        <GlossaryEntryContent id={activeId} highlightCardIndex={highlight?.glossId === activeId ? highlight.cardIndex : undefined} />
      ) : (
        <p>Este dominio no tiene bullets.</p>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <section className="domain-split" data-domain={domain.number}>
        <div className="domain-split-body mobile">
          <div key={animKey} className={hasInteracted.current ? `mobile-pane enter-${animDirection}` : 'mobile-pane'}>
            {mobileDetailActive ? panel : sidebar}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="domain-split" data-domain={domain.number}>
      <div className="domain-split-body">
        {sidebar}
        {panel}
      </div>
    </section>
  );
}
