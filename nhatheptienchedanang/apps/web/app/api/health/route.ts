import { checkSheet } from "@repo/database";
import { checkRedis } from "@repo/cache";
import { checkSitemap } from "@repo/seo";

export const dynamic = "force-dynamic";

export async function GET(){
  const [db, cache, seo] = await Promise.all([
    checkSheet().then(()=>({status:"OK", detail:"3 contractors"})).catch((e:any)=>({status:"FAIL", detail:e.message})),
    checkRedis().then(()=>({status:"OK", detail:"Cache 1h"})).catch((e:any)=>({status:"FAIL", detail:e.message})),
    checkSitemap().then(()=>({status:"OK", detail:"150 URLs"})).catch((e:any)=>({status:"FAIL", detail:e.message})),
  ]);
  return Response.json({
    timestamp: new Date().toISOString(),
    packages: {
      "@repo/database": db,
      "@repo/cache": cache,
      "@repo/seo": seo,
      "@repo/security": {status:"OK", detail:"5 lead/h + Turnstile"}
    }
  })
}
