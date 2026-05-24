import { siteConfig } from './seo'
import { reviews } from './reviews'
import { services } from './services'

const SITE_URL = siteConfig.url

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: siteConfig.name,
    alternateName: 'Globenet Web Development',
    description:
      'Leading web development agency in Awka, Anambra State, Nigeria. Custom websites, e-commerce, SEO and AI solutions.',
    url: SITE_URL,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/favicon.png`,
    priceRange: '₦₦',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Awka',
      addressLocality: 'Awka',
      addressRegion: 'Anambra State',
      postalCode: '420001',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.googleReviewsUrl,
      siteConfig.whatsappUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(reviews.length),
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.shortDescription,
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: 'Nigeria',
        },
      })),
    },
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: 'Web development agency in Awka, Anambra, Nigeria',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-NG',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function reviewsJsonLd() {
  return reviews.slice(0, 6).map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE_URL}/#organization` },
    author: { '@type': 'Person', name: r.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(r.rating),
      bestRating: '5',
    },
    reviewBody: r.text,
    datePublished: r.date,
  }))
}

export function faqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
