import { Metadata } from 'next'

import Projects from '@/components/projects'
import { getProjects } from '@/actions/projects'

export const metadata: Metadata = {
  title: 'Projects | IMPRUTHVI - Developer Portfolio',
  description:
    'Explore a collection of web development projects showcasing my technical skills, innovative solutions, and expertise in modern web technologies.',
  openGraph: {
    title: 'Projects | IMPRUTHVI - Developer Portfolio',
    description:
      'Explore a collection of web development projects showcasing my technical skills, innovative solutions, and expertise in modern web technologies.',
    type: 'website'
  },
  keywords: [
    'web development projects',
    'software development portfolio',
    'developer projects',
    'web technologies',
    'coding portfolio',
    'full-stack development',
    'IMPRUTHVI projects'
  ]
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}
