# nhatheptienchedanang.com - BẢN PROFESSIONAL 0Đ - 6 GIAI ĐOẠN ĐỘC LẬP

## Kiến trúc chia giai đoạn - Mỗi giai đoạn là 1 module độc lập có liên kết
- Giai đoạn 1: Core Data + Cache (lib/sheets.ts + lib/cache.ts) -> Chạy được ngay, không cần giai đoạn khác
- Giai đoạn 2: SEO Pro (app/sitemap.ts, robots.ts, components/seo/*) -> Phụ thuộc GĐ1
- Giai đoạn 3: Security (middleware.ts, lib/turnstile.ts, lib/ratelimit.ts) -> Độc lập, gắn vào là chạy
- Giai đoạn 4: Auto Growth (app/api/cron/*) -> Phụ thuộc GĐ1 + GĐ2
- Giai đoạn 5: Monetization (lib/sepay.ts, app/api/lead) -> Phụ thuộc GĐ1 + GĐ3
- Giai đoạn 6: Ops (github/workflows/backup.yml, lib/backup.ts) -> Độc lập, chạy ngầm

## Cách giao việc cho dev
Mỗi dev chỉ cần làm 1 thư mục giai đoạn, không đụng nhau:
- Dev A: GĐ1 + GĐ2 (UI + SEO)
- Dev B: GĐ3 + GĐ5 (Bảo mật + Thu tiền)
- Dev C: GĐ4 + GĐ6 (Tự động + Backup)

## Deploy
npm install && npm run build && vercel --prod
