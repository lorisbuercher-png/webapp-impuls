import Link from "next/link";
import AdminLayout from "../../../components/AdminLayout";

const kandidaten = [
  ["Adil Benali", "Betriebsmitarbeiter", "Neu", "Zürich", "Heute, 08:55"],
  ["Luca Rossi", "Pflegeassistent", "Qualifiziert", "Bern", "Gestern"],
  ["Sofia Costa", "Logistikerin", "Interview", "Basel", "02.07.2026"],
  ["Marko Petrovic", "Produktionsmitarbeiter", "Verfügbar", "Aargau", "01.07.2026"],
];

export default function KandidatenPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Recruiting</p>
            <h2 className="mt-2 text-3xl font-black">Kandidaten</h2>
            <p className="mt-2 text-gray-500">Bewerbungen prüfen, qualifizieren und in Einsätze überführen.</p>
          </div>
          <Link href="/bewerbung" className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">+ Bewerbung erfassen</Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-4">
          {[["Neu","7"],["In Prüfung","12"],["Interview","5"],["Verfügbar","18"]].map(([label,value]) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5"><p className="text-sm text-gray-500">{label}</p><p className="mt-2 text-3xl font-black">{value}</p></div>)}
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between"><h3 className="font-bold">Kandidaten-Pipeline</h3><div className="flex gap-2"><Link href="/berater/pipeline" className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold hover:border-violet-300 hover:text-[#6D5DF6]">Pipeline öffnen</Link><Link href="/berater/kandidaten" className="rounded-xl bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">Berateransicht</Link></div></div>
          <div className="divide-y divide-gray-100">
            {kandidaten.map(([name,role,status,ort,datum]) => <div key={name} className="grid gap-3 p-5 transition hover:bg-gray-50 md:grid-cols-[1.3fr_1fr_.8fr_.7fr_auto] md:items-center"><div><p className="font-bold">{name}</p><p className="text-sm text-gray-400">{datum}</p></div><p className="text-sm text-gray-600">{role}</p><span className="w-fit rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">{status}</span><p className="text-sm text-gray-500">{ort}</p><Link href="/admin/mitarbeiterakte" className="rounded-xl border border-gray-200 px-4 py-2 text-center text-sm font-semibold hover:bg-[#6D5DF6] hover:text-white">Akte öffnen</Link></div>)}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
