export default function Admin(){
  return <main className="max-w-6xl mx-auto px-4 mt-6">
    <h1 className="text-2xl font-bold">Admin - Quản lý không cần code</h1>
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-4 rounded-xl border"><h3>Google Sheet DB</h3><p className="text-sm">Mở Sheet để thêm nhà thầu, web tự tạo trang</p><a className="text-primary" href="#">Mở Sheet</a></div>
      <div className="bg-white p-4 rounded-xl border"><h3>Vercel Deploy</h3><p className="text-sm">Xem link preview mỗi PR</p><a className="text-primary" href="#">Mở Vercel</a></div>
      <div className="bg-white p-4 rounded-xl border"><h3>SePay Thu tiền</h3><p className="text-sm">Tự động thu Premium 500k</p><a className="text-primary" href="#">Mở SePay</a></div>
    </div>
    <div className="mt-6 bg-yellow-50 p-4 rounded-xl">Bạn chỉ cần duyệt bằng mắt: Bấm link Vercel Preview -> OK merge. Không cần đọc code.</div>
  </main>
}
