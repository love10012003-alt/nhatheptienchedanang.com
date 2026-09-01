// GĐ2: Sitemap tự động 0đ - Tự sinh từ contractors + keywords
import { getContractors } from "@/lib/sheets"
import keywords from "@/data/keywords.json"
export default async function sitemap(){
  const contractors=await getContractors()
  const base="https://nhatheptienchedanang.com"
  const contractorUrls=contractors.map(c=>({url:`${base}/nha-thau/${c.slug}`, lastModified: new Date(), changeFrequency:'weekly' as const, priority:0.8}))
  const keywordUrls=keywords.map((k:string)=>({url:`${base}/bao-gia/${k.toLowerCase().replace(/\s+/g,'-')}`, lastModified: new Date(), changeFrequency:'weekly' as const, priority:0.6}))
  return [{url:base,lastModified:new Date(),changeFrequency:'daily' as const,priority:1},{url:`${base}/nha-thau`,lastModified:new Date(),changeFrequency:'daily' as const,priority:0.9}, ...contractorUrls, ...keywordUrls]
}
