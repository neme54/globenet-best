'use client'

import { Star } from 'lucide-react'
import type { Review } from '@/lib/reviews'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const avatarColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-teal-500',
]

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  const colorClass = avatarColors[index % avatarColors.length]

  return (
    <article className="rounded-xl border border-brand-border bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${colorClass}`}
        >
          {getInitials(review.name)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-brand-text">{review.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-xs text-brand-muted">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-brand-muted">{review.text}</p>
    </article>
  )
}
