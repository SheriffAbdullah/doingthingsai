import { useRef } from 'react'
import { participantQuote } from '../data/builds'
import { roomPhotos } from '../data/photos'
import { INSTAGRAM_URL } from '../data/site'
import Reveal from './ui/Reveal'
import { ArrowUpRight, InstagramIcon } from './ui/Icons'

const captions = [
  { text: '8 people. 3 hours. A lot happened in one room.', from: 'Edition 14' },
  { text: 'No long talks. Mostly building.', from: 'Edition 13' },
]

export default function Room() {
  const stripRef = useRef<HTMLUListElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = stripRef.current
    if (!el) return
    const first = el.firstElementChild as HTMLElement | null
    const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="room" aria-labelledby="room-title" className="bg-paper-2 section-pad">
      <div className="container-site">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow opacity-70 mb-5">The room</p>
            <h2 id="room-title" className="display-lg max-w-[14ch]">
              3 hours. Open laptops. Build. <span className="text-orange-deep">Good people.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="lede text-ink/70">
              That line is on every poster because it is the whole format. We don’t dress it up;
              this is what the nights look like and what gets posted after.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Photo strip: full-bleed, scroll-snap, keyboard + button operable */}
      <Reveal className="mt-12" delay={0.1}>
        <ul
          ref={stripRef}
          className="strip focus-visible:outline-offset-[-3px]"
          aria-label="Photos from past sessions"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') { e.preventDefault(); scrollBy(1) }
            if (e.key === 'ArrowLeft') { e.preventDefault(); scrollBy(-1) }
          }}
        >
          {roomPhotos.map((p, i) => {
            const portrait = p.height > p.width
            return (
              <li key={p.src}>
                <figure className="m-0">
                  <div className={`photo h-[15rem] sm:h-[18rem] lg:h-[22rem] ${portrait ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                    <img
                      src={p.src}
                      width={p.width}
                      height={p.height}
                      alt={p.alt}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {p.caption && <figcaption className="meta mt-3 text-ink/65">{p.caption}</figcaption>}
                </figure>
              </li>
            )
          })}
        </ul>
        <div className="container-site mt-4 flex items-center justify-between gap-4">
          <p className="meta text-ink/60">Drag, scroll, or use the arrows</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollBy(-1)} className="btn btn-quiet btn-sm !min-h-[44px] w-11 !px-0" aria-label="Previous photos">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={() => scrollBy(1)} className="btn btn-quiet btn-sm !min-h-[44px] w-11 !px-0" aria-label="Next photos">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </Reveal>

      <div className="container-site mt-16 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7" delay={0.05}>
          <p className="meta text-ink/60 mb-4">Posted after the night, verbatim</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {captions.map((c) => (
              <li key={c.from} className="rounded-lg border hairline bg-paper p-5">
                <p className="display-sm">“{c.text}”</p>
                <p className="meta mt-3 text-ink/60">@doingthingsai · {c.from}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-5 flex flex-col justify-between gap-6" delay={0.1}>
          <blockquote className="m-0 border-l-2 border-orange pl-5">
            <p className="text-ink/80">“{participantQuote.text}”</p>
            <footer className="meta mt-3 text-ink/60">{participantQuote.by}</footer>
          </blockquote>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-arrow self-start text-ink">
            <InstagramIcon size={18} />
            Follow @doingthingsai
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
