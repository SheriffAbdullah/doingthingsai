import chandru from '../assets/chandru.webp'
import shankar from '../assets/shankar.webp'
import { LINKEDIN_URL, X_URL } from './site'

export interface Person {
  name: string
  nick?: string
  role: string
  /** Builder-first bio. Facts only. */
  bio: string
  built: string
  photo: string
  photoAlt: string
  links: { label: string; href: string }[]
}

export const people: Person[] = [
  {
    name: 'Chandrasekar Jayapalan',
    nick: 'Chandru',
    role: 'Founder',
    bio: 'Engineer turned full-stack marketer, 12 years in across product marketing, GTM and brand. Marketing Lead at Sensiple by day. Started DoingThingsAI to be around people who ship.',
    built: 'Namma Kuppai — Chennai’s civic accountability platform, covering 318 wards. Also founded 101 Inspiring People.',
    photo: chandru,
    photoAlt: 'Chandrasekar Jayapalan smiling outdoors in a white blazer and glasses',
    links: [
      { label: 'X', href: X_URL },
      { label: 'LinkedIn', href: LINKEDIN_URL },
    ],
  },
  {
    name: 'Shankar K',
    role: 'Co-host, Build & Blend',
    bio: 'The other voice in the room. Co-hosts Build & Blend with Chandru and has hosted editions himself, including 11 and 15.',
    built: 'Holds the room: challenges ideas, keeps people building, makes sure someone ships before 10 PM.',
    photo: shankar,
    photoAlt: 'Shankar K in a green linen shirt in front of a bookshelf',
    links: [{ label: 'Instagram', href: 'https://instagram.com/shankark.313' }],
  },
]
