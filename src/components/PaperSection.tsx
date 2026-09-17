import { Section } from './Section';
import { LinkRow } from './TextLink';
import { paper } from '../content';
import styles from './PaperSection.module.css';

export function PaperSection() {
  return (
    <Section id="paper" index="01" label="The paper" title="The paper">
      <div className={`${styles.meta} mono`}>
        <span>{paper.status}</span>
        <span className={styles.dot} aria-hidden="true" />
        <span>{paper.year}</span>
      </div>

      <h3 className={styles.title}>{paper.title}</h3>

      <div className="prose">
        {paper.abstract.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <LinkRow links={paper.links} />
    </Section>
  );
}
