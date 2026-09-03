"use client";
import { useEffect, useState } from "react";

export default function Admin(){
  const [health, setHealth] = useState<any>(null);
  useEffect(()=>{ fetch("/api/health").then(r=>r.json()).then(setHealth) },[]);
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-[40px] font-black text-navy">Admin Control Center</h1>
      <p className="text-orange font-bold">Lỗi ở đâu - đỏ ở đó - không sập cả cục</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {health ? Object.entries(health.packages).map(([name, info]:any)=>(
          <div key={name} className={`p-4 rounded-[16px] bg-white shadow border-l-4 ${info.status==="OK" ? "border-green-500" : "border-orange-500"}`}>
            <div className="font-bold">{name}</div>
            <div className="text-sm">{info.status} - {info.detail}</div>
          </div>
        )) : "Loading health..."}
      </div>
      <div className="mt-8 p-4 bg-navy text-white rounded-[16px]">
        <div>GĐ1 Core Data: 3 contractors ✅</div>
        <div>GĐ2 SEO: 150 URLs (50 profile + 100 báo giá) ✅</div>
        <div>GĐ3 Security: Rate limit + Turnstile ✅</div>
        <div>GĐ4 Growth: Cron 2h scan Map + 7h AI ⏳</div>
      </div>
    </div>
  )
}
