import { Metadata } from 'next'
import Link from 'next/link'
import { FileDown, Mail, Github, Linkedin } from 'lucide-react'
import { skillsData } from '@/lib/skills-data'
import { experienceData } from '@/lib/experience-data'
import { educationData } from '@/lib/education-data'

export const metadata: Metadata = {
  title: 'Resume - Pruthvisinh Rajput',
  description:
    'Full-stack developer with 4+ years of experience building scalable web applications using React, Next.js, and Node.js.'
}

export default function ResumePage() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-4xl'>
        {/* Header with download button */}
        <div className='mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
          <div>
            <h1 className='title mb-2 text-4xl'>Pruthvisinh Rajput</h1>
            <p className='text-lg text-muted-foreground'>
              Full-Stack Software Engineer
            </p>
          </div>
          <Link
            href='/Pruthvisinh_Rajput.pdf'
            target='_blank'
            className='flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80'
          >
            <FileDown className='h-4 w-4' />
            Download PDF
          </Link>
        </div>

        {/* Contact Info */}
        <div className='mb-12 flex flex-wrap gap-4 text-sm text-muted-foreground'>
          <a
            href='/contact'
            className='flex items-center gap-2 hover:text-foreground'
          >
            <Mail className='h-4 w-4' />
            Contact Me
          </a>
          <a
            href='https://github.com/impruthvi'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-foreground'
          >
            <Github className='h-4 w-4' />
            github.com/impruthvi
          </a>
          <a
            href='https://www.linkedin.com/in/pruthvisinh-rajput-9a4711194/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-foreground'
          >
            <Linkedin className='h-4 w-4' />
            linkedin.com/in/impruthvi
          </a>
        </div>

        {/* Professional Summary */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>Professional Summary</h2>
          <p className='text-muted-foreground'>
            Full-stack developer with 4+ years of experience building scalable
            web applications using React, Next.js, and Node.js. Specialized in
            modern JavaScript frameworks, cloud architecture (AWS), and
            performance optimization. Proven track record of delivering
            high-quality features that improve user experience and drive
            business growth. Currently contributing to enterprise solutions at
            Vivansh Infotech while continuously expanding expertise in modern
            development practices.
          </p>
        </section>

        {/* Skills */}
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold'>Technical Skills</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            {skillsData.map((category, index) => (
              <div key={index} className='rounded-lg border border-border p-4'>
                <h3 className='mb-3 font-semibold'>{category.category}</h3>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='rounded bg-secondary px-2 py-1 text-xs'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold'>Work Experience</h2>
          <div className='space-y-8'>
            {experienceData.map((exp, index) => (
              <div key={index}>
                <div className='mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center'>
                  <div>
                    <h3 className='text-lg font-semibold'>{exp.position}</h3>
                    <p className='font-medium text-muted-foreground'>
                      {exp.company}
                    </p>
                  </div>
                  <p className='text-sm text-muted-foreground md:text-right'>
                    {exp.date}
                  </p>
                </div>
                <p className='text-sm text-muted-foreground'>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold'>Education</h2>
          <div className='space-y-6'>
            {educationData.map((edu, index) => (
              <div key={index}>
                <div className='mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center'>
                  <div>
                    <h3 className='text-lg font-semibold'>{edu.degree}</h3>
                    <p className='font-medium text-muted-foreground'>
                      {edu.institution}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      {edu.location}
                    </p>
                  </div>
                  <p className='text-sm text-muted-foreground md:text-right'>
                    {edu.date}
                  </p>
                </div>
                {edu.description && (
                  <p className='text-sm text-muted-foreground'>
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
