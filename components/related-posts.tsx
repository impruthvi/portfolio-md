import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { PostMetadata } from '@/actions/posts'
import { formatDate } from '@/lib/utils'

interface RelatedPostsProps {
  posts: PostMetadata[]
  currentSlug: string
}

export default function RelatedPosts({
  posts,
  currentSlug
}: RelatedPostsProps) {
  // Filter out current post and limit to 3
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className='mt-16 border-t pt-16'>
      <h2 className='mb-8 text-2xl font-semibold'>Related Posts</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {relatedPosts.map(post => (
          <article
            key={post.slug}
            className='group flex flex-col space-y-2 rounded-lg border p-4 transition-colors hover:bg-muted/50'
          >
            <Link href={`/posts/${post.slug}`}>
              <h3 className='line-clamp-2 font-semibold group-hover:text-primary'>
                {post.title}
              </h3>
            </Link>
            <p className='text-sm text-muted-foreground'>
              {formatDate(post.publishedAt ?? '')}
            </p>
            <p className='line-clamp-2 text-sm text-muted-foreground'>
              {post.summary}
            </p>
            <Link
              href={`/posts/${post.slug}`}
              className='inline-flex items-center text-sm font-medium text-primary hover:underline'
            >
              Read more
              <ArrowRightIcon className='ml-1 h-4 w-4' />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
