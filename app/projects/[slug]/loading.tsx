export default function ProjectLoading() {
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        {/* Back button skeleton */}
        <div className='mb-8 h-6 w-36 animate-pulse rounded bg-muted'></div>

        {/* Image skeleton */}
        <div className='relative mb-6 h-96 w-full animate-pulse overflow-hidden rounded-lg bg-muted'></div>

        {/* Header skeleton */}
        <header className='space-y-3'>
          <div className='h-10 w-2/3 animate-pulse rounded bg-muted'></div>
          <div className='h-4 w-1/3 animate-pulse rounded bg-muted'></div>
        </header>

        {/* Content skeleton */}
        <main className='prose mt-16 dark:prose-invert'>
          <div className='animate-pulse space-y-4'>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className='space-y-2'>
                <div className='h-4 rounded bg-muted'></div>
                <div className='h-4 rounded bg-muted'></div>
                <div className='h-4 w-5/6 rounded bg-muted'></div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  )
}
