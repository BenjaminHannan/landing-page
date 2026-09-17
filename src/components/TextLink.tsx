import type { Link } from '../content';
import styles from './TextLink.module.css';

export function TextLink({ label, href, external }: Link) {
  return (
    <a
      className={`${styles.link} ${styles.underlined} mono`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : null)}
    >
      {label}
      <span className={styles.mark} aria-hidden="true">
        {external ? '↗' : '→'}
      </span>
    </a>
  );
}

export function LinkRow({ links }: { links: Link[] }) {
  return (
    <div className={styles.row}>
      {links.map((link) => (
        <TextLink key={link.label} {...link} />
      ))}
    </div>
  );
}
