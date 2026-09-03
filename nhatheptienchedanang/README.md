# nhatheptienchedanang.com - Chợ Thép Tiền Chế Đà Nẵng 0đ VPS

**Stack 0đ:** Next.js 14 + Vercel Free + GitHub + Google Sheet DB + Upstash Redis + Turnstile + SePay

### Kiến trúc chia nhỏ - Lỗi đâu đỏ đó
- `apps/web`: Chỉ chứa page, không chứa logic
- `packages/database`: GĐ1 - Cửa duy nhất đọc Sheet
- `packages/cache`: GĐ1 - Cache 1h
- `packages/seo`: GĐ2 - 150 URL + 4 Schema
- `packages/security`: GĐ3 - Rate limit 5 lead/h + Turnstile
- `packages/ui`: Design System Navy #0F2B46 + Cam #FF6B35
- `packages/types`: Type chung

### Chạy 30s
```bash
pnpm install
cp .env.example apps/web/.env.local
pnpm dev
```

### Kiểm soát lỗi
```bash
pnpm --filter @repo/database build # build riêng 1 package lỗi
curl /api/health # check 4 hạ tầng
```

### Lộ trình 6 giai đoạn
GĐ1 Core Data ✅ | GĐ2 SEO ✅ | GĐ3 Security ✅ | GĐ4 Growth ⏳ | GĐ5 Monetization ⏳ | GĐ6 Backup ⏳
