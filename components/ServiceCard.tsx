'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Code2,
  ShoppingCart,
  Briefcase,
  Globe,
  RefreshCw,
  MapPin,
  Bot,
  type LucideIcon,
} from 'lucide-react'
import type { Service } from '@/lib/services'

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Code2,
  ShoppingCart,
  Briefcase,
  Globe,
  RefreshCw,
  MapPin,
  Bot,
}

type ServiceCardProps = {
  service: Service | { id: string; name: string; description: string; href: string; icon: string }
  variant?: 'detailed' | 'snapshot'
}

export function ServiceCard({ service, variant = 'detailed' }: ServiceCardProps) {
  const iconName = 'icon' in service ? service.icon : 'Code2'
  const Icon = iconMap[iconName] || Code2

  if (variant === 'snapshot') {
    const snap = service as { id: string; name: string; description: string; href: string }
    return (
      <motion.div
        whileHover={{ scale: 1.02, rotateY: 2 }}
        className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-sm transition-shadow hover:shadow-xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-brand-text">{snap.name}</h3>
        <p className="mb-4 text-sm text-brand-muted">{snap.description}</p>
        <Link
          href={snap.href}
          className="text-sm font-semibold text-primary group-hover:underline"
        >
          Learn more →
        </Link>
      </motion.div>
    )
  }

  const s = service as Service
  return (
    <motion.article
      id={s.id}
      whileHover={{ scale: 1.01 }}
      className="scroll-mt-24 rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-sm"
    >
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-brand-text">{s.name}</h3>
      <p className="mb-4 text-brand-muted">{s.description}</p>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        What&apos;s included
      </h4>
      <ul className="mb-6 space-y-2">
        {s.included.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm font-bold text-primary">Starting from: {s.price}</p>
    </motion.article>
  )
}
