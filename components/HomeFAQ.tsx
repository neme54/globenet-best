'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { homeFaqs } from '@/lib/faq'
import { SectionHeading } from './SectionHeading'

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-brand-surface py-20" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Web Development in Awka & Anambra — Answered"
          subtitle="Common questions from businesses searching for web developers in Nigeria."
        />
        <div className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-text"
                aria-expanded={open === i}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-brand-border px-5 pb-4 pt-2 text-sm leading-relaxed text-brand-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
