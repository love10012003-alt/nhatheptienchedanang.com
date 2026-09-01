import { NextRequest, NextResponse } from "next/server"
import { distributeLead } from "@/lib/sepay"
export async function POST(req: NextRequest){
  const lead = await req.json()
  // 1. Lưu vào Google Sheet (TODO)
  // 2. Tự động phân phối cho 3 Premium
  await distributeLead(lead, [])
  // 3. Bắn Zalo webhook cho sếp
  return NextResponse.json({ ok: true, message: "Lead đã tự động phân phối, trị giá 300k-1tr" })
}
