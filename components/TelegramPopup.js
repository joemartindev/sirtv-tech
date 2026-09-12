"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
export default function TelegramPopup(){
  const [show,setShow]=useState(false);
  useEffect(()=>{if(typeof window==="undefined")return;if(sessionStorage.getItem("tg_seen"))return;
    const t=setTimeout(()=>setShow(true),8000);return ()=>clearTimeout(t);},[]);
  if(!show)return null;const close=()=>{sessionStorage.setItem("tg_seen","1");setShow(false);};
  return (<div onClick={close} style={{position:"fixed",inset:0,background:"rgba(30,10,50,.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:20}}>
    <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:20,padding:26,maxWidth:360,textAlign:"center"}}>
      <div style={{fontSize:40}}>🔴</div><h3 style={{color:"#6b21a8",margin:"6px 0"}}>قناة سير تيفي على تيليجرام</h3>
      <p style={{color:"#6b5b83",fontSize:14,marginBottom:14}}>ملخصات وأهداف وإشعارات المباريات أولاً بأول.</p>
      <a className="btn-tg" href={SITE.telegram} target="_blank" rel="noopener" onClick={close}>انضم الآن</a>
      <div style={{marginTop:12}}><a onClick={close} style={{color:"#6b5b83",fontSize:13,cursor:"pointer"}}>لاحقاً</a></div>
    </div></div>);
}
