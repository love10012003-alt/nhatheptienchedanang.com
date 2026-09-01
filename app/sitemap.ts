// GĐ2: Sitemap tự động 0đ - Tự sinh từ GĐ1 (contractors) + keywords
// Vercel tự cache 1 ngày - Professional
import { getContractors } from "@/lib/sheets"
import keywords from "@/data/keywords.json"
import { SITE_URL } from "@/lib/seo"

export const revalidate = 86400 // 1 ngày - GĐ2 Pro

export default async function sitemap(){
  const contractors = await getContractors()
  const base = SITE_URL

  // 1. Trang chính
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${base}/nha-thau`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${base}/bao-gia`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // 2. 50+ trang profile nhà thầu - GĐ1 -> GĐ2 liên kết
  const contractorUrls = contractors.map(c => ({
    url: `${base}/nha-thau/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: c.premium ? 0.9 : 0.7 // Premium ưu tiên cao hơn
  }))

  // 3. 100+ trang Programmatic SEO từ keywords - GĐ2 tự lớn
  const keywordUrls = (keywords as string[]).map((k: string) => {
    const slug = k.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-')
    return {
      url: `${base}/bao-gia/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6
    }
  })

  return [...staticPages, ...contractorUrls, ...keywordUrls]
}
