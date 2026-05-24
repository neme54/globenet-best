import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = siteConfig.url
  const lastModified = new Date()
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/reviews', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
