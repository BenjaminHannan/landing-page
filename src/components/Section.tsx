import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Section.css'

type Props = {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
}

export default function Section({ id, index, eyebrow, title, intro, children }: Props) {
  const { ref, shown } = useReveal<HTMLElement>()

  return (
    <section className="section" id={id} ref={ref}>
      <div className="shell">
        <div className="section__head reveal" data-shown={shown}>
          <p className="eyebrow">
            {index} / {eyebrow}
          </p>
          <h2 className="section__title">{title}</h2>
          {intro ? <p className="section__intro prose">{intro}</p> : null}
        </div>
        <div className="reveal section__body" data-shown={shown}>
          {children}
        </div>
      </div>
    </section>
  )
}
