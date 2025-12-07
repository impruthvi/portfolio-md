import Link from 'next/link'
import { getPosts } from '@/actions/posts'
import Posts from '@/components/posts'
import FadeIn from './fade-in'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-24'>
      <div>
        <FadeIn>
          <h2 className='title mb-12'>Recent posts</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <Posts posts={posts} />
        </FadeIn>
        <FadeIn delay={200}>
          <Link
            href='/posts'
            className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
          >
            <span>All posts</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
