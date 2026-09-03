import React from "react";
import { Card } from "./Card";
export function ContractorCard({data}:{data:any}){
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div>
          <div className="font-bold text-navy">{data.ten}</div>
          <div className="text-sm text-gray-500">{data.dia_chi} • {data.quan}</div>
        </div>
        {data.premium && <span className="bg-orange text-white text-xs px-2 py-1 rounded-full">Premium</span>}
      </div>
      <div className="mt-3 text-sm">⭐ {data.rating} • {data.du_an} dự án • {data.bao_hanh}</div>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 bg-navy text-white py-2 rounded-[12px] text-sm font-bold">Báo giá 2h</button>
        <button className="flex-1 border border-navy py-2 rounded-[12px] text-sm">Hồ sơ</button>
      </div>
    </Card>
  )
}
