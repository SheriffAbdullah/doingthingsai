import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  id: string
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  /** Right-aligned slot on desktop (a link or button). */
  aside?: ReactNode
  className?: string
}

export default function SectionHeader({ id, eyebrow, title, lede, aside, className = '' }: Props) {
  return (
    <Reveal className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-3xl">
        <p className="eyebrow opacity-70 mb-5">{eyebrow}</p>
        <h2 id={id} className="display-lg">
          {title}
        </h2>
        {lede && <p className="lede mt-5 opacity-75">{lede}</p>}
      </div>
      {aside && <div className="shrink-0 md:pb-1">{aside}</div>}
    </Reveal>
  )
}
