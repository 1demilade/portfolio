import { useState } from 'react'
import './VideoEmbed.css'

/**
 * A YouTube video that loads only when asked: the poster is a local image,
 * and the player (privacy-enhanced domain) replaces it on click.
 */
export default function VideoEmbed({ id, title, poster, vertical = false }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={`video${vertical ? ' video--vertical' : ''}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__poster" onClick={() => setPlaying(true)}>
          <img src={poster} alt="" loading="lazy" decoding="async" />
          <span className="video__play">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
            Play: {title}
          </span>
        </button>
      )}
    </div>
  )
}
