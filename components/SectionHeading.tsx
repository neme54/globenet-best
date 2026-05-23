type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {label && (
        <div className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span
            className={`h-px w-8 sm:w-12 ${dark ? 'bg-white/40' : 'bg-gradient-to-r from-logo to-primary'}`}
            aria-hidden
          />
          <p
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              dark ? 'text-logo' : 'text-primary'
            }`}
          >
            {label}
          </p>
          <span
            className={`h-px w-8 sm:w-12 ${dark ? 'bg-white/40' : 'bg-gradient-to-l from-logo to-primary'}`}
            aria-hidden
          />
        </div>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? 'text-white' : 'text-brand-text'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          } ${dark ? 'text-white/75' : 'text-brand-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
