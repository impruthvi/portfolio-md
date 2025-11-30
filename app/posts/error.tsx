'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PostsError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Posts page error:', error)
  }, [error])

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='flex min-h-[400px] flex-col items-center justify-center text-center'>
          <div className='mb-8 text-6xl'>📝❌</div>
          <h1 className='title mb-4'>Failed to load blog posts</h1>
          <p className='mb-8 text-muted-foreground'>
            We couldn&apos;t load the blog posts. This might be a temporary issue.
          </p>
          <div className='flex gap-4'>
            <Button onClick={reset} variant='default'>
              Try again
            </Button>
            <Button asChild variant='outline'>
              <Link href='/'>Go back home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
