import Link from 'next/link'
import { Star, MapPin, Briefcase } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

const items = [
  {
    icon: Star,
    value: '5.0',
    label: '12 Google reviews',
    href: siteConfig.googleReviewsUrl,
    external: true,
  },
  {
    icon: Briefcase,
    value: '50+',
    label: 'Projects delivered',
    href: '/projects',
    external: false,
  },
  {
    icon: MapPin,
    value: 'Awka',
    label: 'Anambra, Nigeria',
    href: '/contact',
    external: false,
  },
]

export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      {items.map((item) => {
        const className =
          'group flex items-center gap-2.5 rounded-full border border-brand-border/80 bg-brand-surface/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md'
        const content = (
          <>
            <item.icon className="h-4 w-4 text-logo shrink-0" />
            <span className="text-sm font-bold text-brand-text group-hover:text-primary">
              {item.value}
            </span>
            <span className="text-xs text-brand-muted">{item.label}</span>
          </>
        )
        return item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        ) : (
          <Link key={item.label} href={item.href} className={className}>
            {content}
          </Link>
        )
      })}
    </div>
  )
}
