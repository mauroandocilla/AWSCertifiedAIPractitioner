import { useEffect, useState } from 'react';

export type QuizLang = 'es' | 'en';

const STORAGE_KEY = 'quiz-lang';

export function useQuizLang(): [QuizLang, (lang: QuizLang) => void] {
  const [lang, setLang] = useState<QuizLang>(() => {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return [lang, setLang];
}
