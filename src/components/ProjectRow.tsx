import type { Project } from '../content';
import styles from './ProjectRow.module.css';

export function ProjectRow({ name, blurb, tags, href, year }: Project) {
  const external = Boolean(href && href.startsWith('http'));

  return (
    <a
      className={styles.row}
      href={href ?? '#'}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : null)}
    >
      <span className={styles.name}>
        {name}
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </span>
      {year ? <span className={`${styles.year} mono`}>{year}</span> : null}
      <span className={styles.blurb}>{blurb}</span>
      <span className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={`${styles.tag} mono`}>
            {tag}
          </span>
        ))}
      </span>
    </a>
  );
}
