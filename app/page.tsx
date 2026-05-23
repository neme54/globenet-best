import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { ClientBadges } from '@/components/ClientBadges'
import { SectionHeading } from '@/components/SectionHeading'
import { ServicesBento } from '@/components/ServicesBento'
import { FeaturedProjectsHome } from '@/components/FeaturedProjectsHome'
import { ProcessStrip } from '@/components/ProcessStrip'
import { HomeReviewsHighlight } from '@/components/HomeReviewsHighlight'
import { MidPageCTA } from '@/components/MidPageCTA'
import { CTABanner } from '@/components/CTABanner'
import { GoogleReviewsCTA } from '@/components/GoogleReviewsCTA'
import { StructuredData } from '@/components/JsonLd'

export default function HomePage() {
  return (
    <>
      <StructuredData breadcrumbs={[{ name: 'Home', path: '/' }]} includeReviews />
      <HeroSection />
      <ClientBadges />

      {/* Services */}
      <section className="section-mesh relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Core Services"
            subtitle="Web design and development for businesses in Awka, Anambra State, and across Nigeria — plus international brands."
          />
          <ServicesBento />
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] hover:bg-primary-dark"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="relative border-y border-brand-border/60 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            subtitle="International finance & logistics brands, plus Nigerian SMEs — built to perform worldwide."
          />
          <FeaturedProjectsHome />
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Google trust */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GoogleReviewsCTA />
        </div>
      </section>

      <MidPageCTA />
      <ProcessStrip />

      {/* Testimonials */}
      <section className="section-mesh relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Clients Say"
            subtitle="Real feedback from businesses across Awka, Anambra, and Nigeria."
          />
          <HomeReviewsHighlight />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
