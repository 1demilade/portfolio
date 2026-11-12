import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On a new page, start at the top; when the URL carries a hash such as /#contact,
 * scroll to that section once it has rendered, and move focus there for keyboard users.
 * Arriving from another page jumps straight there; a jump within the same page glides.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previous = useRef(null)

  useEffect(() => {
    const samePage = previous.current === pathname
    previous.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (!target) return
      target.scrollIntoView({ block: 'start', behavior: samePage ? 'smooth' : 'instant' })
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
