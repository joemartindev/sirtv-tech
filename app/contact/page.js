import { SITE } from "@/lib/site";
export const metadata={title:"اتصل بنا — سير تيفي",description:"تواصل مع فريق سير تيفي.",alternates:{canonical:"/contact"}};
export default function C(){return (<div className="desc"><h2>اتصل بنا — سير تيفي</h2>
  <p>للتواصل مع فريق سير تيفي:</p><ul>
  <li>تيليجرام: <a href={SITE.telegram} target="_blank" style={{color:"#6b21a8"}}>{SITE.telegram}</a></li>
  <li>البريد: {SITE.email}</li></ul></div>);}
