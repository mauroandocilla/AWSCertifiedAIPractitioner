import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation (unlike a real
// multi-page site) — without this, opening a new page keeps whatever scroll
// offset the previous page was left at.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
