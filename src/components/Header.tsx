import { useEffect, useState } from 'react'
import PaletteLines from './PaletteLines'
import { nav, site } from '../data/site'
import './Header.css'

export default function Header() {
  const [lifted, setLifted] = useState(false)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header" data-lifted={lifted}>
      <div className="shell header__inner">
        <div className="header__brand">
          <a className="wordmark" href="#top">
            ben<span>hannan</span>
          </a>
          <PaletteLines />
        </div>

        <nav className="header__nav" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header__contact"
          href={`mailto:${site.email}`}
        >
          Email
        </a>
      </div>
    </header>
  )
}
