/** A responsive picture from a project image record. */
export default function Shot({ image, sizes = '(min-width: 900px) 60vw, 100vw', eager = false, className }) {
  return (
    <img
      className={className}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
