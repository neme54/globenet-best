const industries = [
  'Finance',
  'Logistics',
  'E-Commerce',
  'Real Estate',
  'Restaurants',
  'NGOs',
  'Schools',
  'Fashion',
]

export function ClientBadges() {
  return (
    <div className="border-y border-brand-border/60 bg-brand-surface/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
          Built for businesses across Nigeria
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-brand-border bg-brand-bg px-4 py-2 text-sm font-medium text-brand-text"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
