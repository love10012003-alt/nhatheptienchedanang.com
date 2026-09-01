// GĐ1: DUY NHẤT file này được đọc data - Có cache 1h (Professional)
import { getCache, setCache } from "./cache"
import fallback from "@/data/contractors.json"

export type Contractor = {
  slug: string; name: string; address: string; phone: string;
  rating: number; reviews: number; tags: string[]; district: string;
  verified: boolean; premium: boolean; images: string[];
}

export async function getContractors(): Promise<Contractor[]> {
  const cached = await getCache("contractors")
  if(cached) return cached
  // TODO: Gọi Google Sheets API khi có SHEET_ID
  // const res = await fetch(`https://sheets.googleapis.com/v4/...`, { next: { revalidate: 3600 } })
  const data = fallback as Contractor[]
  await setCache("contractors", data, 3600) // cache 1h -> giảm 95% request vào Sheet, không bị chặn
  return data
}
export async function getContractorBySlug(slug: string){
  const all = await getContractors()
  return all.find(c => c.slug === slug)
}
export async function getDistricts(){
  const all = await getContractors()
  return Array.from(new Set(all.map(c => c.district)))
}
