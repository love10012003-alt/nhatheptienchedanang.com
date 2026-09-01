export default function Badge({children, type="verified"}: any){
  const map: any = { verified: "bg-green-100 text-green-700", premium: "bg-orange-100 text-orange-700" }
  return <span className={`text-xs px-2 py-1 rounded-full ${map[type]}`}>{children}</span>
}
