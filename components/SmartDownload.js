"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { SITE } from "@/lib/site";
export default function SmartDownload({ title }){
  const [device,setDevice]=useState("unknown");const [qr,setQr]=useState("");
  useEffect(()=>{const ua=navigator.userAgent||"";let d="desktop";
    if(/android/i.test(ua))d="android";else if(/iphone|ipad|ipod/i.test(ua))d="ios";
    else if(/windows|macintosh|linux/i.test(ua)&&!/mobile/i.test(ua))d="desktop";setDevice(d);
    QRCode.toDataURL(SITE.playUrl,{margin:1,width:200,color:{dark:"#4c1076",light:"#ffffff"}}).then(setQr).catch(()=>{});},[]);
  return (<div className="applink">
    <img className="app-icon-img" src="/app-icon.png" alt="تطبيق سير تيفي"/>
    <h3>{title||"حمّل تطبيق سير تيفي"}</h3>
    {device==="android"&&<><p style={{color:"#6b5b83",fontSize:14}}>حمّل تطبيق Sir TV وتابع مباريات اليوم مع إشعارات الأهداف.</p>
      <div className="feats"><span>نتائج مباشرة</span><span>إشعارات الأهداف</span><span>ملخصات وأهداف</span></div>
      <div className="cta-row"><a className="btn-tg" style={{background:"#000"}} href={SITE.playUrl} target="_blank" rel="noopener">▶ Google Play</a>
      <a className="btn-tg" href={SITE.telegram} target="_blank" rel="noopener">تيليجرام</a></div></>}
    {device==="desktop"&&<><p style={{color:"#6b5b83",fontSize:14}}>📱 التطبيق على أندرويد. امسح رمز QR بهاتفك لتثبيته.</p>
      <div className="qr-box">{qr?<img src={qr} width={180} height={180} alt="حمّل تطبيق سير تيفي"/>:<div style={{width:180,height:180,background:"#f3e9fb",borderRadius:8}}/>}
      <div className="qr-hint">امسح الرمز بكاميرا هاتفك 📷</div></div>
      <div className="cta-row"><a className="gplay-link" href={SITE.playUrl} target="_blank" rel="noopener">أو افتح Google Play</a>
      <a className="btn-tg" href={SITE.telegram} target="_blank" rel="noopener">تيليجرام</a></div></>}
    {device==="ios"&&<><p style={{color:"#6b5b83",fontSize:14}}>التطبيق على أندرويد، ونسخة iOS قريباً 🔜.</p>
      <div className="cta-row"><span className="soon-pill">🔜 iOS قريباً</span>
      <a className="btn-tg" href={SITE.telegram} target="_blank" rel="noopener">تيليجرام</a></div></>}
    {device==="unknown"&&<div className="cta-row"><a className="btn-tg" style={{background:"#000"}} href={SITE.playUrl} target="_blank" rel="noopener">▶ Google Play</a></div>}
  </div>);
}
