// DUY NHẤT file này được phép đọc data nhà thầu - Single Source of Truth
// Sau này đổi từ Google Sheet sang Supabase chỉ sửa file này
import data from "@/data/contractors.json"

export type Contractor = {
  slug: string; name: string; address: string; phone: string;
  rating: number; reviews: number; tags: string[]; district: string;
  verified: boolean; premium: boolean; images: string[];
}

export async function getContractors(): Promise<Contractor[]> {
  // TODO: Thay bằng fetch Google Sheet khi có SHEET_ID
  // const res = await fetch(`https://sheets.googleapis.com/...`)
  return data as Contractor[]
}

export async function getContractorBySlug(slug: string){
  const all = await getContractors()
  return all.find(c => c.slug === slug)
}

export async function getDistricts(){
  const all = await getContractors()
  return Array.from(new Set(all.map(c => c.district)))
}
