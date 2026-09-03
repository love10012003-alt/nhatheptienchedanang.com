import { Redis } from "@upstash/redis";

let redis: Redis | null = null;
function getRedis(){
  if(!process.env.UPSTASH_REDIS_REST_URL) throw new Error("Missing UPSTASH_REDIS_REST_URL");
  if(!redis) redis = new Redis({url: process.env.UPSTASH_REDIS_REST_URL!, token: process.env.UPSTASH_REDIS_REST_TOKEN!});
  return redis;
}

export async function cacheGet<T>(key:string): Promise<T|null>{
  try { return await getRedis().get<T>(key); } catch { return null; }
}
export async function cacheSet(key:string, value:any, ex=3600){
  try { await getRedis().set(key, value, {ex}); } catch {}
}
export async function checkRedis(){
  if(!process.env.UPSTASH_REDIS_REST_URL) return true; // cho phép chạy không cần Redis
  const r = getRedis();
  await r.ping();
  return true;
}
