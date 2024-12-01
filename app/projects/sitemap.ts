import { getProjects } from '@/actions/projects'
import { MetadataRoute } from 'next'

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  const projects = await getProjects()
  const totalProjects = projects.length
  const totalSitemaps = Math.ceil(totalProjects / 50000)

  const sitemaps = []

  for (let i = 0; i < totalSitemaps; i++) {
    sitemaps.push({
      id: i
    })
  }

  return sitemaps
}

export default async function sitemap({
  id
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects()

  return projects.map(project => ({
    url: `${process.env.NEXT_PUBLIC_URL}/project/${project.slug}`,
    lastModified: project.publishedAt
  }))
}
