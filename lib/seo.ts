import type { Metadata } from 'next'

const SITE_URL = 'https://www.globenet.dev'

export const siteConfig = {
  name: 'Globenet',
  tagline: "Think It, We'll Build It...",
  url: SITE_URL,
  phone: '+234 810 821 7791',
  phoneRaw: '+2348108217791',
  email: 'help@globenet.dev',
  website: 'www.globenet.dev',
  instagram: '@globnet.dev',
  instagramUrl: 'https://www.instagram.com/globnet.dev',
  googleReviewsUrl: 'https://share.google/01JsYvUpuQrUE8Txj',
  whatsappUrl:
    'https://wa.me/2348108217791?text=Hello%20Globenet%2C%20I%27d%20like%20to%20discuss%20a%20project',
  whatsappFabUrl:
    'https://wa.me/2348108217791?text=Hello%20Globenet%2C%20I%27d%20like%20to%20start%20a%20project',
  location: 'Awka, Anambra State, Nigeria',
  geo: { latitude: 6.2104, longitude: 7.0672 },
  serviceAreas: ['Awka', 'Anambra State', 'Onitsha', 'Enugu', 'Lagos', 'Abuja', 'Nigeria'],
}

const defaultKeywords = [
  'web developer Awka',
  'web development agency Anambra',
  'website designer Awka',
  'web design Nigeria',
  'best web developer Anambra State',
  'affordable website Awka',
  'e-commerce website Nigeria',
  'Next.js developer Awka',
  'Google Business Profile setup Anambra',
  'website company Awka',
].join(', ')

type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string
}

export function createMetadata({
  title,
  description,
  path,
  keywords,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords ?? defaultKeywords,
    authors: [{ name: 'Globenet' }],
    creator: 'Globenet',
    publisher: 'Globenet',
    formatDetection: { email: false, address: false, telephone: false },
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_NG',
      url,
      siteName: 'Globenet',
      title,
      description,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'Globenet — Web Development Agency in Awka, Anambra, Nigeria',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
    other: {
      'geo.region': 'NG-AN',
      'geo.placename': 'Awka',
      'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  }
}

export const pageMetadata = {
  home: createMetadata({
    title: 'Globenet | #1 Web Development Agency in Awka, Anambra, Nigeria',
    description:
      'Hire Globenet — trusted web developers in Awka, Anambra State. We build fast, SEO-optimised websites, e-commerce stores & AI solutions for businesses across Nigeria. Free quote on WhatsApp.',
    path: '/',
    keywords:
      'web development agency Awka, website design Anambra, web developer Nigeria, best web designer Awka, affordable website Anambra, e-commerce Nigeria, Next.js developer Nigeria, web developer near me Awka',
  }),
  about: createMetadata({
    title: 'About Globenet | Expert Web Developers in Awka & Anambra',
    description:
      'Meet Globenet — Awka-based web developers serving Anambra State and Nigeria. Quality websites, transparent pricing, SEO-first builds since day one.',
    path: '/about',
    keywords:
      'about Globenet, web development team Awka, digital agency Anambra, Nigerian web developers',
  }),
  services: createMetadata({
    title: 'Web Design & Development Services Awka | Globenet Anambra Nigeria',
    description:
      'Responsive web design, custom Next.js development, e-commerce with Paystack, Google Business Profile setup & AI tools — by Globenet in Awka, Anambra.',
    path: '/services',
    keywords:
      'web design services Awka, website development Anambra, e-commerce developer Nigeria, Google Business Profile Awka, AI website solutions',
  }),
  projects: createMetadata({
    title: 'Web Development Portfolio | Globenet Projects in Nigeria',
    description:
      'See real Globenet projects: finance platforms, logistics sites, restaurants & e-commerce — built for clients in Awka, Anambra and across Nigeria.',
    path: '/projects',
    keywords:
      'web development portfolio Nigeria, website examples Awka, Globenet projects Anambra',
  }),
  reviews: createMetadata({
    title: '5-Star Client Reviews | Globenet Web Agency Awka Anambra',
    description:
      'Read 12 five-star Google reviews for Globenet — Awka\'s trusted web development agency. See why businesses across Anambra choose us.',
    path: '/reviews',
    keywords:
      'Globenet reviews, web developer reviews Awka, best web agency Anambra testimonials',
  }),
  contact: createMetadata({
    title: 'Contact Globenet | Web Developer Awka Anambra — WhatsApp & Email',
    description:
      'Contact Globenet in Awka, Anambra. WhatsApp +234 810 821 7791, email help@globenet.dev. Free project quotes for websites across Nigeria.',
    path: '/contact',
    keywords:
      'contact web developer Awka, hire website designer Anambra, Globenet WhatsApp, web agency contact Nigeria',
  }),
}
