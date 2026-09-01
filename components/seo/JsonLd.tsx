// GĐ2: JSON-LD Schema - Giúp Google hiện sao, địa chỉ, FAQ - 0đ
export function ContractorJsonLd({ c }: { c: any }){
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": c.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": c.address,
      "addressLocality": "Đà Nẵng",
      "addressCountry": "VN"
    },
    "telephone": c.phone,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": c.rating,
      "reviewCount": c.reviews,
      "bestRating": 5,
      "worstRating": 1
    },
    "priceRange": "500tr - 2 tỷ",
    "areaServed": c.district
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
}

export function OrganizationJsonLd(){
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nhà Thép Tiền Chế Đà Nẵng",
    "url": "https://nhatheptienchedanang.com",
    "logo": "https://nhatheptienchedanang.com/logo.png",
    "sameAs": ["https://facebook.com/nhatheptienchedanang"]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
}

export function BreadcrumbJsonLd({ items }: { items: {name:string, url:string}[] }){
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx+1,
      "name": item.name,
      "item": item.url
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
}

export function FAQJsonLd({ faqs }: { faqs: { q: string, a: string }[] }){
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
}

export function ArticleJsonLd({ title, date, keywords }: { title: string, date: string, keywords: string[] }){
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": date,
    "keywords": keywords.join(", "),
    "author": { "@type": "Organization", "name": "Nhà Thép Đà Nẵng" }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
}
