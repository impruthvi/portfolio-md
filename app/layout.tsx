import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://impruthvi.me'),
  title: {
    default: 'IMPRUTHVI - Full-Stack Developer',
    template: '%s | IMPRUTHVI'
  },
  description:
    'Full-stack developer creating scalable web applications with expertise in JavaScript, TypeScript, React, and Node.js. Passionate about innovative technology solutions.',
  keywords: [
    'full-stack developer',
    'web development',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'software engineering',
    'web applications',
    'IMPRUTHVI'
  ],
  authors: [{ name: 'IMPRUTHVI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://impruthvi.me',
    siteName: 'IMPRUTHVI Portfolio',
    title: 'IMPRUTHVI - Full-Stack Developer',
    description:
      'Full-stack developer creating scalable web applications with expertise in JavaScript, TypeScript, React, and Node.js.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IMPRUTHVI - Full-Stack Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMPRUTHVI - Full-Stack Developer',
    description:
      'Full-stack developer creating scalable web applications with expertise in JavaScript, TypeScript, React, and Node.js.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://impruthvi.me'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  category: 'Technology',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
