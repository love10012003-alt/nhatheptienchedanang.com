import React from "react";
export function Card({children, className=""}:{children:React.ReactNode, className?:string}){
  return <div className={`bg-white rounded-[16px] shadow-sm border p-4 ${className}`}>{children}</div>
}
