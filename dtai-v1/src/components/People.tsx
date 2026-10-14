import { people } from '../data/people'
import Reveal from './ui/Reveal'

export default function People() {
  return (
    <section id="people" aria-labelledby="people-title" className="bg-paper section-pad">
      <div className="container-site">
        <Reveal as="h2" id="people-title" className="display-lg">
          Run by builders.
        </Reveal>

        <Reveal as="ul" className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:max-w-3xl md:gap-x-10" delay={0.05}>
          {people.map((p) => (
            <li key={p.name}>
              <div className="photo aspect-[4/5]">
                <img src={p.photo} width={600} height={600} alt={p.photoAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-tight tracking-[-0.015em] md:mt-5 md:text-2xl">{p.name}</h3>
              <p className="meta mt-2 text-ink/60">{p.role}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
