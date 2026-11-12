import { Link } from 'react-router-dom'
import './SiteHeader.css'

export const NAV = [
  { label: 'Projects', to: '/#projects' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/#contact' },
]

/** The plain bar on project pages: wordmark, four links. */
export default function SiteHeader() {
  return (
    <header className="bar frame">
      <Link to="/" className="bar__mark">
        David Adeyemi
      </Link>
      <nav aria-label="Main">
        <ul className="bar__links">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="bar__link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
