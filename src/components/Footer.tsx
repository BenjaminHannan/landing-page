import { site } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__lead">
          <p className="eyebrow">Get in touch</p>
          <h2 className="footer__title">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </h2>
        </div>
        <div className="footer__meta">
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  )
}
