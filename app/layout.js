import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TelegramPopup from "@/components/TelegramPopup";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://sirtv.tech"),
  title: { default: "Sir TV — سير تيفي | ملخصات وأهداف وأخبار كرة القدم", template: "%s | Sir TV — سير تيفي" },
  description: "سير تيفي Sir TV — ملخصات وأهداف مباريات اليوم فيديو، وأخبار كرة القدم العربية والعالمية. شاهد ملخص أي مباراة وحمّل تطبيق سير تيفي.",
  keywords: ["ملخص مباراة","اهداف اليوم","ملخصات المباريات","اخبار كرة القدم","سير تيفي","sir tv highlights","ملخص مباريات امس","اهداف مباريات اليوم"],
  alternates: { canonical: "/" },
  openGraph: { type:"website", locale:"ar_AR", siteName:"Sir TV — سير تيفي",
    title:"Sir TV — سير تيفي | ملخصات وأهداف كرة القدم", description:"ملخصات وأهداف مباريات اليوم فيديو وأخبار كرة القدم مع سير تيفي." },
  robots: { index:true, follow:true },
};
export const viewport = { themeColor:"#6b21a8" };
export default function RootLayout({ children }){
  return (<html lang="ar" dir="rtl"><body>
    <Header/><main className="container">{children}</main><Footer/><TelegramPopup/><Analytics/>
    <meta name="google-site-verification" content="_30UCrnftt8YJzXKB80JIVReo4Xm22k2BC9fr_zsm04" />
  </body></html>);
}
