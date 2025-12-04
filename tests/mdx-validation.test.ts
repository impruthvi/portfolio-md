import { describe, it, expect } from 'vitest'
import { MDXFrontmatterSchema } from '@/lib/mdx-validation'

describe('MDXFrontmatterSchema', () => {
  it('should validate correct frontmatter', () => {
    const validData = {
      title: 'Test Post',
      summary: 'This is a test summary with enough characters',
      slug: 'test-post',
      publishedAt: '2023-12-01'
    }

    const result = MDXFrontmatterSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should add default author when not provided', () => {
    const data = {
      title: 'Test Post',
      summary: 'This is a test summary with enough characters',
      slug: 'test-post',
      publishedAt: '2023-12-01'
    }

    const result = MDXFrontmatterSchema.parse(data)
    expect(result.author).toBe('Pruthvisinh Rajput')
  })

  it('should accept custom author', () => {
    const data = {
      title: 'Guest Post',
      summary: 'This is a guest post summary',
      slug: 'guest-post',
      publishedAt: '2023-12-01',
      author: 'Guest Author'
    }

    const result = MDXFrontmatterSchema.parse(data)
    expect(result.author).toBe('Guest Author')
  })

  it('should accept optional image field', () => {
    const data = {
      title: 'Post with Image',
      summary: 'Summary for post with image',
      slug: 'post-image',
      publishedAt: '2023-12-01',
      image: '/images/test.jpg'
    }

    const result = MDXFrontmatterSchema.parse(data)
    expect(result.image).toBe('/images/test.jpg')
  })

  it('should reject empty title', () => {
    const invalidData = {
      title: '',
      summary: 'This is a valid summary',
      slug: 'test-post',
      publishedAt: '2023-12-01'
    }

    const result = MDXFrontmatterSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Title is required')
    }
  })

  it('should reject summary with less than 10 characters', () => {
    const invalidData = {
      title: 'Test Post',
      summary: 'Short',
      slug: 'test-post',
      publishedAt: '2023-12-01'
    }

    const result = MDXFrontmatterSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Summary should be at least 10 characters'
      )
    }
  })

  it('should reject invalid date format', () => {
    const invalidData = {
      title: 'Test Post',
      summary: 'This is a valid summary',
      slug: 'test-post',
      publishedAt: 'not-a-date'
    }

    const result = MDXFrontmatterSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid date format')
    }
  })

  it('should accept valid ISO date format', () => {
    const data = {
      title: 'Test Post',
      summary: 'This is a valid summary',
      slug: 'test-post',
      publishedAt: '2023-12-01T10:30:00Z'
    }

    const result = MDXFrontmatterSchema.safeParse(data)
    expect(result.success).toBe(true)
  })

  it('should reject missing required fields', () => {
    const invalidData = {
      title: 'Test Post'
    }

    const result = MDXFrontmatterSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
