import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getStoredTheme(): Theme | null {
  const t = localStorage.getItem('theme');
  return t === 'light' || t === 'dark' ? t : null;
}

function getEffectiveTheme(): Theme {
  return getStoredTheme() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getEffectiveTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
    >
      {theme === 'dark' ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      )}
    </button>
  );
}
