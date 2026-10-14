import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
})

export function InstagramIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function XIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 8 19.3z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-1.8-.8-.8.8c-1-.4-1.9-1.3-2.3-2.3l.8-.8L10.5 8.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArrowUpRight({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2} {...p}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

/** The asterisk on the orange mascot's cap. Used as a separator. */
export function Spark({ size = 14, ...p }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2.4} {...p}>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    </svg>
  )
}
