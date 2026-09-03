export function localBusinessSchema(c:any){
  return {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name": c.ten,
    "address": c.dia_chi,
    "aggregateRating": {"@type":"AggregateRating","ratingValue": c.rating, "reviewCount": c.du_an}
  }
}
