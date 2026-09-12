export const revalidate = 3600;
import { SEO_PAGES } from "@/lib/seoPages";
import { ytSearch } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";
import SmartDownload from "@/components/SmartDownload";
import { notFound } from "next/navigation";
import Link from "next/link";
export function generateStaticParams(){ return Object.keys(SEO_PAGES).map(kw=>({kw})); }
export async function generateMetadata({ params }){
  const { kw }=await params; const p=SEO_PAGES[decodeURIComponent(kw)]; if(!p)return {};
  return { title:p.title, description:p.desc, alternates:{canonical:`/${kw}`} };
}
export default async function KwPage({ params }){
  const { kw }=await params; const p=SEO_PAGES[decodeURIComponent(kw)]; if(!p)notFound();
  const vids=await ytSearch(p.q,12);
  const others=Object.entries(SEO_PAGES).filter(([k])=>k!==decodeURIComponent(kw)).slice(0,5);
  return (<>
    <h1 className="section-title" style={{fontSize:22}}>{p.h1}</h1>
    <div className="vgrid">{vids.map(v=><VideoCard key={v.id} v={v}/>)}</div>
    <SmartDownload/>
    <div className="desc">{p.body.map((t,i)=><p key={i} style={{marginBottom:10}}>{t}</p>)}</div>
    <h2 className="section-title">صفحات ذات صلة</h2>
    <div className="grid-links">{others.map(([k,v])=><Link key={k} href={`/${k}`}>{v.h1}</Link>)}
      <Link href="/highlights">كل الملخصات</Link><Link href="/news">أخبار كرة القدم</Link></div>
  </>);
}
