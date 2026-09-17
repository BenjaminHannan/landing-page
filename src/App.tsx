import { useCallback, useEffect, useRef, useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { NavOverlay } from './components/NavOverlay';
import { Hero } from './components/Hero';
import { PaperSection } from './components/PaperSection';
import { FinderSection } from './components/FinderSection';
import { CodeSection } from './components/CodeSection';
import { SiteFooter } from './components/SiteFooter';
import { useTheme } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useScrolled } from './hooks/useScrolled';
import { useActiveSection } from './hooks/useActiveSection';
import { useLockBodyScroll } from './hooks/useLockBodyScroll';
import { nav } from './content';

const MENU_ID = 'site-menu';
const SECTION_IDS = nav.map((item) => item.id);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const progress = useScrollProgress();
  const scrolled = useScrolled();
  const activeId = useActiveSection(SECTION_IDS);
  const menuButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useLockBodyScroll(menuOpen);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Hand focus back to the lines when the overlay closes.
  useEffect(() => {
    if (wasOpen.current && !menuOpen) menuButton.current?.focus();
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#paper">
        Skip to content
      </a>

      <SiteHeader
        ref={menuButton}
        menuOpen={menuOpen}
        onMenuToggle={toggleMenu}
        progress={progress}
        scrolled={scrolled}
        theme={theme}
        onThemeToggle={toggleTheme}
        menuId={MENU_ID}
      />

      <NavOverlay id={MENU_ID} open={menuOpen} onClose={closeMenu} activeId={activeId} />

      <main>
        <Hero />
        <PaperSection />
        <FinderSection />
        <CodeSection />
      </main>

      <SiteFooter />
    </>
  );
}
