# Quy tắc vàng - Để các thành phần thống nhất

1. KHÔNG gọi Google Sheet trực tiếp trong app/*. Chỉ được dùng lib/sheets.ts
2. KHÔNG tự tạo Card mới. Dùng components/contractor/ContractorCard.tsx chung
3. Mọi màu sắc dùng tokens: primary #0F4C75, accent #FF8C00, bo góc 12px
4. Mọi PR phải có link Vercel Preview
5. Đặt tên: Component PascalCase, file API kebab-case

Nếu vi phạm, GitHub Actions sẽ báo fail.
