import type { QuizLang } from '../quiz/useQuizLang.ts';
import type { QuizV2Question, QuizV2QuestionData } from './types.ts';

export function resolveQuizV2Question(q: QuizV2QuestionData, lang: QuizLang): QuizV2Question {
  if (q.type === 'matching') {
    return {
      id: q.id,
      type: 'matching',
      text: q.text[lang],
      explanationHtml: q.explanationHtml[lang],
      domain: q.domain,
      optionPool: q.optionPool.map((o) => o[lang]),
      prompts: q.prompts.map((p) => ({ text: p.text[lang], correctIndex: p.correctIndex })),
    };
  }
  return {
    id: q.id,
    type: q.type,
    text: q.text[lang],
    explanationHtml: q.explanationHtml[lang],
    domain: q.domain,
    options: q.options.map((o) => ({ text: o.text[lang], correct: o.correct })),
  };
}
