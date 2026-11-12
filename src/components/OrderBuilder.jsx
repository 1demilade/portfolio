import { useEffect, useId, useRef, useState } from 'react'
import { DEMO_PRODUCT, buildOrderMessage, formatNaira } from '../lib/order.js'
import Icon from './Icon.jsx'
import './OrderBuilder.css'

/**
 * A working copy of the Aso & Thread order panel: choose a colour, size and quantity
 * and the WhatsApp message is rebuilt with the same code the real product page uses.
 */
export default function OrderBuilder() {
  const id = useId()
  const [colour, setColour] = useState(DEMO_PRODUCT.colours[0].name)
  const [size, setSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [copied, setCopied] = useState(false)
  const [touched, setTouched] = useState(false)
  const timer = useRef(0)

  const message = buildOrderMessage({
    name: DEMO_PRODUCT.name,
    price: DEMO_PRODUCT.price,
    colour,
    size,
    quantity,
  })
  const lines = message.split('\n')

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="order" data-ui>
      <div className="order__controls">
        <div className="order__product">
          <p className="order__name">{DEMO_PRODUCT.name}</p>
          <p className="order__price">{formatNaira(DEMO_PRODUCT.price)}</p>
        </div>

        <fieldset className="order__group">
          <legend>
            Colour <span>{colour}</span>
          </legend>
          <div className="order__swatches">
            {DEMO_PRODUCT.colours.map((c) => (
              <label key={c.name} className="order__swatch" style={{ '--swatch': c.hex }}>
                <input
                  type="radio"
                  name={`${id}-colour`}
                  value={c.name}
                  checked={colour === c.name}
                  onChange={() => (setColour(c.name), setTouched(true))}
                />
                <span className="visually-hidden">{c.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="order__group">
          <legend>Size</legend>
          <div className="order__sizes">
            {DEMO_PRODUCT.sizes.map((s) => (
              <label key={s} className="order__size">
                <input
                  type="radio"
                  name={`${id}-size`}
                  value={s}
                  checked={size === s}
                  onChange={() => (setSize(s), setTouched(true))}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="order__group">
          <span className="order__label" id={`${id}-qty`}>
            Quantity
          </span>
          <div className="order__stepper" role="group" aria-labelledby={`${id}-qty`}>
            <button
              type="button"
              onClick={() => (setQuantity((q) => Math.max(1, q - 1)), setTouched(true))}
              disabled={quantity === 1}
              aria-label="One fewer"
            >
              −
            </button>
            <output aria-live="polite">{quantity}</output>
            <button
              type="button"
              onClick={() => (setQuantity((q) => Math.min(9, q + 1)), setTouched(true))}
              disabled={quantity === 9}
              aria-label="One more"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="order__message">
        <p className="order__label" id={`${id}-msg`}>
          The WhatsApp message
        </p>
        <pre className="order__pre" aria-labelledby={`${id}-msg`} data-touched={touched || undefined}>
          {lines.map((line, i) => (
            // Keying by content replays the highlight on exactly the line that changed.
            <span key={`${i}-${line}`} className="order__line">
              {line || ' '}
              {'\n'}
            </span>
          ))}
        </pre>
        <button type="button" className="order__copy" onClick={copy} data-copied={copied || undefined}>
          <span className="order__copy-face" aria-hidden={copied}>
            <Icon name="copy" /> Copy message
          </span>
          <span className="order__copy-face order__copy-face--done" aria-hidden={!copied}>
            <Icon name="check" /> Copied
          </span>
        </button>
        <p className="order__note" role="status">
          {copied ? 'Message copied.' : 'On the real site this opens WhatsApp with the message ready to send.'}
        </p>
      </div>
    </div>
  )
}
