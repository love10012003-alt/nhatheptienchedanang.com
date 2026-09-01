// GĐ2: SEO Helper - Dùng chung cho mọi trang - Liên kết GĐ1
export const SITE_URL = "https://nhatheptienchedanang.com"

export function canonical(path: string){
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function seoTitle(title: string, district?: string){
  if(district) return `${title} tại ${district} - Chịu Bão Cấp 12 | Nhà Thép Đà Nẵng`
  return `${title} - Nhà Thép Tiền Chế Đà Nẵng - 50+ Nhà Thầu Đã Xác Minh`
}

export function seoDescription(district?: string, area?: string){
  if(district && area) return `Báo giá nhà xưởng ${area} tại ${district}, Đà Nẵng trong 2h. 50+ nhà thầu đã xác minh, chịu bão cấp 12, bảo hành 10 năm. 0đ VPS.`
  if(district) return `Danh sách 50+ nhà thầu thép tiền chế tại ${district}, Đà Nẵng đã xác minh. Báo giá miễn phí trong 2h, chịu bão cấp 12.`
  return "Chợ nhà thầu thép tiền chế Đà Nẵng lớn nhất - 50+ nhà thầu đã xác minh tại Liên Chiểu, Cẩm Lệ, Hòa Vang. Báo giá nhà xưởng 500m2-2000m2 trong 2h."
}

export const defaultKeywords = [
  "nhà thép tiền chế đà nẵng",
  "nhà xưởng tiền chế đà nẵng",
  "thi công nhà thép đà nẵng",
  "báo giá nhà thép tiền chế",
  "nhà thầu thép tiền chế đà nẵng"
]
