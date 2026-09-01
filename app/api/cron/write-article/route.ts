import { NextResponse } from "next/server"
import { writeArticle } from "@/lib/groq"
import keywords from "@/data/keywords.json"
export async function GET(){
  const keyword = keywords[0]
  const article = await writeArticle(keyword)
  // TODO: Tạo file app/bao-gia/[slug]/page.tsx mới
  return NextResponse.json({ writing: keyword, article, note: "AI viết nháp 80%, cần sếp sửa giá 5 phút trước khi merge" })
}
