import type { Stat } from '../data/site'
import './Stats.css'

const DELTA_GLYPH = { up: '↑', down: '↓', flat: '→' } as const

export default function Stats({ items }: { items: readonly Stat[] }) {
  return (
    <dl className="stats">
      {items.map((stat) => (
        <div className="stat" key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>
            <span className="stat__value">{stat.value}</span>
            {stat.delta ? (
              <span className="stat__delta" data-direction={stat.delta.direction}>
                <span aria-hidden="true">{DELTA_GLYPH[stat.delta.direction]}</span>
                {stat.delta.text}
              </span>
            ) : null}
          </dd>
          <p className="stat__note">{stat.note}</p>
        </div>
      ))}
    </dl>
  )
}
