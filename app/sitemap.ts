import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.impruthvi.me',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    // projects
    {
      url: 'https://www.impruthvi.me/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    // posts
    {
      url: 'https://www.impruthvi.me/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    // https://www.impruthvi.me/contact
    {
      url: 'https://www.impruthvi.me/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]
}
