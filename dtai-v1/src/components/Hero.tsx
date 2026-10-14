import { heroPhoto } from '../data/photos'
import Ticket from './Ticket'

const delay = (s: number) => ({ animationDelay: `${s}s` })

/**
 * Photo stage: the room is the backdrop and the ticket sits inside it.
 * The ticket is the hero's only "Join the Build"; the nav button stays
 * hidden until it scrolls away (Navbar).
 */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="on-ink relative isolate bg-ink text-paper">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroPhoto.src}
          width={heroPhoto.width}
          height={heroPhoto.height}
          alt={heroPhoto.alt}
          className="h-full w-full object-cover object-[40%_45%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      </div>

      <div className="container-site grid items-end gap-10 pb-16 pt-[calc(var(--nav-h)+var(--stage-top))] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-[calc(var(--nav-h)+var(--stage-top-lg))]">
        <div className="lg:col-span-7">
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
