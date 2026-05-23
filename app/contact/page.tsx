import type { Metadata } from 'next'
import {
  MessageCircle,
  Mail,
  Globe,
  Instagram,
  MapPin,
} from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import { GoogleReviewsCTA } from '@/components/GoogleReviewsCTA'
import { StructuredData } from '@/components/JsonLd'
import { pageMetadata, siteConfig } from '@/lib/seo'

export const metadata: Metadata = pageMetadata.contact

export default function ContactPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <PageHero
        label="Contact"
        title="Let's Build Something Exceptional"
        subtitle="Web developers in Awka, Anambra — reach us on WhatsApp, email, or the form below. We respond within hours."
        imageKey="heroContact"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <GoogleReviewsCTA variant="compact" />
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-brand-text">Get In Touch</h2>
              <address className="space-y-6 not-italic">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4 transition-shadow hover:shadow-md"
                >
                  <div className="rounded-full bg-[#25D366]/10 p-3 text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">WhatsApp</p>
                    <p className="font-semibold text-brand-text">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4 transition-shadow hover:shadow-md"
                >
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Email</p>
                    <p className="font-semibold text-brand-text">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href={`https://${siteConfig.website}`}
                  className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4 transition-shadow hover:shadow-md"
                >
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Website</p>
                    <p className="font-semibold text-brand-text">{siteConfig.website}</p>
                  </div>
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4 transition-shadow hover:shadow-md"
                >
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Instagram</p>
                    <p className="font-semibold text-brand-text">{siteConfig.instagram}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Location</p>
                    <p className="font-semibold text-brand-text">{siteConfig.location}</p>
                  </div>
                </div>
              </address>

              <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border shadow-sm">
                <iframe
                  title="Globenet office location in Awka Anambra Nigeria"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396493.8!2d7.0672!3d6.2104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040f0c0b0b0b0b0%3A0x0!2sAwka%2C%20Anambra!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-2xl font-bold text-brand-text">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
