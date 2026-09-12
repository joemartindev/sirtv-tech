export const revalidate = 3600;
import { idFromSlug, ytVideoById, ytSearch } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";
import SmartDownload from "@/components/SmartDownload";
export async function generateMetadata({ params }){
  const { slug }=await params; const id=idFromSlug(slug); const v=await ytVideoById(id);
  if(!v) return { title:"ملخص المباراة — سير تيفي" };
  return { title:`${v.title} — ملخص وأهداف | سير تيفي`,
    description:`شاهد ${v.title} — ملخص وأهداف المباراة فيديو مع سير تيفي.`,
    alternates:{canonical:`/highlights/${slug}`},
    openGraph:{ images:v.thumb?[v.thumb]:[] } };
}
export default async function HL({ params }){
  const { slug }=await params; const id=idFromSlug(slug); const v=await ytVideoById(id);
  const more=await ytSearch("ملخص مباريات اليوم اهداف",6);
  if(!v) return (<><div className="desc"><h2>الملخص غير متوفر</h2><p>تصفح أحدث الملخصات مع سير تيفي.</p></div>
    <SmartDownload/><div className="vgrid">{more.map(x=><VideoCard key={x.id} v={x}/>)}</div></>);
  // VideoObject schema for rich results (thumbnail in search!)
  const schema={"@context":"https://schema.org","@type":"VideoObject",name:v.title,
    description:v.desc||v.title,thumbnailUrl:v.thumb,uploadDate:v.published,
    embedUrl:`https://www.youtube.com/embed/${id}`};
  return (<>
    <h1 className="section-title" style={{fontSize:20}}>{v.title}</h1>
    <div className="embed"><iframe src={`https://www.youtube.com/embed/${id}`} title={v.title}
      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen/></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <SmartDownload title="حمّل تطبيق سير تيفي لمتابعة المباريات مباشرة"/>
    <div className="desc"><h2>ملخص وأهداف المباراة — سير تيفي</h2>
    <p>شاهدت <b>{v.title}</b> على <b>سير تيفي</b>. تابع كل ملخصات وأهداف مباريات اليوم فيديو، وحمّل تطبيق سير تيفي لمتابعة المباريات مباشرة مع إشعارات الأهداف.</p></div>
    <h2 className="section-title">ملخصات أخرى</h2>
    <div className="vgrid">{more.map(x=><VideoCard key={x.id} v={x}/>)}</div>
  </>);
}
