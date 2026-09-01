import { NextResponse } from "next/server"
import { findNewContractors } from "@/lib/gmaps"
export async function GET(){
  const news = await findNewContractors()
  // TODO: Thêm vào Sheet + tạo file data/contractors.json mới + commit lên GitHub
  return NextResponse.json({ found: news.length, auto: "Tự động quét mỗi đêm 2h sáng - Cần sếp duyệt trước khi public" })
}
