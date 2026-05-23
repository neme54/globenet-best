/** Stock imagery from Pexels (free to use) — https://www.pexels.com */

/** Live client site screenshots (refresh: npm run screenshots) */
export const projectScreenshots = {
  trustfund: '/images/projects/trustfund.png',
  globedispatch: '/images/projects/globedispatch.png',
  savannahGrill: '/images/projects/savannah-grill.jpg',
} as const

export const stockImages = {
  customWebDev:
    'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600',
  restaurant:
    'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1200',
  realEstate:
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ngo: 'https://images.pexels.com/photos/6647025/pexels-photo-6647025.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fashion:
    'https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg?auto=compress&cs=tinysrgb&w=1200',
  /** Page hero backgrounds */
  heroHome:
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAbout:
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroServices:
    'https://images.pexels.com/photos/7376/pexels-photo-7376.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroProjects:
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroReviews:
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroContact:
    'https://images.pexels.com/photos/7688338/pexels-photo-7688338.jpeg?auto=compress&cs=tinysrgb&w=1920',
  /** Dark moody bg for bottom CTA — night city skyline */
  ctaDark:
    'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1920',
} as const

export type HeroImageKey = keyof Pick<
  typeof stockImages,
  'heroHome' | 'heroAbout' | 'heroServices' | 'heroProjects' | 'heroReviews' | 'heroContact'
>
