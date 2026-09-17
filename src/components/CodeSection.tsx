import Section from './Section'
import { code, site } from '../data/site'
import ArrowLink from './ArrowLink'
import './CodeSection.css'

export default function CodeSection() {
  return (
    <Section
      id="code"
      index="03"
      eyebrow="Code"
      title={<>Things I built to find out how they work.</>}
      intro="Research code, a couple of finished products, and the projects that taught me the rest. Everything here is public."
    >
      <ul className="repos">
        {code.map((repo) => (
          <li key={repo.name}>
            <a href={repo.href} target="_blank" rel="noreferrer">
              <span className="repo__head">
                <span className="repo__name">{repo.name}</span>
                <span className="repo__lang">{repo.language}</span>
              </span>
              <span className="repo__blurb">{repo.blurb}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="repo__arrow">
                <path d="M8 16 16 8" />
                <path d="M9.5 8H16v6.5" />
              </svg>
            </a>
          </li>
        ))}
      </ul>

      <p className="repos__more">
        <ArrowLink href={site.github} external>
          Everything else on GitHub
        </ArrowLink>
      </p>
    </Section>
  )
}
