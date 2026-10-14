import chandru from '../assets/chandru.webp'
import shankar from '../assets/shankar.webp'

export interface Person {
  name: string
  role: string
  photo: string
  photoAlt: string
}

export const people: Person[] = [
  {
    name: 'Chandrasekar Jayapalan',
    role: 'Founder',
    photo: chandru,
    photoAlt: 'Chandrasekar Jayapalan smiling outdoors in a white blazer and glasses',
  },
  {
    name: 'Shankar K',
    role: 'Co-host, Build & Blend',
    photo: shankar,
    photoAlt: 'Shankar K in a green linen shirt in front of a bookshelf',
  },
]
