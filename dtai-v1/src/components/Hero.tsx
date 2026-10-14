import { CTA_LABEL, LUMA_EVENT_URL } from '../data/site'
import { heroPhoto } from '../data/photos'
import Ticket from './Ticket'
import { ArrowUpRight } from './ui/Icons'

const delay = (s: number) => ({ animationDelay: `${s}s` })

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-ink bg-ink text-paper"
      style={{ paddingTop: 'var(--nav-h)' }}
    >
      <div className="container-site grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="display-xl rise max-w-[11ch]">
            For people who <span className="text-orange">actually</span> build with AI.
          </h1>

          <p className="lede rise mt-8 max-w-[40ch] text-paper/70" style={delay(0.1)}>
            A closed-door builders’ night in Chennai. Come with an idea, leave with something real.
          </p>

          <div className="rise mt-10" style={delay(0.2)}>
            <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-7 text-base">
              {CTA_LABEL}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="photo rise aspect-[4/3] lg:ml-10 lg:aspect-[5/6]" style={delay(0.1)}>
            <img
              src={heroPhoto.src}
              width={heroPhoto.width}
              height={heroPhoto.height}
              alt={heroPhoto.alt}
              className="h-full w-full object-cover object-[30%_50%]"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="-mt-20 px-2 sm:px-6 lg:absolute lg:-bottom-10 lg:-left-6 lg:mt-0 lg:w-[24rem] lg:px-0">
            <Ticket />
          </div>
        </div>
      </div>
    </section>
  )
}
