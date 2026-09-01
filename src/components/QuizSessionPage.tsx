import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Check, X, RefreshCcw } from 'lucide-react';
import QuizLangToggle from './QuizLangToggle.tsx';
import ConfirmDialog from './ConfirmDialog.tsx';
import ProgressRing from './ProgressRing.tsx';
import { loadQuizSet } from '../quiz/loadSet.ts';
import { quizSetsMeta } from '../quiz/meta.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import { useIsMobile } from '../hooks/useIsMobile.ts';
import { isCorrectAnswer } from '../quiz/isCorrectAnswer.ts';
import { getSetAnsweredCount } from '../quiz/getSetProgress.ts';
import { domainByNumber } from '../domainData.ts';
import type { QuizSet } from '../quiz/types.ts';

interface StoredProgress {
  answers: Record<string, number[]>;
  revealed: Record<string, boolean>;
}

function progressKey(setNumber: number) {
  return `quiz-progress-${setNumber}`;
}

function loadProgress(setNumber: number): StoredProgress {
  try {
    const raw = localStorage.getItem(progressKey(setNumber));
    if (!raw) return { answers: {}, revealed: {} };
    const parsed = JSON.parse(raw);
    return { answers: parsed.answers ?? {}, revealed: parsed.revealed ?? {} };
  } catch {
    return { answers: {}, revealed: {} };
  }
}

