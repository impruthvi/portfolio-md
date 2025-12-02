export function getPersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pruthvisinh Rajput',
    alternateName: 'IMPRUTHVI',
    url: 'https://impruthvi.me',
    image: 'https://impruthvi.me/images/authors/impruthvi.jpg',
    sameAs: [
      'https://github.com/impruthvi',
      'https://www.linkedin.com/in/pruthvisinh-rajput-9a4711194/',
      'https://twitter.com/impruthvi13'
    ],
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Vivansh Infotech'
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Laravel',
      'PHP',
      'AWS',
      'Web Development',
      'Software Engineering'
    ],
    description:
      'Full-stack developer with expertise in building scalable web applications using modern technologies like Next.js, React, Node.js, and Laravel.',
    email: 'contact@impruthvi.me'
  }
}
