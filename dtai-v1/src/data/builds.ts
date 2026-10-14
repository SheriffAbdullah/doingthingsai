export interface Build {
  name: string
  /** Where it started. */
  origin: string
  outcome: string
  builders?: string
}

/** Exact outcomes from @doingthingsai posts. Nothing inferred. */
export const builds: Build[] = [
  {
    name: 'scene_044',
    origin: 'Women Who Build #1',
    outcome: 'Prototyped in the room. Launched publicly.',
    builders: 'Hemapriya Ulaganathan & G Akshaya Sri',
  },
  {
    name: 'AI Outreach Manager',
    origin: 'Build & Blend',
    outcome: 'Built in one session. Improved at the next.',
    builders: 'Elanchezhiyan Ragavan',
  },
  {
    name: 'Parent to-do app',
    origin: 'Edition 11',
    outcome: 'Built with Claude in one edition, with baby sleep tracking.',
    builders: 'Sivanesan',
  },
  {
    name: '₹4,300',
    origin: 'Women Who Build #1',
    outcome: 'Earned by participants in a single session.',
  },
]
