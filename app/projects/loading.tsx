export default function ProjectsLoading() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='mb-12 h-10 w-48 animate-pulse rounded bg-muted'></div>

        {/* Projects grid skeleton */}
        <div className='grid gap-10 sm:grid-cols-2'>
          {[1, 2, 3, 4].map(i => (
            <article key={i} className='animate-pulse space-y-3'>
              <div className='aspect-video w-full rounded-lg bg-muted'></div>
              <div className='h-7 w-3/4 rounded bg-muted'></div>
              <div className='h-4 w-1/3 rounded bg-muted'></div>
              <div className='space-y-2'>
                <div className='h-3 rounded bg-muted'></div>
                <div className='h-3 w-5/6 rounded bg-muted'></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
