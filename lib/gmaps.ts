// Quét nhà thầu mới từ Google Maps - Chạy lúc 2h sáng qua Vercel Cron
export async function findNewContractors(){
  // TODO: Gọi Places API
  // const res = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=co+khi+Da+Nang&key=${process.env.GMAPS_KEY}`)
  console.log("Scanning new contractors...")
  return [] // trả về Contractor[] mới
}
