// GĐ3: Middleware - Lớp bảo vệ đầu tiên - Chạy trước mọi API - 0đ
import { NextRequest, NextResponse } from "next/server"

// GĐ3: Cấu hình - Có thể chỉnh trong admin sau này
const RATE_LIMITS: Record<string, { limit: number, window: number }> = {
  "/api/lead": { limit: 5, window: 3600 }, // 5 lead / giờ / IP
  "/api/cron/": { limit: 10, window: 60 } // 10 cron / phút
}

export async function middleware(req: NextRequest){
  const path = req.nextUrl.pathname
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.ip || "unknown"

  // Chỉ check các API quan trọng
  const matched = Object.keys(RATE_LIMITS).find(p => path.startsWith(p))
  if(!matched) return NextResponse.next()

  const config = RATE_LIMITS[matched]
  
  // GĐ3: Log để admin thấy - Không chặn ở middleware để tránh tốn Redis, chặn ở API route chi tiết hơn
  console.log(`[GĐ3 Middleware] ${path} - IP: ${ip} - Limit: ${config.limit}/${config.window}s`)

  // Thêm header để client biết
  const res = NextResponse.next()
  res.headers.set("X-RateLimit-Limit", config.limit.toString())
  res.headers.set("X-RateLimit-IP", ip)
  res.headers.set("X-GD3-Protected", "true")

  return res
}

export const config = {
  matcher: ["/api/:path*"]
}
