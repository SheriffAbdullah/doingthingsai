import { venues } from '../data/venues'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { ArrowRight } from './ui/Icons'

export default function Spaces() {
  return (
    <section id="spaces" aria-labelledby="spaces-title" className="on-ink bg-ink text-paper border-t hairline section-pad">
      <div className="container-site">
        <SectionHeader
          id="spaces-title"
          eyebrow="Spaces"
          title={
            <>
              We don’t have an office. <span className="text-orange">We borrow rooms</span> from people who believe in this.
            </>
          }
          lede="No sponsors, no logo wall. These are the places that said yes to a table full of builders."
        />

        <Reveal as="ul" className="mt-14 grid border-l border-t hairline sm:grid-cols-2 lg:grid-cols-3" delay={0.05}>
          {venues.map((v, i) => (
            <li
              key={v.name}
              className="flex min-h-[12rem] flex-col justify-between border-b border-r hairline p-6"
            >
              <span className="meta text-paper/55">0{i + 1}</span>
              <div className="mt-6">
                <h3 className="display-sm">{v.name}</h3>
                <p className="meta mt-1.5 text-paper/60">{v.area}</p>
                <p className="mt-3 text-sm text-paper/70">{v.hosted}</p>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4" delay={0.1}>
          <p className="max-w-[48ch] text-paper/70">
            Run a café, a studio, a co-working floor, or a boardroom that sits empty after 7 PM?
          </p>
          <a href="#join" className="link-arrow text-paper hover:text-orange" style={{ textDecorationColor: 'rgb(244 239 230 / 0.3)' }}>
            Host a night
            <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
