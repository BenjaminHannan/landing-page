import './Progression.css'

type Point = { label: string; value: number; spread: string; n: string }

type Props = {
  caption: string
  from: Point
  to: Point
}

/* The domain is fixed rather than fitted to the two points, so the gap between
   them reads at its true size instead of filling the track. */
const DOMAIN: [number, number] = [0.6, 0.8]

const position = (value: number) =>
  ((value - DOMAIN[0]) / (DOMAIN[1] - DOMAIN[0])) * 100

export default function Progression({ caption, from, to }: Props) {
  const start = position(from.value)
  const end = position(to.value)

  return (
    <figure className="progression">
      <div
        className="progression__plot"
        role="img"
        aria-label={`${caption}. ${from.label}: ${from.value}, ${from.n}. ${to.label}: ${to.value}, ${to.n}.`}
      >
        <span className="progression__track" />
        <span
          className="progression__join"
          style={{ left: `${start}%`, width: `${end - start}%` }}
        />
        <span className="progression__dot" data-step="soft" style={{ left: `${start}%` }} />
        <span className="progression__dot" data-step="strong" style={{ left: `${end}%` }} />
      </div>

      <div className="progression__scale" aria-hidden="true">
        <span>{DOMAIN[0].toFixed(2)}</span>
        <span>{DOMAIN[1].toFixed(2)}</span>
      </div>

      <dl className="progression__readout">
        {[from, to].map((point, i) => (
          <div key={point.label} className="progression__item" data-step={i === 0 ? 'soft' : 'strong'}>
            <dt>{point.label}</dt>
            <dd>
              <span className="progression__value">{point.value.toFixed(3)}</span>
              <span className="progression__meta">
                {point.spread} · {point.n}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <figcaption>{caption}</figcaption>
    </figure>
  )
}
