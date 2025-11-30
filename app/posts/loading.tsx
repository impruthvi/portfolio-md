export default function PostsLoading() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='mb-12 h-10 w-48 animate-pulse rounded bg-muted'></div>

        {/* Search bar skeleton */}
        <div className='mb-12 h-9 w-full animate-pulse rounded bg-muted sm:w-1/2'></div>

        {/* Posts skeleton */}
        <div className='space-y-10'>
          {[1, 2, 3, 4].map(i => (
            <article key={i} className='animate-pulse space-y-3'>
              <div className='h-8 w-3/4 rounded bg-muted'></div>
              <div className='h-4 w-1/3 rounded bg-muted'></div>
              <div className='space-y-2'>
                <div className='h-4 rounded bg-muted'></div>
                <div className='h-4 w-5/6 rounded bg-muted'></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
