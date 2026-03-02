import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kasanow.com'

  const routes = [
    '',
    '/products',
    '/pricing',
    '/docs',
    '/use-cases',
    '/about',
    '/contact',
    '/blog',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
