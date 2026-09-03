import React from "react";
export function Hero({title, subtitle}:{title:string, subtitle:string}){
  return (
    <div className="bg-navy text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[40px] font-black leading-tight">{title}</h1>
        <p className="mt-3 text-lg text-white/80">{subtitle}</p>
        <div className="mt-6 flex gap-3">
          <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-bold">50+ Đã xác minh</span>
          <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Chịu bão cấp 12</span>
          <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Bảo hành 10 năm</span>
        </div>
      </div>
    </div>
  )
}
