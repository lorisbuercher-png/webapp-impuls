"use client";

import { useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";

const people = [
  { name: "Max Muster", role: "Produktionsmitarbeiter", status: "Aktiv im Einsatz", client: "Muster AG", location: "Zürich", rapport: "Eingegangen", permit: "Gültig" },
  { name: "Anna Müller", role: "Logistikerin", status: "Aktiv im Einsatz", client: "Beispiel GmbH", location: "Basel", rapport: "Fehlt", permit: "Läuft bald ab" },
  { name: "Luca Rossi", role: "Pflegeassistent", status: "Verfügbar", client: "–", location: "Bern", rapport: "–", permit: "Gültig" },
  { name: "Sarah Keller", role: "Lagermitarbeiterin", status: "Kandidat", client: "–", location: "Aarau", rapport: "–", permit: "Fehlt" },
  { name: "Adil Benali", role: "Betriebsmitarbeiter", status: "Bewerber", client: "–", location: "Winterthur", rapport: "–", permit: "Prüfung offen" },
  { name: "Jonas Frei", role: "Logistiker EFZ", status: "Abgemeldet", client: "Rheinhafen Logistik", location: "Basel", rapport: "Freigegeben", permit: "Gültig" },
];

const filters = ["Alle", "Bewerber", "Kandidat", "Verfügbar", "Aktiv im Einsatz", "Abgemeldet"];

function statusStyle(status: string) {
  if (status === "Aktiv im Einsatz") return "bg-emerald-50 text-emerald-700";
  if (status === "Verfügbar") return "bg-sky-50 text-sky-700";
  if (status === "Kandidat") return "bg-violet-50 text-violet-700";
  if (status === "Bewerber") return "bg-amber-50 text-amber-700";
  return "bg-gray-100 text-gray-600";
}

export default function AdminMitarbeiter() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Alle");

  const visible = useMemo(() => people.filter((person) => {
    const matchesFilter = filter === "Alle" || person.status === filter;
    const needle = query.toLowerCase();
    const matchesQuery = [person.name, person.role, person.client, person.location].some((value) => value.toLowerCase().includes(needle));
    return matchesFilter && matchesQuery;
  }), [filter, query]);

  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Personen & Einsatzfähigkeit</p><h1 className="mt-2 text-4xl font-black tracking-tight">Mitarbeitende</h1><p className="mt-2 text-gray-500">Vom ersten Kontakt bis zum ehemaligen Mitarbeiter zentral verwalten.</p></div>
        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">+ Person erfassen</button>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{[["Alle Personen", "184"], ["Aktiv", "92"], ["Verfügbar", "26"], ["Kandidaten", "31"], ["Abgemeldet", "12"]].map(([label, value], index) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-3xl font-black ${index === 0 ? "text-[#6D5DF6]" : "text-gray-800"}`}>{value}</p></div>)}</section>

      <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-xs font-bold transition ${filter === item ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{item}</button>)}</div>
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-72 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#6D5DF6] focus:ring-4 focus:ring-violet-100" placeholder="Name, Funktion, Kunde oder Ort …" />
          </div>
          <p className="mt-4 text-xs font-semibold text-gray-400">{visible.length} von {people.length} Beispielprofilen angezeigt</p>
        </div>

        <div className="overflow-x-auto"><table className="w-full min-w-[950px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Person", "Status", "Aktueller Kunde", "Rapport", "Bewilligung", ""].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{visible.map((person) => <tr key={person.name} className="border-t border-gray-100 transition hover:bg-gray-50"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-100 text-xs font-black text-violet-700">{person.name.split(" ").map((part) => part[0]).join("")}</span><div><p className="text-sm font-bold">{person.name}</p><p className="text-xs text-gray-400">{person.role} · {person.location}</p></div></div></td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle(person.status)}`}>{person.status}</span></td><td className="px-5 py-4 text-sm font-semibold text-gray-600">{person.client}</td><td className="px-5 py-4 text-sm text-gray-500">{person.rapport}</td><td className="px-5 py-4"><span className={`text-sm font-semibold ${person.permit === "Gültig" ? "text-emerald-600" : person.permit === "Fehlt" ? "text-rose-600" : "text-amber-600"}`}>{person.permit}</span></td><td className="px-5 py-4 text-right"><a href="/admin/mitarbeiterakte" className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 hover:border-violet-300 hover:text-[#6D5DF6]">Akte öffnen</a></td></tr>)}</tbody></table></div>

        {visible.length === 0 && <div className="p-12 text-center"><p className="font-bold text-gray-700">Keine Personen gefunden</p><p className="mt-2 text-sm text-gray-400">Passe Suche oder Statusfilter an.</p><button onClick={() => { setQuery(""); setFilter("Alle"); }} className="mt-4 rounded-xl bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">Filter zurücksetzen</button></div>}
      </section>
    </AdminLayout>
  );
}
