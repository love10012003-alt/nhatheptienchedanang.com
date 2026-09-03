import { getContractorBySlug } from "@/lib/sheets"
import LeadForm from "@/components/lead/LeadForm"
import { ContractorJsonLd } from "@/components/seo/JsonLd"
export const revalidate = 3600
export async function generateMetadata({params}:{params:{slug:string}}){
  const c=await getContractorBySlug(params.slug)
  return {title: c? `${c.name} - Nhà Thép Tiền Chế Đà Nẵng` : "Không tìm thấy"}
}
export default async function Page({params}:{params:{slug:string}}){
  const c=await getContractorBySlug(params.slug)
  if(!c) return <div>Không tìm thấy</div>
  return <main className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-3 gap-6">
    <ContractorJsonLd c={c} />
    <div className="col-span-2 bg-white p-6 rounded-xl border">
      <h1 className="text-2xl font-bold">{c.name} - GĐ2 có Schema LocalBusiness</h1>
      <p>{c.address} - GĐ1 cache 1h - GĐ3 chống spam - GĐ5 bán được 990k/năm</p>
      <div className="mt-6 p-4 bg-orange-50 rounded-xl">GĐ5: Trang này bán dạng {c.slug}.nhatheptienchedanang.com - 990k/năm - SePay tự động</div>
    </div>
    <div><LeadForm/></div>
  </main>
}
