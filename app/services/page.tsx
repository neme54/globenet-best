import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { ServicesBento } from '@/components/ServicesBento'
import { ProcessStrip } from '@/components/ProcessStrip'
import { CTABanner } from '@/components/CTABanner'
import { ClientBadges } from '@/components/ClientBadges'
import { StructuredData } from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo'
import { services } from '@/lib/services'

export const metadata: Metadata = pageMetadata.services

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />
      <PageHero
        label="Services"
        title="Everything Your Brand Needs Online"
        subtitle="Professional web design, development, e-commerce, SEO and AI solutions for businesses in Awka, Anambra State, and across Nigeria."
        imageKey="heroServices"
      />
      <ClientBadges />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Popular"
            title="Core Services"
            subtitle="What most clients in Awka and Anambra hire us for."
          />
          <ServicesBento />
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Full list"
            title="All Services"
            subtitle="Detailed scope and deliverables for every package."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      <ProcessStrip />
      <CTABanner title="Start Your Project Today" subtitle="Message us on WhatsApp for a free consultation." />
    </>
  )
}
