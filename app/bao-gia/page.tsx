import Link from "next/link"
import keywords from "@/data/keywords.json"
import { seoTitle } from "@/lib/seo"
export const revalidate = 86400
export default function Page(){
  return <main className="max-w-6xl mx-auto px-4 mt-6">
    <h1 className="text-2xl font-bold">Báo giá nhà thép tiền chế Đà Nẵng - GĐ2 Programmatic SEO</h1>
    <p className="text-slate-500">GĐ2 tự sinh 100+ trang từ keywords - Mỗi trang đánh 1 từ khóa dài - Dễ lên top hơn từ khóa chính</p>
    <div className="grid grid-cols-3 gap-3 mt-6">
      {(keywords as string[]).map((k:string) => {
        const slug = k.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-')
        return <Link key={k} href={`/bao-gia/${slug}`} className="bg-white p-3 rounded-xl border hover:shadow">{k}</Link>
      })}
    </div>
  </main>
}
