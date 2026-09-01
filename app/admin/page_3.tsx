export default function Admin(){
  return <main className="max-w-6xl mx-auto px-4 mt-6">
    <h1 className="text-2xl font-bold">Admin Professional - 6 Giai đoạn</h1>
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">GĐ1: Core Data</h3><p className="text-sm">lib/sheets.ts + cache 1h + fallback JSON - Đã tối ưu, không bị chặn Sheet</p></div>
      <div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">GĐ2: SEO Pro</h3><p className="text-sm">sitemap.ts + robots.ts + JsonLd LocalBusiness - Tự sinh 100 URL - Lên top</p></div>
      <div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">GĐ3: Security</h3><p className="text-sm">middleware.ts + Turnstile + Upstash rate limit 5/h - Chống spam lead</p></div>
      <div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">GĐ4: Auto Growth</h3><p className="text-sm">Cron 2h quét Map + 7h viết bài AI - Tự lớn mỗi ngày</p></div>
      <div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">GĐ5: Monetization</h3><p className="text-sm">SePay tự thu 500k Premium + phân phối lead 300k-1tr</p></div>
      <div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">GĐ6: Ops</h3><p className="text-sm">Backup mỗi đêm + UptimeRobot + Telegram báo lỗi - Chuyên nghiệp</p></div>
    </div>
  </main>
}
