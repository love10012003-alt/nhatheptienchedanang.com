// GĐ5: SePay/PayOS thu tiền tự động 0đ
export async function verifyPayment(transactionId: string){
  // TODO: Gọi SePay API
  return { paid: true, amount: 500000 }
}
export async function distributeLead(lead: any){
  console.log("[GĐ5] Distributing lead", lead, "-> Gửi cho 3 Premium cùng quận")
  // TODO: Lấy contractors premium cùng district từ lib/sheets.ts
}
