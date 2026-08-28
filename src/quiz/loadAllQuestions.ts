import { loadQuizSet } from './loadSet.ts';
import { quizSetsMeta } from './meta.ts';
import type { QuizLang } from './useQuizLang.ts';
import type { QuizQuestion } from './types.ts';

export async function loadAllQuestions(lang: QuizLang): Promise<QuizQuestion[]> {
  const sets = await Promise.all(quizSetsMeta.map((s) => loadQuizSet(s.setNumber, lang)));
  return sets.flatMap((s) => s.questions);
}
