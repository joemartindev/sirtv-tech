import { SITE } from "@/lib/site";
export const metadata={title:"اتصل بنا — سير تيفي",description:"تواصل مع فريق سير تيفي.",alternates:{canonical:"/contact"}};
export default function C(){return (<div className="desc"><h1 style={{color:"#6b21a8",fontSize:20,marginBottom:8}}>اتصل بنا — سير تيفي</h1>
  <p>للتواصل مع فريق سير تيفي:</p><ul>
  <li>تيليجرام: <a href={SITE.telegram} target="_blank" style={{color:"#6b21a8"}}>{SITE.telegram}</a></li>
  <li>البريد: {SITE.email}</li></ul></div>);}
