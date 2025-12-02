import { getPosts } from '@/actions/posts'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://impruthvi.me'
  const posts = await getPosts()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IMPRUTHVI - Pruthvisinh Rajput Blog</title>
    <link>${baseUrl}</link>
    <description>Technical insights, tutorials, and experiences from a full-stack developer</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        post => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/posts/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/posts/${post.slug}</guid>
      <description>${post.summary || ''}</description>
      <pubDate>${post.publishedAt ? new Date(post.publishedAt).toUTCString() : new Date().toUTCString()}</pubDate>
      <author>contact@impruthvi.me (Pruthvisinh Rajput)</author>
      ${post.image ? `<enclosure url="${baseUrl}${post.image}" type="image/webp"/>` : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
