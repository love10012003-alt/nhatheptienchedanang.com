import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { OrganizationJsonLd } from "@/components/seo/JsonLd"
import { SITE_URL, defaultKeywords } from "@/lib/seo"

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nhà Thép Tiền Chế Đà Nẵng - Chịu Bão Cấp 12 - 50+ Nhà Thầu Đã Xác Minh",
    template: "%s | Nhà Thép Đà Nẵng"
  },
  description: "Chợ nhà thầu thép tiền chế Đà Nẵng lớn nhất - 50+ nhà thầu tại Liên Chiểu, Cẩm Lệ, Hòa Vang đã xác minh. Báo giá nhà xưởng 500m2-2000m2 trong 2h, chịu bão cấp 12.",
  keywords: defaultKeywords,
  authors: [{ name: "Nhà Thép Đà Nẵng" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Nhà Thép Tiền Chế Đà Nẵng",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  },
  robots: { index: true, follow: true },
  verification: { google: "your-google-verification-code" } // GĐ2: Dán mã Google Search Console vào đây
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="vi">
      <head>
        <OrganizationJsonLd />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
