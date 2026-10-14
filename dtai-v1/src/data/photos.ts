import build14 from '../assets/Build-14.webp'
import womenWhoBuild from '../assets/Women-Who-Build.webp'
import p1 from '../assets/1.webp'
import p3 from '../assets/3.webp'
import p7 from '../assets/7.webp'

export interface Photo {
  src: string
  width: number
  height: number
  alt: string
}

/** Served from /public under a stable name so index.html can preload it (LCP). */
export const heroPhoto: Photo = {
  src: '/hero.webp',
  width: 900,
  height: 474,
  alt: 'Five builders working on laptops around a long wooden table in a brick-walled Chennai café at night',
}

/** Order matters: the first is the panorama behind the Room headline, the rest form the strip. */
export const roomPhotos: Photo[] = [
  { src: p7, width: 900, height: 675, alt: 'Builders around a boardroom table, one presenting from a laptop' },
  { src: build14, width: 800, height: 600, alt: 'People at a white table with laptops in a small meeting room' },
  { src: p3, width: 900, height: 675, alt: 'A host standing with arms folded watching builders work under fairy lights' },
  { src: p1, width: 900, height: 675, alt: 'A packed room of builders posing for a group selfie beside a Build & Blend welcome poster' },
  { src: womenWhoBuild, width: 800, height: 450, alt: 'A group of around twenty women standing together in an office decorated with blue balloons' },
]
