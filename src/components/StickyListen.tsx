import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

interface StickyListenContextValue {
  /** Id of the glossary entry whose container currently spans the header
   *  line -- i.e. we're inside its content, so its own inline "Escuchar"
   *  button (which sits at the top of that same container) has scrolled
   *  out of view. null when no entry is in that state (nothing to show). */
  activeId: string | null;
  /** Whether the sticky button should actually be visible right now --
   *  gated by scroll direction on top of activeId, so it doesn't just sit
   *  there for the whole time you're reading forward. */
  show: boolean;
  register: (id: string, el: HTMLElement) => () => void;
}

const StickyListenContext = createContext<StickyListenContextValue | null>(null);

// Mounted in Layout.tsx, wrapping QuickJumpBar + Outlet, so it can see both
// the fixed header (to measure where its bottom edge really is -- padding
// differs at the 720px breakpoint, so a hardcoded height would drift) and
// every GlossaryEntryContent instance below it (DomainDetail mounts one at a
// time, /glosario mounts ~70 at once). QuickJumpBar reads activeId/show to
// render a compact "Escuchar" pill; the actual playback state/actions still
// come straight from useGlossaryAudio(), this context only tracks *which*
// entry (if any) deserves the header slot right now.
export function StickyListenProvider({ children }: { children: ReactNode }) {
  const containers = useRef(new Map<string, HTMLElement>());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const recompute = useCallback(() => {
    ticking.current = false;
    const header = document.querySelector('.quickjump');
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;

    let found: string | null = null;
    for (const [id, el] of containers.current) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= headerBottom && rect.bottom >= headerBottom) {
        found = id;
        break;
      }
    }
    setActiveId(found);

    const y = window.scrollY;
    const goingUp = y < lastScrollY.current - 2;
    const goingDown = y > lastScrollY.current + 2;
    lastScrollY.current = y;
    if (found === null) setShow(false);
    else if (goingUp) setShow(true);
    else if (goingDown) setShow(false);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(recompute);
      }
    }
    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [recompute]);

  const register = useCallback(
    (id: string, el: HTMLElement) => {
      containers.current.set(id, el);
      recompute();
      return () => {
        containers.current.delete(id);
        recompute();
      };
    },
    [recompute]
  );

  return <StickyListenContext.Provider value={{ activeId, show, register }}>{children}</StickyListenContext.Provider>;
}

export function useStickyListen(): Pick<StickyListenContextValue, 'activeId' | 'show'> {
  const ctx = useContext(StickyListenContext);
  return { activeId: ctx?.activeId ?? null, show: ctx?.show ?? false };
}

/** Registers a glossary entry's outer container so the provider's scrollspy
 *  can consider it. Call from GlossaryEntryContent with its `.gloss-group`
 *  ref -- that container's top edge is the same as its inline "Escuchar"
 *  button's, so "container spans the header line" doubles as "button is out
 *  of view" without a second observer.
 *
 *  Depends on `register` itself (a stable function reference), not the whole
 *  context object -- that object is a fresh `{ activeId, show, register }`
 *  literal every time either piece of state changes, and on /glosario ~70 of
 *  these hooks are mounted at once. Depending on the object would re-run
 *  every one of their effects (unregister, then re-register) on every single
 *  activeId/show change: the unregister phase briefly empties the shared
 *  containers map entry-by-entry, and if that transient gap happens to fall
 *  on the currently-active entry, recompute() reads "no container spans the
 *  header line" and calls setShow(false) -- silently clobbering a show:true
 *  that scroll direction had just set, with nothing downstream setting it
 *  back (only a real scroll-up does that). Keying off `register` avoids the
 *  churn entirely: it doesn't change across renders, so each entry
 *  registers once on mount and unregisters once on unmount. */
export function useStickyListenRegister(id: string, el: HTMLElement | null) {
  const ctx = useContext(StickyListenContext);
  const register = ctx?.register;
  useEffect(() => {
    if (!register || !el) return;
    return register(id, el);
  }, [register, id, el]);
}
