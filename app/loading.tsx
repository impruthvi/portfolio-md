export default function Loading() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <div className='animate-pulse space-y-8'>
          {/* Skeleton for intro section */}
          <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
            <div className='mt-2 flex-1 space-y-4 md:mt-0'>
              <div className='h-10 w-3/4 rounded bg-muted'></div>
              <div className='space-y-2'>
                <div className='h-4 rounded bg-muted'></div>
                <div className='h-4 rounded bg-muted'></div>
                <div className='h-4 w-5/6 rounded bg-muted'></div>
              </div>
            </div>
            <div className='h-44 w-44 rounded-lg bg-muted'></div>
          </div>

          {/* Skeleton for experience */}
          <div className='space-y-6 pb-24'>
            <div className='h-10 w-48 rounded bg-muted'></div>
            <div className='space-y-4'>
              <div className='h-6 w-1/3 rounded bg-muted'></div>
              <div className='h-4 w-1/4 rounded bg-muted'></div>
              <div className='h-4 w-1/5 rounded bg-muted'></div>
              <div className='space-y-2'>
                <div className='h-3 rounded bg-muted'></div>
                <div className='h-3 rounded bg-muted'></div>
              </div>
            </div>
          </div>

          {/* Skeleton for posts */}
          <div className='space-y-6'>
            <div className='h-10 w-48 rounded bg-muted'></div>
            <div className='grid gap-4 sm:grid-cols-2'>
              {[1, 2].map(i => (
                <div key={i} className='space-y-3 rounded-lg border p-4'>
                  <div className='h-6 w-3/4 rounded bg-muted'></div>
                  <div className='h-4 w-1/2 rounded bg-muted'></div>
                  <div className='space-y-2'>
                    <div className='h-3 rounded bg-muted'></div>
                    <div className='h-3 w-5/6 rounded bg-muted'></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
