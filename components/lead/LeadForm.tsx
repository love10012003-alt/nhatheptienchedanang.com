'use client'
import { useState } from "react"
export default function LeadForm(){
  const [sent, setSent] = useState(false)
  async function submit(e: any){
    e.preventDefault()
    const fd = new FormData(e.target)
    await fetch("/api/lead", { method: "POST", body: JSON.stringify(Object.fromEntries(fd)) })
    setSent(true)
  }
  if(sent) return <div className="bg-green-50 p-4 rounded-xl">Đã gửi! Chúng tôi báo giá trong 2h. Lead tự động phân phối cho 3 nhà thầu Premium.</div>
  return <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow border space-y-3 sticky top-20">
    <h3 className="font-bold">Nhận báo giá trong 2h - Miễn phí</h3>
    <input name="name" placeholder="Tên bạn" required className="w-full border rounded-xl px-3 py-2" />
    <input name="phone" placeholder="SĐT Zalo" required className="w-full border rounded-xl px-3 py-2" />
    <select name="area" className="w-full border rounded-xl px-3 py-2"><option>500m2</option><option>1000m2</option><option>2000m2</option></select>
    <select name="district" className="w-full border rounded-xl px-3 py-2"><option>Liên Chiểu</option><option>Cẩm Lệ</option><option>Hòa Vang</option></select>
    <button className="w-full bg-accent text-white py-2 rounded-xl">Gửi yêu cầu - Tự động tìm 3 nhà thầu</button>
    <p className="text-xs text-slate-400">Lead trị giá 300k-1tr, tự động bán cho nhà thầu Premium qua SePay</p>
  </form>
}
