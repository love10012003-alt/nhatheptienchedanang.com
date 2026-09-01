// GĐ1: Cache 0đ - Dùng Upstash Redis free nếu có, không thì dùng memory
let memCache = new Map<string, {data:any, exp:number}>()
export async function getCache(key: string){
  const hit = memCache.get(key)
  if(hit && hit.exp > Date.now()) return hit.data
  // TODO: Nếu có UPSTASH_REDIS_REST_URL thì fetch Redis
  // if(process.env.UPSTASH_REDIS_REST_URL){ ... }
  return null
}
export async function setCache(key: string, data: any, ttlSec = 3600){
  memCache.set(key, {data, exp: Date.now() + ttlSec*1000})
  // TODO: set Redis
}
