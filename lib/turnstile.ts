// GĐ3: Cloudflare Turnstile free - Chống bot 0đ
// Đăng ký free tại: https://www.cloudflare.com/products/turnstile/

export async function verifyTurnstile(token: string, ip?: string){
  // Dev mode: nếu chưa có key thì cho qua để test
  if(!process.env.TURNSTILE_SECRET_KEY){
    console.log("[GĐ3] Turnstile dev mode - bypass (chưa có SECRET_KEY)")
    return true
  }

  if(!token){
    console.log("[GĐ3] Turnstile missing token")
    return false
  }

  try{
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip
      })
    })
    const data = await res.json()
    console.log(`[GĐ3] Turnstile verify: ${data.success ? 'OK' : 'FAIL'}`, data["error-codes"])
    return data.success
  }catch(e){
    console.error("[GĐ3] Turnstile error", e)
    return false // Fail closed - bảo mật
  }
}

// GĐ3: Tạo HTML widget cho frontend
export function turnstileSiteKey(){
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
}
