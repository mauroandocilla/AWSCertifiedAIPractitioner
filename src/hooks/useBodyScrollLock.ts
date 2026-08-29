import { useEffect } from 'react';

// Locks background page scroll while a modal is open, without touching the
// modal's own internal scroll areas (those keep working normally -- this
// only touches <body>, nothing inside the modal).
//
// overflow:hidden on <body> alone doesn't stop touch-scrolling on iOS
// Safari -- it still lets the page scroll/bounce underneath. The fix there
// is to pin <body> in place with position:fixed at its current scroll
// offset (so there's nothing left for a touch-scroll to move) and restore
// the real scroll position when the lock releases.
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}
