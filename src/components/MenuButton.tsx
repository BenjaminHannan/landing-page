import { forwardRef, type CSSProperties } from 'react';
import styles from './MenuButton.module.css';

type Props = {
  open: boolean;
  onToggle: () => void;
  /** 0 → 1. Sets the length of the middle line while the menu is closed. */
  progress: number;
  controls: string;
};

export const MenuButton = forwardRef<HTMLButtonElement, Props>(function MenuButton(
  { open, onToggle, progress, controls },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={styles.button}
      data-open={open}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      <span
        className={styles.lines}
        style={{ '--progress': progress } as CSSProperties}
        aria-hidden="true"
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </span>
    </button>
  );
});
