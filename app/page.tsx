import ContractorGrid from "@/components/contractor/ContractorGrid"
import LeadForm from "@/components/lead/LeadForm"
import { getContractors } from "@/lib/sheets"
export default async function Home(){
  const contractors = await getContractors()
  return <main className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-3 gap-6">
    <div className="col-span-2">
      <h1 className="text-3xl font-bold">Nhà Thép Tiền Chế Đà Nẵng - Chịu Bão Cấp 12</h1>
      <p className="text-slate-600 mt-2">50+ nhà thầu đã xác minh - Báo giá trong 2h - 0đ VPS Vercel + GitHub</p>
      <div className="mt-6 bg-white p-4 rounded-xl border">
        <h2 className="font-bold">Bảng giá tham khảo 2026 (tự động cập nhật từ Sheet)</h2>
        <table className="w-full mt-3 text-sm"><tbody><tr><td>Nhà xưởng 500m2</td><td>450tr - 650tr</td></tr><tr><td>Nhà xưởng 1000m2</td><td>900tr - 1.3 tỷ</td></tr></tbody></table>
      </div>
      <h2 className="font-bold mt-8 mb-3">Nhà thầu nổi bật (Premium)</h2>
      <ContractorGrid contractors={contractors.filter(c => c.premium)} />
    </div>
    <div><LeadForm /></div>
  </main>
}
