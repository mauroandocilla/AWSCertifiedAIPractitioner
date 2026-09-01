import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { domains } from '../domainData.ts';
import ProgressRing from './ProgressRing.tsx';

// Self-reported study progress -- there's no automatic way to know someone
// actually studied a bullet (unlike the quiz's answered/correct tracking,
// or the audio player's resume position), so this is just a manual
// checklist, same "click it, it saves to this device" spirit as those.
const PROGRESS_KEY = 'study-journey-progress';

function loadProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function StudyJourneyPage() {
  const [done, setDone] = useState<Record<string, boolean>>(loadProgress);

  function toggle(glossId: string) {
    setDone((prev) => {
      const next = { ...prev, [glossId]: !prev[glossId] };
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      } catch {
        // localStorage can throw (private browsing, quota) -- this is just
        // a convenience checklist, not worth surfacing an error over.
      }
      return next;
    });
  }

  const totalBullets = domains.reduce((sum, d) => sum + d.subsections.reduce((s, ss) => s + ss.bullets.length, 0), 0);
  const totalDone = Object.values(done).filter(Boolean).length;
  const totalPct = totalBullets ? (totalDone / totalBullets) * 100 : 0;

  return (
    <section className="journey-page">
      <span className="eyebrow">Guía de estudio, paso a paso</span>
      <h2 style={{ marginTop: '0.4rem', fontSize: '1.5rem' }}>Recorrido de estudio</h2>
      <p className="scope-note">
        Marcá cada bullet a medida que lo vas estudiando — el progreso se guarda en este dispositivo, no se comparte ni se sincroniza.
      </p>

      <div className="journey-total">
        <ProgressRing percent={totalPct} size={30} />
        <span className="journey-total-text">
          {totalDone} de {totalBullets} bullets completados ({Math.round(totalPct)}%)
        </span>
      </div>

      {domains.map((d) => {
        const bulletsInDomain = d.subsections.flatMap((ss) => ss.bullets);
        const doneInDomain = bulletsInDomain.filter((b) => done[b.glossId]).length;
        const pct = bulletsInDomain.length ? (doneInDomain / bulletsInDomain.length) * 100 : 0;
        return (
          <section key={d.number} className="journey-domain" data-domain={d.number}>
            <div className="journey-domain-head">
              <div>
                <span className="kicker">
                  Dominio {d.number} · {d.weight}
                </span>
                <h3 className="journey-domain-name">{d.name}</h3>
              </div>
              <div className="journey-domain-progress">
                <ProgressRing percent={pct} size={22} />
                <span>
                  {doneInDomain}/{bulletsInDomain.length}
                </span>
              </div>
            </div>

            {d.subsections.map((ss) => (
              <div key={ss.id} className="journey-subsection">
                <h4 className="journey-subsection-title">
                  <span className="tcode">{ss.id}</span> {ss.title}
                </h4>
                <ul className="journey-bullets">
                  {ss.bullets.map((b) => (
                    <li key={b.glossId} className="journey-bullet-row">
                      <button
                        type="button"
                        className={done[b.glossId] ? 'journey-check done' : 'journey-check'}
                        onClick={() => toggle(b.glossId)}
                        aria-label={done[b.glossId] ? 'Marcar como no estudiado' : 'Marcar como estudiado'}
                      >
                        {done[b.glossId] && <Check size={12} strokeWidth={3} />}
                      </button>
                      <Link to={`/dominio/${d.number}?b=${b.glossId}`} className={done[b.glossId] ? 'journey-bullet-text done' : 'journey-bullet-text'}>
                        {b.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        );
      })}
    </section>
  );
}
