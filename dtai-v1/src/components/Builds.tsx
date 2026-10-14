import { builds } from '../data/builds'
import { CTA_LABEL, LUMA_EVENT_URL, SHOW_BUILDER_NAMES } from '../data/site'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { ArrowUpRight } from './ui/Icons'

export default function Builds() {
  return (
    <section id="builds" aria-labelledby="builds-title" className="bg-paper section-pad">
      <div className="container-site">
        <SectionHeader
          id="builds-title"
          eyebrow="Built in the room"
          title={
            <>
              Not slides. Not pitch decks. <span className="text-orange-deep">Things people shipped</span> in the room.
            </>
          }
          lede="Every line below started at a Build & Blend or Women Who Build session. Nobody arrived with a finished product."
        />

        <Reveal as="ol" className="mt-14 border-t hairline" delay={0.05}>
          {builds.map((b, i) => (
            <li
              key={b.name}
              className="group grid gap-x-8 gap-y-3 border-b hairline py-7 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,20rem)] md:py-9"
            >
              <span className="meta pt-1 text-ink/60 transition-colors duration-200 group-hover:text-orange-deep">
                0{i + 1}
              </span>
              <div>
                <h3 className="display-md">{b.name}</h3>
                <p className="mt-2 max-w-[52ch] text-ink/70">{b.outcome}</p>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end md:text-right">
                <span className="stamp text-[0.72rem] text-ink/70 !rotate-0">{b.origin}</span>
                {SHOW_BUILDER_NAMES && b.builders && (
                  <span className="text-sm text-ink/60">Built by {b.builders}</span>
                )}
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end" delay={0.1}>
          <p className="max-w-[60ch] text-sm leading-relaxed text-ink/60">
            Namma Kuppai, Chennai’s civic accountability platform, is our founder’s own product. It gets
            worked on in the room too; it was the live project at Edition 14.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="display-sm">If they can, you can too.</p>
            <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {CTA_LABEL}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
