import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ReviewCard } from '@/components/ReviewCard'
import { RatingSummary } from '@/components/RatingSummary'
import { GoogleReviewsCTA } from '@/components/GoogleReviewsCTA'
import { HomeFAQ } from '@/components/HomeFAQ'
import { CTABanner } from '@/components/CTABanner'
import { StructuredData } from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = pageMetadata.reviews

export default function ReviewsPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Reviews', path: '/reviews' },
        ]}
        includeReviews
        includeFaq
      />
      <PageHero
        label="Reviews"
        title="What Our Clients Say"
        subtitle="5-star rated web development agency in Awka, Anambra — read reviews from real Nigerian business owners."
        imageKey="heroReviews"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RatingSummary />
          <div className="mt-8">
            <GoogleReviewsCTA />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Client Reviews" subtitle="12 verified 5-star reviews" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      <HomeFAQ />
      <CTABanner title="Join Our Happy Clients" />
    </>
  )
}
