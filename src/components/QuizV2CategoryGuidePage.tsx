import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { loadQuizV2Questions } from '../quiz-v2/loadQuestions.ts';
import { resolveQuizV2Question } from '../quiz-v2/resolveLang.ts';
import { withBasePath } from '../quiz-v2/withBasePath.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import QuizLangToggle from './QuizLangToggle.tsx';
import { categoryGuide } from '../quiz-v2/data/categoryGuide.ts';
import type { QuizV2Question, QuizV2QuestionData } from '../quiz-v2/types.ts';

// Same truncation as RelatedQuestionsModal.tsx's summarize() -- kept as its
// own tiny copy rather than a shared export, it's four lines.
function summarize(text: string): string {
  const firstLine = text.split('\n\n')[0].trim();
  return firstLine.length > 90 ? `${firstLine.slice(0, 90)}…` : firstLine;
}

function toggleInSet(set: Set<string>, id: string): Set<string> {
  const next = new Set(set);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  return next;
}

const totalQuestions = categoryGuide.reduce((sum, cat) => sum + cat.questionIds.length, 0);

export default function QuizV2CategoryGuidePage() {
  const [lang, setLang] = useQuizLang();
  const [rawQuestions, setRawQuestions] = useState<QuizV2QuestionData[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    loadQuizV2Questions()
      .then((qs) => {
        if (!cancelled) setRawQuestions(qs);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const questionById = useMemo(() => {
    if (!rawQuestions) return null;
    const map = new Map<string, QuizV2Question>();
    for (const q of rawQuestions) map.set(q.id, resolveQuizV2Question(q, lang));
    return map;
  }, [rawQuestions, lang]);

  return (
    <section className="quiz-list">
      <div className="quiz-session-head">
        <div className="quiz-session-head-row">
          <div>
            <span className="eyebrow">QUIZ V2</span>
            <h2 style={{ marginTop: '0.4rem', fontSize: '1.4rem' }}>Guía de categorías</h2>
          </div>
          <div className="quiz-session-head-right">
            <QuizLangToggle lang={lang} onChange={setLang} />
            <Link to="/quiz-v2" className="quiz-btn">Volver al quiz</Link>
          </div>
        </div>
      </div>

      <p className="scope-note">
        Las {totalQuestions} preguntas del banco de Quiz v2 (TutorialsDojo), agrupadas por el concepto real que
        evalúan -- en vez de memorizar cada pregunta suelta, el objetivo es reconocer el patrón de la categoría en
        el enunciado. Cada categoría trae un &ldquo;truco&rdquo; con la frase típica que la delata, y las palabras
        clave de cada una están juntas al final en la <a href="#chuleta">chuleta rápida ↓</a>.
      </p>

      {loadError && <p className="scope-note">No se pudo cargar el banco de preguntas.</p>}

      <div className="category-guide-list">
        {categoryGuide.map((cat) => {
          const isOpen = openCategories.has(cat.id);
          return (
            <div key={cat.id} className="category-guide-card">
              <button
                type="button"
                className="category-guide-head"
                onClick={() => setOpenCategories((prev) => toggleInSet(prev, cat.id))}
                aria-expanded={isOpen}
              >
                <div>
                  <h3>{cat.title}</h3>
                  <span className="category-guide-count">{cat.questionIds.length} preguntas</span>
                </div>
                {isOpen ? <ChevronUp size={18} strokeWidth={2.25} /> : <ChevronDown size={18} strokeWidth={2.25} />}
              </button>

              <p className="category-guide-summary">{cat.summary}</p>

              {cat.pattern && (
                <div className="category-guide-pattern">
                  <strong>Truco:</strong> <span>{cat.pattern}</span>
                </div>
              )}

              <div className="category-guide-keywords">
                {cat.keywords.map((kw) => (
                  <span key={kw} className="category-guide-keyword">{kw}</span>
                ))}
              </div>

              {isOpen && (
                <div className="category-guide-questions">
                  {questionById === null
                    ? <p className="related-questions-loading">Cargando…</p>
                    : cat.questionIds.map((qid, i) => {
                        const q = questionById.get(qid);
                        if (!q) return null;
                        const qOpen = openQuestions.has(qid);
                        return (
                          <div key={qid} className="related-question">
                            <button
                              type="button"
                              className="related-question-head"
                              onClick={() => setOpenQuestions((prev) => toggleInSet(prev, qid))}
                              aria-expanded={qOpen}
                            >
                              <div className="related-question-meta">
                                <span className="related-question-index">{i + 1}</span>
                                {qOpen ? <ChevronUp size={16} strokeWidth={2.25} /> : <ChevronDown size={16} strokeWidth={2.25} />}
                              </div>
                              <span className="related-question-summary">{summarize(q.text)}</span>
                            </button>
                            {qOpen && (
                              <div className="related-question-body">
                                <div className="quiz-question">
                                  {q.text.split('\n\n').map((para, pi) => (
                                    <p key={pi}>{para}</p>
                                  ))}
                                </div>
                                {q.type === 'matching' ? (
                                  <div className="quiz-matching-list">
                                    {q.prompts.map((p, pi) => (
                                      <div key={pi} className="quiz-matching-block">
                                        <p className="quiz-matching-prompt">{p.text}</p>
                                        <div className="quiz-matching-chips">
                                          {q.optionPool.map((opt, oi) => (
                                            <span key={oi} className={oi === p.correctIndex ? 'quiz-matching-chip correct' : 'quiz-matching-chip'}>
                                              {opt}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="quiz-options">
                                    {q.options.map((opt, oi) => (
                                      <div key={oi} className={opt.correct ? 'quiz-option correct' : 'quiz-option'}>
                                        <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                                        <span>{opt.text}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                <div className="quiz-explanation correct">
                                  <div dangerouslySetInnerHTML={{ __html: withBasePath(q.explanationHtml) }} />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h3 id="chuleta" className="category-cheatsheet-title">Chuleta rápida</h3>
      <div className="category-cheatsheet-wrap">
        <table className="category-cheatsheet">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Palabras clave</th>
            </tr>
          </thead>
          <tbody>
            {categoryGuide.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.title}</td>
                <td>{cat.keywords.join(' · ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
