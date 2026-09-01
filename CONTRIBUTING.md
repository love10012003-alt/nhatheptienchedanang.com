# Quy tắc liên kết chặt chẽ giữa 6 giai đoạn
1. Mọi data phải qua lib/sheets.ts -> lib/cache.ts (GĐ1) - Không gọi trực tiếp
2. Mọi trang phải có JsonLd từ components/seo/ (GĐ2)
3. Mọi API POST phải qua middleware.ts rate limit + turnstile (GĐ3)
4. Mọi cron phải ghi log vào lib/logger.ts để GĐ6 giám sát
5. Không merge nếu không có Vercel Preview + sếp comment OK
