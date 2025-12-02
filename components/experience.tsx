import { experienceData } from '@/lib/experience-data'

export default function Experience() {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Experience</h2>

        {experienceData.map((item, index) => (
          <div className='experience-item mb-8' key={index}>
            <h3 className='text-2xl font-semibold text-foreground'>
              {item.company}
            </h3>
            <p className='text-lg font-medium text-foreground/90'>
              {item.position}
            </p>
            <p className='text-md text-muted-foreground'>
              {item.date}
            </p>
            <p className='text-base text-foreground/80'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
