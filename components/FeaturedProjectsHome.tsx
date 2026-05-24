'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink, Globe } from 'lucide-react'
import { BrowserMockup } from './BrowserMockup'
import { featuredHomeProjects } from '@/lib/projects'

export function FeaturedProjectsHome() {
  const [featured, ...rest] = featuredHomeProjects

  if (!featured) return null

  const featuredDomain =
    featured.url?.replace(/^https?:\/\//, '').replace(/\/$/, '') ?? featured.displayDomain

  return (
    <div className="space-y-8">
      <article className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-lg ring-1 ring-primary/5 transition-shadow hover:shadow-xl lg:grid lg:grid-cols-2">
        <span className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-black text-white shadow-lg">
          01
        </span>
        <div className="relative bg-gradient-to-br from-brand-bg to-white p-4 lg:p-8">
          <BrowserMockup
            url={featured.url}
            domain={featuredDomain}
            imageSrc={featured.thumbnail}
            imageAlt={`${featured.name} - Globenet web development`}
          />
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-10">
          <span className="mb-3 inline-flex w-fit flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-logo/30 bg-logo/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-logo" />
              Featured build
            </span>
            {featured.concept && (
              <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                Concept
              </span>
            )}
          </span>
          <h3 className="text-2xl font-extrabold text-brand-text sm:text-3xl">{featured.name}</h3>
          <p className="mt-1 text-sm font-semibold text-logo">{featured.clientType}</p>
          {featuredDomain && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-brand-muted">
              <Globe className="h-4 w-4 shrink-0" />
              {featuredDomain}
              {featured.concept && (
                <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold uppercase text-amber-800">
                  Concept
                </span>
              )}
            </p>
          )}
          <p className="mt-4 leading-relaxed text-brand-muted">{featured.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
          {featured.url && !featured.concept ? (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-primary-dark"
            >
              Visit live site <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-bold text-primary"
            >
              {featured.concept ? 'Build my restaurant site' : 'Start a similar project'}{' '}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => {
          const domain =
            project.url?.replace(/^https?:\/\//, '').replace(/\/$/, '') ?? project.displayDomain
          return (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <span className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/80 text-xs font-bold text-white backdrop-blur-sm">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <BrowserMockup
                  url={project.url}
                  domain={domain}
                  imageSrc={project.thumbnail}
                  imageAlt={`${project.name} - Globenet portfolio`}
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-brand-text">{project.name}</h3>
                <p className="mt-1 text-xs font-semibold text-logo">{project.clientType}</p>
                {project.concept && (
                  <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-800">
                    Concept build
                  </span>
                )}
                <p className="mt-2 line-clamp-2 text-sm text-brand-muted">{project.description}</p>
                {project.url && !project.concept ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary"
                  >
                    Visit site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link href="/projects" className="mt-4 inline-flex text-sm font-bold text-primary">
                    View details →
                  </Link>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
