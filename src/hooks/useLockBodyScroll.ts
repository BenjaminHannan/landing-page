import { useEffect } from 'react';

/** Holds the page still while the nav overlay is open. */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousPadding = body.style.paddingRight;

    body.dataset.scrollLocked = 'true';
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      delete body.dataset.scrollLocked;
      body.style.paddingRight = previousPadding;
    };
  }, [locked]);
}
