import { leadLimiter, verifyTurnstile } from "@repo/security";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
  const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
  const { success } = await leadLimiter.limit(ip);
  if(!success) return Response.json({error:"Quá 5 lead/h. Thử lại sau."},{status:429});

  const body = await req.json();
  const turnstileOk = await verifyTurnstile(body.token);
  if(!turnstileOk) return Response.json({error:"Bot detected"},{status:400});

  // TODO: Lưu vào Google Sheet + phân phối cho 3 Premium cùng quận
  return Response.json({ok:true, message:"Đã nhận lead, báo giá trong 2h"});
}
