export interface ExperienceItem {
  company: string
  position: string
  date: string
  description: string
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'Vivansh Infotech',
    position: 'Software Engineer',
    date: 'Jun 2025 – Present',
    description:
      'Leading full-stack development of enterprise web applications using Next.js 15, React 19, and TypeScript. Architecting scalable backend solutions with Node.js and Laravel, serving 10K+ active users. Implementing CI/CD pipelines and AWS infrastructure optimization, reducing deployment time by 50%. Collaborating with cross-functional teams to deliver high-impact features while maintaining 95%+ code coverage through comprehensive testing.'
  },
  {
    company: 'Yudiz Solution',
    position: 'Back-End Developer',
    date: 'Jan 2022 – May 2025',
    description:
      'Developed and maintained 15+ production web applications using Laravel, PHP, and React.js, serving 50K+ monthly active users. Optimized database queries and API performance, reducing response times by 60% (from 800ms to 320ms average). Built RESTful APIs and integrated third-party services including payment gateways and cloud storage. Implemented automated testing with PHPUnit and Jest, achieving 85% code coverage. Mentored 3 junior developers in best practices and modern development workflows.'
  },
  {
    company: 'Adore India',
    position: 'Back-End Developer',
    date: 'May 2021 – Aug 2021',
    description:
      'Led a 4-person development team as Group Leader during intensive internship program. Successfully delivered 4 complete modules from requirements gathering to production deployment. Managed direct client communications, gathering requirements and providing technical solutions. Developed both backend (PHP, MySQL) and frontend (JavaScript, HTML/CSS) components. Gained hands-on experience in full project lifecycle management, agile methodologies, and team coordination.'
  }
]
