import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"
import Image from "next/image"
import { Contractor } from "@/lib/sheets"
export default function ContractorCard({c}:{c:Contractor}){
  return <Card className="hover:shadow-md transition">
    <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
      <Image src={c.images[0]} alt={c.name} fill className="object-cover" />
    </div>
    <div className="flex justify-between"><h3 className="font-bold">{c.name}</h3><div className="flex gap-1">{c.verified&&<Badge type="verified">✓</Badge>}{c.premium&&<Badge type="premium">Premium</Badge>}</div></div>
    <p className="text-sm text-slate-500">{c.district} - ⭐ {c.rating} ({c.reviews})</p>
    <div className="flex gap-2 mt-2">{c.tags.map(t=><span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>)}</div>
    <div className="mt-3 flex justify-between"><a href={`/nha-thau/${c.slug}`} className="text-primary text-sm">Hồ sơ</a><a href={`/nha-thau/${c.slug}#lead`} className="bg-accent text-white text-sm px-3 py-1 rounded-xl">Báo giá</a></div>
  </Card>
}