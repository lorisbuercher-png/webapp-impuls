"use client";

import { useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";

const permits = [
  { name: "Max Muster", type: "B-Bewilligung", valid: "31.03.2027", deadline: "271 Tage", status: "Gültig" },
  { name: "Anna Müller", type: "C-Bewilligung", valid: "15.07.2026", deadline: "12 Tage", status: "Läuft bald ab" },
  { name: "Luca Rossi", type: "EU/EFTA", valid: "01.09.2027", deadline: "425 Tage", status: "Gültig" },
  { name: "Sarah Keller", type: "Noch nicht erfasst", valid: "–", deadline: "–", status: "Fehlt" },
  { name: "Amir Haddad", type: "L-Bewilligung", valid: "28.06.2026", deadline: "5 Tage überfällig", status: "Abgelaufen" },
];
const filters = ["Alle", "Gültig", "Läuft bald ab", "Abgelaufen", "Fehlt"];
function badge(status: string) { return status === "Gültig" ? "bg-emerald-50 text-emerald-700" : status === "Läuft bald ab" ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"; }

export default function AdminBewilligungen() {
  const [filter, setFilter] = useState("Alle");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => permits.filter((permit) => (filter === "Alle" || permit.status === filter) && [permit.name, permit.type].some((value) => value.toLowerCase().includes(query.toLowerCase()))), [filter, query]);
  const count = (status: string) => permits.filter((permit) => permit.status === status).length;
  return <AdminLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Compliance & Personal</p><h1 className="mt-2 text-4xl font-black">Bewilligungen</h1><p className="mt-2 text-gray-500">Fristen suchen, filtern und rechtzeitig bearbeiten.</p></div><button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white">+ Bewilligung erfassen</button></div>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Gültig", count("Gültig"), "text-emerald-700"], ["Läuft bald ab", count("Läuft bald ab"), "text-amber-700"], ["Abgelaufen", count("Abgelaufen"), "text-red-700"], ["Fehlt", count("Fehlt"), "text-rose-700"]].map(([label, value, color]) => <button key={label} onClick={() => setFilter(String(label))} className="rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm hover:border-violet-200"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-4xl font-black ${color}`}>{value}</p></button>)}</section>
    <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 xl:flex-row xl:items-center xl:justify-between"><div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-xs font-bold ${filter === item ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input value={query} onChange={(event) => setQuery(event.target.value)} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Person oder Bewilligung …" /></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Bewilligung", "Gültig bis", "Frist", "Status", ""].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{visible.map((permit) => <tr key={permit.name} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4 text-sm font-bold">{permit.name}</td><td className="px-5 py-4 text-sm text-gray-500">{permit.type}</td><td className="px-5 py-4 text-sm font-semibold">{permit.valid}</td><td className="px-5 py-4 text-sm text-gray-500">{permit.deadline}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${badge(permit.status)}`}>{permit.status}</span></td><td className="px-5 py-4 text-right"><button className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold hover:border-violet-300 hover:text-[#6D5DF6]">Öffnen</button></td></tr>)}</tbody></table></div>
      {visible.length === 0 && <div className="p-12 text-center"><p className="font-bold">Keine Bewilligungen gefunden</p><button onClick={() => { setFilter("Alle"); setQuery(""); }} className="mt-4 rounded-xl bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">Filter zurücksetzen</button></div>}
    </section>
  </AdminLayout>;
}

