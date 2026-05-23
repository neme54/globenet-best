'use client'

import { useState, FormEvent } from 'react'
import { siteConfig } from '@/lib/seo'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const service = data.get('service') as string
    const budget = data.get('budget') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`New Project Enquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 text-center">
        <p className="text-lg font-semibold text-brand-text">
          Thank you! Your email client should open shortly.
        </p>
        <p className="mt-2 text-sm text-brand-muted">
          Or message us directly on{' '}
          <a href={siteConfig.whatsappUrl} className="text-primary font-semibold">
            WhatsApp
          </a>
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-brand-text">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-brand-border px-4 py-3 text-brand-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-brand-text">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-brand-border px-4 py-3 text-brand-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-brand-text">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-brand-border px-4 py-3 text-brand-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-semibold text-brand-text">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-lg border border-brand-border px-4 py-3 text-brand-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a service</option>
            <option value="Web Design">Web Design</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Revamp">Revamp</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1 block text-sm font-semibold text-brand-text">
            Project Budget *
          </label>
          <select
            id="budget"
            name="budget"
            required
            className="w-full rounded-lg border border-brand-border px-4 py-3 text-brand-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select budget range</option>
            <option value="Under ₦50k">Under ₦50k</option>
            <option value="₦50k–₦150k">₦50k–₦150k</option>
            <option value="₦150k–₦500k">₦150k–₦500k</option>
            <option value="₦500k+">₦500k+</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-brand-text">
            Message / Project Description *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-brand-border px-4 py-3 text-brand-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-primary py-4 font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
