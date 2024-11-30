import Image from 'next/image'
import authorImage from '@/public/images/authors/impruthvi.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Pruthvisinh Rajput.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I am a dedicated Software Developer with expertise in building web
          applications using Next.js, Node.js, React.js, Laravel, PHP, and a
          range of other modern libraries and frameworks. Additionally, I
          possess strong knowledge of AWS and server management, enabling me to
          deliver scalable and efficient solutions.
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
