import { z } from 'zod'

export const MDXFrontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  summary: z.string().min(10, 'Summary should be at least 10 characters'),
  image: z.string().optional(),
  author: z.string().default('Pruthvisinh Rajput'),
  publishedAt: z.string().refine(
    date => {
      const parsed = new Date(date)
      return !isNaN(parsed.getTime())
    },
    { message: 'Invalid date format' }
  ),
  slug: z.string()
})

export type MDXFrontmatter = z.infer<typeof MDXFrontmatterSchema>
