import type { QuizSet } from './types.ts';
import type { QuizLang } from './useQuizLang.ts';

// Each set is its own JSON chunk so navigating /quiz only fetches the one
// set being played (in the language being played), not every set in both languages.
const modulesByLang: Record<QuizLang, Record<string, () => Promise<{ default: QuizSet }>>> = {
  es: import.meta.glob<{ default: QuizSet }>('./data-es/set-*.json'),
  en: import.meta.glob<{ default: QuizSet }>('./data/set-*.json'),
};

export function loadQuizSet(setNumber: number, lang: QuizLang): Promise<QuizSet> {
  const modules = modulesByLang[lang];
  const key = lang === 'es' ? `./data-es/set-${setNumber}.json` : `./data/set-${setNumber}.json`;
  const loader = modules[key];
  if (!loader) return Promise.reject(new Error(`Quiz set ${setNumber} (${lang}) no existe`));
  return loader().then((m) => m.default);
}
