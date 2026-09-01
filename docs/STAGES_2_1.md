# 6 Giai đoạn độc lập có liên kết

### GĐ1: CORE DATA (Nền móng) - 3 file
- lib/sheets.ts: Đọc Sheet
- lib/cache.ts: Cache bằng Upstash Redis free (nếu không có thì dùng memory cache)
- data/contractors.json: Fallback
=> Kết quả: app/nha-thau/page.tsx chạy được ngay, tốc độ nhanh vì có cache 1h (revalidate)

### GĐ2: SEO PRO (Lên top) - 3 file
- app/sitemap.ts: Tự sinh 100 URL từ contractors + keywords
- app/robots.ts: Cho phép Google
- components/seo/JsonLd.tsx: Schema LocalBusiness + FAQ + Breadcrumb
=> Liên kết: Đọc data từ GĐ1, không cần sửa GĐ1

### GĐ3: SECURITY 0Đ (Chống spam) - 3 file
- middleware.ts: Chặn 100 request/phút/IP bằng Upstash
- lib/turnstile.ts: Xác minh Cloudflare Turnstile free
- lib/ratelimit.ts: Đếm bằng Redis
=> Độc lập: Gắn vào là chạy, không cần GĐ khác

### GĐ4: AUTO GROWTH (Tự lớn) - 2 cron
- api/cron/find-contractor: Quét Map lúc 2h sáng, ghi vào Sheet, tạo PR tự động lên GitHub
- api/cron/write-article: Viết bài AI lúc 7h sáng, tạo file mới
=> Liên kết: Dùng lib/sheets.ts (GĐ1) để ghi, dùng sitemap (GĐ2) để ping Google

### GĐ5: MONETIZATION (Thu tiền) - 2 file
- app/api/lead/route.ts: Nhận lead -> kiểm tra Turnstile (GĐ3) -> lưu Sheet (GĐ1) -> phân phối qua sepay.ts
- lib/sepay.ts: Xác minh thanh toán, tự bật Premium
=> Liên kết: GĐ1 + GĐ3

### GĐ6: OPS (Giám sát + Backup) - 2 file
- .github/workflows/backup.yml: Mỗi đêm backup Sheet ra data/backup/YYYY-MM-DD.json
- lib/logger.ts + Telegram webhook: Báo lỗi về Zalo/Telegram sếp
=> Độc lập hoàn toàn, chạy ngầm
