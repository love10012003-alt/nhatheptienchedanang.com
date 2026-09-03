import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let limiter: Ratelimit | null = null;
export function getLimiter(){
  if(limiter) return limiter;
  if(!process.env.UPSTASH_REDIS_REST_URL){
    // fallback memory khi không có Redis - không chặn, cho dev
    return { limit: async ()=>({success:true}) } as any;
  }
  const redis = new Redis({url: process.env.UPSTASH_REDIS_REST_URL!, token: process.env.UPSTASH_REDIS_REST_TOKEN!});
  limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5, "1 h") });
  return limiter;
}

export const leadLimiter = {
  limit: async (id:string)=>{
    try { return await getLimiter().limit(id); } catch { return {success:true} as any; }
  }
}
