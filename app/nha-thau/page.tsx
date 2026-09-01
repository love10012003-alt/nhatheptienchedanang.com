import { getContractors, getDistricts } from "@/lib/sheets"
import ContractorGrid from "@/components/contractor/ContractorGrid"
import ContractorFilter from "@/components/contractor/ContractorFilter"
export default async function Page(){
  const [contractors, districts] = await Promise.all([getContractors(), getDistricts()])
  return <main className="max-w-6xl mx-auto px-4 mt-6">
    <h1 className="text-2xl font-bold">50+ Nhà Thầu Thép Tiền Chế Đà Nẵng - Đã Xác Minh</h1>
    <p className="text-slate-500">Tự động quét mỗi đêm lúc 2h sáng - Dữ liệu từ Google Sheet</p>
    <div className="mt-4"><ContractorFilter districts={districts} /></div>
    <ContractorGrid contractors={contractors} />
  </main>
}
