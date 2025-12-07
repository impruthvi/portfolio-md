import Image from 'next/image'
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
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
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
