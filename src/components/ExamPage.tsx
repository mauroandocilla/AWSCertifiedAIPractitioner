import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Minus } from 'lucide-react';
import QuizLangToggle from './QuizLangToggle.tsx';
import ConfirmDialog from './ConfirmDialog.tsx';
import { loadOriginalExamPool } from '../quiz/loadExamPool.ts';
import { loadQuizV2ExamPool } from '../quiz-v2/loadExamPool.ts';
import { sampleExamQuestions } from '../quiz/examSampling.ts';
import { isCorrectAnswer } from '../quiz/isCorrectAnswer.ts';
import { isMatchingCorrect } from '../quiz/isMatchingCorrect.ts';
import { withBasePath } from '../quiz-v2/withBasePath.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import { domainByNumber } from '../domainData.ts';
import type { ExamQuestion } from '../quiz/examTypes.ts';

function isQuestionCorrect(selected: number[], q: ExamQuestion): boolean {
  return q.kind === 'matching' ? isMatchingCorrect(selected, q.prompts) : isCorrectAnswer(selected, q.options);
}

function isQuestionAnswered(selected: number[], q: ExamQuestion): boolean {
  return q.kind === 'matching' ? q.prompts.every((_, i) => selected[i] !== undefined) : selected.length > 0;
}

const TOTAL_QUESTIONS = 65;
const TIME_LIMIT_SECONDS = 90 * 60;

type Phase = 'setup' | 'active' | 'results';
type ExamSource = 'original' | 'v2';

