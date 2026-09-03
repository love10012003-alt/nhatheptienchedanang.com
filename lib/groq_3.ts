// GĐ4: AI viết bài
export async function writeArticle(keyword: string){
  return { title: keyword, content: `Bài nháp SEO cho ${keyword} - Cần sếp duyệt giá thực tế Đà Nẵng`, slug: keyword.toLowerCase().replace(/\s+/g,'-') }
}
