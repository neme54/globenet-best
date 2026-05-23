import Image from 'next/image'
import Link from 'next/link'
import {
  MessageCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import { stockImages } from '@/lib/stock-images'

type CTABannerProps = {
  title?: string
  subtitle?: string
}

const perks = [
  { icon: Clock, text: 'Reply within hours' },
  { icon: Star, text: '5.0 Google rating' },
  { icon: MapPin, text: 'Based in Awka, NG' },
]

export function CTABanner({
  title = 'Ready to Build Something Exceptional?',
  subtitle = "Get in touch today and let's bring your vision to life.",
}: CTABannerProps) {
  return (
    <section className="bg-brand-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-slate-900/20">
          {/* Image — right side on desktop */}
          <div className="absolute inset-0 lg:left-[42%]" aria-hidden>
            <Image
              src={stockImages.ctaDark}
              alt=""
              fill
              className="object-cover brightness-[0.5]"
              sizes="(max-width: 1024px) 100vw, 58vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/40 lg:from-slate-950 lg:via-slate-950/90 lg:to-transparent" />
          </div>

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12 xl:p-14">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-logo/30 bg-logo/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-logo">
                <Sparkles className="h-3.5 w-3.5" />
                Start your project
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                {subtitle}
              </p>

              <ul className="mt-6 flex flex-wrap gap-3">
                {perks.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80"
                  >
                    <Icon className="h-3.5 w-3.5 text-logo" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Send a message
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right — quick contact card (visible on all sizes, sits over image on lg) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:ml-auto lg:max-w-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                Prefer a call or email?
              </p>
              <p className="mt-3 text-2xl font-bold text-white">{siteConfig.phone}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm font-medium text-logo hover:underline"
              >
                {siteConfig.email}
              </a>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white/80">12 verified reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
