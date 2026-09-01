export default function Header(){
  return <header className="sticky top-0 z-50 bg-white border-b">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="font-bold text-primary">NHATHEP<span className="text-accent">DANANG</span>.COM</div>
      <div className="flex gap-2">
        <input placeholder="Tìm nhà thầu Hòa Khánh, Liên Chiểu..." className="border rounded-xl px-4 py-2 w-64" />
        <button className="bg-primary text-white px-4 py-2 rounded-xl">Tìm</button>
      </div>
      <a href="/admin" className="bg-accent text-white px-4 py-2 rounded-xl">Đăng ký nhà thầu</a>
    </div>
  </header>
}
