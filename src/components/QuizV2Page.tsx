import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { isCorrectAnswer } from '../quiz/isCorrectAnswer.ts';
import { isMatchingCorrect } from '../quiz/isMatchingCorrect.ts';
import { loadQuizV2Questions } from '../quiz-v2/loadQuestions.ts';
import { resolveQuizV2Question } from '../quiz-v2/resolveLang.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import { domainByNumber } from '../domainData.ts';
import CheckIcon from './CheckIcon.tsx';
import CrossIcon from './CrossIcon.tsx';
import ResetIcon from './ResetIcon.tsx';
import ConfirmDialog from './ConfirmDialog.tsx';
import QuizLangToggle from './QuizLangToggle.tsx';
import { withBasePath } from '../quiz-v2/withBasePath.ts';
import type { QuizV2Question, QuizV2QuestionData } from '../quiz-v2/types.ts';

const PROGRESS_KEY = 'quiz-v2-progress';

interface StoredProgress {
  answers: Record<string, number[]>;
  revealed: Record<string, boolean>;
}

function loadProgress(): StoredProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return { answers: {}, revealed: {} };
    const parsed = JSON.parse(raw);
    return { answers: parsed.answers ?? {}, revealed: parsed.revealed ?? {} };
  } catch {
    return { answers: {}, revealed: {} };
  }
}

function isQuestionCorrect(selected: number[], question: QuizV2Question): boolean {
  return question.type === 'matching' ? isMatchingCorrect(selected, question.prompts) : isCorrectAnswer(selected, question.options);
}

