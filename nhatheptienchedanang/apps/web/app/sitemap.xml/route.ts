import { generateSitemap } from "@repo/seo";
export async function GET(){
  const xml = await generateSitemap();
  return new Response(xml, { headers: {"Content-Type":"application/xml"} });
}
