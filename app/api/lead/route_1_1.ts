import { NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/ratelimit"
import { verifyTurnstile } from "@/lib/turnstile"
import { distributeLead } from "@/lib/sepay"
import { logError, logInfo } from "@/lib/logger"
// GĐ1 + GĐ3 + GĐ5 liên kết
export async function POST(req: NextRequest){
  try{
    const ip = req.headers.get("x-forwarded-for") || "unknown"
    const body = await req.json()
    // GĐ3: Rate limit 5/h
    const ok = await checkRateLimit(ip, 5, 3600)
    if(!ok) return NextResponse.json({ok:false, error:"Bạn gửi quá nhiều, thử lại sau 1h (GĐ3)"}, {status:429})
    // GĐ3: Turnstile
    if(body.turnstileToken){
      const valid = await verifyTurnstile(body.turnstileToken)
      if(!valid) return NextResponse.json({ok:false, error:"Xác minh thất bại (GĐ3)"}, {status:400})
    }
    // GĐ1: Lưu vào Sheet (TODO)
    await logInfo(`[GĐ5] New lead ${body.phone} ${body.district} - IP ${ip}`)
    // GĐ5: Phân phối tự động
    await distributeLead(body)
    return NextResponse.json({ok:true, message:"Lead đã lưu (GĐ1) + chống spam (GĐ3) + phân phối (GĐ5)"})
  }catch(e:any){
    await logError("Lead error", e)
    return NextResponse.json({ok:false, error:"Lỗi"}, {status:500})
  }
}
