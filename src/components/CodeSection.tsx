import { Section } from './Section';
import { ProjectRow } from './ProjectRow';
import { LinkRow } from './TextLink';
import { projects, site } from '../content';
import styles from './CodeSection.module.css';

export function CodeSection() {
  return (
    <Section id="code" index="03" label="Code" title="Code">
      <div className="prose">
        <p>What I have been building. Everything here is public — read it, fork it, tell me where it is wrong.</p>
      </div>

      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectRow key={project.name} {...project} />
        ))}
      </div>

      <LinkRow links={[{ label: 'All repositories', href: site.github, external: true }]} />
    </Section>
  );
}
