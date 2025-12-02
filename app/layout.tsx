import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { cn } from '@/lib/utils'
import { getPersonStructuredData } from '@/lib/structured-data'

import './globals.css'
import Providers from '@/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://impruthvi.me'),
  title: {
    default: 'IMPRUTHVI - Pruthvisinh Rajput - Full-Stack Developer',
    template: '%s | IMPRUTHVI - Pruthvisinh Rajput'
  },
  description:
    'Pruthvisinh Rajput, also known as IMPRUTHVI, is a full-stack developer creating scalable web applications with expertise in JavaScript, TypeScript, React, and Node.js. Passionate about innovative technology solutions.',
  keywords: [
    'Pruthvisinh Rajput',
    'IMPRUTHVI',
    'full-stack developer',
    'web development',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'software engineering',
    'web applications'
  ],
  authors: [{ name: 'Pruthvisinh Rajput (IMPRUTHVI)' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://impruthvi.me',
    siteName: 'IMPRUTHVI Portfolio',
    title: 'IMPRUTHVI - Pruthvisinh Rajput - Full-Stack Developer',
    description:
      'Pruthvisinh Rajput, also known as IMPRUTHVI, is a full-stack developer creating scalable web applications with expertise in JavaScript, TypeScript, React, and Node.js.',
    images: [
      {
        url: '/authors/impruthvi.jpg',
        width: 1200,
        height: 630,
        alt: 'IMPRUTHVI - Pruthvisinh Rajput - Full-Stack Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMPRUTHVI - Pruthvisinh Rajput - Full-Stack Developer',
    description:
      'Pruthvisinh Rajput, also known as IMPRUTHVI, is a full-stack developer creating scalable web applications with expertise in JavaScript, TypeScript, React, and Node.js.',
    images: ['/authors/impruthvi.jpg'],
    creator: '@impruthvi13',
    site: '@impruthvi13'
  },
  alternates: {
    canonical: 'https://impruthvi.me',
    types: {
      'application/rss+xml': 'https://impruthvi.me/rss.xml'
    }
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
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
  applicationName: 'IMPRUTHVI Portfolio',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'IMPRUTHVI'
  },
  formatDetection: {
    telephone: false
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
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
        {/* Skip to main content link for accessibility */}
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring'
        >
          Skip to main content
        </a>

        <Script
          src="https://voxa-widget.vercel.app/widget.js"
          data-organization-id="org_32vebynMvDQfCJBEzu7CtfAmYWW"
          strategy="afterInteractive"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonStructuredData())
          }}
        />

        <Providers>
          <Header />
          <main id='main-content' className='grow'>
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
