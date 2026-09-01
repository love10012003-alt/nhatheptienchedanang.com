// AI viết bài SEO - Free Groq API
export async function writeArticle(keyword: string){
  // TODO: Gọi Groq
  // const prompt = `Viết bài 800 chữ chuẩn SEO về ${keyword} tại Đà Nẵng, có bảng giá, FAQ...`
  return { title: keyword, content: `Bài nháp cho ${keyword} - cần sếp duyệt giá`, faq: [] }
}
