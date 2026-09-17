import { forwardRef } from 'react';
import { MenuButton } from './MenuButton';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';
import { site } from '../content';
import styles from './SiteHeader.module.css';

type Props = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  progress: number;
  scrolled: boolean;
  theme: Theme;
  onThemeToggle: () => void;
  menuId: string;
};

export const SiteHeader = forwardRef<HTMLButtonElement, Props>(function SiteHeader(
  { menuOpen, onMenuToggle, progress, scrolled, theme, onThemeToggle, menuId },
  menuButtonRef,
) {
  return (
    <header className={styles.header} data-scrolled={scrolled} data-open={menuOpen}>
      <div className={styles.left}>
        <MenuButton
          ref={menuButtonRef}
          open={menuOpen}
          onToggle={onMenuToggle}
          progress={progress}
          controls={menuId}
        />
        <a className={`${styles.wordmark} mono`} href="#top">
          {site.name}
        </a>
      </div>
      <div className={styles.right}>
        <span className={`${styles.role} mono`}>{site.role}</span>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
});
