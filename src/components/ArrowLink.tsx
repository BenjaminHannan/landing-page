import type { ReactNode } from 'react'
import './ArrowLink.css'

type Props = {
  href: string
  children: ReactNode
  external?: boolean
  variant?: 'solid' | 'quiet'
}

export default function ArrowLink({ href, children, external, variant = 'quiet' }: Props) {
  return (
    <a
      className="arrow-link"
      data-variant={variant}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {external ? (
          <>
            <path d="M8 16 16 8" />
            <path d="M9.5 8H16v6.5" />
          </>
        ) : (
          <>
            <path d="M5 12h13" />
            <path d="M12.5 6.5 19 12l-6.5 5.5" />
          </>
        )}
      </svg>
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}
