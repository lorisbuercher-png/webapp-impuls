"use client";

import { useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";

type Payroll = { name: string; client: string; hours: string; amount: string; status: string };
const initial: Payroll[] = [
  { name: "Max Muster", client: "Muster AG", hours: "42.5 h", amount: "CHF 5’184.40", status: "Bereit zur Auszahlung" },
  { name: "Anna Müller", client: "Beispiel GmbH", hours: "38.0 h", amount: "CHF 4’620.80", status: "Rapport fehlt" },
  { name: "Luca Rossi", client: "Swiss Pflege AG", hours: "41.0 h", amount: "CHF 5’026.20", status: "In Prüfung" },
  { name: "Sarah Keller", client: "Logistik AG", hours: "44.0 h", amount: "CHF 5’418.00", status: "Bereit zur Auszahlung" },
  { name: "Jonas Frei", client: "Rheinhafen Logistik", hours: "39.0 h", amount: "CHF 4’860.20", status: "Ausbezahlt" },
];
const filters = ["Alle", "Bereit zur Auszahlung", "In Prüfung", "Rapport fehlt", "Ausbezahlt"];
function badge(status: string) { return status === "Bereit zur Auszahlung" ? "bg-emerald-50 text-emerald-700" : status === "In Prüfung" ? "bg-amber-50 text-amber-700" : status === "Rapport fehlt" ? "bg-rose-50 text-rose-700" : "bg-sky-50 text-sky-700"; }

export default function AdminLohn() {
  const [items, setItems] = useState(initial);
  const [filter, setFilter] = useState("Alle");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => items.filter((item) => (filter === "Alle" || item.status === filter) && [item.name, item.client].some((value) => value.toLowerCase().includes(query.toLowerCase()))), [items, filter, query]);
  const count = (status: string) => items.filter((item) => item.status === status).length;
  const release = (name: string) => setItems((current) => current.map((item) => item.name === name && item.status === "Bereit zur Auszahlung" ? { ...item, status: "Ausbezahlt" } : item));

  return <AdminLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Backoffice · Juli 2026</p><h1 className="mt-2 text-4xl font-black">Lohnfreigabe</h1><p className="mt-2 text-gray-500">Geprüfte Zahlungen freigeben und Blockaden sichtbar halten.</p></div><button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white">Auszahlungen vorbereiten</button></div>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Bereit zur Auszahlung", count("Bereit zur Auszahlung"), "text-emerald-700"], ["In Prüfung", count("In Prüfung"), "text-amber-700"], ["Blockiert", count("Rapport fehlt"), "text-rose-700"], ["Ausbezahlt", count("Ausbezahlt"), "text-sky-700"]].map(([label, value, color]) => <button key={label} onClick={() => setFilter(label === "Blockiert" ? "Rapport fehlt" : String(label))} className="rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm hover:border-violet-200"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-4xl font-black ${color}`}>{value}</p></button>)}</section>
    <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 xl:flex-row xl:items-center xl:justify-between"><div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-xs font-bold ${filter === item ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input value={query} onChange={(event) => setQuery(event.target.value)} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Mitarbeiter oder Kunde …" /></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Kunde", "Stunden", "Nettolohn", "Status", "Aktion"].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{visible.map((item) => <tr key={item.name} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4 text-sm font-bold">{item.name}</td><td className="px-5 py-4 text-sm text-gray-500">{item.client}</td><td className="px-5 py-4 text-sm font-bold">{item.hours}</td><td className="px-5 py-4 text-sm font-bold">{item.amount}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${badge(item.status)}`}>{item.status}</span></td><td className="px-5 py-4 text-right">{item.status === "Bereit zur Auszahlung" ? <button onClick={() => release(item.name)} className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-xs font-bold text-white">Freigeben</button> : item.status === "Rapport fehlt" ? <a href="/admin/rapporte" className="rounded-xl bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700">Rapport öffnen</a> : <span className="text-xs font-semibold text-gray-400">Keine Aktion</span>}</td></tr>)}</tbody></table></div>
    </section>
    <div className="mt-6 rounded-3xl border border-dashed border-violet-200 bg-violet-50 p-5 text-center text-sm text-violet-700"><b>UI-Prototyp:</b> Freigaben gelten bis zum Neuladen. Persistenz folgt erst nach der UI-Abnahme.</div>
  </AdminLayout>;
}
