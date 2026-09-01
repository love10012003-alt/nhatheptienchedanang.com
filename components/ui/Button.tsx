export default function Button({children,variant="primary",...props}:any){
  const cls = variant==="primary"?"bg-primary text-white":"bg-accent text-white"
  return <button className={`${cls} px-4 py-2 rounded-xl hover:opacity-90`} {...props}>{children}</button>
}