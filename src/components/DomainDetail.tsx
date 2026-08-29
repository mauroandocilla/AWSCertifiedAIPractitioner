import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { domainByNumber } from '../domainData.ts';
import GlossaryEntryContent from './GlossaryEntryContent.tsx';
import BackArrowIcon from './BackArrowIcon.tsx';
import { useIsMobile } from '../hooks/useIsMobile.ts';

export default function DomainDetail({ number }: { number: number }) {
  const domain = domainByNumber[number];
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useIsMobile();
  const [mobileDetailActive, setMobileDetailActive] = useState(false);
  const [animDirection, setAnimDirection] = useState<'forward' | 'back'>('forward');
  const [animKey, setAnimKey] = useState(0);
  const listScrollY = useRef(0);
  const wasDetailActive = useRef(false);
  const hasInteracted = useRef(false);
  const isInternalNav = useRef(false);

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
  // `card` is only ever set by the search dialog (see DomainSearch.tsx's
  // goToResult -- always present there, -1 standing in for a bullet-level
  // "resumen" match). A plain sidebar click or a shared /dominio/N?b=X link
  // never sets it. That makes its mere presence the actual signal for "this
  // navigation came from search, highlight something" -- not just "b is set",
  // which is also true for perfectly ordinary browsing.
  const explicitCardParam = searchParams.get('card');
  const explicitCardIndex = explicitCardParam !== null && explicitCardParam !== '-1' ? Number(explicitCardParam) : null;
  // Which (bullet, card) GlossaryEntryContent should scroll to and flash --
  // only set for navigation that arrived from outside (see the effect
  // below), and only actually used while it still matches what's on screen
  // (see the `activeId` check where it's passed down), so it can't go stale
  // and re-trigger on an unrelated later click.
  const [highlight, setHighlight] = useState<{ glossId: string; cardIndex: number | null } | null>(null);

  // A bullet target arriving from outside this component (the search dialog,
  // a shared deep link, browser back/forward into a new domain) needs to
  // actually land on it -- on mobile that means switching from the sidebar
  // to the detail pane. selectBullet already handles its own pane switch for
  // in-component clicks, so it marks the nav as internal beforehand and this
  // effect skips those. Highlighting is gated further, on `card` specifically
  // (see above) -- a shared plain ?b= link should still open the right pane,
  // just without flashing anything since nothing told it to.
  useEffect(() => {
    if (isInternalNav.current) {
      isInternalNav.current = false;
      return;
    }
    if (!explicitBulletParam) return;
    if (isMobile) setMobileDetailActive(true);
    if (explicitCardParam === null) return;
    setHighlight({ glossId: explicitBulletParam, cardIndex: explicitCardIndex });
    // Consume the highlight request: strip `card` so reloading this same URL
    // later just shows the bullet normally, instead of re-flashing it forever.
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete('card');
        return next;
      },
      { replace: true },
    );
  }, [number, explicitBulletParam, explicitCardParam, isMobile]);

  if (!domain) return <p>Dominio no encontrado.</p>;

  const firstBulletId = domain.subsections[0]?.bullets[0]?.glossId;
  const activeId = explicitBulletParam || firstBulletId;
  const activeSubsection = domain.subsections.find((ss) => ss.bullets.some((b) => b.glossId === activeId));

  function selectBullet(glossId: string) {
    if (isMobile && !mobileDetailActive) listScrollY.current = window.scrollY;
    isInternalNav.current = true;
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
          <BackArrowIcon /> Ver lista
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
