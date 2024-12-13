import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/actions/projects'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found | IMPRUTHVI - Pruthvisinh Rajput',
      description: 'The requested project could not be found.'
    }
  }

  const { metadata } = project
  const {
    title,
    summary = 'Project by Pruthvisinh Rajput (IMPRUTHVI)',
    image,
    publishedAt
  } = metadata

  return {
    title: `${title} | IMPRUTHVI - Pruthvisinh Rajput Project`,
    description: summary,
    authors: [{ name: 'Pruthvisinh Rajput (IMPRUTHVI)' }],
    openGraph: {
      title: `${title} | IMPRUTHVI - Pruthvisinh Rajput Project`,
      description: summary,
      type: 'article',
      publishedTime: publishedAt?.toString(),
      images: image
        ? [
            {
              url: image,
              alt: `${title} by Pruthvisinh Rajput (IMPRUTHVI)`
            }
          ]
        : []
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | IMPRUTHVI - Pruthvisinh Rajput Project`,
      description: summary,
      images: image ? [image] : []
    },
    alternates: {
      canonical: `/projects/${params.slug}`
    },
    keywords: [
      'Pruthvisinh Rajput projects',
      'IMPRUTHVI projects',
      'web development project',
      'software development',
      'coding project',
      'tech project',
      'full-stack development',
      metadata.author!,
      ...title!.toLowerCase().split(' ')
    ]
      .flat()
      .filter(Boolean)
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project({ params }: Props) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
