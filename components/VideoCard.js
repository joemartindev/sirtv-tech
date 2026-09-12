import Link from "next/link";
export default function VideoCard({ v }){
  return (<Link href={`/highlights/${v.slug}`} className="vcard">
    <div className="vthumb" style={v.thumb?{backgroundImage:`url(${v.thumb})`}:{}}><span className="play">▶</span></div>
    <div className="vt">{v.title}</div>
    <div className="vm">{v.channel}</div>
  </Link>);
}
