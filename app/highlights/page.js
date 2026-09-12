export const revalidate = 3600;
import { ytSearch } from "@/lib/youtube";
import { COMPS } from "@/lib/site";
import VideoCard from "@/components/VideoCard";
import SmartDownload from "@/components/SmartDownload";
import Link from "next/link";
export const metadata = {
  title:"ملخصات المباريات — ملخص وأهداف مباريات اليوم | سير تيفي",
  description:"شاهد ملخصات المباريات وأهداف مباريات اليوم فيديو لكل الدوريات مع سير تيفي. ملخص أي مباراة فور انتهائها.",
  alternates:{canonical:"/highlights"},
};
export default async function Highlights(){
  const vids=await ytSearch("ملخص مباريات اليوم اهداف",16);
  return (<>
    <h1 className="section-title" style={{fontSize:22}}>ملخصات المباريات مع سير تيفي</h1>
    {vids.length===0&&<p className="loading">جاري تحميل الملخصات…</p>}
    <div className="vgrid">{vids.map(v=><VideoCard key={v.id} v={v}/>)}</div>
    <SmartDownload/>
    <h2 className="section-title">ملخصات حسب البطولة</h2>
    <div className="grid-links">{COMPS.map(c=><Link key={c.slug} href={`/highlights/comp/${c.slug}`}>ملخصات {c.ar}</Link>)}</div>
    <div className="desc"><h2>ملخصات وأهداف كل المباريات — سير تيفي</h2>
    <p>مع <b>سير تيفي</b> تشاهد <b>ملخصات المباريات</b> وأهدافها فيديو لكل الدوريات الكبرى فور انتهاء كل مباراة. حمّل تطبيق سير تيفي لمتابعة المباريات مباشرة.</p></div>
  </>);
}
