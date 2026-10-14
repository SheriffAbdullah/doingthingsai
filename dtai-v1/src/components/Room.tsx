import { roomPhotos } from '../data/photos'
import Reveal from './ui/Reveal'

/** Tile placement for the five photos: one large, two stacked, two wide. */
const tiles = [
  'col-span-2 aspect-[4/3] lg:col-span-4 lg:row-span-2 lg:aspect-auto',
  'aspect-square lg:col-span-2 lg:aspect-auto',
  'aspect-square lg:col-span-2 lg:aspect-auto',
  'aspect-square lg:col-span-3 lg:aspect-auto',
  'aspect-square lg:col-span-3 lg:aspect-auto',
]

export default function Room() {
  return (
    <section id="room" aria-labelledby="room-title" className="bg-paper-2 section-pad">
      <div className="container-site">
        <Reveal as="h2" id="room-title" className="display-lg max-w-[16ch]">
          3 hours. Open laptops. Build. <span className="text-orange-deep">Good people.</span>
        </Reveal>

        <Reveal
          as="ul"
          className="mt-16 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-6 lg:grid-rows-[15rem_15rem_19rem]"
          delay={0.05}
        >
          {roomPhotos.map((p, i) => (
            <li key={p.src} className={`photo ${tiles[i]}`}>
              <img
                src={p.src}
                width={p.width}
                height={p.height}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
