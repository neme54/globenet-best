'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Code2, ShoppingCart, Bot, ArrowUpRight, Sparkles } from 'lucide-react'
import { stockImages } from '@/lib/stock-images'

const services = [
  {
    id: 'custom-web',
    name: 'Custom Web Development',
    description:
      'High-performance sites with React & Next.js — built for speed, SEO, and conversions.',
    href: '/services#custom-website-development',
    icon: Code2,
    accent: 'from-sky-500 to-primary',
    featured: true,
    image: stockImages.customWebDev,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Solutions',
    description: 'Paystack checkout, inventory, and mobile-first storefronts.',
    href: '/services#ecommerce',
    icon: ShoppingCart,
    accent: 'from-violet-500 to-purple-600',
    featured: false,
    image: null,
  },
  {
    id: 'ai',
    name: 'AI Smart Solutions',
    description: 'Chatbots and automation that qualify leads around the clock.',
    href: '/services#ai-solutions',
    icon: Bot,
    accent: 'from-emerald-500 to-teal-600',
    featured: false,
    image: null,
  },
]

export function ServicesBento() {
  const [hero, ...rest] = services

  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
      <article className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-lg shadow-primary/5 lg:col-span-7 lg:row-span-2">
        <div className="absolute inset-0">
          <Image
            src={hero.image!}
            alt="Custom web development — Globenet Awka Nigeria"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 58vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-primary/40" />
        </div>
        <div className="relative flex min-h-[300px] flex-col justify-between p-6 sm:min-h-[380px] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-logo" />
              Flagship service
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
              <Code2 className="h-6 w-6" />
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{hero.name}</h3>
            <p className="mt-2 max-w-md text-sm text-white/85 sm:text-base">{hero.description}</p>
            <Link
              href={hero.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary transition-all hover:gap-3 hover:bg-logo hover:text-white"
            >
              Explore service
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
        {rest.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface p-6 shadow-md transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.accent} opacity-15 blur-2xl`}
              />
              <div
                className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-lg`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-text">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
