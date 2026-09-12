import Link from "next/link";
const links=[["/","الرئيسية"],["/highlights","ملخصات المباريات"],["/اهداف-اليوم","أهداف اليوم"],
["/news","أخبار كرة القدم"],["/download","تطبيق Sir TV"]];
export default function Header(){
  return (<header className="header"><div className="bar">
    <Link href="/" className="logo"><img src="/app-icon.png" alt="Sir TV" className="logo-icon"/><span>Sir TV — سير تيفي</span></Link>
    <Link href="/download" className="btn-tg" style={{background:"#fff",color:"#6b21a8"}}>حمّل التطبيق</Link>
  </div><nav className="nav">{links.map(([h,t])=><Link key={h} href={h}>{t}</Link>)}</nav></header>);
}
