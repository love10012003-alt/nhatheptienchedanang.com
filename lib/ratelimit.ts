// GĐ3: Rate limit 0đ - Professional - Upstash Redis free + fallback memory
import { getCache, setCache } from "./cache"

export type RateLimitResult = { allowed: boolean, remaining: number, reset: number }

export async function checkRateLimit(ip: string, limit = 5, windowSec = 3600): Promise<RateLimitResult>{
  const key = `rl:${ip}`
  const now = Date.now()
  const cached: any = await getCache(key)
  
  let count = 0
  let firstRequest = now
  
  if(cached){
    count = cached.count
    firstRequest = cached.firstRequest
    // Nếu đã hết window thì reset
    if(now - firstRequest > windowSec*1000){
      count = 0
      firstRequest = now
    }
  }

  if(count >= limit){
    const reset = Math.ceil((firstRequest + windowSec*1000 - now)/1000)
    console.log(`[GĐ3 BLOCK] IP ${ip} blocked - ${count}/${limit} - reset in ${reset}s`)
    return { allowed: false, remaining: 0, reset }
  }

  await setCache(key, { count: count+1, firstRequest }, windowSec)
  console.log(`[GĐ3 OK] IP ${ip} - ${count+1}/${limit}`)
  return { allowed: true, remaining: limit - (count+1), reset: Math.ceil((firstRequest + windowSec*1000 - now)/1000) }
}

// GĐ3: Lưu IP bị chặn để hiện lên admin
export async function getBlockedIPs(){
  // TODO: Scan Redis keys rl:*
  return []
}

export async function getRateLimitStats(){
  return { totalRequests: 0, blockedRequests: 0, topIPs: [] }
}
