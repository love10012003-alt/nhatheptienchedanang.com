// Thu tiền tự động - SePay / PayOS
export async function verifyPayment(transactionId: string){
  // TODO: Gọi SePay API kiểm tra
  return { paid: true, amount: 500000 }
}
export async function distributeLead(lead: any, contractors: any[]){
  // Logic: gửi cho 3 Premium ở cùng quận, ai trả trước thì nhận
  console.log("Distributing lead", lead)
}
