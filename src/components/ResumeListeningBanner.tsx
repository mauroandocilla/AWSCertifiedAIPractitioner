import { useNavigate } from 'react-router-dom';
import { Play, X } from 'lucide-react';
import { useGlossaryAudio, entryTopicLabel, contentNavTarget, formatTime } from './GlossaryAudioProvider.tsx';

// Only the single most recent listening position across the whole app, not
// a completion tracker -- see ResumeState in GlossaryAudioProvider.tsx.
// Hidden once something is actually playing (the floating player already
// shows this same info then) and while nothing has been listened to yet.
// Shown on both Landing.tsx and Glossary.tsx.
export default function ResumeListeningBanner() {
  const { resumeState, resumeEntry, dismissResume, status } = useGlossaryAudio();
  const navigate = useNavigate();
  if (!resumeState || status !== 'idle') return null;
  const rs = resumeState;
  const topic = entryTopicLabel(rs.glossId);

  function goToContent() {
    const target = contentNavTarget(rs.glossId, rs.cardIndex);
    navigate(target.url, { state: target.state });
  }

  return (
    <div className="landing-resume">
      <button type="button" className="landing-resume-play" onClick={resumeEntry} aria-label="Continuar escuchando">
        <Play size={14} strokeWidth={0} fill="currentColor" />
      </button>
      <div className="landing-resume-text">
        <span className="landing-resume-kicker">Continuar escuchando</span>
        <span className="landing-resume-title">
          {topic && <span className="landing-resume-topic">{topic} · </span>}
          {rs.displayTitle} · {formatTime(rs.timeSeconds)}
        </span>
      </div>
      <button type="button" className="landing-resume-goto" onClick={goToContent} aria-label="Ir al contenido">
        ↗
      </button>
      <button type="button" className="landing-resume-dismiss" onClick={dismissResume} aria-label="Descartar">
        <X size={22} strokeWidth={2.5} />
      </button>
    </div>
  );
}
