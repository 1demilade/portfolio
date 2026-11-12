import { Link } from 'react-router-dom'
import { EMAIL, LOCATION, ROLE, SOCIAL } from '../config.js'
import FitText from './FitText.jsx'
import './SiteFooter.css'

/** The close: a full blue field whose headline is the way to get in touch. */
export default function SiteFooter() {
  const year = new Date().getFullYear()
  const [user, domain] = EMAIL ? EMAIL.split('@') : []

  return (
    <footer className="foot field-blue">
      <div className="foot__top frame">
        <p className="foot__note">
          <strong>David Adeyemi</strong>
          <br />
          {ROLE}, {LOCATION}.
        </p>
        <p className="foot__note">Open to freelance web projects and junior roles.</p>
        <a href="#top" className="foot__top-link text-link">
          Back to top
        </a>
      </div>

      <div className="foot__display frame">
        {EMAIL ? (
          <a href={`mailto:${EMAIL}`} className="foot__mail" aria-label={`Email ${EMAIL}`}>
            <FitText className="foot__line">{user}</FitText>
            <FitText className="foot__line">@{domain}</FitText>
          </a>
        ) : (
          <Link to="/#contact" className="foot__mail">
            <FitText className="foot__line">Say hello</FitText>
          </Link>
        )}
      </div>

      <div className="foot__meta frame">
        <ul className="foot__social">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p>Designed and built by David, with React and Vite.</p>
        <p>
          {LOCATION}, {year}
        </p>
      </div>
    </footer>
  )
}
