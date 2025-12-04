import { describe, it, expect } from 'vitest'
import { getPersonStructuredData } from '@/lib/structured-data'

describe('getPersonStructuredData', () => {
  it('should return valid Person schema', () => {
    const data = getPersonStructuredData()

    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('Person')
    expect(data.name).toBe('Pruthvisinh Rajput')
  })

  it('should include alternate name', () => {
    const data = getPersonStructuredData()

    expect(data.alternateName).toBe('IMPRUTHVI')
  })

  it('should include website URL', () => {
    const data = getPersonStructuredData()

    expect(data.url).toBe('https://impruthvi.me')
  })

  it('should include profile image', () => {
    const data = getPersonStructuredData()

    expect(data.image).toBe('https://impruthvi.me/images/authors/impruthvi.jpg')
  })

  it('should include social media links', () => {
    const data = getPersonStructuredData()

    expect(data.sameAs).toContain('https://github.com/impruthvi')
    expect(data.sameAs).toContain(
      'https://www.linkedin.com/in/pruthvisinh-rajput-9a4711194/'
    )
    expect(data.sameAs).toContain('https://twitter.com/impruthvi13')
    expect(data.sameAs).toHaveLength(3)
  })

  it('should include job title', () => {
    const data = getPersonStructuredData()

    expect(data.jobTitle).toBe('Full-Stack Developer')
  })

  it('should include organization', () => {
    const data = getPersonStructuredData()

    expect(data.worksFor['@type']).toBe('Organization')
    expect(data.worksFor.name).toBe('Vivansh Infotech')
  })

  it('should include skills/knowledge', () => {
    const data = getPersonStructuredData()

    expect(data.knowsAbout).toContain('JavaScript')
    expect(data.knowsAbout).toContain('TypeScript')
    expect(data.knowsAbout).toContain('React')
    expect(data.knowsAbout).toContain('Next.js')
    expect(data.knowsAbout).toContain('Laravel')
    expect(data.knowsAbout).toContain('AWS')
  })

  it('should include description', () => {
    const data = getPersonStructuredData()

    expect(data.description).toBeTruthy()
    expect(data.description).toContain('Full-stack developer')
  })

  it('should include email', () => {
    const data = getPersonStructuredData()

    expect(data.email).toBe('contact@impruthvi.me')
  })
})
