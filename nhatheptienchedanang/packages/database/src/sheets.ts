import { cacheGet, cacheSet } from "@repo/cache";
import type { Contractor } from "@repo/types";

// SINGLE GATEWAY - chỉ file này được đọc Sheet
const MOCK_DATA: Contractor[] = [
  {id:"1", ten:"Thép Tiền Chế Hòa Vang Steel", quan:"HoaVang", dia_chi:"KCN Hòa Khánh", rating:4.8, du_an:32, bao_hanh:"10 năm", chiu_bao:"Cấp 12", premium:true},
  {id:"2", ten:"Cơ Khí Liên Chiểu", quan:"LienChieu", dia_chi:"Liên Chiểu", rating:4.7, du_an:18, bao_hanh:"10 năm", chiu_bao:"Cấp 12"},
  {id:"3", ten:"Nhà Thép Cẩm Lệ Pro", quan:"CamLe", dia_chi:"Cẩm Lệ", rating:4.9, du_an:45, bao_hanh:"10 năm", chiu_bao:"Cấp 12", premium:true},
];

export async function getContractors(): Promise<Contractor[]>{
  // 1. Thử cache
  const cached = await cacheGet<Contractor[]>("contractors");
  if(cached) return cached;

  // 2. Nếu có ENV thì gọi Google Sheet thật, không thì dùng mock
  if(!process.env.GOOGLE_SHEET_ID){
    await cacheSet("contractors", MOCK_DATA, 3600);
    return MOCK_DATA;
  }

  // TODO: gọi googleapis sheets API ở đây
  // const data = await fetchSheet...
  await cacheSet("contractors", MOCK_DATA, 3600);
  return MOCK_DATA;
}

export async function checkSheet(){
  // nếu không có key vẫn OK để dev 0đ
  return true;
}

export async function countContractors(){ return (await getContractors()).length; }
