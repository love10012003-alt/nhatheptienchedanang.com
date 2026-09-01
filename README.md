# nhatheptienchedanang.com - Chợ Nhà Thầu 0đ VPS
Stack: Next.js + Vercel (free) + GitHub (két sắt) + Google Sheet (DB) + Cloudflare (DNS)

## Cấu trúc bắt buộc - Quản lý không cần code
- Mọi data nhà thầu CHỈ được lấy qua `lib/sheets.ts`
- Mọi Card nhà thầu CHỈ được dùng `components/contractor/ContractorCard.tsx`
- Mỗi PR phải có link Vercel Preview để sếp duyệt bằng mắt

## Chạy local
npm install
npm run dev

## Deploy Vercel 1 click
1. Fork repo này
2. Vào vercel.com -> Import from GitHub
3. Add env: SHEET_ID, GROQ_API_KEY, GMAPS_KEY
4. Add domain nhatheptienchedanang.com

## 4 vòng lặp tự động (Vercel Cron)
- /api/cron/find-contractor - 2h sáng: quét Map
- /api/cron/write-article - 7h sáng: viết bài AI
- /api/lead - real-time: bán lead
- /api/cron/report - Chủ nhật: gửi báo cáo nhà thầu
