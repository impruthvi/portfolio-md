import ContactForm from '@/components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | IMPRUTHVI - Pruthvisinh Rajput',
  description:
    "Get in touch with Pruthvisinh Rajput (IMPRUTHVI), a passionate full-stack developer. Let's discuss your project and turn your ideas into reality.",
  openGraph: {
    title: 'Contact | IMPRUTHVI - Pruthvisinh Rajput',
    description:
      'Reach out to Pruthvisinh Rajput (IMPRUTHVI), a skilled full-stack developer, to discuss your project and explore innovative solutions.',
    type: 'website',
    images: [
      {
        url: '/images/authors/impruthvi.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Pruthvisinh Rajput (IMPRUTHVI)'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | IMPRUTHVI - Pruthvisinh Rajput',
    description:
      'Contact Pruthvisinh Rajput (IMPRUTHVI) to discuss your project and explore innovative solutions in web development.',
    images: ['/images/authors/impruthvi.jpg'],
    creator: '@impruthvi13'
  },
  alternates: {
    canonical: 'https://impruthvi.me/contact'
  },
  keywords: [
    'contact IMPRUTHVI',
    'Pruthvisinh Rajput contact',
    'developer contact form',
    'full-stack developer contact',
    'project inquiry',
    'web development services',
    'software development'
  ]
}

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
    </section>
  )
}
