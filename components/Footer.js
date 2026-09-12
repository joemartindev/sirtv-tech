import Link from "next/link";
import { SITE } from "@/lib/site";
export default function Footer(){
  return (<footer className="footer"><div className="container"><div className="cols">
    <div><h4>🎬 الملخصات</h4>
      <Link href="/highlights">ملخصات المباريات</Link><Link href="/اهداف-اليوم">أهداف اليوم</Link>
      <Link href="/ملخص-مباريات-امس">ملخص مباريات الأمس</Link><Link href="/ملخصات-المباريات">كل الملخصات</Link></div>
    <div><h4>📰 الأخبار</h4><Link href="/news">أخبار كرة القدم</Link>
      <Link href="/اخبار-كرة-القدم">آخر الأخبار</Link></div>
    <div><h4>⚽ سير تيفي</h4>
      <a href={SITE.mainSite} target="_blank">مباريات اليوم والنتائج</a>
      <Link href="/download">تطبيق سير تيفي</Link><a href={SITE.telegram} target="_blank">تيليجرام</a></div>
    <div><h4>ℹ️ عن الموقع</h4><Link href="/about">من نحن</Link>
      <Link href="/contact">اتصل بنا</Link><Link href="/privacy">سياسة الخصوصية</Link></div>
  </div><div className="copy">© {new Date().getFullYear()} Sir TV — سير تيفي · ملخصات وأهداف وأخبار كرة القدم</div></div></footer>);
}
