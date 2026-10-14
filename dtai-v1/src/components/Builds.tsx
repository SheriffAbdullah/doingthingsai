import { builds } from '../data/builds'
import { SHOW_BUILDER_NAMES } from '../data/site'
import Reveal from './ui/Reveal'
import Tear from './ui/Tear'

export default function Builds() {
  return (
    <section id="builds" aria-labelledby="builds-title" className="relative bg-paper section-pad">
      <Tear from="ink" />
      <div className="container-site">
        <Reveal as="h2" id="builds-title" className="display-lg">
          Shipped in the room.
        </Reveal>

        <Reveal as="ol" stagger className="mt-16 border-t hairline">
          {builds.map((b) => (
            <li
              key={b.name}
              className="grid gap-x-10 gap-y-2 border-b hairline py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:items-baseline md:py-10"
            >
              <div>
                <h3 className="display-md">{b.name}</h3>
                <p className="mt-2 text-ink/70">{b.outcome}</p>
              </div>
              <p className="meta mt-3 text-ink/60 md:mt-0 md:text-right">
                {b.origin}
                {SHOW_BUILDER_NAMES && b.builders && (
                  <span className="mt-1.5 block font-body text-sm normal-case tracking-normal">{b.builders}</span>
                )}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
