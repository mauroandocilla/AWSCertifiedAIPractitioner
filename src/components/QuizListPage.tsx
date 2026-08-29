import { Link } from 'react-router-dom';
import QuizLangToggle from './QuizLangToggle.tsx';
import { quizSetsMeta } from '../quiz/meta.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import { getSetAnsweredCount } from '../quiz/getSetProgress.ts';

export default function QuizListPage() {
  const totalQuestions = quizSetsMeta.reduce((sum, s) => sum + s.questionCount, 0);
  const [lang, setLang] = useQuizLang();

  return (
    <section className="quiz-list">
      <div className="quiz-session-head">
        <div className="quiz-session-head-row">
          <div>
            <span className="eyebrow">PRÁCTICA</span>
            <h2 style={{ marginTop: '0.4rem', fontSize: '1.4rem' }}>Quiz de práctica</h2>
          </div>
          <QuizLangToggle lang={lang} onChange={setLang} />
        </div>
      </div>
      <p className="scope-note">
        {quizSetsMeta.length} sets, {totalQuestions} preguntas en total. Son preguntas de práctica extra
        (fuente: SkillCertPro), no son preguntas oficiales de AWS ni del examen real.
      </p>

      <div className="landing-grid" style={{ marginTop: '1.4rem' }}>
        {quizSetsMeta.map((s) => {
          const answered = getSetAnsweredCount(s.setNumber);
          return (
            <Link key={s.setNumber} to={`/quiz/${s.setNumber}`} className="landing-card ref">
              <div className="landing-card-top"><span className="mono">SET {s.setNumber}</span></div>
              <div className="landing-card-name">Set de práctica {s.setNumber}</div>
              <div className="landing-card-meta">{s.questionCount} preguntas</div>
              <div className="set-progress">
                <div className="set-progress-bar">
                  <div className="set-progress-fill" style={{ width: `${(answered / s.questionCount) * 100}%` }} />
                </div>
                <span className="set-progress-label">{answered}/{s.questionCount}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
