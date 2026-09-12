export const revalidate = 3600;
import { ytSearch } from "@/lib/youtube";
import { getNews } from "@/lib/news";
import { COMPS } from "@/lib/site";
import VideoCard from "@/components/VideoCard";
import SmartDownload from "@/components/SmartDownload";
import Link from "next/link";

export default async function Home(){
  const [vids, news] = await Promise.all([
    ytSearch("ملخص مباريات اليوم كرة القدم", 9),
    getNews(),
  ]);
  return (<>
    <div className="hero"><div>
      <h1>ملخصات وأهداف كرة القدم مع سير تيفي 🎬</h1>
      <p>شاهد ملخص وأهداف أي مباراة فيديو، وآخر أخبار كرة القدم — كل يوم مع سير تيفي. حمّل التطبيق لمتابعة المباريات مباشرة.</p>
    </div></div>

    <h2 className="section-title">أحدث الملخصات والأهداف</h2>
    {vids.length===0 && <p className="loading">جاري تحميل الملخصات مع سير تيفي…</p>}
    <div className="vgrid">{vids.map(v=><VideoCard key={v.id} v={v}/>)}</div>

    <h2 className="section-title">ملخصات حسب البطولة</h2>
    <div className="grid-links">{COMPS.map(c=><Link key={c.slug} href={`/highlights/comp/${c.slug}`}>ملخصات {c.ar}</Link>)}</div>

    <SmartDownload title="حمّل تطبيق سير تيفي — كل الملخصات والمباريات" />

    <h2 className="section-title">آخر أخبار كرة القدم</h2>
    {news.slice(0,8).map((n,i)=>(
      <a key={i} href={n.link} target="_blank" rel="noopener" className="news-item">
        <div className="news-thumb" style={n.image?{backgroundImage:`url(${n.image})`}:{}}>{!n.image&&"⚽"}</div>
        <div className="news-body"><b>{n.title}</b><span className="m">{n.source}</span></div>
      </a>))}

    <div className="desc">
      <h2>سير تيفي Sir TV — ملخصات وأهداف وأخبار كرة القدم</h2>
      <p><b>سير تيفي</b> يجمع لك <b>ملخصات وأهداف مباريات اليوم</b> بالفيديو، وآخر <b>أخبار كرة القدم</b> العربية والعالمية. شاهد ملخص أي مباراة فور انتهائها، وتابع أهداف اليوم لكل الدوريات الكبرى.</p>
      <p>لمتابعة المباريات مباشرة مع النتائج وإشعارات الأهداف، حمّل <b>تطبيق سير تيفي</b> من Google Play.</p>
    </div>
  </>);
}
