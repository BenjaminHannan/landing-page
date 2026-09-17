import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import styles from './Section.module.css';

type Props = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
};

/** The shared frame every section sits in: a numbered rail, then the column. */
export function Section({ id, index, label, title, children }: Props) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={`${styles.section} reveal`}>
      <div className={`${styles.rail} mono`}>
        <span className={styles.number}>{index}</span>
        <span>{label}</span>
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
