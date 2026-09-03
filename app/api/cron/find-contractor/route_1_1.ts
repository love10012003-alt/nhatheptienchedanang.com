import { NextResponse } from "next/server"
import { findNewContractors } from "@/lib/gmaps"
import { logInfo } from "@/lib/logger"
// GĐ4 liên kết GĐ1 + GĐ6
export async function GET(){
  const news=await findNewContractors()
  await logInfo(`[GĐ4] Found ${news.length} new contractors at 2AM - Sẽ tạo PR lên GitHub (GĐ6 backup)`)
  return NextResponse.json({found: news.length, note:"GĐ4: Tự quét Map - Kết quả ghi vào Sheet (GĐ1) - Backup (GĐ6)"})
}
