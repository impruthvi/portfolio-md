import { getPosts } from '@/actions/posts'
import PostsWithSearch from '@/components/posts-with-search'
import React from 'react'

type Props = {}

const PostsPage = async (props: Props) => {
  const posts = await getPosts()
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostsPage
