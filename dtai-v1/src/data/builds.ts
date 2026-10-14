export interface Build {
  name: string
  /** Where it started. Used as the edition stamp. */
  origin: string
  outcome: string
  builders?: string
}

/** Exact outcomes from @doingthingsai posts. Nothing inferred. */
export const builds: Build[] = [
  {
    name: 'scene_044',
    origin: 'Women Who Build #1',
    outcome: 'Started as a prototype in the room. Launched publicly.',
    builders: 'Hemapriya Ulaganathan & G Akshaya Sri',
  },
  {
    name: 'AI Outreach Manager',
    origin: 'Build & Blend',
    outcome: 'Prototype built in one session. He came back the next edition to make it better.',
    builders: 'Elanchezhiyan Ragavan',
  },
  {
    name: 'Parent to-do app',
    origin: 'Edition 11',
    outcome: 'Built with Claude in a single edition. Has a baby sleep-tracking feature made for his own family.',
    builders: 'Sivanesan',
  },
  {
    name: '₹4,300',
    origin: 'Women Who Build #1',
    outcome: 'Combined revenue made by participants who built, pitched to buyers, and sold. In one session.',
    builders: 'the whole cohort',
  },
]

export const participantQuote = {
  text: 'It was refreshing to be in a room full of women building, experimenting, learning and turning ideas into something real.',
  by: 'Janaki Maya, Women Who Build #1 participant',
}
