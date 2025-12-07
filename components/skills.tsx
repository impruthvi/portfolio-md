import { skillsData } from '@/lib/skills-data'

const getLevelColor = (level: string) => {
  switch (level) {
    case 'expert':
      return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
    case 'advanced':
      return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
    case 'intermediate':
      return 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20'
    default:
      return 'bg-secondary text-secondary-foreground border-border'
  }
}

const getLevelDots = (level: string) => {
  switch (level) {
    case 'expert':
      return 3
    case 'advanced':
      return 2
    case 'intermediate':
      return 1
    default:
      return 0
  }
}

export default function Skills() {
  return (
    <section className='pb-24'>
      <div>
        <div className='mb-8'>
          <h2 className='title mb-4'>Skills & Technologies</h2>
          <div className='flex flex-wrap gap-3 text-sm'>
            <div className='flex items-center gap-2'>
              <span className='flex gap-0.5'>
                <span className='h-2 w-2 rounded-full bg-green-500' />
                <span className='h-2 w-2 rounded-full bg-green-500' />
                <span className='h-2 w-2 rounded-full bg-green-500' />
              </span>
              <span className='text-muted-foreground'>Expert</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='flex gap-0.5'>
                <span className='h-2 w-2 rounded-full bg-blue-500' />
                <span className='h-2 w-2 rounded-full bg-blue-500' />
                <span className='h-2 w-2 rounded-full bg-muted' />
              </span>
              <span className='text-muted-foreground'>Advanced</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='flex gap-0.5'>
                <span className='h-2 w-2 rounded-full bg-orange-500' />
                <span className='h-2 w-2 rounded-full bg-muted' />
                <span className='h-2 w-2 rounded-full bg-muted' />
              </span>
              <span className='text-muted-foreground'>Intermediate</span>
            </div>
          </div>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          {skillsData.map((category, index) => (
            <div
              key={index}
              className='rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md'
            >
              <h3 className='mb-4 text-lg font-semibold'>{category.category}</h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className='group relative flex items-center gap-2'
                  >
                    <span
                      className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-all hover:scale-105 ${getLevelColor(skill.level)}`}
                    >
                      {skill.name}
                    </span>
                    {/* Proficiency dots */}
                    <span className='flex gap-0.5'>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-1.5 rounded-full transition-all ${
                            i < getLevelDots(skill.level)
                              ? skill.level === 'expert'
                                ? 'bg-green-500'
                                : skill.level === 'advanced'
                                  ? 'bg-blue-500'
                                  : 'bg-orange-500'
                              : 'bg-muted'
                          }`}
                        />
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
