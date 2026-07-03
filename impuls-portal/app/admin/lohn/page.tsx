import AdminLayout from "../../../components/AdminLayout";

const payroll = [
  ["Max Muster", "Muster AG", "42.5 h", "CHF 5’184.40", "Bereit zur Auszahlung", "bg-emerald-50 text-emerald-700"],
  ["Anna Müller", "Beispiel GmbH", "38.0 h", "CHF 4’620.80", "Rapport fehlt", "bg-rose-50 text-rose-700"],
  ["Luca Rossi", "Swiss Pflege AG", "41.0 h", "CHF 5’026.20", "In Prüfung", "bg-amber-50 text-amber-700"],
  ["Sarah Keller", "Logistik AG", "44.0 h", "CHF 5’418.00", "Bereit zur Auszahlung", "bg-emerald-50 text-emerald-700"],
  ["Jonas Frei", "Rheinhafen Logistik", "39.0 h", "CHF 4’860.20", "Ausbezahlt", "bg-sky-50 text-sky-700"],
];

const stages = [
  ["Bereit zur Auszahlung", "19", "CHF 82’640", "bg-emerald-50", "text-emerald-700"],
  ["In Prüfung", "12", "CHF 38’420", "bg-amber-50", "text-amber-700"],
  ["Blockiert", "7", "CHF 18’320", "bg-rose-50", "text-rose-700"],
  ["Ausbezahlt", "126", "CHF 546’880", "bg-sky-50", "text-sky-700"],
];

export default function AdminLohn() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Backoffice · Juli 2026</p><h1 className="mt-2 text-4xl font-black tracking-tight">Lohnfreigabe</h1><p className="mt-2 text-gray-500">Vom geprüften Rapport bis zur Auszahlung transparent steuern.</p></div>
        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">Auszahlungen vorbereiten</button>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stages.map(([label, count, amount, background, color]) => <div key={label} className={`rounded-3xl border border-white p-5 shadow-sm ${background}`}><div className="flex items-center justify-between"><p className="text-sm font-semibold text-gray-500">{label}</p><span className={`rounded-full bg-white px-3 py-1 text-xs font-black ${color}`}>{count}</span></div><p className={`mt-5 text-2xl font-black ${color}`}>{amount}</p><p className="mt-1 text-xs text-gray-400">Aktuelle Lohnperiode</p></div>)}
      </section>

      <section className="mt-6 rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">{["Alle 164", "Bereit 19", "Prüfung 12", "Blockiert 7", "Ausbezahlt 126"].map((filter, index) => <button key={filter} className={`rounded-xl px-4 py-2 text-xs font-bold ${index === 0 ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{filter}</button>)}</div>
          <input className="rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Mitarbeiter suchen …" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Kunde", "Stunden", "Nettolohn", "Status", ""].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead>
            <tbody>{payroll.map(([name, client, hours, amount, status, tone]) => <tr key={name} className="border-t border-gray-100 transition hover:bg-gray-50"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-100 text-xs font-black text-violet-700">{name.split(" ").map((part) => part[0]).join("")}</span><div><p className="text-sm font-bold">{name}</p><p className="text-xs text-gray-400">Lohnperiode Juli 2026</p></div></div></td><td className="px-5 py-4 text-sm text-gray-500">{client}</td><td className="px-5 py-4 text-sm font-bold">{hours}</td><td className="px-5 py-4 text-sm font-bold">{amount}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{status}</span></td><td className="px-5 py-4 text-right"><button className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 hover:border-violet-300 hover:text-[#6D5DF6]">Öffnen</button></td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-bold">Prüflogik</p><p className="mt-2 text-sm leading-6 text-gray-500">Eine Auszahlung wird erst freigegeben, wenn Rapport, Stunden und Einsatzdaten vollständig geprüft sind.</p></div>
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-bold">Nächster Lohnlauf</p><p className="mt-2 text-2xl font-black">10. Juli 2026</p><p className="mt-1 text-xs text-gray-400">Noch 7 Tage</p></div>
        <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-sm"><p className="text-sm font-bold text-violet-300">7 Zahlungen blockiert</p><p className="mt-2 text-sm text-slate-300">Fehlende Rapporte jetzt nachfassen, damit niemand verspätet ausbezahlt wird.</p><button className="mt-4 rounded-xl bg-[#6D5DF6] px-4 py-2 text-xs font-bold">Rapporte öffnen</button></div>
      </section>
    </AdminLayout>
  );
}
