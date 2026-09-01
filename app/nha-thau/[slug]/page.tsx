import { getContractorBySlug } from "@/lib/sheets"
import LeadForm from "@/components/lead/LeadForm"
export default async function Page({ params }: { params: { slug: string } }){
  const c = await getContractorBySlug(params.slug)
  if(!c) return <div>Không tìm thấy nhà thầu</div>
  return <main className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-3 gap-6">
    <div className="col-span-2 bg-white p-6 rounded-xl border">
      <h1 className="text-2xl font-bold">{c.name}</h1>
      <p>{c.address}</p>
      <p className="mt-2">⭐ {c.rating} ({c.reviews} đánh giá) - {c.tags.join(", ")}</p>
      <div className="mt-6">
        <h3 className="font-bold">Dự án đã làm</h3>
        <div className="grid grid-cols-3 gap-2 mt-2">{c.images.map((img,i) => <img key={i} src={img} className="rounded-xl" />)}</div>
      </div>
      <div className="mt-6 p-4 bg-orange-50 rounded-xl">Trang này có thể bán dạng {c.slug}.nhatheptienchedanang.com - 990k/năm - Thu tiền qua SePay tự động</div>
    </div>
    <div><LeadForm /></div>
  </main>
}
