import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd"
import { canonical, SITE_URL } from "@/lib/seo"
import keywords from "@/data/keywords.json"

export const revalidate = 86400

export async function generateStaticParams(){
  return (keywords as string[]).map((k:string) => ({ slug: k.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-') }))
}

export async function generateMetadata({params}:{params:{slug:string}}){
  const title = params.slug.replace(/-/g,' ')
  return {
    title: `Báo giá ${title} - Đà Nẵng 2026`,
    description: `Báo giá chi tiết ${title} tại Đà Nẵng, chịu bão cấp 12, 50+ nhà thầu đã xác minh.`,
    alternates: { canonical: canonical(`/bao-gia/${params.slug}`) }
  }
}

export default function Page({params}:{params:{slug:string}}){
  const keyword = params.slug.replace(/-/g,' ')
  const faqs = [
    { q: `Giá ${keyword} bao nhiêu?`, a: `Giá ${keyword} dao động 900k-1.5tr/m2 tùy diện tích.` },
    { q: `${keyword} thi công bao lâu?`, a: `Thi công ${keyword} khoảng 15-30 ngày tùy diện tích.` }
  ]
  const breadcrumbs = [
    { name: "Trang chủ", url: SITE_URL },
    { name: "Báo giá", url: `${SITE_URL}/bao-gia` },
    { name: keyword, url: `${SITE_URL}/bao-gia/${params.slug}` }
  ]

  return <main className="max-w-6xl mx-auto px-4 mt-6">
    <BreadcrumbJsonLd items={breadcrumbs} />
    <ArticleJsonLd title={keyword} date={new Date().toISOString()} keywords={[keyword]} />
    <FAQJsonLd faqs={faqs} />
    <h1 className="text-3xl font-bold">Báo giá {keyword} - GĐ2 Programmatic SEO</h1>
    <p className="text-slate-600 mt-2">Trang này tự sinh từ keywords.json - GĐ2 - Không cần viết tay - Tự có FAQ Schema</p>
    <div className="bg-white p-6 rounded-xl border mt-6">
      <h2 className="font-bold">Bảng giá {keyword} 2026</h2>
      <table className="w-full mt-3 text-sm border">
        <thead><tr className="bg-slate-100"><th className="p-2">Diện tích</th><th className="p-2">Đơn giá</th><th className="p-2">Tổng</th></tr></thead>
        <tbody><tr><td className="p-2">500m2</td><td className="p-2">1.1tr/m2</td><td className="p-2">550tr</td></tr><tr><td className="p-2">1000m2</td><td className="p-2">950k/m2</td><td className="p-2">950tr</td></tr></tbody>
      </table>
      <div className="mt-6">
        <h3 className="font-bold">FAQ - GĐ2 tự sinh</h3>
        {faqs.map((f,i)=><div key={i} className="mt-3"><b>{f.q}</b><p className="text-sm">{f.a}</p></div>)}
      </div>
    </div>
  </main>
}
