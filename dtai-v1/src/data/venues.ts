export interface Venue {
  name: string
  area: string
  hosted: string
}

/** Every space that has opened its doors so far. No sponsors, no logos. */
export const venues: Venue[] = [
  { name: 'Time Café', area: 'Nungambakkam', hosted: 'Editions 12 and 17' },
  { name: 'The Love Hope Company', area: 'Adyar', hosted: 'Editions 14 and 16' },
  { name: 'Madras Adda', area: 'Mylapore', hosted: 'Edition 15' },
  { name: 'Third Wave Coffee', area: 'Adyar', hosted: 'Edition 1. Where it started.' },
  { name: 'Become', area: 'Design consultancy, Chennai', hosted: 'AI Product Showcase, June 2026. Pay-as-you-wish.' },
  { name: 'House of Cyces', area: 'Chennai', hosted: 'AgentCraft, Sep 2026. We were community partner.' },
]
