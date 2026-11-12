import { useLayoutEffect, useRef } from 'react'

/**
 * Sets one line of text so it spans its container exactly, at every width.
 * The CSS font-size is the fallback before measurement (and without script).
 */
export default function FitText({ as: Tag = 'span', className = '', children, ...rest }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    const parent = el?.parentElement
    if (!el || !parent) return

    const fit = () => {
      el.style.fontSize = '100px'
      const natural = el.scrollWidth
      const available = parent.clientWidth
      if (natural > 0) el.style.fontSize = `${(100 * available) / natural}px`
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(parent)
    document.fonts?.ready.then(fit)
    return () => ro.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
