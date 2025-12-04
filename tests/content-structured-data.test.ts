import { describe, it, expect, afterEach } from 'vitest'
import {
  getBlogPostStructuredData,
  getProjectStructuredData
} from '@/lib/content-structured-data'

describe('getBlogPostStructuredData', () => {
  afterEach(() => {
    process.env.NEXT_PUBLIC_URL = 'https://impruthvi.me'
  })

  it('should return valid BlogPosting schema', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('BlogPosting')
    expect(data.headline).toBe('Test Post')
    expect(data.description).toBe('Test description')
  })

  it('should use default base URL when env not set', () => {
    delete process.env.NEXT_PUBLIC_URL

    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data.url).toBe('https://impruthvi.me/posts/test-post')
  })

  it('should use custom base URL from env', () => {
    process.env.NEXT_PUBLIC_URL = 'https://custom-domain.com'

    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data.url).toBe('https://custom-domain.com/posts/test-post')
  })

  it('should include author information', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'John Doe'
    )

    expect(data.author['@type']).toBe('Person')
    expect(data.author.name).toBe('John Doe')
    expect(data.author.url).toBe('https://impruthvi.me')
  })

  it('should include publisher information', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data.publisher['@type']).toBe('Person')
    expect(data.publisher.name).toBe('Pruthvisinh Rajput')
    expect(data.publisher.logo['@type']).toBe('ImageObject')
  })

  it('should use custom image when provided', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author',
      '/images/custom.jpg'
    )

    expect(data.image).toBe('https://impruthvi.me/images/custom.jpg')
  })

  it('should use default image when not provided', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data.image).toBe('https://impruthvi.me/images/authors/impruthvi.jpg')
  })

  it('should include publication dates', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data.datePublished).toBe('2023-12-01')
    expect(data.dateModified).toBe('2023-12-01')
  })

  it('should include mainEntityOfPage', () => {
    const data = getBlogPostStructuredData(
      'Test Post',
      'Test description',
      'test-post',
      '2023-12-01',
      'Test Author'
    )

    expect(data.mainEntityOfPage['@type']).toBe('WebPage')
    expect(data.mainEntityOfPage['@id']).toBe(
      'https://impruthvi.me/posts/test-post'
    )
  })
})

describe('getProjectStructuredData', () => {
  afterEach(() => {
    process.env.NEXT_PUBLIC_URL = 'https://impruthvi.me'
  })

  it('should return valid Article schema', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('Article')
    expect(data.headline).toBe('Test Project')
    expect(data.description).toBe('Test description')
  })

  it('should use projects URL path', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data.url).toBe('https://impruthvi.me/projects/test-project')
  })

  it('should use custom base URL from env', () => {
    process.env.NEXT_PUBLIC_URL = 'https://custom-domain.com'

    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data.url).toBe('https://custom-domain.com/projects/test-project')
  })

  it('should include author information', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Jane Smith'
    )

    expect(data.author['@type']).toBe('Person')
    expect(data.author.name).toBe('Jane Smith')
  })

  it('should include publisher information', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data.publisher['@type']).toBe('Person')
    expect(data.publisher.name).toBe('Pruthvisinh Rajput')
  })

  it('should use custom image when provided', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author',
      '/images/project-custom.jpg'
    )

    expect(data.image).toBe('https://impruthvi.me/images/project-custom.jpg')
  })

  it('should use default image when not provided', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data.image).toBe('https://impruthvi.me/images/authors/impruthvi.jpg')
  })

  it('should include publication dates', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data.datePublished).toBe('2023-12-01')
    expect(data.dateModified).toBe('2023-12-01')
  })

  it('should include mainEntityOfPage', () => {
    const data = getProjectStructuredData(
      'Test Project',
      'Test description',
      'test-project',
      '2023-12-01',
      'Test Author'
    )

    expect(data.mainEntityOfPage['@type']).toBe('WebPage')
    expect(data.mainEntityOfPage['@id']).toBe(
      'https://impruthvi.me/projects/test-project'
    )
  })
})
