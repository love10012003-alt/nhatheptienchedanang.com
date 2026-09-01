import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
export const metadata = { title: "Nhà Thép Tiền Chế Đà Nẵng - Chịu Bão Cấp 12", description: "50+ nhà thầu đã xác minh tại Đà Nẵng. Báo giá trong 2h." }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body><Header />{children}<Footer /></body></html>
}
