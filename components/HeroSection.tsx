'use client'

import Link from 'next/link'
import { AnimatedText } from './AnimatedText'
import { HeroVisual } from './HeroVisual'
import { TrustBar } from './TrustBar'
import { TechStackChips } from './TechStackChips'

const headlineWords = 'Web Development Agency in'.split(' ')

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-hero-gradient pt-36 pb-16 sm:pt-40 lg:pb-24">
      <div className="hero-mesh absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div className="hero-particles absolute inset-0" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-logo/25 bg-logo/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              Awka, Anambra · Nigeria-wide
            </p>

            <h1 className="text-4xl font-black leading-[1.1] text-brand-text sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              {headlineWords.map((word, i) => (
                <span key={`${word}-${i}`} className="mr-[0.25em] inline-block">
                  {word}
                </span>
              ))}
              <span className="block bg-gradient-to-r from-primary via-logo to-accent bg-clip-text text-transparent">
                Awka, Anambra
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-brand-muted sm:text-xl">
              We design and build fast, beautiful, SEO-optimised websites for businesses
              across Nigeria.{' '}
              <span className="font-semibold italic text-primary">
                Think it — we&apos;ll build it.
              </span>
            </p>

            <p className="mt-4 text-xl font-semibold text-brand-text sm:text-2xl">
              We build <AnimatedText />
            </p>

            <div className="mt-8">
              <TechStackChips />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-primary bg-brand-surface/80 px-8 py-4 text-sm font-semibold text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-white"
              >
                Get a Free Quote
              </Link>
            </div>

            <div className="mt-8">
              <TrustBar />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-brand-border/60 pt-8 sm:grid-cols-4">
              {[
                { value: '50+', label: 'Projects' },
                { value: '5+', label: 'Years' },
                { value: '100%', label: 'Satisfaction' },
                { value: 'NG', label: 'Nationwide' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-primary sm:text-3xl">{stat.value}</p>
                  <p className="text-xs font-medium text-brand-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
