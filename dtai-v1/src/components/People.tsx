import { people } from '../data/people'
import { CTA_LABEL, LUMA_EVENT_URL } from '../data/site'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { ArrowUpRight, Spark } from './ui/Icons'

export default function People() {
  return (
    <section id="people" aria-labelledby="people-title" className="bg-paper section-pad">
      <div className="container-site">
        <SectionHeader
          id="people-title"
          eyebrow="People"
          title={
            <>
              Builders first. <span className="text-orange-deep">Organisers</span> between shipping things.
            </>
          }
          lede="There are no admins here. The two people who run the room have their own things in progress, same as everyone else at the table."
        />

        <Reveal as="ul" className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-14" delay={0.05}>
          {people.map((p) => (
            <li key={p.name} className="grid grid-cols-[6.5rem_1fr] gap-x-5 gap-y-4 sm:grid-cols-[9rem_1fr] sm:gap-x-7">
              <div className="photo aspect-square">
                <img src={p.photo} width={600} height={600} alt={p.photoAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
              <div className="self-center sm:self-start">
                <p className="meta text-orange-deep">{p.role}</p>
                <h3 className="display-md mt-2">
                  {p.name}
                  {p.nick && <span className="block text-ink/60 font-medium text-[0.6em] tracking-normal mt-1">“{p.nick}”</span>}
                </h3>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:col-start-2">
                <p className="text-ink/75">{p.bio}</p>
                <p className="mt-4 flex gap-2.5 text-sm text-ink/70">
                  <Spark size={14} className="mt-1 shrink-0 text-orange-deep" />
                  <span>{p.built}</span>
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow text-sm text-ink min-h-[44px] items-center">
                        {l.label}
                        <ArrowUpRight size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t hairline pt-8" delay={0.1}>
          <p className="max-w-[48ch] text-ink/65">
            Want your name next to a product on this page? Ship something at a Build &amp; Blend. That is the whole application.
          </p>
          <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {CTA_LABEL}
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
