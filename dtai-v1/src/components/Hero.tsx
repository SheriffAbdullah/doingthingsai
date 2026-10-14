import { CTA_LABEL, LUMA_EVENT_URL, WHATSAPP_URL } from '../data/site'
import { heroPhoto } from '../data/photos'
import Ticket from './Ticket'
import { ArrowUpRight, WhatsAppIcon } from './ui/Icons'

const delay = (s: number) => ({ animationDelay: `${s}s` })

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-ink bg-ink text-paper"
      style={{ paddingTop: 'var(--nav-h)' }}
    >
      <div className="container-site grid items-center gap-12 pb-16 pt-12 md:pb-20 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow rise text-orange">Human-first 0→1 AI community · Chennai</p>

          <h1 id="hero-title" className="display-xl rise mt-6 max-w-[11ch]" style={delay(0.08)}>
            For people who <span className="text-orange">actually</span> build with AI.
          </h1>

          <p className="lede rise mt-7 text-paper/75" style={delay(0.16)}>
            Build &amp; Blend is a small, closed-door builders’ night. Open laptops, three hours,
            good people. Come with an idea, leave with something real, then go find users, sell it,
            grow it. 0 → 1 → many.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" style={delay(0.24)}>
            <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-7 text-base">
              {CTA_LABEL}
              <ArrowUpRight size={16} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow min-h-[44px] text-paper/80 hover:text-paper"
              style={{ textDecorationColor: 'rgb(244 239 230 / 0.3)' }}
            >
              <WhatsAppIcon size={18} />
              Or just WhatsApp Chandru
            </a>
          </div>
        </div>

        {/* Photo + ticket */}
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
            <p className="meta absolute left-4 top-4 rounded-md bg-ink/70 px-2.5 py-1.5 text-paper/90">
              A Build &amp; Blend night
            </p>
          </div>

          <div className="-mt-20 px-2 sm:px-6 lg:absolute lg:-bottom-10 lg:-left-6 lg:mt-0 lg:w-[26rem] lg:px-0">
            <Ticket />
          </div>
        </div>
      </div>
    </section>
  )
}
