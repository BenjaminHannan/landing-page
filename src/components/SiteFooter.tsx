import { footer, site } from '../content';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} mono`}>
      <span>
        © {new Date().getFullYear()} {site.name} — {footer.note}
      </span>
      <span className={styles.links}>
        {site.email ? <a href={`mailto:${site.email}`}>Email</a> : null}
        <a href={site.github} target="_blank" rel="noreferrer noopener">
          GitHub ↗
        </a>
        <a href="#top">Back to top ↑</a>
      </span>
    </footer>
  );
}
