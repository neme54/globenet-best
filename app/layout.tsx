import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFAB } from '@/components/WhatsAppFAB'
import { RootStructuredData } from '@/components/JsonLd'
import { pageMetadata, siteConfig } from '@/lib/seo'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  ...pageMetadata.home,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-mark.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/icon-mark.png',
  },
  verification: {
    // Add when you have them: google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NG" className={raleway.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-mark.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-mark.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <RootStructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
