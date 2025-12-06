export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'HTML5',
      'CSS3'
    ]
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PHP', 'Laravel', 'Express.js', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, S3, Lambda, CloudFormation)',
      'Docker',
      'CI/CD',
      'Git',
      'GitHub Actions',
      'Vercel'
    ]
  },
  {
    category: 'Tools & Testing',
    skills: [
      'Vitest',
      'Jest',
      'ESLint',
      'Prettier',
      'VS Code',
      'Postman',
      'npm/bun'
    ]
  },
  {
    category: 'Other',
    skills: [
      'MDX',
      'Socket.io',
      'Zod',
      'React Hook Form',
      'Server Actions',
      'Responsive Design'
    ]
  }
]
