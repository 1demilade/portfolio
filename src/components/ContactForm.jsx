import { useId, useState } from 'react'
import { EMAIL, LINKS } from '../config.js'
import Icon from './Icon.jsx'
import './ContactForm.css'

const NEEDS = ['A business website', 'A website redesign', 'A landing page', 'Frontend development', 'A simple web app', 'Something else']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please add your name.'
  if (!values.email.trim()) errors.email = 'Please add your email so I can reply.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email doesn’t look complete. Check for an @ and a domain.'
  if (values.message.trim().length < 10) errors.message = 'Tell me a little about the project (at least 10 characters).'
  return errors
}

/**
 * No form service is connected, so this never claims to send anything:
 * it opens the visitor's own email app with the message written out.
 */
export default function ContactForm() {
  const id = useId()
  const [values, setValues] = useState({ name: '', email: '', need: NEEDS[0], message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function submit(event) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }
    if (!EMAIL) {
      setStatus('no-email')
      return
    }
    const subject = `${values.need} – from ${values.name.trim()}`
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('opened')
  }

  const field = (key) => ({
    id: `${id}-${key}`,
    value: values[key],
    onChange: update(key),
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined,
  })

  return (
    <div className="coupon field-red" data-reveal>
      <div className="coupon__stub">
        <h2 className="coupon__title">Let’s build your site</h2>
        <p className="coupon__text">
          Tell me what you need. Sending opens your own email app with the message written out. Nothing is sent from
          this page.
        </p>
      </div>

      <form className="coupon__form" onSubmit={submit} noValidate>
        <div className="coupon__row">
          <label htmlFor={`${id}-name`} className="coupon__label">
            Your name
          </label>
          <input {...field('name')} type="text" autoComplete="name" placeholder="e.g. Ada Okafor" />
          {errors.name && (
            <p className="coupon__error" id={`${id}-name-error`}>
              {errors.name}
            </p>
          )}
        </div>

        <div className="coupon__row">
          <label htmlFor={`${id}-email`} className="coupon__label">
            Your email
          </label>
          <input {...field('email')} type="email" autoComplete="email" inputMode="email" placeholder="you@business.com" />
          {errors.email && (
            <p className="coupon__error" id={`${id}-email-error`}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="coupon__row">
          <label htmlFor={`${id}-need`} className="coupon__label">
            What you need
          </label>
          <select {...field('need')}>
            {NEEDS.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="coupon__row">
          <label htmlFor={`${id}-message`} className="coupon__label">
            About your project
          </label>
          <textarea {...field('message')} rows={4} placeholder="What it is, who it’s for, any deadline" />
          {errors.message && (
            <p className="coupon__error" id={`${id}-message-error`}>
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className="coupon__submit">
          Open in my email app <Icon name="arrow" />
        </button>

        <p className="coupon__status" role="status">
          {status === 'opened' &&
            'Your email app should now be open with the message ready. Press send there. If nothing opened, your browser may not have an email app set up.'}
          {status === 'no-email' && (
            <>
              Email isn’t set up on this site yet. Please message me on{' '}
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>{' '}
              instead.
            </>
          )}
        </p>
      </form>
    </div>
  )
}
