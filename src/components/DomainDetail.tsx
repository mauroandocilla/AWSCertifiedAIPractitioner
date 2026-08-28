import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { domainByNumber } from '../domainData.ts';
import GlossaryEntryContent from './GlossaryEntryContent.tsx';
import BackArrowIcon from './BackArrowIcon.tsx';

const MOBILE_QUERY = '(max-width: 720px)';

export default function DomainDetail({ number }: { number: number }) {
  const domain = domainByNumber[number];
  const [searchParams, setSearchParams] = useSearchParams();
  // Mobile only: which pane is showing (list vs. selected bullet). Ignored on desktop, where both show at once.
  const [mobileDetailActive, setMobileDetailActive] = useState(false);
  const listScrollY = useRef(0);
  const wasDetailActive = useRef(false);

  // Entering the detail pane starts it at its own top (not wherever the list happened
  // to be scrolled to); leaving it restores the list to where you left it, instead of
  // both panes fighting over one shared window scroll position.
  useEffect(() => {
    if (window.matchMedia(MOBILE_QUERY).matches) {
      if (mobileDetailActive && !wasDetailActive.current) {
        window.scrollTo(0, 0);
      } else if (!mobileDetailActive && wasDetailActive.current) {
        window.scrollTo(0, listScrollY.current);
      }
    }
    wasDetailActive.current = mobileDetailActive;
  }, [mobileDetailActive]);

  if (!domain) return <p>Dominio no encontrado.</p>;

  const firstBulletId = domain.subsections[0]?.bullets[0]?.glossId;
  const activeId = searchParams.get('b') || firstBulletId;

  function selectBullet(glossId: string) {
    if (!mobileDetailActive && window.matchMedia(MOBILE_QUERY).matches) {
      listScrollY.current = window.scrollY;
    }
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('b', glossId);
      return next;
    });
    setMobileDetailActive(true);
  }

  return (
    <section className="domain-split" data-domain={domain.number}>
      <div className={mobileDetailActive ? 'domain-split-body detail-active' : 'domain-split-body'}>
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

        <div className="domain-split-panel">
          <button type="button" className="mobile-back-btn" onClick={() => setMobileDetailActive(false)}>
            <BackArrowIcon /> Ver lista
          </button>

          <div className="domain-head">
            <div>
              <span className="kicker">{domain.kicker}</span>
              <h2>{domain.name}</h2>
              <p className="domain-orig">{domain.nameOrig}</p>
            </div>
            <span className="weight-badge">{domain.weight}</span>
          </div>

          {activeId ? <GlossaryEntryContent id={activeId} /> : <p>Este dominio no tiene bullets.</p>}
        </div>
      </div>
    </section>
  );
}
