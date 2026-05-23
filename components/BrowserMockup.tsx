import Image from 'next/image'

type BrowserMockupProps = {
  url?: string
  domain?: string
  imageSrc?: string
  imageAlt?: string
  gradientFrom?: string
  gradientTo?: string
  children?: React.ReactNode
}

export function BrowserMockup({
  url,
  domain,
  imageSrc,
  imageAlt = 'Globenet web development project in Awka Anambra Nigeria',
  gradientFrom = '#1A56DB',
  gradientTo = '#3B82F6',
  children,
}: BrowserMockupProps) {
  const displayUrl = url || domain || 'example.com'
  const displayDomain = domain || displayUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const isRemote = Boolean(imageSrc?.startsWith('http'))

  return (
    <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-lg">
      <div className="flex items-center gap-2 border-b border-brand-border bg-slate-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-brand-muted">
          {displayDomain}
        </div>
      </div>
      <div className="relative aspect-video w-full overflow-hidden bg-brand-bg">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={isRemote}
          />
        ) : children ? (
          children
        ) : (
          <div
            className="flex h-full min-h-[180px] flex-col items-center justify-center gap-2 p-6 text-center text-white"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            <div className="rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Built by Globenet
            </div>
            <p className="text-xl font-bold sm:text-2xl">{displayDomain}</p>
            <p className="max-w-xs text-sm text-white/85">
              Custom {displayDomain.includes('dispatch') ? 'logistics' : 'finance'} web platform
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
