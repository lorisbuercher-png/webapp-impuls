"use client";
import { useState } from "react";
import KundenLayout from "../../../components/KundenLayout";

const initial = [{id:1,name:"Max Muster",kw:"KW 27",hours:42.5,status:"Zu prüfen"},{id:2,name:"Anna Müller",kw:"KW 27",hours:40,status:"Freigegeben"},{id:3,name:"Luca Rossi",kw:"KW 26",hours:38.5,status:"Rückfrage"}];
export default function Rapporte(){
 const [items,setItems]=useState(initial); const [msg,setMsg]=useState("");
 const update=(id:number,status:string)=>{setItems(v=>v.map(x=>x.id===id?{...x,status}:x));setMsg(status==="Freigegeben"?"Rapport freigegeben – das Backoffice wurde informiert.":"Rückfrage wurde an den Berater gesendet.")};
 return <KundenLayout><div className="mx-auto max-w-5xl"><p className="text-sm font-bold uppercase tracking-widest text-[#6D5DF6]">Kundenprüfung</p><h1 className="mt-2 text-3xl font-black">Rapporte bestätigen</h1><p className="mt-2 text-gray-500">Arbeitsstunden prüfen, freigeben oder eine Rückfrage senden.</p>{msg&&<div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">✓ {msg}</div>}<div className="mt-7 space-y-4">{items.map(x=><div key={x.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-bold">{x.name}</h2><p className="text-gray-500">{x.kw} · {x.hours} Stunden</p></div><span className="w-fit rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">{x.status}</span><div className="flex gap-2"><button onClick={()=>update(x.id,"Rückfrage")} className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold">Rückfrage</button><button onClick={()=>update(x.id,"Freigegeben")} className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">Freigeben</button></div></div></div>)}</div></div></KundenLayout>
}
