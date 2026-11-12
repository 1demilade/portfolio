import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Marks every [data-reveal] element with .is-in once it scrolls into view.
 * Content is visible without script (the hiding rules only apply under html.js),
 * and anything already on screen is revealed on the next frame.
 */
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const els = [...document.querySelectorAll('[data-reveal]:not(.is-in)')]
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
