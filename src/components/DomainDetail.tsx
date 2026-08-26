import { useSearchParams } from 'react-router-dom';
import { domainByNumber } from '../domainData.ts';
import GlossaryEntryContent from './GlossaryEntryContent.tsx';

export default function DomainDetail({ number }: { number: number }) {
  const domain = domainByNumber[number];
  const [searchParams, setSearchParams] = useSearchParams();

  if (!domain) return <p>Dominio no encontrado.</p>;

  const firstBulletId = domain.subsections[0]?.bullets[0]?.glossId;
  const activeId = searchParams.get('b') || firstBulletId;

  function selectBullet(glossId: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('b', glossId);
      return next;
    });
  }

  return (
    <section className="domain-split" data-domain={domain.number}>
      <div className="domain-head">
        <div>
          <span className="kicker">{domain.kicker}</span>
          <h2>{domain.name}</h2>
          <p className="domain-orig">{domain.nameOrig}</p>
        </div>
        <span className="weight-badge">{domain.weight}</span>
      </div>

      <div className="domain-split-body">
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
          {activeId ? <GlossaryEntryContent id={activeId} /> : <p>Este dominio no tiene bullets.</p>}
        </div>
      </div>
    </section>
  );
}
