import type { QuizV2QuestionData } from './types.ts';

// Lazy chunk, same reasoning as ../quiz/loadSet.ts: this JSON is a few hundred
// KB, so it must not end up in the app's main bundle (every page would pay for
// it) -- only /quiz-v2 itself should ever fetch it.
const modules = import.meta.glob<{ default: QuizV2QuestionData[] }>('./data/questions.json');

export function loadQuizV2Questions(): Promise<QuizV2QuestionData[]> {
  const loader = modules['./data/questions.json'];
  if (!loader) return Promise.reject(new Error('Quiz v2: questions.json no encontrado'));
  return loader().then((m) => m.default);
}
