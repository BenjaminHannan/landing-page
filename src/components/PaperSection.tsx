import ArrowLink from './ArrowLink'
import Section from './Section'
import Stats from './Stats'
import { paper } from '../data/site'
import './PaperSection.css'

export default function PaperSection() {
  return (
    <Section
      id="paper"
      index="01"
      eyebrow="The paper"
      title={
        <>
          Most of the signal was
          <br />
          in the labels.
        </>
      }
      intro={paper.summary}
    >
      <div className="paper">
        <article className="paper__card">
          <p className="paper__venue">{paper.venue}</p>
          <h3 className="paper__title">{paper.title}</h3>
          <p className="paper__subtitle">{paper.subtitle}</p>
          <p className="paper__author">{paper.author}</p>
          <div className="paper__links">
            {paper.links.map((link) => (
              <ArrowLink key={link.href} href={link.href} external={link.external}>
                {link.label}
              </ArrowLink>
            ))}
          </div>
        </article>

        <div className="paper__stats">
          <Stats items={paper.stats} />
        </div>

        <div className="paper__pipeline">
          <h3 className="paper__h3">The labelling pipeline</h3>
          <ol>
            {paper.pipeline.map((stage) => (
              <li key={stage.step}>
                <span className="paper__step">{stage.step}</span>
                <span className="paper__stage">{stage.name}</span>
                <span className="paper__detail">{stage.detail}</span>
              </li>
            ))}
          </ol>
          <p className="paper__sources">
            Sources are fused with agreement-dependent sample weights, in the spirit of
            weak-supervision labelling functions.
          </p>
        </div>

        <aside className="paper__caveat">
          <h3 className="paper__h3">What the result does not say</h3>
          <p>{paper.caveat}</p>
        </aside>
      </div>
    </Section>
  )
}
