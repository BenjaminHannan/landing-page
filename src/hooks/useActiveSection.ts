import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently under the reader's eye. The band sits in
 * the upper third of the viewport so a heading counts as "active" as it lands,
 * not once it has scrolled past.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const observed = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (observed.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-12% 0px -62% 0px', threshold: 0 },
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
