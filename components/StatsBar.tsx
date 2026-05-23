'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: null, suffix: '', label: 'Nigeria-Wide Coverage', text: 'Nigeria-Wide' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="border-y border-brand-border bg-brand-surface py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-black text-primary sm:text-4xl lg:text-5xl">
              {stat.text ? (
                stat.text
              ) : (
                <CountUp target={stat.value!} suffix={stat.suffix} />
              )}
            </p>
            <p className="mt-2 text-sm font-medium text-brand-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
