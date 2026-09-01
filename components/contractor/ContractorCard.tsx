import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"
import { Contractor } from "@/lib/sheets"
export default function ContractorCard({ c }: { c: Contractor }){
  return <Card className="hover:shadow-md transition">
    <div className="flex justify-between">
      <h3 className="font-bold">{c.name}</h3>
      {c.verified && <Badge type="verified">Đã xác minh</Badge>}
      {c.premium && <Badge type="premium">Premium</Badge>}
    </div>
    <p className="text-sm text-slate-500">{c.address} - {c.district}</p>
    <div className="flex gap-2 mt-2">{c.tags.map(t => <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>)}</div>
    <div className="mt-3 flex justify-between items-center">
      <span className="text-sm">⭐ {c.rating} ({c.reviews})</span>
      <div className="flex gap-2">
        <a href={`/nha-thau/${c.slug}`} className="text-primary text-sm">Xem hồ sơ</a>
        <a href={`/nha-thau/${c.slug}#lead`} className="bg-accent text-white text-sm px-3 py-1 rounded-xl">Nhận báo giá</a>
      </div>
    </div>
  </Card>
}
