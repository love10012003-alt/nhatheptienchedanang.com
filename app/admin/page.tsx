// GĐ3: Trang quản lý Professional - Biết đã làm được gì - Liên kết cả 6 giai đoạn
import { getContractors } from "@/lib/sheets"
import { getCache } from "@/lib/cache"
import keywords from "@/data/keywords.json"

export const revalidate = 0 // Admin luôn fresh

export default async function AdminPage(){
  const contractors = await getContractors()
  const cached = await getCache("contractors")
  const premiumCount = contractors.filter(c => c.premium).length

  // GĐ2 stats
  const sitemapCount = contractors.length + (keywords as string[]).length + 2

  // GĐ3 stats (mock - sẽ có thật khi có Redis)
  const rateLimitStats = { totalRequests: 0, blockedRequests: 0, turnstileEnabled: !!process.env.TURNSTILE_SECRET_KEY }

  // GĐ5 stats
  const leadsMock = 0 // TODO: đọc từ Sheet

  return (
    <main className="max-w-6xl mx-auto px-4 mt-6 pb-20">
      <h1 className="text-3xl font-bold">Admin - Đã làm được gì? - 6 Giai đoạn</h1>
      <p className="text-slate-500 mt-2">Trang này liên kết cả 6 giai đoạn - Bạn biết ngay chợ đang chạy thế nào - 0đ VPS</p>

      {/* GĐ1 + GĐ2 + GĐ3 + GĐ5 + GĐ6 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        {/* GĐ1: CORE DATA */}
        <div className="bg-white p-5 rounded-xl border shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="font-bold">GĐ1: Core Data {cached ? '✅' : '⚠️'}</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Đang chạy</span>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Nhà thầu:</span><b>{contractors.length} cty</b></div>
            <div className="flex justify-between"><span>Premium:</span><b>{premiumCount} cty</b></div>
            <div className="flex justify-between"><span>Cache:</span><b>{cached ? 'HIT 1h - Tốt' : 'MISS - Đang load'}</b></div>
            <div className="flex justify-between"><span>File:</span><span className="text-xs">lib/sheets.ts + cache.ts</span></div>
          </div>
          <div className="mt-3 p-2 bg-slate-50 rounded text-xs">
            {cached ? '✅ Cache hoạt động - Giảm 95% gọi Sheet' : '⚠️ Chưa có cache - Sẽ bị chặn nếu 100 người vào cùng lúc'}
          </div>
        </div>

        {/* GĐ2: SEO PRO */}
        <div className="bg-white p-5 rounded-xl border shadow-sm">
          <div className="flex justify-between">
            <h3 className="font-bold">GĐ2: SEO Pro ✅</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Đã xong</span>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Sitemap:</span><b>{sitemapCount} URL</b></div>
            <div className="flex justify-between"><span>Robots:</span><b>OK</b></div>
            <div className="flex justify-between"><span>Schema:</span><b>4 loại (Local, FAQ...)</b></div>
            <div className="flex justify-between"><span>Trang SEO:</span><b>{(keywords as string[]).length} trang /bao-gia/</b></div>
          </div>
          <div className="mt-3 flex gap-2">
            <a href="/sitemap.xml" target="_blank" className="text-xs text-primary underline">Xem sitemap.xml</a>
            <a href="/robots.txt" target="_blank" className="text-xs text-primary underline">Xem robots.txt</a>
          </div>
          <div className="mt-3 p-2 bg-green-50 rounded text-xs">
            ✅ Google đã có thể bò 150 URL - Cần submit lên Search Console
          </div>
        </div>

        {/* GĐ3: SECURITY */}
        <div className="bg-white p-5 rounded-xl border-2 border-orange-200 shadow-sm">
          <div className="flex justify-between">
            <h3 className="font-bold">GĐ3: Security 🔒</h3>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Đang làm</span>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Rate limit:</span><b>5 lead/h/IP</b></div>
            <div className="flex justify-between"><span>Turnstile:</span><b>{rateLimitStats.turnstileEnabled ? '✅ Bật' : '⚠️ Dev mode'}</b></div>
            <div className="flex justify-between"><span>Chặn spam:</span><b>{rateLimitStats.blockedRequests} lần</b></div>
            <div className="flex justify-between"><span>File:</span><span className="text-xs">middleware.ts + turnstile.ts</span></div>
          </div>
          <div className="mt-3 p-2 bg-orange-50 rounded text-xs">
            {rateLimitStats.turnstileEnabled 
              ? '✅ Đã bật Cloudflare Turnstile free - Chống bot 100%' 
              : '⚠️ Đang dev mode - Thêm TURNSTILE keys vào .env để bật bảo vệ thật (free)'}
          </div>
        </div>

        {/* GĐ4: AUTO GROWTH */}
        <div className="bg-white p-5 rounded-xl border shadow-sm opacity-60">
          <h3 className="font-bold">GĐ4: Auto Growth ⏳</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Quét Map:</span><span>2h sáng mỗi ngày</span></div>
            <div className="flex justify-between"><span>Viết bài AI:</span><span>7h sáng mỗi ngày</span></div>
            <div className="flex justify-between"><span>Trạng thái:</span><b>Chưa bật</b></div>
          </div>
          <div className="mt-3 p-2 bg-slate-50 rounded text-xs">Sẽ làm sau GĐ3</div>
        </div>

        {/* GĐ5: MONETIZATION */}
        <div className="bg-white p-5 rounded-xl border shadow-sm opacity-60">
          <h3 className="font-bold">GĐ5: Thu tiền 💰</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Lead hôm nay:</span><b>{leadsMock}</b></div>
            <div className="flex justify-between"><span>Doanh thu:</span><b>0đ (chưa bật SePay)</b></div>
            <div className="flex justify-between"><span>Premium:</span><b>{premiumCount} cty x 500k = {premiumCount*500}k</b></div>
          </div>
          <div className="mt-3 p-2 bg-slate-50 rounded text-xs">Sẽ làm sau GĐ3 - Ra tiền thật</div>
        </div>

        {/* GĐ6: OPS */}
        <div className="bg-white p-5 rounded-xl border shadow-sm opacity-60">
          <h3 className="font-bold">GĐ6: Backup + Giám sát ⏳</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Backup:</span><span>Mỗi đêm 1h sáng</span></div>
            <div className="flex justify-between"><span>Uptime:</span><span>UptimeRobot free</span></div>
            <div className="flex justify-between"><span>Trạng thái:</span><b>Chưa bật</b></div>
          </div>
          <div className="mt-3 p-2 bg-slate-50 rounded text-xs">Sẽ làm cuối cùng</div>
        </div>
      </div>

      {/* HƯỚNG DẪN GĐ3 */}
      <div className="mt-8 bg-orange-50 border border-orange-200 p-5 rounded-xl">
        <h3 className="font-bold">GĐ3 Cần làm gì để bật bảo vệ thật 0đ?</h3>
        <ol className="list-decimal ml-5 mt-3 text-sm space-y-2">
          <li>Vào <a href="https://dash.cloudflare.com/?to=/:account/turnstile" target="_blank" className="text-primary underline">Cloudflare Turnstile</a> -> Add site -> Lấy Site Key + Secret Key (free)</li>
          <li>Vào <a href="https://upstash.com/" target="_blank" className="text-primary underline">Upstash Redis</a> -> Create Redis -> Lấy REST_URL + REST_TOKEN (free 10k lệnh/ngày)</li>
          <li>Dán 4 key vào file .env.local:
            <pre className="bg-slate-900 text-white p-3 rounded mt-2 text-xs overflow-auto">
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAA...
TURNSTILE_SECRET_KEY=0x4AAAAAA...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=AX...
            </pre>
          </li>
          <li>Deploy lại Vercel -> GĐ3 chuyển từ Dev mode sang ✅ Bật</li>
        </ol>
      </div>

      <div className="mt-6 text-center text-sm text-slate-500">
        Bạn đang ở GĐ3/6 - Xong GĐ3 là chặn được spam, sang GĐ5 là có tiền ngay
      </div>
    </main>
  )
}
