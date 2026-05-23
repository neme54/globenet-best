import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ProcessStrip } from '@/components/ProcessStrip'
import { CTABanner } from '@/components/CTABanner'
import { ClientBadges } from '@/components/ClientBadges'
import { StructuredData } from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo'
import { aboutServices } from '@/lib/services'
import {
  Lightbulb,
  Award,
  Eye,
  Heart,
  Target,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = pageMetadata.about

const values = [
  { title: 'Innovation', description: 'We embrace modern tech and creative solutions.', icon: Lightbulb, color: 'bg-sky-100 text-sky-600' },
  { title: 'Quality', description: 'Every pixel and line of code meets our high standards.', icon: Award, color: 'bg-violet-100 text-violet-600' },
  { title: 'Transparency', description: 'Clear communication and honest pricing always.', icon: Eye, color: 'bg-emerald-100 text-emerald-600' },
  { title: 'Speed', description: 'Fast delivery without cutting corners.', icon: Target, color: 'bg-amber-100 text-amber-600' },
  { title: 'Local Pride', description: 'Proudly serving Awka, Anambra, and all of Nigeria.', icon: Heart, color: 'bg-rose-100 text-rose-600' },
]

export default function AboutPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <PageHero
        label="About Globenet"
        title="We Are Globenet — Building the Web, One Vision at a Time"
        subtitle="A professional digital agency based in Awka, Anambra State — serving businesses across Nigeria with world-class web development and local SEO expertise."
        imageKey="heroAbout"
      />
      <ClientBadges />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading label="Our Story" title="From Awka to the World" align="left" />
              <p className="leading-relaxed text-brand-muted">
                Globenet was founded to bring world-class web development to Anambra State
                and Nigeria. We saw local businesses struggling with outdated websites and
                overpriced agencies — and we knew Awka deserved better.
              </p>
              <p className="mt-4 leading-relaxed text-brand-muted">
                Today we partner with SMEs, startups, NGOs, and enterprises to build fast,
                SEO-optimised websites that drive real results in Awka, Onitsha, and nationwide.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-gradient-to-br from-primary/5 to-logo/10 p-8">
              <p className="text-4xl font-black text-primary">5+</p>
              <p className="font-semibold text-brand-text">Years of experience</p>
              <p className="mt-4 text-sm text-brand-muted">
                50+ projects delivered · 5-star Google reviews · Based in Awka, Anambra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-border bg-brand-bg p-8">
              <h2 className="mb-4 text-2xl font-bold text-brand-text">Our Mission</h2>
              <p className="text-brand-muted">
                Empower Nigerian businesses with affordable, high-quality websites that
                compete globally — built locally in Awka with care and expertise.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-brand-bg p-8">
              <h2 className="mb-4 text-2xl font-bold text-brand-text">Our Vision</h2>
              <p className="text-brand-muted">
                Become the most trusted web development agency in South-East Nigeria,
                known for innovation, SEO excellence, and exceptional client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Services" title="What We Do" subtitle="Full digital services for your brand." />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutServices.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-surface p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-brand-text">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Values" title="What We Stand For" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, description, icon: Icon, color }) => (
              <div key={title} className="rounded-2xl border border-brand-border p-6 text-center">
                <div className={`mx-auto mb-4 inline-flex rounded-xl p-3 ${color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-bold">{title}</h3>
                <p className="text-sm text-brand-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessStrip />

      <section className="py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-brand-text">Ready to start your project?</h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-white hover:bg-primary-dark"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <CTABanner title="Let's Build Your Next Big Idea" />
    </>
  )
}
