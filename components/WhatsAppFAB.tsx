'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export function WhatsAppFAB() {
  return (
    <a
      href={siteConfig.whatsappFabUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:z-50"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <span className="absolute inset-0 rounded-full ring-4 ring-[#25D366]/40 animate-pulse" />
      <MessageCircle className="relative h-7 w-7 fill-white" />
    </a>
  )
}
