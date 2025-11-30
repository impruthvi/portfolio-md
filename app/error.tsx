'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='flex min-h-[400px] flex-col items-center justify-center text-center'>
          <div className='mb-8 text-6xl'>😵</div>
          <h1 className='title mb-4'>Oops! Something went wrong</h1>
          <p className='mb-8 text-muted-foreground'>
            {error.message || "Don't worry, it's not your fault. Something broke on our end."}
          </p>
          <div className='flex gap-4'>
            <Button onClick={reset} variant='default'>
              Try again
            </Button>
            <Button asChild variant='outline'>
              <Link href='/'>Go back home</Link>
            </Button>
          </div>
          {process.env.NODE_ENV === 'development' && error.digest && (
            <p className='mt-4 text-xs text-muted-foreground'>
              Error digest: {error.digest}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
