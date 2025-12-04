import { describe, it, expect } from 'vitest'
import { formatDate } from '../lib/utils'

describe('formatDate', () => {
  it('formats ISO date strings to human readable format (en-US)', () => {
    const result = formatDate('2025-12-04')
    expect(result).toBe('December 4, 2025')
  })
})
