import { loadQuizV2Questions } from './loadQuestions.ts';
import { resolveQuizV2Question } from './resolveLang.ts';
import type { QuizLang } from '../quiz/useQuizLang.ts';
import type { ExamQuestion } from '../quiz/examTypes.ts';

export async function loadQuizV2ExamPool(lang: QuizLang): Promise<ExamQuestion[]> {
  const raw = await loadQuizV2Questions();
  return raw.map((q) => resolveQuizV2Question(q, lang)).map((q): ExamQuestion => {
    if (q.type === 'matching') {
      return {
        id: q.id,
        domain: q.domain,
        text: q.text,
        explanationHtml: q.explanationHtml,
        kind: 'matching',
        optionPool: q.optionPool,
        prompts: q.prompts,
      };
    }
    return {
      id: q.id,
      domain: q.domain,
      text: q.text,
      explanationHtml: q.explanationHtml,
      kind: 'choice',
      options: q.options,
      multiSelect: q.type === 'multiple',
    };
  });
}
