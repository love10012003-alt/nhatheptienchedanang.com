import { getContractorBySlug, getContractors } from "@/lib/sheets"
import LeadForm from "@/components/lead/LeadForm"
import { ContractorJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/JsonLd"
import { canonical, seoTitle, seoDescription, SITE_URL } from "@/lib/seo"
import Image from "next/image"

export const revalidate = 3600 // GĐ1 cache

// GĐ2: Tạo metadata động cho từng nhà thầu - SEO Pro
export async function generateMetadata({ params }: { params: { slug: string } }){
  const c = await getContractorBySlug(params.slug)
  if(!c) return { title: "Không tìm thấy nhà thầu" }
  return {
    title: seoTitle(c.name, c.district),
    description: seoDescription(c.district),
    alternates: { canonical: canonical(`/nha-thau/${c.slug}`) },
    openGraph: {
      title: seoTitle(c.name, c.district),
      description: seoDescription(c.district),
      url: canonical(`/nha-thau/${c.slug}`),
      images: [{ url: c.images[0] }]
    }
  }
}

// GĐ2: Tạo static params để Vercel build trước 50 trang - Tốc độ cực nhanh
export async function generateStaticParams(){
  const contractors = await getContractors()
  return contractors.map(c => ({ slug: c.slug }))
}

export default async function Page({ params }: { params: { slug: string } }){
  const c = await getContractorBySlug(params.slug)
  if(!c) return <div className="max-w-6xl mx-auto p-10">Không tìm thấy nhà thầu {params.slug} - GĐ2 sẽ trả về 404 chuẩn SEO</div>

  const breadcrumbs = [
    { name: "Trang chủ", url: SITE_URL },
    { name: "Nhà thầu", url: `${SITE_URL}/nha-thau` },
    { name: c.name, url: `${SITE_URL}/nha-thau/${c.slug}` }
  ]

  const faqs = [
    { q: `${c.name} ở đâu?`, a: `${c.name} tại ${c.address}, chuyên ${c.tags.join(", ")}.` },
    { q: `Giá làm nhà xưởng tại ${c.district} bao nhiêu?`, a: `Giá dao động 900k-1.3tr/m2 tùy diện tích và yêu cầu chịu bão cấp 12.` },
    { q: `${c.name} có bảo hành không?`, a: `Có, bảo hành 10 năm kết cấu, đã xác minh ${c.verified ? 'rồi' : 'chưa'}.` }
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-3 gap-6">
      {/* GĐ2: 3 loại Schema giúp lên top */}
      <ContractorJsonLd c={c} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FAQJsonLd faqs={faqs} />

      <div className="col-span-2 bg-white p-6 rounded-xl border">
        <nav className="text-sm text-slate-500 mb-4">Trang chủ / Nhà thầu / {c.name}</nav>
        <h1 className="text-3xl font-bold">{seoTitle(c.name, c.district)}</h1>
        <p className="text-slate-600 mt-2">{seoDescription(c.district)}</p>
        
        <div className="relative h-64 w-full rounded-xl overflow-hidden mt-6">
          <Image src={c.images[0]} alt={c.name} fill className="object-cover" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="font-bold">Thông tin - GĐ1 + GĐ2 liên kết</h3>
            <p className="text-sm mt-2">⭐ {c.rating} ({c.reviews} đánh giá) - {c.district}</p>
            <p className="text-sm">📍 {c.address}</p>
            <p className="text-sm">📞 {c.phone}</p>
            <p className="text-sm mt-2">Tags: {c.tags.join(", ")}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl">
            <h3 className="font-bold">GĐ5: Thu tiền thụ động</h3>
            <p className="text-sm mt-2">Trang này bán dạng {c.slug}.nhatheptienchedanang.com</p>
            <p className="text-sm">990k/năm - SePay tự động bật Premium</p>
            <p className="text-xs mt-2 text-slate-500">GĐ2 SEO: Canonical {canonical(`/nha-thau/${c.slug}`)}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-xl">Câu hỏi thường gặp về {c.name} - GĐ2 FAQ Schema</h2>
          <div className="mt-3 space-y-3">
            {faqs.map((f,i) => (
              <div key={i} className="border-b pb-3">
                <h3 className="font-bold">{f.q}</h3>
                <p className="text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div><LeadForm /></div>
    </main>
  )
}
