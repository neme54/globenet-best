'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean
  onClose: () => void
  pathname: string
}) {
  if (!open) return null

  return (
    <div id="mobile-nav" className="fixed inset-0 z-[200] md:hidden">
      <button
        type="button"
        className="absolute inset-0 z-0 bg-black/65"
        onClick={onClose}
        aria-label="Close menu"
      />

      <aside
        className="absolute right-0 top-0 z-10 flex h-full w-[min(100%,20rem)] flex-col border-l border-white/10 bg-slate-950 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Logo variant="light" />
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white active:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-6" aria-label="Mobile links">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors active:bg-white/10 ${
                    pathname === link.href
                      ? 'bg-logo/15 text-logo'
                      : 'text-white/90 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="z-10 shrink-0 border-t border-white/10 bg-slate-950 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full rounded-full bg-logo py-3.5 text-center text-base font-semibold text-white active:bg-primary-light"
          >
            Hire Us
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-3 block py-2 text-center text-sm font-medium text-white/55"
          >
            WhatsApp: {siteConfig.phone}
          </a>
        </div>
      </aside>
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const closeMenu = useCallback(() => setMobileOpen(false), [])
  const openMenu = useCallback(() => setMobileOpen(true), [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = ''
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen, closeMenu])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-lg shadow-black/10 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex min-w-0 items-center">
            <Logo variant="light" />
          </div>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'text-logo'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full bg-logo px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-logo/25 transition-all hover:bg-primary-light"
            >
              Hire Us
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[60] -mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white active:bg-white/10 md:hidden"
            onClick={openMenu}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mounted &&
        createPortal(
          <MobileMenu open={mobileOpen} onClose={closeMenu} pathname={pathname} />,
          document.body
        )}
    </>
  )
}
