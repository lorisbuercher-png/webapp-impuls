import AdminLayout from "../../../components/AdminLayout";

const permits = [
  ["Max Muster", "B-Bewilligung", "31.03.2027", "271 Tage", "Gültig", "bg-emerald-50 text-emerald-700"],
  ["Anna Müller", "C-Bewilligung", "15.07.2026", "12 Tage", "Läuft bald ab", "bg-amber-50 text-amber-700"],
  ["Luca Rossi", "EU/EFTA", "01.09.2027", "425 Tage", "Gültig", "bg-emerald-50 text-emerald-700"],
  ["Sarah Keller", "B-Bewilligung", "–", "–", "Fehlt", "bg-rose-50 text-rose-700"],
  ["Amir Haddad", "L-Bewilligung", "28.06.2026", "5 Tage überfällig", "Abgelaufen", "bg-red-100 text-red-800"],
];

export default function AdminBewilligungen() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Compliance & Personal</p><h1 className="mt-2 text-4xl font-black tracking-tight">Bewilligungen</h1><p className="mt-2 text-gray-500">Gültigkeit überwachen und rechtzeitig auf Handlungsbedarf reagieren.</p></div>
        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">+ Bewilligung erfassen</button>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[["Gültig", "167", "91 %", "bg-emerald-50 text-emerald-700"], ["Läuft bald ab", "5", "≤ 30 Tage", "bg-amber-50 text-amber-700"], ["Abgelaufen", "2", "Sofort prüfen", "bg-red-100 text-red-800"], ["Fehlt", "10", "Dokument offen", "bg-rose-50 text-rose-700"]].map(([label, value, note, tone]) => <div key={label} className={`rounded-3xl p-5 shadow-sm ${tone.split(" ")[0]}`}><div className="flex items-center justify-between"><p className="text-sm font-bold text-gray-600">{label}</p><span className={`h-2.5 w-2.5 rounded-full ${label === "Gültig" ? "bg-emerald-500" : label === "Läuft bald ab" ? "bg-amber-500" : "bg-rose-500"}`} /></div><p className={`mt-4 text-4xl font-black ${tone.split(" ")[1]}`}>{value}</p><p className="mt-1 text-xs text-gray-400">{note}</p></div>)}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Nächste Abläufe</h2><p className="mt-1 text-sm text-gray-400">Die nächsten 30 Tage</p></div><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">5 Personen</span></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["Anna Müller", "12 Tage", "15.07.2026"], ["Sofia Rossi", "18 Tage", "21.07.2026"], ["David Petrov", "26 Tage", "29.07.2026"]].map(([name, days, date]) => <div key={name} className="rounded-2xl bg-amber-50 p-4"><p className="text-sm font-bold">{name}</p><p className="mt-3 text-2xl font-black text-amber-700">{days}</p><p className="mt-1 text-xs text-amber-600">{date}</p></div>)}</div></div>
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">Automatische Erinnerung</p><h2 className="mt-3 text-xl font-bold">Fristen nicht mehr verpassen</h2><p className="mt-2 text-sm leading-6 text-slate-300">Erinnerungen 60, 30 und 14 Tage vor Ablauf an Backoffice, Berater und Mitarbeiter vorbereiten.</p><button className="mt-5 rounded-xl bg-[#6D5DF6] px-4 py-2 text-xs font-bold">Regeln konfigurieren</button></div>
      </section>

      <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{["Alle 184", "Gültig 167", "Bald fällig 5", "Abgelaufen 2", "Fehlt 10"].map((item, index) => <button key={item} className={`rounded-xl px-4 py-2 text-xs font-bold ${index === 0 ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input className="rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Person suchen …" /></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left"><thead><tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">{["Mitarbeiter", "Bewilligung", "Gültig bis", "Frist", "Status", ""].map((item) => <th key={item} className="px-5 py-4 font-bold">{item}</th>)}</tr></thead><tbody>{permits.map(([name, type, valid, days, status, tone]) => <tr key={name} className="border-t border-gray-100 hover:bg-gray-50"><td className="px-5 py-4"><p className="text-sm font-bold">{name}</p><p className="text-xs text-gray-400">Personalakte öffnen</p></td><td className="px-5 py-4 text-sm text-gray-500">{type}</td><td className="px-5 py-4 text-sm font-semibold">{valid}</td><td className="px-5 py-4 text-sm text-gray-500">{days}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{status}</span></td><td className="px-5 py-4 text-right"><button className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold hover:border-violet-300 hover:text-[#6D5DF6]">Öffnen</button></td></tr>)}</tbody></table></div>
      </section>
    </AdminLayout>
  );
}
