import { getPosts } from '@/actions/posts'
import { MetadataRoute } from 'next'

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  const posts = await getPosts()
  const totalProjects = posts.length
  const totalSitemaps = Math.ceil(totalProjects / 50000)

  const sitemaps = []

  for (let i = 0; i < totalSitemaps; i++) {
    sitemaps.push({
      id: i
    })
  }

  return sitemaps
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  return posts.map(post => ({
    url: `${process.env.NEXT_PUBLIC_URL}/post/${post.slug}`,
    lastModified: post.publishedAt
  }))
}
