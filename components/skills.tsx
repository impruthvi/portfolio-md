import { skillsData } from '@/lib/skills-data'

export default function Skills() {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Skills</h2>
        <div className='grid gap-6 md:grid-cols-2'>
          {skillsData.map((category, index) => (
            <div
              key={index}
              className='rounded-lg border border-border bg-card p-6'
            >
              <h3 className='mb-4 text-lg font-semibold'>{category.category}</h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
