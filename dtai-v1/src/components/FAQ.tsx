import { useId, useState } from 'react'
import { faqs } from '../data/faq'
import Reveal from './ui/Reveal'

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <li className="border-b hairline">
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-center gap-6 py-6 text-left md:py-7"
        >
          <span className="display-sm flex-1">
            {q}
          </span>
          <span aria-hidden="true" className="relative grid h-6 w-6 shrink-0 place-items-center text-ink/60 transition-colors duration-fast group-hover:text-ink">
            <span className="absolute h-[2px] w-3.5 bg-current" />
            <span className={`absolute h-[2px] w-3.5 bg-current transition-transform duration-base ease-out ${open ? 'rotate-0' : 'rotate-90'}`} />
          </span>
        </button>
      </h3>
      {/* Content stays in the DOM (find-in-page works); the grid-rows trick animates height. */}
      <div id={`${id}-a`} role="region" aria-labelledby={`${id}-q`} className="acc-panel" data-open={open} aria-hidden={!open}>
        <div>
          <p className="max-w-[56ch] pb-7 text-ink/70">{a}</p>
        </div>
      </div>
    </li>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper border-t hairline section-pad">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal as="h2" id="faq-title" className="display-lg lg:col-span-4">
          Questions.
        </Reveal>
        <Reveal as="ul" className="border-t hairline lg:col-span-8" delay={0.05}>
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
