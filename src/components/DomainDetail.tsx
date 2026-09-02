import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Play, X } from 'lucide-react';
import { domainByNumber } from '../domainData.ts';
import GlossaryEntryContent from './GlossaryEntryContent.tsx';
import { useGlossaryAudio } from './GlossaryAudioProvider.tsx';
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
  // Whether the active entry's own inline "Escuchar" button (inside
  // GlossaryEntryContent, further down the page) is currently visible below
  // the fixed .quickjump header. Once it scrolls out of view, a compact
  // duplicate appears in whichever of this page's own sticky bars applies to
  // the current breakpoint -- .mobile-panel-header (the "Ver lista" crumb)
  // on mobile, .domain-head (the domain title) on desktop. Those two bars
  // are already position: sticky, so the duplicate just rides along with
  // them; it doesn't need its own scroll-direction logic.
  const [inlineButtonVisible, setInlineButtonVisible] = useState(true);
  const session = useGlossaryAudio();

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

  // DomainSearch.tsx's goToResult (and "ir al contenido" in
  // GlossaryAudioProvider.tsx/ResumeListeningBanner.tsx) pass
  // { highlightCardIndex } as router navigation state -- never part of the
  // URL, so unlike a query param it can't linger and re-fire on a later
  // reload (a fresh page load has no navigation state at all) or leak into a
  // shared link. Only actually used while it still matches what's on screen
  // (the `activeId` check below), so it can't go stale and flash something
  // after an unrelated later click.
  const highlightState = location.state as HighlightState | null;
  const [highlight, setHighlight] = useState<{ glossId: string; cardIndex: number | null; nonce: number } | null>(null);
  useEffect(() => {
    if (!highlightState || !explicitBulletParam) return;
    // `nonce` (not just glossId+cardIndex) is what GlossaryEntryContent's
    // effect keys its re-run on below -- without it, clicking "ir al
    // contenido" for the exact same bullet+card you were already sitting on
    // (its most common case: opening the resume banner/Now Playing view for
    // something already on screen) passes an identical cardIndex to last
    // time, so React sees no change in that effect's dependencies and skips
    // the scroll/flash entirely. This effect itself always re-runs fine --
    // `location.state` is a genuinely new object on every navigate() call --
    // the value derived from it just wasn't carrying that "it's fresh" fact
    // any further downstream.
    setHighlight({ glossId: explicitBulletParam, cardIndex: highlightState.highlightCardIndex, nonce: Date.now() });
  }, [highlightState, explicitBulletParam]);

  // A fresh bullet/domain starts with its own inline button on screen --
  // without this, switching bullets while the sticky duplicate is showing
  // would leave it stuck visible even after the new bullet's real button
  // has mounted back at the top, until the next IntersectionObserver tick.
  useEffect(() => {
    setInlineButtonVisible(true);
  }, [explicitBulletParam, number]);

  if (!domain) return <p>Dominio no encontrado.</p>;

  const firstBulletId = domain.subsections[0]?.bullets[0]?.glossId;
  const activeId = explicitBulletParam || firstBulletId;
  const activeSubsection = domain.subsections.find((ss) => ss.bullets.some((b) => b.glossId === activeId));

  const isReading = activeId !== null && session.entryId === activeId && session.status !== 'idle';
  const isLoadingAudio = isReading && session.audioAvailable && session.duration === 0;
  const showStickyListen = !!activeId && !inlineButtonVisible;
  const stickyListenBtn = showStickyListen && (
    <button
      type="button"
      className={isLoadingAudio ? 'sticky-listen-btn loading' : 'sticky-listen-btn'}
      onClick={() => (isReading ? session.stop() : session.playEntry(activeId as string))}
    >
      {isReading ? <X size={14} strokeWidth={2.5} /> : <Play size={11} strokeWidth={0} fill="currentColor" />}
      <span>{isLoadingAudio ? 'Cargando…' : isReading ? 'Detener' : 'Escuchar'}</span>
    </button>
  );

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
        <div className="mobile-panel-header-left">
          <button type="button" className="mobile-back-btn" onClick={backToList}>
            <ChevronLeft size={16} strokeWidth={2.25} /> Ver lista
          </button>
          {isMobile && stickyListenBtn}
        </div>
        <span className="mobile-panel-crumb">D{domain.number}{activeSubsection ? ` · ${activeSubsection.id}` : ''}</span>
      </div>
      <div className="domain-head">
        <div>
          <span className="kicker">{domain.kicker}</span>
          <h2>{domain.name}</h2>
          <p className="domain-orig">{domain.nameOrig}</p>
        </div>
        <div className="domain-head-right">
          {!isMobile && stickyListenBtn}
          <span className="weight-badge">{domain.weight}</span>
        </div>
      </div>
      {activeId ? (
        <GlossaryEntryContent
          id={activeId}
          highlightCardIndex={highlight?.glossId === activeId ? highlight.cardIndex : undefined}
          highlightNonce={highlight?.glossId === activeId ? highlight.nonce : undefined}
          onButtonVisibleChange={setInlineButtonVisible}
        />
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
