import Intro from '@/components/intro'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import RecentPosts from '@/components/recent-post'
import RecentProjects from '@/components/recent-projects'

const Home = () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://impruthvi.me'

  // Structured data for homepage
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pruthvisinh Rajput',
    alternateName: 'Pruthvi Rajput',
    url: baseUrl,
    image: `${baseUrl}/images/authors/impruthvi.jpg`,
    jobTitle: 'Software Engineer',
    description:
      'Backend-focused full-stack developer with 4+ years of experience building robust server-side applications and APIs using PHP, Laravel, Node.js, and modern databases.',
    worksFor: {
      '@type': 'Organization',
      name: 'Vivansh Infotech'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Gujarat Technological University'
    },
    knowsAbout: [
      'PHP',
      'Laravel',
      'Node.js',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'RESTful APIs',
      'Database Optimization'
    ],
    sameAs: [
      'https://github.com/impruthvi',
      'https://www.linkedin.com/in/pruthvisinh-rajput-9a4711194/',
      'https://twitter.com/impruthvi13'
    ]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pruthvisinh Rajput - Portfolio',
    url: baseUrl,
    description:
      'Personal portfolio and blog of Pruthvisinh Rajput, a backend-focused full-stack developer specializing in PHP, Laravel, Node.js, and cloud architecture.',
    author: {
      '@type': 'Person',
      name: 'Pruthvisinh Rajput'
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <Skills />
        <Experience />
        <Education />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
    </>
  )
}

export default Home
