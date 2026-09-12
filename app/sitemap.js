import { SEO_PAGES } from "@/lib/seoPages";
import { COMPS } from "@/lib/site";
const BASE="https://sirtv.tech";
export default function sitemap(){
  const now=new Date();const urls=[];
  ["","highlights","news","download","about","contact","privacy"].forEach(p=>
    urls.push({url:`${BASE}/${p}`,lastModified:now,changeFrequency:p===""?"hourly":"daily",priority:p===""?1:0.7}));
  Object.keys(SEO_PAGES).forEach(kw=>urls.push({url:`${BASE}/${encodeURI(kw)}`,lastModified:now,changeFrequency:"daily",priority:0.8}));
  COMPS.forEach(c=>urls.push({url:`${BASE}/highlights/comp/${encodeURI(c.slug)}`,lastModified:now,changeFrequency:"daily",priority:0.8}));
  return urls;
}
