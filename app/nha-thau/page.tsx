import { getContractors, getDistricts } from "@/lib/sheets"
import ContractorGrid from "@/components/contractor/ContractorGrid"
import ContractorFilter from "@/components/contractor/ContractorFilter"
export const revalidate = 3600 // GĐ1
export default async function Page(){
  const [contractors,districts]=await Promise.all([getContractors(),getDistricts()])
  return <main className="max-w-6xl mx-auto px-4 mt-6">
    <h1 className="text-2xl font-bold">50+ Nhà Thầu - GĐ1 cache + GĐ2 sitemap + GĐ3 bảo mật</h1>
    <ContractorFilter districts={districts}/>
    <ContractorGrid contractors={contractors}/>
  </main>
}
