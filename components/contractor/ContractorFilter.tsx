export default function ContractorFilter({ districts }: { districts: string[] }){
  return <div className="flex gap-2 mb-4">
    <select className="border rounded-xl px-3 py-2">
      <option>Tất cả quận</option>
      {districts.map(d => <option key={d}>{d}</option>)}
    </select>
    <select className="border rounded-xl px-3 py-2">
      <option>Chuyên môn</option><option>Nhà xưởng</option><option>Nhà kho</option><option>Showroom</option>
    </select>
  </div>
}
