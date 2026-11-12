// A small set of stroke icons drawn at one weight.

const PATHS = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  external: <path d="M14 5h5v5m0-5-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" />,
  back: <path d="M20 12H5m6 6-6-6 6-6" />,
  up: <path d="M12 20V5m-6 6 6-6 6 6" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  copy: <path d="M9 9h10v10H9zM5 15V5h10" />,
  download: <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />,
}

export default function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}
