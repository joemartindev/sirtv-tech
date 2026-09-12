export const revalidate = 3600;
import { COMPS } from "@/lib/site";
import { ytSearch } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";
import SmartDownload from "@/components/SmartDownload";
import { notFound } from "next/navigation";
export function generateStaticParams(){ return COMPS.map(c=>({slug:c.slug})); }
export async function generateMetadata({ params }){
  const { slug }=await params; const c=COMPS.find(x=>x.slug===slug); if(!c)return {};
  return { title:`ملخصات ${c.ar} — أهداف وملخصات فيديو | سير تيفي`,
    description:`شاهد ملخصات ${c.ar} وأهدافها فيديو مع سير تيفي. ملخص كل مباريات ${c.ar}.`,
    alternates:{canonical:`/highlights/comp/${slug}`} };
}
export default async function Comp({ params }){
  const { slug }=await params; const c=COMPS.find(x=>x.slug===slug); if(!c)notFound();
  const vids=await ytSearch(`${c.q} highlights ملخص`,16);
  return (<>
    <h1 className="section-title" style={{fontSize:22}}>ملخصات {c.ar} مع سير تيفي</h1>
    {vids.length===0&&<p className="loading">جاري التحميل…</p>}
    <div className="vgrid">{vids.map(v=><VideoCard key={v.id} v={v}/>)}</div>
    <SmartDownload title={`تابع ${c.ar} على تطبيق سير تيفي`}/>
    <div className="desc"><h2>ملخصات وأهداف {c.ar} — سير تيفي</h2>
    <p>شاهد <b>ملخصات {c.ar}</b> وأهداف مبارياتها فيديو مع <b>سير تيفي</b> فور انتهاء كل جولة. حمّل تطبيق سير تيفي لمتابعة {c.ar} مباشرة.</p></div>
  </>);
}
