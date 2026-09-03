export const cn = (...c: any[]) => c.filter(Boolean).join(" ")
export const formatVND = (n: number) => new Intl.NumberFormat('vi-VN').format(n) + "đ"
