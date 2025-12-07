import Link from 'next/link'
import { getProjects } from '@/actions/projects'
import Projects from '@/components/projects'
import FadeIn from './fade-in'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24'>
      <div>
        <FadeIn>
          <h2 className='title mb-12'>Recent projects</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <Projects projects={projects} />
        </FadeIn>
        <FadeIn delay={200}>
          <Link
            href='/projects'
            className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
          >
            <span>All projects</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
