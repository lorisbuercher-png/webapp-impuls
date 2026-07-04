"use client";

import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { operationsRepository } from "../../../lib/operations-runtime";
import type { Person, Report, ReportStatus } from "../../../lib/operations";

const filters: Array<"Alle" | ReportStatus> = ["Alle", "Fehlt", "Eingegangen", "In Prüfung", "Freigegeben"];
const nextStatus: Partial<Record<ReportStatus, ReportStatus>> = { Eingegangen: "In Prüfung", "In Prüfung": "Freigegeben" };
function tone(status: ReportStatus) { return status === "Fehlt" ? "bg-rose-50 text-rose-700" : status === "Eingegangen" ? "bg-sky-50 text-sky-700" : status === "In Prüfung" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"; }

export default function AdminRapporte() {
  const [reports, setReports] = useState<Report[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [filter, setFilter] = useState<"Alle" | ReportStatus>("Alle");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([operationsRepository.listReports(), operationsRepository.listPeople()])
      .then(([reportData, personData]) => { setReports(reportData); setPeople(personData); })
      .finally(() => setLoading(false));
  }, []);

  const personName = (personId: string) => { const person = people.find((item) => item.id === personId); return person ? `${person.firstName} ${person.lastName}` : "Unbekannte Person"; };
  const visible = useMemo(() => reports.filter((report) => {
    const matchesFilter = filter === "Alle" || report.status === filter;
    const matchesQuery = [personName(report.personId), report.period].some((value) => value.toLowerCase().includes(query.toLowerCase()));
    return matchesFilter && matchesQuery;
  }), [reports, filter, query, people]);
  const count = (status: ReportStatus) => reports.filter((report) => report.status === status).length;

  async function advance(report: Report) {
    const target = nextStatus[report.status];
    if (!target) return;
    const updated = await operationsRepository.updateReportStatus(report.id, target);
    setReports((current) => current.map((item) => item.id === updated.id ? updated : item));
  }

  return <AdminLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Repository-gestützter Workflow</p><h1 className="mt-2 text-4xl font-black">Rapporte</h1><p className="mt-2 text-gray-500">Datenzugriff ist von der UI getrennt und für Supabase vorbereitet.</p></div><button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white">↑ Rapport hochladen</button></div>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Fehlen", count("Fehlt"), "text-rose-700"], ["Eingegangen", count("Eingegangen"), "text-sky-700"], ["In Prüfung", count("In Prüfung"), "text-amber-700"], ["Freigegeben", count("Freigegeben"), "text-emerald-700"]].map(([label, value, color]) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-4xl font-black ${color}`}>{value}</p></div>)}</section>
    <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 xl:flex-row xl:items-center xl:justify-between"><div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-xs font-bold ${filter === item ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input value={query} onChange={(event) => setQuery(event.target.value)} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Person oder Periode …" /></div>
      {loading ? <div className="p-12 text-center text-sm font-semibold text-gray-400">Rapporte werden geladen …</div> : <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Periode", "Stunden", "Status", "Aktion"].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{visible.map((report) => <tr key={report.id} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4 text-sm font-bold">{personName(report.personId)}</td><td className="px-5 py-4 text-sm font-semibold">{report.period}</td><td className="px-5 py-4 text-sm font-bold">{report.hours ? `${report.hours} h` : "–"}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone(report.status)}`}>{report.status}</span></td><td className="px-5 py-4 text-right">{nextStatus[report.status] ? <button onClick={() => advance(report)} className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-xs font-bold text-white">→ {nextStatus[report.status]}</button> : <span className="text-xs font-semibold text-gray-400">{report.status === "Fehlt" ? "Nachfassen" : "Abgeschlossen ✓"}</span>}</td></tr>)}</tbody></table></div>}
    </section>
    <div className="mt-6 rounded-3xl border border-dashed border-violet-200 bg-violet-50 p-5 text-center text-sm text-violet-700"><b>Aktiver Adapter:</b> MockOperationsRepository. Der spätere Supabase-Adapter kann dieselbe Schnittstelle implementieren.</div>
  </AdminLayout>;
}
