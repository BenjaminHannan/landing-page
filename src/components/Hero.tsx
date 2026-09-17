import ArrowLink from './ArrowLink'
import Progression from './Progression'
import { paper, site } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__lead">
          <p className="eyebrow">Research · Tools · Code</p>
          <h1 className="hero__name">{site.name}.</h1>
          <p className="lede">{site.tagline}</p>
          <p className="hero__intro prose">{site.intro}</p>
          <div className="hero__actions">
            <ArrowLink href="#paper" variant="solid">
              Read the paper
            </ArrowLink>
            <ArrowLink href={site.github} external>
              GitHub
            </ArrowLink>
          </div>
        </div>

        <aside className="hero__aside" aria-labelledby="headline-result">
          <h2 className="hero__aside-title" id="headline-result">
            The headline result
          </h2>
          <Progression {...paper.progression} />
          <p className="hero__aside-note">{paper.finding}</p>
        </aside>
      </div>

      <div className="shell hero__rule">
        <span>Natural language processing</span>
        <span>Upper Valley, NH</span>
      </div>
    </section>
  )
}
