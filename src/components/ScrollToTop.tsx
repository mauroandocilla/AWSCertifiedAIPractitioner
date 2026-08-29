import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation (unlike a real
// multi-page site) — without this, opening a new page keeps whatever scroll
// offset the previous page was left at.
export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Navigation state means DomainSearch sent us here to scroll to and
    // flash one specific element (see DomainDetail.tsx/GlossaryEntryContent.tsx)
    // -- resetting to the top here would race that targeted scroll and,
    // depending on effect order, can win and undo it.
    if (state) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
