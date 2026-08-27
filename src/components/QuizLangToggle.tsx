import type { QuizLang } from '../quiz/useQuizLang.ts';

export default function QuizLangToggle({ lang, onChange }: { lang: QuizLang; onChange: (lang: QuizLang) => void }) {
  return (
    <div className="quiz-lang-toggle">
      <button type="button" className={lang === 'es' ? 'active' : ''} onClick={() => onChange('es')}>ES</button>
      <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => onChange('en')}>EN</button>
    </div>
  );
}
