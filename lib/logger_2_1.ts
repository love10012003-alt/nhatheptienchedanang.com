// GĐ6: Logger gửi về Telegram/Zalo khi lỗi
export async function logError(msg: string, meta?: any){
  console.error("[ERROR]", msg, meta)
  if(process.env.TELEGRAM_BOT_TOKEN){
    // await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage...`)
  }
}
export async function logInfo(msg: string){
  console.log("[INFO]", msg)
}
