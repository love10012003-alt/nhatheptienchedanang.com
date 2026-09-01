// GĐ2: Schema chuyên nghiệp
export function ContractorJsonLd({c}:any){
  const json={
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name":c.name,
    "address":c.address,
    "telephone":c.phone,
    "aggregateRating":{"@type":"AggregateRating","ratingValue":c.rating,"reviewCount":c.reviews}
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(json)}}/>
}
export function FAQJsonLd({faqs}:any){
  const json={"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map((f:any)=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(json)}}/>
}
