'use client'

import { motion } from 'framer-motion'
import { BrowserMockup } from './BrowserMockup'
import { featuredHomeProjects } from '@/lib/projects'

const trustfund = featuredHomeProjects.find((p) => p.id === 'trustfund')
const globedispatch = featuredHomeProjects.find((p) => p.id === 'globedispatch')

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-logo/30 via-primary-light/20 to-accent/10 blur-2xl" />
      {trustfund && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative rotate-1 shadow-2xl shadow-primary/20 transition-transform hover:rotate-0"
        >
          <BrowserMockup
            url={trustfund.url}
            domain="trustfundcapitalmgt.com"
            imageSrc={trustfund.thumbnail}
            imageAlt="Trust Fund Capital Management — finance website by Globenet"
          />
        </motion.div>
      )}
      {globedispatch && (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-6 -left-4 hidden w-[55%] rotate-[-4deg] shadow-xl sm:block lg:-left-8"
        >
          <BrowserMockup
            url={globedispatch.url}
            domain="globedispatch.org"
            imageSrc={globedispatch.thumbnail}
            imageAlt="Globe Dispatch — logistics website by Globenet"
          />
        </motion.div>
      )}
      <div className="absolute -right-2 top-8 hidden rounded-xl border border-brand-border bg-brand-surface px-4 py-3 shadow-lg lg:block">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Client projects</p>
        <p className="text-sm font-bold text-primary">International clients</p>
      </div>
    </div>
  )
}