function QuizSidebar({
  activeSet,
  activeSetAnswered,
  onSelect,
}: {
  activeSet: number;
  activeSetAnswered: number;
  onSelect: () => void;
}) {
  return (
    <aside className="quiz-sidebar">
      <h3 className="ds-subtitle">Sets de práctica</h3>
      <ul className="ds-bullets">
        {quizSetsMeta.map((s) => {
          // The active set's count comes straight from in-memory state (updates
          // instantly). Every other set falls back to localStorage -- reading it
          // for the active set instead would lag by one answer: the write effect
          // that persists `revealed` only runs after this render already committed.
          const answered = s.setNumber === activeSet ? activeSetAnswered : getSetAnsweredCount(s.setNumber);
          return (
            <li key={s.setNumber}>
              <Link
                to={`/quiz/${s.setNumber}`}
                className={s.setNumber === activeSet ? 'quiz-sidebar-item active' : 'quiz-sidebar-item'}
                onClick={onSelect}
              >
                <span className="quiz-sidebar-item-row">
                  <span>Set {s.setNumber}</span>
                  <span className="quiz-sidebar-meta">
                    {answered > 0 && <ProgressRing percent={(answered / s.questionCount) * 100} />}
                    <span className="quiz-sidebar-count">{s.questionCount}</span>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default function QuizSessionPage() {
  const { setNumber: setNumberParam } = useParams<{ setNumber: string }>();
  const setNumber = Number(setNumberParam);
  const [searchParams, setSearchParams] = useSearchParams();
  const [lang, setLang] = useQuizLang();
  const isMobile = useIsMobile();

  // Mobile only: which pane is showing. Defaults to the question (you already picked
  // this set from the grid/sidebar to get here) — the back arrow reveals the set list.
  // Only one pane is ever mounted on mobile (see renderBody below), so there's nothing
  // for it to fight over height/scroll with.
  const [mobileDetailActive, setMobileDetailActive] = useState(true);
  const [animDirection, setAnimDirection] = useState<'forward' | 'back'>('forward');
  const [animKey, setAnimKey] = useState(0);
  const hasInteracted = useRef(false);
  const wasDetailActive = useRef(true);
  const listScrollY = useRef(0);

  // React Router reuses this same component instance across /quiz/:setNumber changes
  // (it doesn't remount), so mobileDetailActive persists across a set switch — without
  // this it could stay stuck showing the list. Mirrors DomainDetail's version.
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

  function backToSets() {
    hasInteracted.current = true;
    setAnimDirection('back');
    setAnimKey((k) => k + 1);
    setMobileDetailActive(false);
  }

  function selectSet() {
    if (isMobile && !mobileDetailActive) listScrollY.current = window.scrollY;
    hasInteracted.current = true;
    setAnimDirection('forward');
    setAnimKey((k) => k + 1);
    setMobileDetailActive(true);
  }

  const [quizSet, setQuizSet] = useState<QuizSet | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  // Resetting this *during* render (React's documented pattern for "clear state
  // when a prop changes") instead of in an effect means the previous set's
  // answers/revealed are never even painted for the new setNumber -- an effect
  // runs a frame too late and lets that stale state flash once first.
  const [renderedSetNumber, setRenderedSetNumber] = useState(setNumber);
  if (setNumber !== renderedSetNumber) {
    setRenderedSetNumber(setNumber);
    setAnswers({});
    setRevealed({});
  }

  // Guards the write effect below from firing with stale/default state before
  // the stored progress for this exact set has actually been applied -- without
  // it, a render in between "quizSet loaded" and "answers/revealed caught up"
  // (React StrictMode's double-invoke in dev reliably produces one) writes an
  // empty {} over real saved progress and wipes it.
  const progressLoadedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    progressLoadedRef.current = false;
    setQuizSet(null);
    setLoadError(false);
    loadQuizSet(setNumber, lang)
      .then((set) => {
        if (cancelled) return;
        const stored = loadProgress(setNumber);
        setQuizSet(set);
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
  }, [setNumber, lang]);

  useEffect(() => {
    if (!quizSet || !progressLoadedRef.current) return;
    localStorage.setItem(progressKey(setNumber), JSON.stringify({ answers, revealed }));
  }, [quizSet, setNumber, answers, revealed]);

  const total = quizSet?.questionCount ?? 0;
  const currentNumber = Math.min(Math.max(Number(searchParams.get('q')) || 1, 1), Math.max(total, 1));
  const question = quizSet?.questions[currentNumber - 1];

  const score = useMemo(() => {
    if (!quizSet) return { correct: 0, answered: 0 };
    let correct = 0;
    let answered = 0;
    for (const q of quizSet.questions) {
      if (!revealed[q.id]) continue;
      answered++;
      if (isCorrectAnswer(answers[q.id] ?? [], q.options)) correct++;
    }
    return { correct, answered };
  }, [quizSet, answers, revealed]);

  function goTo(n: number) {
    const clamped = Math.min(Math.max(n, 1), total);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('q', String(clamped));
      return next;
    });
  }

  function toggleOption(optionIdx: number) {
    if (!question || revealed[question.id]) return;
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

  function verify() {
    if (!question) return;
    setRevealed((prev) => ({ ...prev, [question.id]: true }));
  }

  function restart() {
    setShowResetConfirm(true);
  }

  function confirmRestart() {
    localStorage.removeItem(progressKey(setNumber));
    setAnswers({});
    setRevealed({});
    goTo(1);
    setShowResetConfirm(false);
  }

  function renderBody(panel: ReactNode) {
    // Right after clicking into a set, in-memory `revealed` briefly starts empty
    // (before the stored progress for that set finishes loading) -- taking the max
    // against localStorage's last-saved count avoids a flash-to-0 jump in the bar.
    const activeSetAnswered = Math.max(Object.keys(revealed).length, getSetAnsweredCount(setNumber));
    const sidebar = <QuizSidebar activeSet={setNumber} activeSetAnswered={activeSetAnswered} onSelect={selectSet} />;
    if (isMobile) {
      return (
        <div className="quiz-split-body mobile">
          <div key={animKey} className={hasInteracted.current ? `mobile-pane enter-${animDirection}` : 'mobile-pane'}>
            {mobileDetailActive ? panel : sidebar}
          </div>
        </div>
      );
    }
    return (
      <div className="quiz-split-body">
        {sidebar}
        {panel}
      </div>
    );
  }

  if (loadError) {
    return (
      <section className="quiz-split">
        {renderBody(
          <div className="quiz-split-panel">
            <div className="mobile-panel-header">
              <button type="button" className="mobile-back-btn" onClick={backToSets}>
                <ChevronLeft size={16} strokeWidth={2.25} /> Ver sets
              </button>
              <span className="mobile-panel-crumb">SET {setNumber}</span>
            </div>
            <QuizLangToggle lang={lang} onChange={setLang} />
            <p>Set de práctica no encontrado.</p>
          </div>,
        )}
      </section>
    );
  }

  if (!quizSet || !question) {
    return (
      <section className="quiz-split">
        {renderBody(
          <div className="quiz-split-panel">
            <div className="mobile-panel-header">
              <button type="button" className="mobile-back-btn" onClick={backToSets}>
                <ChevronLeft size={16} strokeWidth={2.25} /> Ver sets
              </button>
              <span className="mobile-panel-crumb">SET {setNumber}</span>
            </div>
            <QuizLangToggle lang={lang} onChange={setLang} />
            <p>Cargando…</p>
          </div>,
        )}
      </section>
    );
  }

  const selected = new Set(answers[question.id] ?? []);
  const isRevealed = !!revealed[question.id];
  const correct = isRevealed && isCorrectAnswer(answers[question.id] ?? [], question.options);
  const allRevealed = quizSet.questions.every((q) => revealed[q.id]);

  return (
    <>
      <section className="quiz-split">
      {renderBody(
        <div className="quiz-split-panel">
          <div className="mobile-panel-header">
            <button type="button" className="mobile-back-btn" onClick={backToSets}>
              <ChevronLeft size={16} strokeWidth={2.25} /> Ver sets
              </button>
              <span className="mobile-panel-crumb">SET {quizSet.setNumber} · P{currentNumber}</span>
            </div>

            <div className="quiz-session-head">
              <div className="quiz-session-head-row">
                <div>
                  <span className="eyebrow">SET {quizSet.setNumber}</span>
                  <h2 style={{ marginTop: '0.4rem', fontSize: '1.3rem' }}>Pregunta {currentNumber} de {total}</h2>
                </div>
                <div className="quiz-session-head-right">
                  <QuizLangToggle lang={lang} onChange={setLang} />
                  <div className="quiz-score-badge">{score.correct}/{score.answered} correctas</div>
                  <button type="button" className="quiz-reset-btn" title="Reiniciar set" onClick={restart}>
                    <RefreshCcw size={14} strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{ width: `${(score.answered / total) * 100}%` }} />
              </div>
            </div>

            <div className="quiz-nav-grid">
              {quizSet.questions.map((q, i) => {
                const isCurrent = i + 1 === currentNumber;
                const qRevealed = revealed[q.id];
                const qCorrect = qRevealed && isCorrectAnswer(answers[q.id] ?? [], q.options);
                let cls = 'quiz-nav-btn';
                if (isCurrent) cls += ' current';
                else if (qRevealed) cls += qCorrect ? ' correct' : ' incorrect';
                return (
                  <button key={q.id} type="button" className={cls} onClick={() => goTo(i + 1)}>
                    <span className="quiz-nav-number">{i + 1}</span>
                    {qRevealed && (
                      <span className={qCorrect ? 'quiz-nav-badge correct' : 'quiz-nav-badge incorrect'}>
                        {qCorrect ? <Check size={22} strokeWidth={2.5} /> : <X size={22} strokeWidth={2.5} />}
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

            <p className="quiz-hint">{question.multiSelect ? 'Selecciona todas las que apliquen.' : 'Selecciona una opción.'}</p>

            <div className="quiz-options">
              {question.options.map((opt, i) => {
                const isSelected = selected.has(i);
                let cls = 'quiz-option';
                if (isRevealed) {
                  if (opt.correct) cls += ' correct';
                  else if (isSelected) cls += ' incorrect';
                } else if (isSelected) {
                  cls += ' selected';
                }
                return (
                  <button
                    key={i}
                    type="button"
                    className={cls}
                    disabled={isRevealed}
                    onClick={() => toggleOption(i)}
                  >
                    <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="quiz-actions">
              <button type="button" className="quiz-btn" onClick={() => goTo(currentNumber - 1)} disabled={currentNumber <= 1}>
                Anterior
              </button>
              {!isRevealed ? (
                <button type="button" className="quiz-btn accent" onClick={verify} disabled={selected.size === 0}>
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
                <div dangerouslySetInnerHTML={{ __html: question.explanationHtml }} />
              </div>
            )}

            {allRevealed && (
              <div className="quiz-summary">
                <p>
                  Terminaste el set: <strong>{score.correct}/{total}</strong> correctas ({Math.round((score.correct / total) * 100)}%).
                </p>
                <div className="quiz-actions">
                  <button type="button" className="quiz-btn" onClick={restart}>Reiniciar set</button>
                  <Link to="/quiz" className="quiz-btn accent">Volver al listado</Link>
                </div>
              </div>
            )}
          </div>,
        )}
      </section>
      <ConfirmDialog
        open={showResetConfirm}
        message="¿Reiniciar este set? Se borran tus respuestas."
        confirmLabel="Reiniciar set"
        onConfirm={confirmRestart}
        onCancel={() => setShowResetConfirm(false)}
      />
    </>
  );
}
