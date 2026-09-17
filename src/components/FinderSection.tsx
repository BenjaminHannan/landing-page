import { Section } from './Section';
import { LinkRow } from './TextLink';
import { finder } from '../content';
import styles from './FinderSection.module.css';

export function FinderSection() {
  return (
    <Section
      id="finder"
      index="02"
      label="Mental Health Finder"
      title="The Mental Health Finder"
    >
      <p className={styles.tagline}>{finder.tagline}</p>

      <div className="prose">
        {finder.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <ol className={styles.steps}>
        {finder.steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={`${styles.stepIndex} mono`}>{String(index + 1).padStart(2, '0')}</span>
            <span className={styles.stepTitle}>{step.title}</span>
            <span className={styles.stepDetail}>{step.detail}</span>
          </li>
        ))}
      </ol>

      <LinkRow links={finder.links} />
    </Section>
  );
}
