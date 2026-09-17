import { intro, nav, site } from '../content';
import styles from './Hero.module.css';

export function Hero() {
  const sections = nav.filter((item) => item.id !== 'top');

  return (
    <section id="top" className={styles.hero}>
      <p className={`${styles.name} mono`}>{site.name}</p>
      <h1 className={styles.lead}>{intro.lead}</h1>
      <p className={styles.body}>{intro.body}</p>

      <div className={styles.jump}>
        {sections.map((item, index) => (
          <a key={item.id} className={`${styles.jumpLink} mono`} href={`#${item.id}`}>
            <span className={styles.jumpIndex}>{String(index + 1).padStart(2, '0')}</span>
            {item.label}
            <span className={styles.arrow} aria-hidden="true">
              ↓
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
