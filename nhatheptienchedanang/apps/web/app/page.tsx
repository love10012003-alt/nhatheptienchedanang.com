import { Hero, ContractorCard } from "@repo/ui";
import { getContractors } from "@repo/database";

export default async function Home(){
  const contractors = await getContractors().catch(()=>[]);
  return (
    <main>
      <Hero title="Chợ Thép Tiền Chế Đà Nẵng" subtitle="50+ nhà thầu Liên Chiểu, Cẩm Lệ, Hòa Vang đã xác minh - Báo giá 2h" />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {contractors.map((c:any)=>(<ContractorCard key={c.id} data={c} />))}
      </div>
    </main>
  )
}
