// Arabic football news aggregator (headline + image + link to source)
const SOURCES = [
  ["https://www.yallakora.com/rss.ashx", "يلا كورة"],
  ["https://www.filgoal.com/feed/", "فيل جول"],
  ["https://arabic.sport360.com/feed/", "سبورت 360"],
  ["https://www.goal.com/ar/feeds/news?fmt=rss", "جول عربي"],
  ["https://www.france24.com/ar/sport/rss", "فرانس 24"],
];
function clean(h){return (h||"").replace(/<!\[CDATA\[|\]\]>/g,"").replace(/<[^>]+>/g," ")
  .replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')
  .replace(/&#39;|&apos;/g,"'").replace(/\s{2,}/g," ").trim();}
function tag(c,n){const m=c.match(new RegExp(`<${n}[^>]*>([\\s\\S]*?)</${n}>`,"i"));return m?m[1]:"";}
function img(c){let m=c.match(/<media:content[^>]+url=["']([^"']+)["']/i)||c.match(/<enclosure[^>]+url=["']([^"']+)["']/i)||c.match(/<img[^>]+src=["']([^"']+)["']/i);return m?m[1]:"";}
const isAr=s=>/[\u0600-\u06FF]/.test(s);
async function one(url,src){
  try{
    const r=await fetch(url,{next:{revalidate:1800},headers:{"User-Agent":"Mozilla/5.0 SirTV"},signal:AbortSignal.timeout(6000)});
    if(!r.ok)return [];const xml=await r.text();
    const chunks=xml.split(/<item>/i).slice(1,14);const out=[];
    for(const c of chunks){const t=clean(tag(c,"title"));if(!t||!isAr(t))continue;
      out.push({title:t,link:clean(tag(c,"link")),desc:clean(tag(c,"description")).slice(0,200),
        image:img(c),source:src,date:clean(tag(c,"pubDate"))});}
    return out;
  }catch{return [];}
}
export async function getNews(){
  const r=await Promise.all(SOURCES.map(([u,s])=>one(u,s)));
  const seen=new Set();const all=[];
  for(const l of r)for(const it of l){const k=it.title.slice(0,40);if(seen.has(k))continue;seen.add(k);all.push(it);}
  all.sort((a,b)=>(Date.parse(b.date)||0)-(Date.parse(a.date)||0));
  return all.slice(0,30);
}
