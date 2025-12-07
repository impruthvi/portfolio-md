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
      'Architecting and developing scalable backend systems using Node.js, Laravel, and PHP, serving 10K+ active users. Designing RESTful APIs and optimizing database schemas (MySQL, PostgreSQL) for high-performance data processing. Implementing AWS infrastructure (EC2, S3, Lambda, CloudFormation) and CI/CD pipelines, reducing deployment time by 50%. Contributing to frontend development with Next.js 15 and React 19 when needed, maintaining 95%+ code coverage through comprehensive testing.'
  },
  {
    company: 'Yudiz Solution',
    position: 'Back-End Developer',
    date: 'Jan 2022 – May 2025',
    description:
      'Developed and maintained backend systems for 15+ production applications using Laravel, PHP, and MySQL/PostgreSQL, serving 50K+ monthly active users. Designed and built RESTful APIs, microservices architecture, and database schemas. Optimized complex database queries and API performance, reducing response times by 60% (from 800ms to 320ms average). Integrated third-party services including payment gateways (Stripe, PayPal), AWS S3, and authentication systems. Implemented automated testing with PHPUnit achieving 85% backend code coverage. Collaborated with frontend teams and mentored 3 junior developers.'
  },
  {
    company: 'Adore India',
    position: 'Back-End Developer',
    date: 'May 2021 – Aug 2021',
    description:
      'Led a 4-person development team as Group Leader during intensive internship program. Successfully delivered 4 complete modules from requirements gathering to production deployment. Managed direct client communications, gathering requirements and providing technical solutions. Developed both backend (PHP, MySQL) and frontend (JavaScript, HTML/CSS) components. Gained hands-on experience in full project lifecycle management, agile methodologies, and team coordination.'
  }
]
