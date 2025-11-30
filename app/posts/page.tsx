import { getPosts } from '@/actions/posts'
import PostsWithSearch from '@/components/posts-with-search'
import React from 'react'
import { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: 'Blog Posts | IMPRUTHVI - Pruthvisinh Rajput',
  description:
    'Discover technical insights, tutorials, and experiences shared by Pruthvisinh Rajput (IMPRUTHVI), a full-stack developer passionate about modern web technologies and software development.',
  openGraph: {
    title: 'Blog Posts | IMPRUTHVI - Pruthvisinh Rajput',
    description:
      'Discover technical insights, tutorials, and experiences shared by Pruthvisinh Rajput (IMPRUTHVI), a full-stack developer passionate about modern web technologies and software development.',
    type: 'website',
    images: [
      {
        url: '/images/authors/impruthvi.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Posts by Pruthvisinh Rajput (IMPRUTHVI)'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Posts | IMPRUTHVI - Pruthvisinh Rajput',
    description:
      'Discover technical insights, tutorials, and experiences shared by Pruthvisinh Rajput (IMPRUTHVI), a full-stack developer passionate about modern web technologies and software development.',
    images: ['/images/authors/impruthvi.jpg'],
    creator: '@impruthvi13'
  },
  keywords: [
    'Pruthvisinh Rajput blog',
    'IMPRUTHVI blog posts',
    'developer insights',
    'software development tutorials',
    'web development articles',
    'full-stack development blog',
    'modern web technologies'
  ],
  alternates: {
    canonical: '/blog'
  }
}

const PostsPage = async (props: Props) => {
  const posts = await getPosts()
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Blog Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostsPage
