'use client'

import Link from 'next/link'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { previewReviews } from '@/lib/reviews'
import { siteConfig } from '@/lib/seo'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function HomeReviewsHighlight() {
  const [featured, ...others] = previewReviews

  return (
    <div className="space-y-8">
      <article className="relative overflow-hidden rounded-3xl border border-brand-border/60 bg-gradient-to-br from-white via-brand-bg to-primary/5 p-8 shadow-lg sm:p-10">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-logo/20 to-transparent" />
        <Quote className="absolute right-8 top-8 h-14 w-14 text-primary/15" />
        <div className="relative flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-700">
            Featured review
          </span>
        </div>
        <p className="relative mt-6 text-xl font-medium leading-relaxed text-brand-text sm:text-2xl">
          &ldquo;{featured.text}&rdquo;
        </p>
        <div className="relative mt-8 flex items-center gap-4 border-t border-brand-border/60 pt-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-logo text-lg font-bold text-white shadow-lg">
            {getInitials(featured.name)}
          </div>
          <div>
            <p className="font-bold text-brand-text">{featured.name}</p>
            <p className="text-sm text-brand-muted">{featured.date} · Google Review</p>
          </div>
        </div>
      </article>

      <div className="relative -mx-4 overflow-hidden sm:mx-0">
        <div className="review-marquee flex gap-4 py-1">
          {[...others, ...others].map((review, i) => (
            <article
              key={`${review.id}-${i}`}
              className="w-[min(100%,320px)] shrink-0 rounded-2xl border border-brand-border/80 bg-white p-5 shadow-md sm:w-[300px]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {getInitials(review.name)}
                </div>
                <div>
                  <p className="font-semibold text-brand-text">{review.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-brand-muted">
                {review.text}
              </p>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f0f7ff] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f0f7ff] to-transparent" />
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white"
        >
          All testimonials
          <ExternalLink className="h-4 w-4" />
        </Link>
        <Link
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-primary"
        >
          Leave a review on Google →
        </Link>
      </div>
    </div>
  )
}
