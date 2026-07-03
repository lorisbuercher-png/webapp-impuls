import AdminLayout from "../../../components/AdminLayout";

const reports = [
  ["Max Muster", "Muster AG", "KW 27", "42.5 h", "Eingegangen", "bg-sky-50 text-sky-700"],
  ["Anna Müller", "Beispiel GmbH", "KW 27", "–", "Fehlt", "bg-rose-50 text-rose-700"],
  ["Luca Rossi", "Swiss Pflege AG", "KW 27", "41.0 h", "In Prüfung", "bg-amber-50 text-amber-700"],
  ["Sarah Keller", "Logistik AG", "KW 27", "44.0 h", "Freigegeben", "bg-emerald-50 text-emerald-700"],
  ["Jonas Frei", "Rheinhafen Logistik", "KW 26", "39.0 h", "Freigegeben", "bg-emerald-50 text-emerald-700"],
];

const steps = [
  ["1", "Upload", "PDF, Foto oder Scan"],
  ["2", "Zuordnung", "Person und Einsatz"],
  ["3", "Prüfung", "Stunden und Zuschläge"],
  ["4", "Freigabe", "Bereit für Lohn"],
];

export default function AdminRapporte() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Backoffice · Woche 27</p><h1 className="mt-2 text-4xl font-black tracking-tight">Rapporte</h1><p className="mt-2 text-gray-500">Eingänge zentral erfassen, prüfen und für den Lohn freigeben.</p></div>
        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">↑ Rapport hochladen</button>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[["Fehlen", "7", "bg-rose-50 text-rose-700"], ["Eingegangen", "16", "bg-sky-50 text-sky-700"], ["Zu prüfen", "12", "bg-amber-50 text-amber-700"], ["Freigegeben", "84", "bg-emerald-50 text-emerald-700"]].map(([label, count, tone]) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-gray-500">{label}</p><p className={`mt-3 text-4xl font-black ${tone.split(" ")[1]}`}>{count}</p><div className={`mt-4 h-1.5 rounded-full ${tone.split(" ")[0]}`} /></div>)}
      </section>

      <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-bold">Rapport-Workflow</h2><p className="mt-1 text-sm text-gray-400">Ein klarer Weg vom Eingang bis zur Auszahlung</p></div><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">KI-Erkennung vorbereitet</span></div>
        <div className="mt-6 grid gap-3 md:grid-cols-4">{steps.map(([number, title, detail], index) => <div key={title} className="relative rounded-2xl bg-[#F7F8FC] p-4"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[#6D5DF6] text-xs font-black text-white">{number}</span><p className="mt-3 text-sm font-bold">{title}</p><p className="mt-1 text-xs text-gray-400">{detail}</p>{index < 3 && <span className="absolute -right-2 top-1/2 hidden text-violet-300 md:block">→</span>}</div>)}</div>
      </section>

      <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{["Alle 119", "Fehlen 7", "Eingang 16", "Prüfung 12", "Freigegeben 84"].map((item, index) => <button key={item} className={`rounded-xl px-4 py-2 text-xs font-bold ${index === 0 ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input className="rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Rapport suchen …" /></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Kunde", "Periode", "Stunden", "Status", ""].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{reports.map(([name, client, period, hours, status, tone]) => <tr key={`${name}-${period}`} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4"><p className="text-sm font-bold">{name}</p><p className="text-xs text-gray-400">Aktiver Einsatz</p></td><td className="px-5 py-4 text-sm text-gray-500">{client}</td><td className="px-5 py-4 text-sm font-semibold">{period}</td><td className="px-5 py-4 text-sm font-bold">{hours}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{status}</span></td><td className="px-5 py-4 text-right"><button className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold hover:border-violet-300 hover:text-[#6D5DF6]">{status === "Fehlt" ? "Nachfassen" : "Öffnen"}</button></td></tr>)}</tbody></table></div>
      </section>

      <section className="mt-6 rounded-3xl border border-dashed border-violet-200 bg-violet-50/60 p-6 text-center"><p className="font-bold text-violet-800">Automatische Erkennung als nächster Ausbauschritt</p><p className="mt-2 text-sm text-violet-600">Rapporte können später automatisch ausgelesen, zugeordnet und auf Abweichungen geprüft werden.</p></section>
    </AdminLayout>
  );
}
