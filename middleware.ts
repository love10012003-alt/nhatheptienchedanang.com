// GĐ3: Middleware rate limit 0đ - Chặn spam trước khi vào API
import { NextRequest, NextResponse } from "next/server"
export function middleware(req: NextRequest){
  // Chỉ check API lead
  if(req.nextUrl.pathname === "/api/lead"){
    // TODO: Gọi Upstash Redis check IP - Nếu quá 5 lần/h thì return 429
    // Hiện tại để log
    console.log("[GĐ3] Checking rate limit for", req.ip)
  }
  return NextResponse.next()
}
export const config = { matcher: ["/api/lead"] }
