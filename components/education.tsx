import { educationData } from '@/lib/education-data'
import FadeIn from './fade-in'

export default function Education() {
  return (
    <section className='pb-24'>
      <div>
        <FadeIn>
          <h2 className='title mb-12'>Education</h2>
        </FadeIn>
        <div className='space-y-6'>
          {educationData.map((edu, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className='rounded-lg border border-border bg-card p-6'>
              <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold'>{edu.degree}</h3>
                  <p className='text-sm text-muted-foreground'>{edu.field}</p>
                </div>
                <div className='text-sm text-muted-foreground md:text-right'>
                  <p>{edu.date}</p>
                </div>
              </div>
              <div className='mt-2'>
                <p className='font-medium'>{edu.institution}</p>
                <p className='text-sm text-muted-foreground'>{edu.location}</p>
              </div>
              {edu.description && (
                <p className='mt-4 text-sm text-muted-foreground'>
                  {edu.description}
                </p>
              )}
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
