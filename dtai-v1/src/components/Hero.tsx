import { useRef } from 'react'
import { heroPhoto } from '../data/photos'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Ticket from './Ticket'

const delay = (s: number) => ({ animationDelay: `${s}s` })

/**
 * Photo stage: the room, printed as a two-plate riso (orange + paper, see .riso in
 * index.css), is the backdrop and the ticket sits inside it. The ticket is the
 * hero's only "Join the Build"; the nav button stays hidden until it scrolls away
 * (Navbar). On mouse/pen devices the plates drift apart with the pointer.
 */
export default function Hero() {
  const reduce = useReducedMotion()
  const printRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const print = printRef.current
    if (reduce || e.pointerType === 'touch' || !print) return
    const r = e.currentTarget.getBoundingClientRect()
    print.style.setProperty('--riso-dx', `${(((e.clientX - r.left) / r.width - 0.5) * 22).toFixed(1)}px`)
    print.style.setProperty('--riso-dy', `${(((e.clientY - r.top) / r.height - 0.5) * 14).toFixed(1)}px`)
  }
  const onLeave = () => {
    printRef.current?.style.removeProperty('--riso-dx')
    printRef.current?.style.removeProperty('--riso-dy')
  }

  const photo = (alt: string, priority: boolean) => (
    <img
      src={heroPhoto.src}
      width={heroPhoto.width}
      height={heroPhoto.height}
      alt={alt}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  )

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-ink relative isolate overflow-x-clip bg-ink text-paper"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div ref={printRef} className="riso absolute inset-0 -z-10 overflow-hidden">
        <div className="riso-plate riso-plate-1">{photo(heroPhoto.alt, true)}</div>
        <div className="riso-plate riso-plate-2" aria-hidden="true">{photo('', false)}</div>
        <div className="riso-grain absolute inset-0" aria-hidden="true" />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      </div>

      <div className="container-site grid items-end gap-10 pb-16 pt-[calc(var(--nav-h)+var(--stage-top))] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-[calc(var(--nav-h)+var(--stage-top-lg))]">
        <div className="hero-pool lg:col-span-7">
          <h1 id="hero-title" className="display-xl rise max-w-[11ch]">
            For people who <span className="text-orange">actually</span> build with AI.
          </h1>
          <p className="lede rise mt-6 max-w-[40ch] text-paper/80" style={delay(0.1)}>
            A closed-door builders’ night in Chennai. Come with an idea, leave with something real.
          </p>
        </div>

        <div className="flex justify-start lg:col-span-5 lg:justify-end">
          <Ticket />
        </div>
      </div>
    </section>
  )
}
