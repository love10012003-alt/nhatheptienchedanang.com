// GĐ3: Rate limit 0đ bằng Upstash Redis free
import { getCache, setCache } from "./cache"
export async function checkRateLimit(ip: string, limit = 5, windowSec = 3600){
  const key = `rl:${ip}`
  const cached: any = await getCache(key)
  const count = cached ? cached.count : 0
  if(count >= limit) return false
  await setCache(key, { count: count+1 }, windowSec)
  return true
}
