import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SiteHeader from '../components/SiteHeader.jsx'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="frame" style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '14vh var(--margin)' }}>
        <h1 style={{ fontSize: 'var(--step-head)', textTransform: 'uppercase' }}>Page not found</h1>
        <p style={{ marginTop: 20, maxWidth: '44ch', fontSize: 'var(--step-lead)' }}>
          That address doesn’t match anything on this site. The projects are all on the home page.
        </p>
        <p style={{ marginTop: 32 }}>
          <Link to="/" className="button">
            Go to the home page <Icon name="arrow" />
          </Link>
        </p>
      </main>
    </>
  )
}
