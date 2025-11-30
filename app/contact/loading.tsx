export default function ContactLoading() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='mb-8 h-10 w-64 animate-pulse rounded bg-muted'></div>

        {/* Form skeleton */}
        <div className='mt-16 animate-pulse space-y-6'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div className='h-10 rounded bg-muted'></div>
            <div className='h-10 rounded bg-muted'></div>
            <div className='h-32 rounded bg-muted sm:col-span-2'></div>
          </div>
          <div className='h-10 rounded bg-muted'></div>
        </div>
      </div>
    </section>
  )
}
