import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { CTABanner } from '@/components/CTABanner'
import { ClientBadges } from '@/components/ClientBadges'
import { StructuredData } from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo'
import { projects } from '@/lib/projects'

export const metadata: Metadata = pageMetadata.projects

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ]}
      />
      <PageHero
        label="Portfolio"
        title="Our Work Speaks for Itself"
        subtitle="International and Nigerian clients — each project with scope, tech stack, URLs, and work delivered."
        imageKey="heroProjects"
      />
      <ClientBadges />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Case studies"
            title="Featured Projects"
            subtitle="Finance, logistics, restaurants, real estate, NGOs, and e-commerce."
          />
          <div className="grid gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <p className="text-lg text-brand-muted">Have a project in mind?</p>
        <Link
          href="/contact"
          className="mt-4 inline-block font-semibold text-primary hover:text-primary-dark"
        >
          Let&apos;s talk →
        </Link>
      </section>

      <CTABanner />
    </>
  )
}
