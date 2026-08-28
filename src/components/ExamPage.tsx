import { useEffect, useState } from 'react';
import QuizLangToggle from './QuizLangToggle.tsx';
import { loadAllQuestions } from '../quiz/loadAllQuestions.ts';
import { sampleExamQuestions } from '../quiz/examSampling.ts';
import { isCorrectAnswer } from '../quiz/isCorrectAnswer.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import type { QuizQuestion } from '../quiz/types.ts';

const TOTAL_QUESTIONS = 65;
const TIME_LIMIT_SECONDS = 90 * 60;

type Phase = 'setup' | 'active' | 'results';

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function ExamPage() {
  const [lang, setLang] = useQuizLang();
  const [phase, setPhase] = useState<Phase>('setup');
  const [loading, setLoading] = useState(false);
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);

  useEffect(() => {
    if (phase !== 'active') return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setPhase('results');
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  async function startExam() {
    setLoading(true);
    const pool = await loadAllQuestions(lang);
    setExamQuestions(sampleExamQuestions(pool, TOTAL_QUESTIONS));
    setAnswers({});
    setFlagged(new Set());
    setIndex(0);
    setSecondsLeft(TIME_LIMIT_SECONDS);
    setLoading(false);
    setPhase('active');
  }

  function toggleOption(question: QuizQuestion, optionIdx: number) {
    setAnswers((prev) => {
      const current = new Set(prev[question.id] ?? []);
      if (question.multiSelect) {
        if (current.has(optionIdx)) current.delete(optionIdx);
        else current.add(optionIdx);
      } else {
        current.clear();
        current.add(optionIdx);
      }
      return { ...prev, [question.id]: Array.from(current) };
    });
  }

  function toggleFlag(id: string) {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function finishExam() {
    const unanswered = examQuestions.filter((q) => !answers[q.id]?.length).length;
    if (unanswered > 0) {
      const ok = window.confirm(`Te quedan ${unanswered} preguntas sin responder. ¿Terminar igual?`);
      if (!ok) return;
    }
    setPhase('results');
  }

  if (phase === 'setup') {
    return (
      <section className="quiz-list">
        <div className="quiz-session-head">
          <div>
            <span className="eyebrow">SIMULACRO</span>
            <h2 style={{ marginTop: '0.4rem', fontSize: '1.4rem' }}>Modo examen</h2>
          </div>
          <QuizLangToggle lang={lang} onChange={setLang} />
        </div>
        <p className="scope-note">
          {TOTAL_QUESTIONS} preguntas, {TIME_LIMIT_SECONDS / 60} minutos — igual que el examen real. Se arman
          respetando el peso oficial de cada dominio (Dominio 3: 28%, Dominio 2: 24%, Dominio 1: 20%, Dominio 4 y 5:
          14% cada uno). A diferencia del quiz de práctica, acá no te decimos si acertaste hasta terminar — así se
          siente más parecido al examen real.
        </p>
        <p className="scope-note" style={{ marginTop: '0.6rem' }}>
          <strong>Nota:</strong> son preguntas de práctica (SkillCertPro), no oficiales de AWS. El puntaje real del
          examen se reporta en una escala compensatoria de 100 a 1000 con corte en 700 — el resultado que ves acá es
          aciertos sobre el total, una aproximación, no el puntaje real.
        </p>
        <div className="quiz-actions" style={{ marginTop: '1.4rem' }}>
          <button type="button" className="quiz-btn accent" onClick={startExam} disabled={loading}>
            {loading ? 'Armando examen…' : 'Comenzar examen'}
          </button>
        </div>
      </section>
    );
  }

  if (phase === 'active') {
    const question = examQuestions[index];
    const selected = new Set(answers[question.id] ?? []);
    const answeredCount = examQuestions.filter((q) => answers[q.id]?.length).length;

    return (
      <section className="quiz-split">
        <div className="quiz-split-panel" style={{ width: '100%' }}>
          <div className="quiz-session-head">
            <div>
              <span className="eyebrow">EXAMEN</span>
              <h2 style={{ marginTop: '0.4rem', fontSize: '1.3rem' }}>Pregunta {index + 1} de {examQuestions.length}</h2>
            </div>
            <div className="quiz-session-head-right">
              <div className={secondsLeft <= 300 ? 'exam-timer low' : 'exam-timer'}>{formatTime(secondsLeft)}</div>
              <div className="quiz-score-badge">{answeredCount}/{examQuestions.length} respondidas</div>
            </div>
          </div>

          <div className="quiz-nav-grid">
            {examQuestions.map((q, i) => {
              const isCurrent = i === index;
              let cls = 'quiz-nav-btn';
              if (isCurrent) cls += ' current';
              else if (answers[q.id]?.length) cls += ' answered';
              if (flagged.has(q.id)) cls += ' flagged';
              return (
                <button key={q.id} type="button" className={cls} onClick={() => setIndex(i)}>
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="quiz-question">
            {question.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <p className="quiz-hint">{question.multiSelect ? 'Selecciona todas las que apliquen.' : 'Selecciona una opción.'}</p>

          <div className="quiz-options">
            {question.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                className={selected.has(i) ? 'quiz-option selected' : 'quiz-option'}
                onClick={() => toggleOption(question, i)}
              >
                <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt.text}</span>
              </button>
            ))}
          </div>

          <div className="quiz-actions">
            <button type="button" className="quiz-btn" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
              Anterior
            </button>
            <button type="button" className="quiz-btn" onClick={() => toggleFlag(question.id)}>
              {flagged.has(question.id) ? '⚑ Marcada' : '⚐ Marcar para revisar'}
            </button>
            {index < examQuestions.length - 1 ? (
              <button type="button" className="quiz-btn accent" onClick={() => setIndex((i) => i + 1)}>
                Siguiente
              </button>
            ) : (
              <button type="button" className="quiz-btn accent" onClick={finishExam}>
                Terminar examen
              </button>
            )}
          </div>

          <div className="quiz-actions">
            <button type="button" className="quiz-btn" onClick={finishExam}>
              Terminar examen ahora
            </button>
          </div>
        </div>
      </section>
    );
  }

  // results
  const correctCount = examQuestions.filter((q) => isCorrectAnswer(answers[q.id] ?? [], q.options)).length;
  const pct = Math.round((correctCount / examQuestions.length) * 100);

  return (
    <section className="quiz-list">
      <div className="quiz-session-head">
        <div>
          <span className="eyebrow">RESULTADO</span>
          <h2 style={{ marginTop: '0.4rem', fontSize: '1.4rem' }}>{correctCount}/{examQuestions.length} correctas ({pct}%)</h2>
        </div>
      </div>
      <p className="scope-note">
        Aproximación con preguntas de práctica, no el puntaje real de AWS (escala 100-1000, corte en 700). Repasá cada
        pregunta abajo.
      </p>
      <div className="quiz-actions" style={{ marginTop: '1rem' }}>
        <button type="button" className="quiz-btn accent" onClick={() => setPhase('setup')}>Nuevo examen</button>
      </div>

      <div style={{ marginTop: '1.6rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        {examQuestions.map((q, i) => {
          const selected = new Set(answers[q.id] ?? []);
          const correct = isCorrectAnswer(answers[q.id] ?? [], q.options);
          return (
            <div key={q.id} className={correct ? 'quiz-explanation correct' : 'quiz-explanation incorrect'}>
              <p className="quiz-explanation-verdict">
                {i + 1}. {correct ? '✓ Correcto' : selected.size === 0 ? '— Sin responder' : '✗ Incorrecto'}
              </p>
              <div className="quiz-question">
                {q.text.split('\n\n').map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
              <div className="quiz-options">
                {q.options.map((opt, oi) => {
                  const isSelected = selected.has(oi);
                  let cls = 'quiz-option';
                  if (opt.correct) cls += ' correct';
                  else if (isSelected) cls += ' incorrect';
                  return (
                    <div key={oi} className={cls}>
                      <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                      <span>{opt.text}</span>
                    </div>
                  );
                })}
              </div>
              <div dangerouslySetInnerHTML={{ __html: q.explanationHtml }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
