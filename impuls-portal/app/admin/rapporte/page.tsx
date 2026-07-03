"use client";

import { useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";

type Report = { name: string; client: string; period: string; hours: string; status: string };

const initialReports: Report[] = [
  { name: "Max Muster", client: "Muster AG", period: "KW 27", hours: "42.5 h", status: "Eingegangen" },
  { name: "Anna Müller", client: "Beispiel GmbH", period: "KW 27", hours: "–", status: "Fehlt" },
  { name: "Luca Rossi", client: "Swiss Pflege AG", period: "KW 27", hours: "41.0 h", status: "In Prüfung" },
  { name: "Sarah Keller", client: "Logistik AG", period: "KW 27", hours: "44.0 h", status: "Freigegeben" },
  { name: "Jonas Frei", client: "Rheinhafen Logistik", period: "KW 26", hours: "39.0 h", status: "Freigegeben" },
];

const filters = ["Alle", "Fehlt", "Eingegangen", "In Prüfung", "Freigegeben"];
const nextStatus: Record<string, string> = { Eingegangen: "In Prüfung", "In Prüfung": "Freigegeben" };

function tone(status: string) {
  if (status === "Fehlt") return "bg-rose-50 text-rose-700";
  if (status === "Eingegangen") return "bg-sky-50 text-sky-700";
  if (status === "In Prüfung") return "bg-amber-50 text-amber-700";
  return "bg-emerald-50 text-emerald-700";
}

export default function AdminRapporte() {
  const [reports, setReports] = useState(initialReports);
  const [filter, setFilter] = useState("Alle");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => reports.filter((report) => {
    const matchesFilter = filter === "Alle" || report.status === filter;
    const needle = query.toLowerCase();
    return matchesFilter && [report.name, report.client, report.period].some((value) => value.toLowerCase().includes(needle));
  }), [reports, filter, query]);

  const count = (status: string) => reports.filter((report) => report.status === status).length;
  const advance = (name: string, period: string) => setReports((current) => current.map((report) => report.name === name && report.period === period && nextStatus[report.status] ? { ...report, status: nextStatus[report.status] } : report));

  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Backoffice · Woche 27</p><h1 className="mt-2 text-4xl font-black tracking-tight">Rapporte</h1><p className="mt-2 text-gray-500">Rapporte suchen, prüfen und lokal durch den Workflow führen.</p></div><button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">↑ Rapport hochladen</button></div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Fehlen", count("Fehlt"), "text-rose-700"], ["Eingegangen", count("Eingegangen"), "text-sky-700"], ["In Prüfung", count("In Prüfung"), "text-amber-700"], ["Freigegeben", count("Freigegeben"), "text-emerald-700"]].map(([label, value, color]) => <button key={label} onClick={() => setFilter(String(label === "Fehlen" ? "Fehlt" : label))} className="rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-violet-200"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-4xl font-black ${color}`}>{value}</p></button>)}</section>

      <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5"><div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between"><div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-xs font-bold ${filter === item ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-72 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#6D5DF6] focus:ring-4 focus:ring-violet-100" placeholder="Person, Kunde oder Periode …" /></div></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Kunde", "Periode", "Stunden", "Status", "Aktion"].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{visible.map((report) => <tr key={`${report.name}-${report.period}`} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4"><p className="text-sm font-bold">{report.name}</p><p className="text-xs text-gray-400">Aktiver Einsatz</p></td><td className="px-5 py-4 text-sm text-gray-500">{report.client}</td><td className="px-5 py-4 text-sm font-semibold">{report.period}</td><td className="px-5 py-4 text-sm font-bold">{report.hours}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone(report.status)}`}>{report.status}</span></td><td className="px-5 py-4 text-right">{nextStatus[report.status] ? <button onClick={() => advance(report.name, report.period)} className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-xs font-bold text-white">→ {nextStatus[report.status]}</button> : report.status === "Fehlt" ? <button className="rounded-xl bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700">Nachfassen</button> : <span className="text-xs font-bold text-emerald-600">Abgeschlossen ✓</span>}</td></tr>)}</tbody></table></div>
        {visible.length === 0 && <div className="p-12 text-center"><p className="font-bold">Keine Rapporte gefunden</p><button onClick={() => { setFilter("Alle"); setQuery(""); }} className="mt-4 rounded-xl bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">Filter zurücksetzen</button></div>}
      </section>

      <div className="mt-6 rounded-3xl border border-dashed border-violet-200 bg-violet-50/60 p-6 text-center"><p className="font-bold text-violet-800">UI-Prototyp ohne Datenbankänderung</p><p className="mt-2 text-sm text-violet-600">Statuswechsel gelten bis zum Neuladen der Seite. Die persistente Supabase-Anbindung folgt nach Stabilisierung der Workflows.</p></div>
    </AdminLayout>
  );
}
