export const revalidate = 1800;
import { getNews } from "@/lib/news";
import SmartDownload from "@/components/SmartDownload";
export const metadata = {
  title:"أخبار كرة القدم — آخر الأخبار الرياضية | سير تيفي",
  description:"أخبار كرة القدم العربية والعالمية: آخر أخبار الدوريات والأندية واللاعبين مع سير تيفي، صور وعناوين محدثة.",
  alternates:{canonical:"/news"},
};
export default async function News(){
  const news=await getNews();
  return (<>
    <h1 className="section-title" style={{fontSize:22}}>أخبار كرة القدم مع سير تيفي</h1>
    {news.length===0&&<p className="loading">جاري تحديث الأخبار…</p>}
    {news.map((n,i)=>(<a key={i} href={n.link} target="_blank" rel="noopener" className="news-item">
      <div className="news-thumb" style={n.image?{backgroundImage:`url(${n.image})`}:{}}>{!n.image&&"⚽"}</div>
      <div className="news-body"><b>{n.title}</b>{n.desc&&<span style={{color:"#6b5b83",fontSize:12,display:"block",marginTop:3}}>{n.desc}…</span>}<span className="m">{n.source}</span></div></a>))}
    <SmartDownload title="تابع أخبار كرة القدم على تطبيق سير تيفي"/>
    <div className="desc"><h2>أخبار كرة القدم العربية والعالمية — سير تيفي</h2>
    <p>يجمع لك <b>سير تيفي</b> آخر <b>أخبار كرة القدم</b> من أهم المصادر العربية مع روابط للمصادر الأصلية. حمّل تطبيق سير تيفي لمتابعة المباريات والنتائج المباشرة.</p></div>
  </>);
}
