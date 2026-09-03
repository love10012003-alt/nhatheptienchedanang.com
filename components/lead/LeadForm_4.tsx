'use client'
import { useState } from "react"
import TurnstileWidget from "@/components/security/TurnstileWidget"

export default function LeadForm(){
  const [sent,setSent]=useState(false)
  const [token,setToken]=useState("")
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")

  async function submit(e:any){
    e.preventDefault()
    if(!token){
      setError("Vui lòng xác minh bạn không phải bot (GĐ3)")
      return
    }
    setLoading(true)
    setError("")
    const fd=new FormData(e.target)
    const data=Object.fromEntries(fd) as any
    data.turnstileToken = token

    try{
      const res=await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
      const j=await res.json()
      if(j.ok) setSent(true)
      else setError(j.error || "Lỗi")
    }catch(err:any){
      setError("Lỗi kết nối")
    }
    setLoading(false)
  }

  if(sent) return <div className="bg-green-50 p-4 rounded-xl border border-green-200">✅ Đã gửi! Lead đã qua GĐ3 chống spam + GĐ1 cache + GĐ5 sẽ tự phân phối cho 3 Premium.</div>

  return <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow border space-y-3 sticky top-20">
    <h3 className="font-bold">Nhận báo giá 2h - GĐ3 bảo vệ</h3>
    <input name="name" placeholder="Tên bạn" required className="w-full border rounded-xl px-3 py-2"/>
    <input name="phone" placeholder="SĐT Zalo" required className="w-full border rounded-xl px-3 py-2"/>
    <select name="area" className="w-full border rounded-xl px-3 py-2"><option>500m2</option><option>1000m2</option><option>2000m2</option></select>
    <select name="district" className="w-full border rounded-xl px-3 py-2"><option>Liên Chiểu</option><option>Cẩm Lệ</option></select>
    
    <TurnstileWidget onToken={setToken} />
    {error && <div className="text-xs text-red-600 bg-red-50 p-2 rounded">{error}</div>}

    <button disabled={loading} className="w-full bg-accent text-white py-2 rounded-xl disabled:opacity-50">
      {loading ? 'Đang gửi...' : 'Gửi - Đã có Turnstile + RateLimit (GĐ3)'}
    </button>
    <p className="text-xs text-slate-400">GĐ1 cache 1h | GĐ2 SEO 150 URL | GĐ3 chống spam 5 lần/h</p>
  </form>
}
