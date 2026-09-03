#!/bin/bash
echo "🚀 Init nhatheptienchedanang.com - 0đ VPS"
pnpm install
cp .env.example apps/web/.env.local
echo "✅ Xong! Chạy: pnpm dev"
echo "Check lỗi từng package: pnpm --filter @repo/database build"