export default function QuizV2Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rawQuestions, setRawQuestions] = useState<QuizV2QuestionData[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [lang, setLang] = useQuizLang();

  const questions = useMemo<QuizV2Question[] | null>(
    () => rawQuestions?.map((q) => resolveQuizV2Question(q, lang)) ?? null,
    [rawQuestions, lang],
  );

  // See the matching comment in QuizSessionPage.tsx: without this, the write
  // effect below can fire with default {} state before the stored progress has
  // actually been applied and wipe real saved progress.
  const progressLoadedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    progressLoadedRef.current = false;
    loadQuizV2Questions()
      .then((qs) => {
        if (cancelled) return;
        const stored = loadProgress();
        setRawQuestions(qs);
        setAnswers(stored.answers);
        setRevealed(stored.revealed);
        progressLoadedRef.current = true;
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!questions || !progressLoadedRef.current) return;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ answers, revealed }));
  }, [questions, answers, revealed]);

  const total = questions?.length ?? 0;
  const currentNumber = Math.min(Math.max(Number(searchParams.get('q')) || 1, 1), Math.max(total, 1));
  const question = questions?.[currentNumber - 1];

  const score = useMemo(() => {
    if (!questions) return { correct: 0, answered: 0 };
    let correct = 0;
    let answered = 0;
    for (const q of questions) {
      if (!revealed[q.id]) continue;
      answered++;
      if (isQuestionCorrect(answers[q.id] ?? [], q)) correct++;
    }
    return { correct, answered };
  }, [questions, answers, revealed]);

  function goTo(n: number) {
    const clamped = Math.min(Math.max(n, 1), total);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('q', String(clamped));
      return next;
    });
  }

  function toggleOption(optionIdx: number) {
    if (!question || question.type === 'matching' || revealed[question.id]) return;
    const q = question;
    setAnswers((prev) => {
      const current = new Set(prev[q.id] ?? []);
      if (q.type === 'multiple') {
        if (current.has(optionIdx)) current.delete(optionIdx);
        else current.add(optionIdx);
      } else {
        current.clear();
        current.add(optionIdx);
      }
      return { ...prev, [q.id]: Array.from(current) };
    });
  }

  function setMatchingAnswer(promptIdx: number, optionPoolIdx: number) {
    if (!question || revealed[question.id]) return;
    const q = question;
    setAnswers((prev) => {
      const next = [...(prev[q.id] ?? [])];
      next[promptIdx] = optionPoolIdx;
      return { ...prev, [q.id]: next };
    });
  }

  function verify() {
    if (!question) return;
    setRevealed((prev) => ({ ...prev, [question.id]: true }));
  }

  function restart() {
    setShowResetConfirm(true);
  }

  function confirmRestart() {
    localStorage.removeItem(PROGRESS_KEY);
    setAnswers({});
    setRevealed({});
    goTo(1);
    setShowResetConfirm(false);
  }

  if (loadError) {
    return (
      <section className="quiz-split">
        <div className="quiz-split-panel" style={{ width: '100%' }}>
          <p>No se pudieron cargar las preguntas de Quiz v2.</p>
        </div>
      </section>
    );
  }

  if (!questions || !question) {
    return (
      <section className="quiz-split">
        <div className="quiz-split-panel" style={{ width: '100%' }}>
          <div className="quiz-session-head">
            <div className="quiz-session-head-row">
              <div>
                <span className="eyebrow">QUIZ V2</span>
                <h2 style={{ marginTop: '0.4rem', fontSize: '1.3rem' }}>Pregunta — · Cargando…</h2>
              </div>
              <div className="quiz-session-head-right">
                <QuizLangToggle lang={lang} onChange={setLang} />
                <div className="quiz-score-badge">0/0 correctas</div>
                <button type="button" className="quiz-reset-btn" title="Reiniciar" disabled>
                  <ResetIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const selectedForQuestion = answers[question.id] ?? [];
  const isRevealed = !!revealed[question.id];
  const correct = isRevealed && isQuestionCorrect(selectedForQuestion, question);
  const allRevealed = questions.every((q) => revealed[q.id]);

  const canVerify =
    question.type === 'matching'
      ? question.prompts.every((_, i) => selectedForQuestion[i] !== undefined)
      : selectedForQuestion.length > 0;

  return (
    <>
      <section className="quiz-split">
      <div className="quiz-split-panel" style={{ width: '100%' }}>
        <div className="quiz-session-head">
          <div className="quiz-session-head-row">
            <div>
              <span className="eyebrow">QUIZ V2</span>
              <h2 style={{ marginTop: '0.4rem', fontSize: '1.3rem' }}>Pregunta {currentNumber} de {total}</h2>
            </div>
            <div className="quiz-session-head-right">
              <QuizLangToggle lang={lang} onChange={setLang} />
              <div className="quiz-score-badge">{score.correct}/{score.answered} correctas</div>
              <button type="button" className="quiz-reset-btn" title="Reiniciar" onClick={restart}>
                <ResetIcon />
              </button>
            </div>
          </div>

          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${(score.answered / total) * 100}%` }} />
          </div>
        </div>

        <div className="quiz-nav-grid">
          {questions.map((q, i) => {
            const isCurrent = i + 1 === currentNumber;
            const qRevealed = revealed[q.id];
            const qCorrect = qRevealed && isQuestionCorrect(answers[q.id] ?? [], q);
            let cls = 'quiz-nav-btn';
            if (isCurrent) cls += ' current';
            else if (qRevealed) cls += qCorrect ? ' correct' : ' incorrect';
            return (
              <button key={q.id} type="button" className={cls} onClick={() => goTo(i + 1)}>
                <span className="quiz-nav-number">{i + 1}</span>
                {qRevealed && (
                  <span className={qCorrect ? 'quiz-nav-badge correct' : 'quiz-nav-badge incorrect'}>
                    {qCorrect ? <CheckIcon /> : <CrossIcon />}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="quiz-question">
          {question.text.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {question.type === 'matching' ? (
          <>
            <p className="quiz-hint">Elige la opción correcta para cada elemento.</p>
            <div className="quiz-matching-list">
              {question.prompts.map((p, pi) => {
                const selectedIdx = selectedForQuestion[pi];
                return (
                  <div key={pi} className="quiz-matching-block">
                    <p className="quiz-matching-prompt">{p.text}</p>
                    <div className="quiz-matching-chips">
                      {question.optionPool.map((opt, oi) => {
                        let cls = 'quiz-matching-chip';
                        if (isRevealed) {
                          if (oi === p.correctIndex) cls += ' correct';
                          else if (selectedIdx === oi) cls += ' incorrect';
                        } else if (selectedIdx === oi) {
                          cls += ' selected';
                        }
                        return (
                          <button
                            key={oi}
                            type="button"
                            className={cls}
                            disabled={isRevealed}
                            onClick={() => setMatchingAnswer(pi, oi)}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <p className="quiz-hint">{question.type === 'multiple' ? 'Selecciona todas las que apliquen.' : 'Selecciona una opción.'}</p>
            <div className="quiz-options">
              {question.options.map((opt, i) => {
                const isSelected = selectedForQuestion.includes(i);
                let cls = 'quiz-option';
                if (isRevealed) {
                  if (opt.correct) cls += ' correct';
                  else if (isSelected) cls += ' incorrect';
                } else if (isSelected) {
                  cls += ' selected';
                }
                return (
                  <button key={i} type="button" className={cls} disabled={isRevealed} onClick={() => toggleOption(i)}>
                    <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        <div className="quiz-actions">
          <button type="button" className="quiz-btn" onClick={() => goTo(currentNumber - 1)} disabled={currentNumber <= 1}>
            Anterior
          </button>
          {!isRevealed ? (
            <button type="button" className="quiz-btn accent" onClick={verify} disabled={!canVerify}>
              Verificar respuesta
            </button>
          ) : (
            <button type="button" className="quiz-btn accent" onClick={() => goTo(currentNumber + 1)} disabled={currentNumber >= total}>
              Siguiente
            </button>
          )}
        </div>

        {isRevealed && (
          <div className={correct ? 'quiz-explanation correct' : 'quiz-explanation incorrect'}>
            <div className="quiz-explanation-head">
              <p className="quiz-explanation-verdict">{correct ? '✓ Correcto' : '✗ Incorrecto'}</p>
              {question.domain != null && domainByNumber[question.domain] && (
                <Link to={`/dominio/${question.domain}`} className={`quiz-domain-badge d${question.domain}`}>
                  D{question.domain} · {domainByNumber[question.domain].name}
                </Link>
              )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: withBasePath(question.explanationHtml) }} />
          </div>
        )}

        {allRevealed && (
          <div className="quiz-summary">
            <p>
              Terminaste el quiz: <strong>{score.correct}/{total}</strong> correctas ({Math.round((score.correct / total) * 100)}%).
            </p>
            <div className="quiz-actions">
              <button type="button" className="quiz-btn" onClick={restart}>
                Reiniciar
              </button>
            </div>
          </div>
        )}
      </div>
      </section>
      <ConfirmDialog
        open={showResetConfirm}
        message="¿Reiniciar el quiz? Se borran tus respuestas."
        confirmLabel="Reiniciar"
        onConfirm={confirmRestart}
        onCancel={() => setShowResetConfirm(false)}
      />
    </>
  );
}
