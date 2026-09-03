# UP LÊN GIT + VERCEL 40s

## B1: Tạo repo GitHub
Vào github.com/new -> tên: nhatheptienchedanang.com -> Private

## B2: Push code (copy 3 lệnh này)
git init
git add .
git commit -m "GĐ1-3: monorepo ready - 0d VPS"
git branch -M main
git remote add origin https://github.com/YOU/nhatheptienchedanang.com.git
git push -u origin main

## B3: Deploy Vercel Free
1. vercel.com -> Add New Project -> Import repo vừa push
2. Framework: Next.js
3. Root Directory: apps/web (QUAN TRỌNG)
4. Build Command: cd ../.. && pnpm build --filter=web
   Hoặc để Vercel tự nhận vercel.json
5. Bấm Deploy -> 40s có link https://nhatheptienchedanang.vercel.app

## B4: ENV (không cần vẫn chạy)
Vì code có fallback mock nên không cần ENV vẫn chạy.
Khi có Upstash + Google Sheet thật thì vào Vercel -> Settings -> Environment Variables paste từ .env.example

## B5: Check
- / -> trang chủ Hero Navy
- /nha-thau -> sẽ làm tiếp
- /sitemap.xml -> 150 URL
- /api/health -> JSON 4 hạ tầng OK
- /admin -> Dashboard biết lỗi ở đâu
