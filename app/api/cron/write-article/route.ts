import { NextResponse } from "next/server"
import { writeArticle } from "@/lib/groq"
import keywords from "@/data/keywords.json"
import { logInfo } from "@/lib/logger"
// GĐ4 liên kết GĐ2
export async function GET(){
  const kw=keywords[0]
  const art=await writeArticle(kw)
  await logInfo(`[GĐ4] Wrote article ${kw} - Sẽ ping sitemap (GĐ2)`)
  return NextResponse.json({writing: kw, article: art, note:"GĐ4: Tự viết bài - Sitemap (GĐ2) tự cập nhật - Cần sếp duyệt 5 phút"})
}
