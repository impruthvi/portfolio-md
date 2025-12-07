export interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', level: 'expert' },
      { name: 'Laravel', level: 'expert' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'MySQL', level: 'expert' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'GraphQL', level: 'intermediate' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'TailwindCSS', level: 'advanced' },
      { name: 'Vue.js', level: 'intermediate' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'advanced' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', level: 'expert' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Redis', level: 'intermediate' },
      { name: 'Prisma', level: 'intermediate' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'CI/CD', level: 'advanced' },
      { name: 'Git', level: 'expert' },
      { name: 'GitHub Actions', level: 'intermediate' },
      { name: 'CloudFormation', level: 'intermediate' }
    ]
  },
  {
    category: 'Tools & Testing',
    skills: [
      { name: 'Vitest', level: 'advanced' },
      { name: 'Jest', level: 'advanced' },
      { name: 'PHPUnit', level: 'advanced' },
      { name: 'ESLint', level: 'advanced' },
      { name: 'Prettier', level: 'advanced' },
      { name: 'Postman', level: 'advanced' }
    ]
  }
]
