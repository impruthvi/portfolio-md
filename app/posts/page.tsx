import { getPosts } from '@/actions/posts'
import PostsWithSearch from '@/components/posts-with-search'
import React from 'react'
import { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: 'Blog Posts | IMPRUTHVI - Developer',
  description:
    'Explore blog posts and technical insights by IMPRUTHVI, a passionate developer sharing knowledge and experiences in software development.',
  openGraph: {
    title: 'Blog Posts | IMPRUTHVI - Developer',
    description:
      'Explore blog posts and technical insights by IMPRUTHVI, a passionate developer sharing knowledge and experiences in software development.',
    type: 'website'
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
