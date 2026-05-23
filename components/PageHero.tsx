'use client'

import Image from 'next/image'
import { stockImages, type HeroImageKey } from '@/lib/stock-images'

type PageHeroProps = {
  label?: string
  title: string
  subtitle?: string
  imageKey?: HeroImageKey
  children?: React.ReactNode
}

export function PageHero({
  label,
  title,
  subtitle,
  imageKey = 'heroAbout',
  children,
}: PageHeroProps) {
  const bgImage = stockImages[imageKey]

  return (
    <section className="relative min-h-[42vh] overflow-hidden pt-32 pb-20 sm:min-h-[48vh]">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
        unoptimized
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/88 to-primary/55"
        aria-hidden
      />
      <div className="hero-grid-light absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {label && (
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-logo backdrop-blur-sm">
              {label}
            </p>
          )}
          <h1 className="text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        <div className="pointer-events-none absolute bottom-8 right-4 hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md lg:block" />
        <div className="pointer-events-none absolute right-16 top-1/3 hidden h-16 w-16 rounded-2xl border border-logo/30 bg-logo/10 lg:block" />
      </div>
    </section>
  )
}
