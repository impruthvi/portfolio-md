export function getBlogPostStructuredData(
  title: string,
  description: string,
  slug: string,
  publishedAt: string,
  author: string,
  image?: string
) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://impruthvi.me'

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: `${baseUrl}/posts/${slug}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: author,
      url: baseUrl
    },
    publisher: {
      '@type': 'Person',
      name: 'Pruthvisinh Rajput',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/authors/impruthvi.jpg`
      }
    },
    image: image
      ? `${baseUrl}${image}`
      : `${baseUrl}/images/authors/impruthvi.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/posts/${slug}`
    }
  }
}

export function getProjectStructuredData(
  title: string,
  description: string,
  slug: string,
  publishedAt: string,
  author: string,
  image?: string
) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://impruthvi.me'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${baseUrl}/projects/${slug}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: author,
      url: baseUrl
    },
    publisher: {
      '@type': 'Person',
      name: 'Pruthvisinh Rajput'
    },
    image: image
      ? `${baseUrl}${image}`
      : `${baseUrl}/images/authors/impruthvi.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/projects/${slug}`
    }
  }
}
