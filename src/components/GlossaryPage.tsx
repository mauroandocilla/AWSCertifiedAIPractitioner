import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Glossary from './Glossary.tsx';

export default function GlossaryPage() {
  const [searchParams] = useSearchParams();
  const target = searchParams.get('t');

  useEffect(() => {
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('gloss-highlight');
      const timeout = setTimeout(() => el.classList.remove('gloss-highlight'), 2200);
      return () => clearTimeout(timeout);
    }
  }, [target]);

  return <Glossary />;
}
