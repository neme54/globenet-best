import Link from 'next/link'
import { MessageSquare, Palette, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Discover',
    description: 'Goals, audience, and brand — mapped in a focused briefing.',
    color: 'border-sky-400/40 bg-sky-500/20 text-sky-100',
    num: '01',
  },
  {
    icon: Palette,
    title: 'Design & Build',
    description: 'Wireframes to polished Next.js — with feedback at every step.',
    color: 'border-violet-400/40 bg-violet-500/20 text-violet-100',
    num: '02',
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    description: 'Deploy, SEO, handover — plus support when you need it.',
    color: 'border-emerald-400/40 bg-emerald-500/20 text-emerald-100',
    num: '03',
  },
]

export function ProcessStrip() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(43,127,255,0.2),transparent_50%)]" />
      <div className="hero-grid-light absolute inset-0 opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-logo">Why Globenet</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            From idea to live site — without the hassle
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Awka-based team, SEO-first builds, transparent pricing, and AI-ready delivery.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          <div
            className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent md:block"
            aria-hidden
          />
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
            >
              <span className="text-xs font-bold tracking-widest text-white/40">{step.num}</span>
              <div className={`mt-4 mb-5 inline-flex rounded-2xl border p-3.5 ${step.color}`}>
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {['Local expertise', 'SEO-first', 'Fast delivery', 'AI integration', 'Fair pricing'].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90"
                >
                  {badge}
                </span>
              )
            )}
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-logo hover:text-white"
          >
            About our process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