const SOURCE_LABEL: Record<ExamSource, string> = {
  original: 'Quiz original (SkillCertPro)',
  v2: 'Quiz v2 (TutorialsDojo)',
};

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function ExamPage() {
  const [lang, setLang] = useQuizLang();
  const [phase, setPhase] = useState<Phase>('setup');
  const [source, setSource] = useState<ExamSource>('original');
  const [loading, setLoading] = useState(false);
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);
  const [unansweredCount, setUnansweredCount] = useState(0);

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
    const pool = source === 'v2' ? await loadQuizV2ExamPool(lang) : await loadOriginalExamPool(lang);
    setExamQuestions(sampleExamQuestions(pool, TOTAL_QUESTIONS));
    setAnswers({});
    setFlagged(new Set());
    setIndex(0);
    setSecondsLeft(TIME_LIMIT_SECONDS);
    setLoading(false);
    setPhase('active');
  }

  function toggleOption(question: ExamQuestion, optionIdx: number) {
    if (question.kind !== 'choice') return;
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

  function setMatchingAnswer(question: ExamQuestion, promptIdx: number, optionPoolIdx: number) {
    if (question.kind !== 'matching') return;
    setAnswers((prev) => {
      const next = [...(prev[question.id] ?? [])];
      next[promptIdx] = optionPoolIdx;
      return { ...prev, [question.id]: next };
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
    const unanswered = examQuestions.filter((q) => !isQuestionAnswered(answers[q.id] ?? [], q)).length;
    if (unanswered > 0) {
      setUnansweredCount(unanswered);
      return;
    }
    setPhase('results');
  }

  function confirmFinishExam() {
    setUnansweredCount(0);
    setPhase('results');
  }

  if (phase === 'setup') {
    return (
      <section className="quiz-list">
        <div className="quiz-session-head">
          <div className="quiz-session-head-row">
            <div>
              <span className="eyebrow">SIMULACRO</span>
              <h2 style={{ marginTop: '0.4rem', fontSize: '1.4rem' }}>Modo examen</h2>
            </div>
            <QuizLangToggle lang={lang} onChange={setLang} />
          </div>
        </div>
        <p className="scope-note">
          {TOTAL_QUESTIONS} preguntas, {TIME_LIMIT_SECONDS / 60} minutos — igual que el examen real. Se arman
          respetando el peso oficial de cada dominio (Dominio 3: 28%, Dominio 2: 24%, Dominio 1: 20%, Dominio 4 y 5:
          14% cada uno). A diferencia del quiz de práctica, acá no te decimos si acertaste hasta terminar — así se
          siente más parecido al examen real.
        </p>
        <p className="scope-note" style={{ marginTop: '0.6rem' }}>
          <strong>Nota:</strong> son preguntas de práctica ({source === 'v2' ? 'TutorialsDojo' : 'SkillCertPro'}), no
          oficiales de AWS. El puntaje real del examen se reporta en una escala compensatoria de 100 a 1000 con corte
          en 700 — el resultado que ves acá es aciertos sobre el total, una aproximación, no el puntaje real.
        </p>
        <div className="quiz-lang-toggle" style={{ marginTop: '1.2rem' }}>
          {(['original', 'v2'] as ExamSource[]).map((s) => (
            <button key={s} type="button" className={source === s ? 'active' : ''} onClick={() => setSource(s)}>
              {SOURCE_LABEL[s]}
            </button>
          ))}
        </div>
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
    const selectedForQuestion = answers[question.id] ?? [];
    const selected = new Set(selectedForQuestion);
    const answeredCount = examQuestions.filter((q) => isQuestionAnswered(answers[q.id] ?? [], q)).length;

    return (
      <>
      <section className="quiz-split">
        <div className="quiz-split-panel" style={{ width: '100%' }}>
          <div className="quiz-session-head">
            <div className="quiz-session-head-row">
              <div>
                <span className="eyebrow">EXAMEN</span>
                <h2 style={{ marginTop: '0.4rem', fontSize: '1.3rem' }}>Pregunta {index + 1} de {examQuestions.length}</h2>
              </div>
              <div className="quiz-session-head-right">
                <div className={secondsLeft <= 300 ? 'exam-timer low' : 'exam-timer'}>{formatTime(secondsLeft)}</div>
                <div className="quiz-score-badge">{answeredCount}/{examQuestions.length} respondidas</div>
              </div>
            </div>
          </div>

          <div className="quiz-nav-grid">
            {examQuestions.map((q, i) => {
              const isCurrent = i === index;
              let cls = 'quiz-nav-btn';
              if (isCurrent) cls += ' current';
              else if (isQuestionAnswered(answers[q.id] ?? [], q)) cls += ' answered';
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

          {question.kind === 'matching' ? (
            <>
              <p className="quiz-hint">Elige la opción correcta para cada elemento.</p>
              <div className="quiz-matching-list">
                {question.prompts.map((p, pi) => {
                  const selectedIdx = selectedForQuestion[pi];
                  return (
                    <div key={pi} className="quiz-matching-block">
                      <p className="quiz-matching-prompt">{p.text}</p>
                      <div className="quiz-matching-chips">
                        {question.optionPool.map((opt, oi) => (
                          <button
                            key={oi}
                            type="button"
                            className={selectedIdx === oi ? 'quiz-matching-chip selected' : 'quiz-matching-chip'}
                            onClick={() => setMatchingAnswer(question, pi, oi)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}

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
      <ConfirmDialog
        open={unansweredCount > 0}
        message={`Te quedan ${unansweredCount} preguntas sin responder. ¿Terminar igual?`}
        confirmLabel="Terminar examen"
        onConfirm={confirmFinishExam}
        onCancel={() => setUnansweredCount(0)}
      />
      </>
    );
  }

  // results
  const correctCount = examQuestions.filter((q) => isQuestionCorrect(answers[q.id] ?? [], q)).length;
  const pct = Math.round((correctCount / examQuestions.length) * 100);

  return (
    <section className="quiz-list">
      <div className="quiz-session-head">
        <div className="quiz-session-head-row">
          <div>
            <span className="eyebrow">RESULTADO</span>
            <h2 style={{ marginTop: '0.4rem', fontSize: '1.4rem' }}>{correctCount}/{examQuestions.length} correctas ({pct}%)</h2>
          </div>
        </div>
      </div>
      <p className="scope-note">
        Aproximación con preguntas de práctica, no el puntaje real de AWS (escala 100-1000, corte en 700). Repasá cada
        pregunta abajo.
      </p>
      <div className="quiz-actions" style={{ marginTop: '1rem' }}>
        <button type="button" className="quiz-btn accent" onClick={() => setPhase('setup')}>Nuevo examen</button>
      </div>

      <div className="exam-review-list">
        {examQuestions.map((q, i) => {
          const selectedForQuestion = answers[q.id] ?? [];
          const selected = new Set(selectedForQuestion);
          const answered = isQuestionAnswered(selectedForQuestion, q);
          const correct = isQuestionCorrect(selectedForQuestion, q);
          return (
            <div key={q.id} className={correct ? 'quiz-explanation correct' : 'quiz-explanation incorrect'}>
              <div className="quiz-explanation-head">
                <p className="quiz-explanation-verdict">
                  {i + 1}.{' '}
                  {correct ? (
                    <>
                      <Check size={15} strokeWidth={2.5} /> Correcto
                    </>
                  ) : !answered ? (
                    <>
                      <Minus size={15} strokeWidth={2.5} /> Sin responder
                    </>
                  ) : (
                    <>
                      <X size={15} strokeWidth={2.5} /> Incorrecto
                    </>
                  )}
                </p>
                {q.domain != null && domainByNumber[q.domain] && (
                  <Link to={`/dominio/${q.domain}`} className={`quiz-domain-badge d${q.domain}`}>
                    D{q.domain} · {domainByNumber[q.domain].name}
                  </Link>
                )}
              </div>
              <div className="quiz-question">
                {q.text.split('\n\n').map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
              {q.kind === 'matching' ? (
                <div className="quiz-matching-list">
                  {q.prompts.map((p, pi) => {
                    const selectedIdx = selectedForQuestion[pi];
                    return (
                      <div key={pi} className="quiz-matching-block">
                        <p className="quiz-matching-prompt">{p.text}</p>
                        <div className="quiz-matching-chips">
                          {q.optionPool.map((opt, oi) => {
                            let cls = 'quiz-matching-chip';
                            if (oi === p.correctIndex) cls += ' correct';
                            else if (selectedIdx === oi) cls += ' incorrect';
                            return (
                              <div key={oi} className={cls}>
                                {opt}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
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
              )}
              <div dangerouslySetInnerHTML={{ __html: withBasePath(q.explanationHtml) }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
