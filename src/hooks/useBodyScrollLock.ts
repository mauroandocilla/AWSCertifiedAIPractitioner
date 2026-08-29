import { useEffect } from 'react';

// Locks background page scroll while a modal is open, without touching the
// modal's own internal scroll areas (those keep working normally -- this
// only sets overflow on <body>, nothing inside the modal).
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);
}
