'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Globe, CheckCircle2 } from 'lucide-react'
import { BrowserMockup } from './BrowserMockup'
import type { Project } from '@/lib/projects'

type ProjectCardProps = {
  project: Project
  detailed?: boolean
}

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(detailed)
  const domain =
    project.url?.replace(/^https?:\/\//, '').replace(/\/$/, '') ?? project.displayDomain

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-sm transition-shadow hover:shadow-xl"
    >
      <BrowserMockup
        url={project.url}
        domain={domain}
        imageSrc={project.thumbnail}
        imageAlt={`${project.name} - Globenet web development project in Awka Anambra Nigeria`}
      />
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-brand-text lg:text-2xl">{project.name}</h3>
          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {project.clientType}
          </span>
        </div>

        {domain && (
          <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-logo">
            <Globe className="h-4 w-4 shrink-0" />
            {domain}
            {project.concept ? (
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-800">
                Concept
              </span>
            ) : project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:text-primary-dark"
                aria-label={`Visit ${domain}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </p>
        )}

        <p className="mb-4 text-brand-muted leading-relaxed">{project.description}</p>

        {detailed && (
          <div className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Work delivered
            </p>
            <ul className="space-y-2">
              {project.workDelivered.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-bg px-2.5 py-1 text-xs font-medium text-brand-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {detailed && (
          <div className="mb-4 border-t border-brand-border pt-4">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="flex w-full items-center justify-between rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-sm font-semibold text-brand-text hover:bg-brand-surface"
              aria-expanded={expanded}
            >
              How it was built
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
            {expanded && (
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{project.howBuilt}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.url && !project.concept ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Visit live project <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <Link
            href="/contact"
            className="mt-auto inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
          >
            Start a similar project →
          </Link>
        )}
      </div>
    </motion.article>
  )
}
