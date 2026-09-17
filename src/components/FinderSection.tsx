import ArrowLink from './ArrowLink'
import Section from './Section'
import { finder } from '../data/site'
import './FinderSection.css'

export default function FinderSection() {
  return (
    <Section
      id="finder"
      index="02"
      eyebrow="The Mental Health Finder"
      title={<>One search instead of twelve phone calls.</>}
      intro={finder.summary}
    >
      <div className="finder">
        <div className="finder__panel">
          <p className="finder__region">{finder.region}</p>
          <h3 className="finder__title">{finder.title}</h3>
          <p className="finder__privacy">{finder.privacy}</p>
          <div className="finder__links">
            {finder.links.map((link) => (
              <ArrowLink
                key={link.href}
                href={link.href}
                external={link.external}
                variant={link.href === '/finder/' ? 'solid' : 'quiet'}
              >
                {link.label}
              </ArrowLink>
            ))}
          </div>
          <p className="finder__crisis">
            <strong>In crisis?</strong> Call or text 988 · Headrest 24-hour line (603) 448-4400 ·
            Text HOME to 741741
          </p>
        </div>

        <ul className="finder__features">
          {finder.features.map((feature) => (
            <li key={feature.name}>
              <h4>{feature.name}</h4>
              <p>{feature.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
