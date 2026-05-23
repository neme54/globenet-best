import Link from 'next/link'
import { MessageCircle, ArrowRight, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export function MidPageCTA() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary to-logo p-8 shadow-2xl shadow-primary/25 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90">
              <Zap className="h-3.5 w-3.5" />
              Quick response
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 max-w-md text-white/85">
              Free quote — we typically reply within a few hours on WhatsApp.
            </p>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/80 bg-white/10 px-6 py-3.5 font-bold text-white hover:bg-white hover:text-primary"
            >
              Contact form
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
