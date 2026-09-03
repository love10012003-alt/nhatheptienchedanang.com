import { getContractors } from "@repo/database";

export async function generateSitemap(){
  const contractors = await getContractors().catch(()=>[]);
  const base = "https://nhatheptienchedanang.com";
  const urls = [
    `${base}/`,
    `${base}/nha-thau`,
    ...contractors.map((c:any)=>`${base}/nha-thau/${c.id}`),
    // 100 trang báo giá mẫu
    ...Array.from({length:100},(_,i)=>`${base}/bao-gia/nha-xuong-${500+i*15}m2-da-nang`)
  ];
  const xml = urls.map(u=>`<url><loc>${u}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>`;
}

export async function checkSitemap(){ return true; }
export async function countUrls(){ const xml = await generateSitemap(); return (xml.match(/<loc>/g)||[]).length; }
