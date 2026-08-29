import { loadAllQuestions } from './loadAllQuestions.ts';
import type { QuizLang } from './useQuizLang.ts';
import type { ExamQuestion } from './examTypes.ts';

// The original quiz is choice-only (no matching-type questions), so every
// question maps straight to an ExamChoiceQuestion.
export async function loadOriginalExamPool(lang: QuizLang): Promise<ExamQuestion[]> {
  const questions = await loadAllQuestions(lang);
  return questions.map((q) => ({
    id: q.id,
    domain: q.domain,
    text: q.text,
    explanationHtml: q.explanationHtml,
    kind: 'choice',
    options: q.options,
    multiSelect: q.multiSelect,
  }));
}
