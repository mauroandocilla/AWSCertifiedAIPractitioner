import { useEffect, useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock.ts';
import { useQuizLang } from '../quiz/useQuizLang.ts';
import { loadQuizSet } from '../quiz/loadSet.ts';
import type { QuizQuestion } from '../quiz/types.ts';
import type { ConceptQuestionRef } from '../quiz/conceptIndex.ts';
import { loadQuizV2Questions } from '../quiz-v2/loadQuestions.ts';
import { resolveQuizV2Question } from '../quiz-v2/resolveLang.ts';
import type { QuizV2Question } from '../quiz-v2/types.ts';

interface RelatedQuestionsModalProps {
  open: boolean;
  refs: ConceptQuestionRef[];
  conceptTitle: string;
  onClose: () => void;
}

type ResolvedItem =
  | { key: string; bank: 'v1'; setNumber: number; question: QuizQuestion }
  | { key: string; bank: 'v2'; question: QuizV2Question };

// Short label so the reader knows which question bank/set this came from --
// "Quiz"/"Quiz v2" match the app's own nav labels for these two banks.
function bankLabel(item: ResolvedItem): string {
  return item.bank === 'v1' ? `Quiz · Set ${item.setNumber}` : 'Quiz v2';
}

// Read-only review: no interactivity, always shows the correct option(s) --
// reuses QuizSessionPage.tsx/QuizV2Page.tsx's own CSS classes (.quiz-option
// correct, .quiz-matching-chip correct, .quiz-explanation) so a question
// looks identical here to how it looks already "revealed" in the real quiz.
function getOptions(item: ResolvedItem): { text: string; correct: boolean }[] | null {
  if (item.bank === 'v1') return item.question.options;
  if (item.question.type === 'matching') return null;
  return item.question.options;
}

// Truncated to one line for the accordion header -- the full text renders
// inside once expanded (RelatedQuestion below), this is just enough to tell
// questions apart in the collapsed list without opening each one.
function summarize(text: string): string {
  const firstLine = text.split('\n\n')[0].trim();
  return firstLine.length > 90 ? `${firstLine.slice(0, 90)}…` : firstLine;
}

function RelatedQuestion({ item, index, isOpen, onToggle }: { item: ResolvedItem; index: number; isOpen: boolean; onToggle: () => void }) {
  const matching = item.bank === 'v2' && item.question.type === 'matching' ? item.question : null;
  const options = getOptions(item);
  return (
    <div className="related-question">
      <button type="button" className="related-question-head" onClick={onToggle} aria-expanded={isOpen}>
        <div className="related-question-meta">
          <span className="related-question-index">{index + 1}</span>
          <span className="related-question-bank">{bankLabel(item)}</span>
          {isOpen ? <ChevronUp size={16} strokeWidth={2.25} /> : <ChevronDown size={16} strokeWidth={2.25} />}
        </div>
        <span className="related-question-summary">{summarize(item.question.text)}</span>
      </button>
      {isOpen && (
        <div className="related-question-body">
          <div className="quiz-question">
            {item.question.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {matching ? (
            <div className="quiz-matching-list">
              {matching.prompts.map((p, pi) => (
                <div key={pi} className="quiz-matching-block">
                  <p className="quiz-matching-prompt">{p.text}</p>
                  <div className="quiz-matching-chips">
                    {matching.optionPool.map((opt, oi) => (
                      <span key={oi} className={oi === p.correctIndex ? 'quiz-matching-chip correct' : 'quiz-matching-chip'}>
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            options && (
              <div className="quiz-options">
                {options.map((opt, i) => (
                  <div key={i} className={opt.correct ? 'quiz-option correct' : 'quiz-option'}>
                    <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                    <span>{opt.text}</span>
                  </div>
                ))}
              </div>
            )
          )}
          <div className="quiz-explanation correct">
            <div dangerouslySetInnerHTML={{ __html: item.question.explanationHtml }} />
          </div>
        </div>
      )}
    </div>
  );
}

// Clones ConfirmDialog.tsx's overlay/dialog pattern (there's no generic modal
// component in this app -- see that file) instead of inventing a new one.
// Loads lazily: only the specific quiz sets (v1) / the v2 question bank that
// this concept's refs actually point to, never every set up front (same
// per-set lazy-chunk reasoning as loadSet.ts itself).
export default function RelatedQuestionsModal({ open, refs, conceptTitle, onClose }: RelatedQuestionsModalProps) {
  useBodyScrollLock(open);
  const [lang] = useQuizLang();
  const [items, setItems] = useState<ResolvedItem[] | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open || refs.length === 0) {
      setItems(null);
      return;
    }
    let cancelled = false;
    setItems(null);
    setOpenIndex(null);

    async function load() {
      const setNumbers = [...new Set(refs.filter((r) => r.bank === 'v1').map((r) => r.setNumber))];
      const needsV2 = refs.some((r) => r.bank === 'v2');
      const [sets, v2Questions] = await Promise.all([
        Promise.all(setNumbers.map((n) => loadQuizSet(n, lang))),
        needsV2 ? loadQuizV2Questions() : Promise.resolve([]),
      ]);
      const setByNumber = new Map(sets.map((s) => [s.setNumber, s]));
      const resolved: ResolvedItem[] = [];
      for (const ref of refs) {
        if (ref.bank === 'v1') {
          const q = setByNumber.get(ref.setNumber)?.questions.find((candidate) => candidate.id === ref.id);
          if (q) resolved.push({ key: `v1-${q.id}`, bank: 'v1', setNumber: ref.setNumber, question: q });
        } else {
          const raw = v2Questions.find((candidate) => candidate.id === ref.id);
          if (raw) resolved.push({ key: `v2-${raw.id}`, bank: 'v2', question: resolveQuizV2Question(raw, lang) });
        }
      }
      if (!cancelled) setItems(resolved);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [open, refs, lang]);

  if (!open) return null;

  return (
    <div className="related-questions-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Preguntas relacionadas con ${conceptTitle}`}>
      <div className="related-questions-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="related-questions-head">
          <h3>Preguntas sobre &ldquo;{conceptTitle}&rdquo;</h3>
          <button type="button" className="related-questions-close" onClick={onClose} aria-label="Cerrar">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
        {items === null ? (
          <p className="related-questions-loading">Cargando…</p>
        ) : (
          items.map((item, i) => (
            <RelatedQuestion key={item.key} item={item} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))
        )}
      </div>
    </div>
  );
}
