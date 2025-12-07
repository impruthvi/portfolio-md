import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, ArrowRight } from 'lucide-react'
import authorImage from '@/public/images/authors/impruthvi.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Pruthvisinh Rajput.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Backend-focused full-stack developer with 4+ years of experience
          building robust server-side applications and APIs using PHP, Laravel,
          Node.js, and modern databases. Specialized in scalable architecture,
          database optimization, API design, and cloud infrastructure (AWS).
          Proficient in frontend technologies including React, Next.js, and
          Vue.js to deliver complete solutions. Proven track record of
          optimizing performance and building high-impact features for
          enterprise applications.
        </p>

        {/* Social Links */}
        <div className='mt-6 flex items-center gap-4'>
          <a
            href='https://github.com/impruthvi'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-secondary/80'
            aria-label='GitHub Profile'
          >
            <Github className='h-5 w-5' />
          </a>
          <a
            href='https://www.linkedin.com/in/pruthvisinh-rajput-9a4711194/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-secondary/80'
            aria-label='LinkedIn Profile'
          >
            <Linkedin className='h-5 w-5' />
          </a>
          <a
            href='https://twitter.com/impruthvi13'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-secondary/80'
            aria-label='X (Twitter) Profile'
          >
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
            </svg>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className='mt-8 flex flex-wrap items-center gap-4'>
          <Link
            href='/resume'
            className='inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90'
          >
            View Resume
            <ArrowRight className='h-4 w-4' />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/80'
          >
            Let&#39;s Talk
          </Link>
        </div>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg transition-all duration-300 grayscale hover:grayscale-0'
          src={authorImage}
          alt='Pruthvisinh Rajput'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
