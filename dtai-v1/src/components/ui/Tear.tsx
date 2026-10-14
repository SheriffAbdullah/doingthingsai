import type { CSSProperties } from 'react'

const SURFACE = { ink: 'rgb(var(--ink))', paper: 'rgb(var(--paper))', 'paper-2': 'rgb(var(--paper-2))' } as const

/**
 * Torn ticket edge at the top of a section that follows a different surface.
 * `from` is the surface above; the notches punch through in its colour.
 * The parent section must be `relative`.
 */
export default function Tear({ from }: { from: keyof typeof SURFACE }) {
  return <div className="tear" aria-hidden="true" style={{ '--tear-bg': SURFACE[from] } as CSSProperties} />
}
