export interface Contractor {
  id: string;
  ten: string;
  quan: "LienChieu"|"CamLe"|"HoaVang";
  dia_chi: string;
  rating: number;
  du_an: number;
  bao_hanh: string; // 10 năm
  chiu_bao: string; // cấp 12
  premium?: boolean;
}
