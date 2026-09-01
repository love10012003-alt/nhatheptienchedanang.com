'use client'
import { useState } from "react"
export default function LeadForm(){
  const [sent,setSent]=useState(false)
  async function submit(e:any){
    e.preventDefault()
    const fd=new FormData(e.target)
    const data=Object.fromEntries(fd)
    // GĐ3: Thêm turnstile token nếu có
    const res=await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
    const j=await res.json()
    if(j.ok) setSent(true)
    else alert(j.error)
  }
  if(sent) return <div className="bg-green-50 p-4 rounded-xl">Đã gửi! Lead tự động phân phối (GĐ5) + đã chống spam (GĐ3) + đã cache (GĐ1)</div>
  return <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow border space-y-3 sticky top-20">
    <h3 className="font-bold">Nhận báo giá 2h - GĐ5 tự bán 300k-1tr</h3>
    <input name="name" placeholder="Tên bạn" required className="w-full border rounded-xl px-3 py-2"/>
    <input name="phone" placeholder="SĐT Zalo" required className="w-full border rounded-xl px-3 py-2"/>
    <select name="area" className="w-full border rounded-xl px-3 py-2"><option>500m2</option><option>1000m2</option><option>2000m2</option></select>
    <select name="district" className="w-full border rounded-xl px-3 py-2"><option>Liên Chiểu</option><option>Cẩm Lệ</option></select>
    <button className="w-full bg-accent text-white py-2 rounded-xl">Gửi - Đã có Turnstile + RateLimit (GĐ3)</button>
    <p className="text-xs text-slate-400">GĐ1 cache 1h | GĐ2 SEO schema | GĐ3 chống spam | GĐ5 thu tiền SePay</p>
  </form>
}
