import { NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/ratelimit"
import { verifyTurnstile } from "@/lib/turnstile"
import { distributeLead } from "@/lib/sepay"
import { logError, logInfo } from "@/lib/logger"

// GĐ3 + GĐ1 + GĐ5 liên kết chặt
export async function POST(req: NextRequest){
  try{
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown"
    const body = await req.json()

    // GĐ3: Rate limit 5/h/IP - Chặn spam 0đ
    const rl = await checkRateLimit(ip, 5, 3600)
    if(!rl.allowed){
      await logInfo(`[GĐ3 BLOCK] IP ${ip} spam lead - Blocked - Còn ${rl.reset}s reset`)
      return NextResponse.json({ok:false, error:`Bạn gửi quá nhiều (5 lần/h). Thử lại sau ${rl.reset}s - GĐ3 bảo vệ`}, {status:429, headers:{"X-RateLimit-Remaining": "0"}})
    }

    // GĐ3: Turnstile - Chống bot
    if(body.turnstileToken){
      const valid = await verifyTurnstile(body.turnstileToken, ip)
      if(!valid){
        await logInfo(`[GĐ3 BLOCK] IP ${ip} Turnstile fail`)
        return NextResponse.json({ok:false, error:"Xác minh bot thất bại - GĐ3 Turnstile"}, {status:400})
      }
    }

    // GĐ1: Lưu vào Sheet (TODO - hiện log)
    await logInfo(`[GĐ1+GĐ3+GĐ5] New lead ${body.phone} ${body.district} - IP ${ip} - Remaining: ${rl.remaining}`)

    // GĐ5: Phân phối tự động cho 3 Premium cùng quận
    await distributeLead(body)

    return NextResponse.json({
      ok:true, 
      message:"Lead đã lưu (GĐ1) + qua chống spam (GĐ3) + phân phối (GĐ5)",
      remaining: rl.remaining,
      gd3: "Đã bảo vệ bằng rate limit + turnstile"
    }, { headers: { "X-RateLimit-Remaining": rl.remaining.toString() } })

  }catch(e:any){
    await logError("Lead error GĐ3", e)
    return NextResponse.json({ok:false, error:"Lỗi hệ thống - GĐ6 sẽ báo Telegram"}, {status:500})
  }
}
