import Image from 'next/image'
import authorImage from '@/public/images/authors/impruthvi.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Pruthvisinh Rajput.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Full-stack developer with 4+ years of experience building scalable
          web applications using React, Next.js, and Node.js. Specialized in
          modern JavaScript frameworks, cloud architecture (AWS), and
          performance optimization. Proven track record of delivering
          high-quality features that improve user experience and drive business
          growth. Currently contributing to enterprise solutions at Vivansh
          Infotech while continuously expanding expertise in modern development
          practices.
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
