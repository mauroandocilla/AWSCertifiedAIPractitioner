import { Link } from 'react-router-dom';
import Header from './Header.tsx';
import DomainWeights from './DomainWeights.tsx';
import IntroNote from './IntroNote.tsx';
import { useGlossaryAudio, formatTime } from './GlossaryAudioProvider.tsx';
import PlayIcon from './PlayIcon.tsx';
import CrossIcon from './CrossIcon.tsx';

// Only the single most recent listening position across the whole app, not
// a completion tracker -- see ResumeState in GlossaryAudioProvider.tsx.
// Hidden once something is actually playing (the floating player already
// shows this same info then) and while nothing has been listened to yet.
function ResumeListeningBanner() {
  const { resumeState, resumeEntry, dismissResume, status } = useGlossaryAudio();
  if (!resumeState || status !== 'idle') return null;
  return (
    <div className="landing-resume">
      <button type="button" className="landing-resume-play" onClick={resumeEntry} aria-label="Continuar escuchando">
        <PlayIcon />
      </button>
      <div className="landing-resume-text">
        <span className="landing-resume-kicker">Continuar escuchando</span>
        <span className="landing-resume-title">
          {resumeState.displayTitle} · {formatTime(resumeState.timeSeconds)}
        </span>
      </div>
      <button type="button" className="landing-resume-dismiss" onClick={dismissResume} aria-label="Descartar">
        <CrossIcon />
      </button>
    </div>
  );
}

const DOMAINS = [
  { n: 1, weight: '20%', name: 'Fundamentos de IA y ML', tasks: 3 },
  { n: 2, weight: '24%', name: 'Fundamentos de la IA generativa', tasks: 3 },
  { n: 3, weight: '28%', name: 'Aplicaciones de foundation models', tasks: 4 },
  { n: 4, weight: '14%', name: 'Lineamientos para una IA responsable', tasks: 2 },
  { n: 5, weight: '14%', name: 'Seguridad, cumplimiento y gobernanza', tasks: 2 },
];

export default function Landing() {
  return (
    <>
      <Header />
      <DomainWeights />
      <IntroNote />
      <ResumeListeningBanner />

      <p className="landing-hint">Elegí un dominio, o entrá directo al glosario o los recursos.</p>

      <div className="landing-grid">
        {DOMAINS.map((d) => (
          <Link key={d.n} to={`/dominio/${d.n}`} className={`landing-card d${d.n}`}>
            <div className="landing-card-top">
              <span className="mono">DOMINIO {d.n}</span>
              <span className="mono">{d.weight}</span>
            </div>
            <div className="landing-card-name">{d.name}</div>
            <div className="landing-card-meta">{d.tasks} subsecciones</div>
          </Link>
        ))}

        <Link to="/servicios" className="landing-card ref">
          <div className="landing-card-top"><span className="mono">REFERENCIA</span></div>
          <div className="landing-card-name">Servicios en/fuera de alcance</div>
          <div className="landing-card-meta">lista completa por categoría</div>
        </Link>

        <Link to="/glosario" className="landing-card ref accent">
          <div className="landing-card-top"><span className="mono">REFERENCIA</span></div>
          <div className="landing-card-name">Glosario a fondo</div>
          <div className="landing-card-meta">~90 términos explicados</div>
        </Link>

        <Link to="/como-estudiarlo" className="landing-card ref">
          <div className="landing-card-top"><span className="mono">GUÍA</span></div>
          <div className="landing-card-name">Cómo estudiarlo</div>
          <div className="landing-card-meta">fuentes oficiales y plan</div>
        </Link>

        <Link to="/formato-examen" className="landing-card ref">
          <div className="landing-card-top"><span className="mono">GUÍA</span></div>
          <div className="landing-card-name">Formato del examen</div>
          <div className="landing-card-meta">tipos de pregunta y estrategia de puntaje</div>
        </Link>

        <Link to="/quiz" className="landing-card ref accent">
          <div className="landing-card-top"><span className="mono">PRÁCTICA</span></div>
          <div className="landing-card-name">Quiz de práctica</div>
          <div className="landing-card-meta">21 sets, ~900 preguntas</div>
        </Link>

        <Link to="/quiz-v2" className="landing-card ref accent">
          <div className="landing-card-top"><span className="mono">PRÁCTICA</span></div>
          <div className="landing-card-name">Quiz v2</div>
          <div className="landing-card-meta">209 preguntas, sin sets</div>
        </Link>

        <Link to="/examen" className="landing-card ref">
          <div className="landing-card-top"><span className="mono">SIMULACRO</span></div>
          <div className="landing-card-name">Modo examen</div>
          <div className="landing-card-meta">65 preguntas, 90 min, sin respuestas hasta el final</div>
        </Link>
      </div>
    </>
  );
}
