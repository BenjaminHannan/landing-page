import { useEffect, useRef, type CSSProperties } from 'react';
import { nav, site } from '../content';
import styles from './NavOverlay.module.css';

type Props = {
  id: string;
  open: boolean;
  onClose: () => void;
  activeId: string;
};

export function NavOverlay({ id, open, onClose, activeId }: Props) {
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    // Wait for the fade before moving focus, so the jump is not visible.
    const timer = window.setTimeout(() => firstLink.current?.focus(), 120);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  return (
    <nav
      id={id}
      className={styles.overlay}
      data-open={open}
      aria-label="Sections"
      aria-hidden={!open}
    >
      <ul className={styles.list}>
        {nav.map((item, index) => (
          <li
            key={item.id}
            className={styles.item}
            data-active={item.id === activeId}
            style={{ '--i': index } as CSSProperties}
          >
            <a
              ref={index === 0 ? firstLink : undefined}
              className={styles.link}
              href={`#${item.id}`}
              onClick={onClose}
              aria-current={item.id === activeId ? 'true' : undefined}
            >
              <span className={`${styles.index} mono`}>
                {String(index).padStart(2, '0')}
              </span>
              <span className={styles.label}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={`${styles.foot} mono`}>
        {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : null}
        <a href={site.github} target="_blank" rel="noreferrer noopener">
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
