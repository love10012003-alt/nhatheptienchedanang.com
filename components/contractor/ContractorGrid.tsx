import ContractorCard from "./ContractorCard"
import { Contractor } from "@/lib/sheets"
export default function ContractorGrid({contractors}:{contractors:Contractor[]}){return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{contractors.map(c=><ContractorCard key={c.slug} c={c}/>)}</div>}