import Link from 'next/link'
import {
  Instagram,
  Mail,
  Globe,
  MessageCircle,
  MapPin,
  Star,
  ExternalLink,
} from 'lucide-react'
import { Logo } from './Logo'
import { siteConfig } from '@/lib/seo'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { label: 'Web Development', href: '/services#custom-website-development' },
  { label: 'E-Commerce', href: '/services#ecommerce' },
  { label: 'SEO & Google Business', href: '/services' },
  { label: 'AI Solutions', href: '/services#ai-solutions' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo size="nav" variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/55">
              <MapPin className="h-4 w-4 shrink-0 text-logo" />
              {siteConfig.location}
            </p>

            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              5.0 · 12 Google reviews
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-[#25D366]/50 hover:bg-[#25D366]/15 hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-pink-400/50 hover:bg-pink-400/10 hover:text-pink-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`https://${siteConfig.website}`}
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/45">
                Company
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-logo"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/45">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-white/75 transition-colors hover:text-logo"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/45">
                Contact
              </h3>
              <address className="space-y-3 text-sm not-italic text-white/75">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-logo" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-logo" />
                  {siteConfig.email}
                </a>
                <a
                  href={`https://${siteConfig.website}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Globe className="h-4 w-4 shrink-0 text-logo" />
                  {siteConfig.website}
                </a>
              </address>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Get a free quote
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} Globenet. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Web development · Awka, Anambra · Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
