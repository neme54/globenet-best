'use client'

import { Star, ExternalLink, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

function GoogleMark({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

type GoogleReviewsCTAProps = {
  variant?: 'banner' | 'compact'
}

export function GoogleReviewsCTA({ variant = 'banner' }: GoogleReviewsCTAProps) {
  if (variant === 'compact') {
    return (
      <a
        href={siteConfig.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-white px-5 py-2.5 text-sm font-bold text-brand-text shadow-md hover:shadow-lg"
      >
        <GoogleMark />
        View on Google
        <ExternalLink className="h-3.5 w-3.5 text-brand-muted" />
      </a>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800/10 bg-slate-950 shadow-2xl shadow-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,127,255,0.35),transparent_55%)]" />
      <div className="hero-grid-light absolute inset-0 opacity-30" aria-hidden />

      <div className="relative flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">
            <span className="text-4xl font-black text-white">5.0</span>
            <div className="absolute -bottom-2 flex gap-0.5 rounded-full bg-slate-900 px-2 py-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <GoogleMark className="h-7 w-7" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Google Reviews
              </span>
            </div>
            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Trusted by clients across Nigeria
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              12 verified reviews · Perfect 5.0 rating
            </p>
            <div className="mt-4 flex -space-x-2">
              {['CO', 'AN', 'OE', 'MK', 'IB'].map((initials) => (
                <span
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-primary to-logo text-[10px] font-bold text-white"
                >
                  {initials}
                </span>
              ))}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-white/15 text-[10px] font-semibold text-white/80">
                +7
              </span>
            </div>
          </div>
        </div>

        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg hover:bg-logo hover:text-white sm:w-auto"
        >
          Read reviews on Google
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
