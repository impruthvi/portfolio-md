import type { MetadataRoute } from 'next'
import { getPosts } from '@/actions/posts'
import { getProjects } from '@/actions/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://impruthvi.me'

  // Get all posts and projects
  const posts = await getPosts()
  const projects = await getProjects()

  // Generate post URLs
  const postUrls = posts.map(post => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Generate project URLs
  const projectUrls = projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.publishedAt
      ? new Date(project.publishedAt)
      : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3
    },
    ...postUrls,
    ...projectUrls
  ]
}
