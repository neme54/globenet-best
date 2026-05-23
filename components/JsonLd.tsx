import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
  reviewsJsonLd,
  webSiteJsonLd,
} from '@/lib/structured-data'
import { homeFaqs } from '@/lib/faq'

type JsonLdProps = {
  breadcrumbs?: { name: string; path: string }[]
  includeFaq?: boolean
  includeReviews?: boolean
  /** Set false on inner pages to avoid duplicating org schema from root layout */
  includeOrganization?: boolean
}

export function StructuredData({
  breadcrumbs,
  includeFaq = false,
  includeReviews = false,
  includeOrganization = false,
}: JsonLdProps) {
  const schemas: object[] = []

  if (includeOrganization) {
    schemas.push(localBusinessJsonLd(), webSiteJsonLd())
  }
  if (breadcrumbs?.length) schemas.push(breadcrumbJsonLd(breadcrumbs))
  if (includeFaq) schemas.push(faqJsonLd(homeFaqs))
  if (includeReviews) schemas.push(...reviewsJsonLd())

  if (schemas.length === 0) return null

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export function RootStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
      />
    </>
  )
}
