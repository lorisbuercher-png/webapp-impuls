"use client";

import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { operationsRepository } from "../../../lib/operations-runtime";
import type { PayrollRelease, PayrollStatus, Person } from "../../../lib/operations";

const filters: Array<"Alle" | PayrollStatus> = ["Alle", "Bereit zur Auszahlung", "In Prüfung", "Rapport fehlt", "Ausbezahlt"];
function tone(status: PayrollStatus) { return status === "Bereit zur Auszahlung" ? "bg-emerald-50 text-emerald-700" : status === "In Prüfung" ? "bg-amber-50 text-amber-700" : status === "Rapport fehlt" ? "bg-rose-50 text-rose-700" : "bg-sky-50 text-sky-700"; }

export default function AdminLohn() {
  const [items, setItems] = useState<PayrollRelease[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [filter, setFilter] = useState<"Alle" | PayrollStatus>("Alle");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([operationsRepository.listPayrollReleases(), operationsRepository.listPeople()])
      .then(([payroll, personData]) => { setItems(payroll); setPeople(personData); })
      .finally(() => setLoading(false));
  }, []);

  const personName = (personId: string) => { const person = people.find((item) => item.id === personId); return person ? `${person.firstName} ${person.lastName}` : "Unbekannte Person"; };
  const visible = useMemo(() => items.filter((item) => (filter === "Alle" || item.status === filter) && personName(item.personId).toLowerCase().includes(query.toLowerCase())), [items, filter, query, people]);
  const count = (status: PayrollStatus) => items.filter((item) => item.status === status).length;

  async function release(item: PayrollRelease) {
    if (item.status !== "Bereit zur Auszahlung") return;
    const updated = await operationsRepository.updatePayrollStatus(item.id, "Ausbezahlt");
    setItems((current) => current.map((entry) => entry.id === updated.id ? updated : entry));
  }

  return <AdminLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Repository-gestützter Workflow</p><h1 className="mt-2 text-4xl font-black">Lohnfreigabe</h1><p className="mt-2 text-gray-500">Freigaben laufen über dieselbe austauschbare Datenzugriffsschicht.</p></div><button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white">Auszahlungen vorbereiten</button></div>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Bereit", count("Bereit zur Auszahlung"), "text-emerald-700"], ["Prüfung", count("In Prüfung"), "text-amber-700"], ["Blockiert", count("Rapport fehlt"), "text-rose-700"], ["Ausbezahlt", count("Ausbezahlt"), "text-sky-700"]].map(([label, value, color]) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-4xl font-black ${color}`}>{value}</p></div>)}</section>
    <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 xl:flex-row xl:items-center xl:justify-between"><div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-xs font-bold ${filter === item ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input value={query} onChange={(event) => setQuery(event.target.value)} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Mitarbeiter suchen …" /></div>
      {loading ? <div className="p-12 text-center text-sm font-semibold text-gray-400">Lohndaten werden geladen …</div> : <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Periode", "Nettolohn", "Status", "Aktion"].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{visible.map((item) => <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4 text-sm font-bold">{personName(item.personId)}</td><td className="px-5 py-4 text-sm font-semibold">{item.period}</td><td className="px-5 py-4 text-sm font-bold">{item.netAmount ? new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" }).format(item.netAmount) : "Offen"}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone(item.status)}`}>{item.status}</span></td><td className="px-5 py-4 text-right">{item.status === "Bereit zur Auszahlung" ? <button onClick={() => release(item)} className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-xs font-bold text-white">Freigeben</button> : item.status === "Rapport fehlt" ? <a href="/admin/rapporte" className="rounded-xl bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700">Rapport öffnen</a> : <span className="text-xs font-semibold text-gray-400">Keine Aktion</span>}</td></tr>)}</tbody></table></div>}
    </section>
    <div className="mt-6 rounded-3xl border border-dashed border-violet-200 bg-violet-50 p-5 text-center text-sm text-violet-700"><b>Aktiver Adapter:</b> MockOperationsRepository. Eine blockierte Auszahlung kann nicht versehentlich freigegeben werden.</div>
  </AdminLayout>;
}
