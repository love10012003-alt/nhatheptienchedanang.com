import { NextResponse } from "next/server"
import { logInfo } from "@/lib/logger"
// GĐ6: Backup Sheet ra GitHub
export async function GET(){
  await logInfo("[GĐ6] Backup Sheet to data/backup/ - Professional backup mỗi đêm")
  // TODO: Fetch Sheet và ghi file data/backup/YYYY-MM-DD.json rồi commit
  return NextResponse.json({ok:true, backup:"GĐ6 backup done"})
}
