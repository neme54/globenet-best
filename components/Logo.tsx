import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  className?: string
  size?: 'nav' | 'footer'
  align?: 'left' | 'center'
  /** Use on slate-950 header/footer */
  variant?: 'default' | 'light'
}

export function Logo({
  className = '',
  size = 'nav',
  align = 'left',
  variant = 'default',
}: LogoProps) {
  const centered = align === 'center' || size === 'footer'
  const light = variant === 'light'

  if (size === 'nav') {
    return (
      <Link
        href="/"
        className={`inline-flex shrink-0 items-center gap-2.5 sm:gap-3 ${className}`}
        aria-label="Globenet home"
      >
        <Image
          src="/icon-mark.png"
          alt=""
          width={48}
          height={48}
          className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
          priority
        />
        <span
          className={`text-xl font-extrabold tracking-tight sm:text-2xl ${
            light ? 'text-white' : 'text-primary'
          }`}
        >
          Globe<span className="text-logo">net</span>
        </span>
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${centered ? 'justify-center' : ''} ${className}`}
      aria-label="Globenet home"
    >
      <Image
        src="/logo.png"
        alt="Globenet web development agency — Awka, Anambra, Nigeria"
        width={280}
        height={70}
        className="h-16 w-auto max-w-[240px] object-contain sm:h-20"
        quality={100}
      />
    </Link>
  )
}
