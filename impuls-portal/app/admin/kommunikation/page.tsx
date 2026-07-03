import AdminLayout from "../../../components/AdminLayout";

const messages = [
  ["WhatsApp", "Max Muster", "Rapport für KW 27 gesendet.", "Muster AG · Produktion", "Heute, 09:42", "bg-emerald-50 text-emerald-700"],
  ["E-Mail", "Muster AG", "Einsatzverlängerung bis Ende August bestätigt.", "Max Muster · Einsatz #E-2048", "Heute, 08:16", "bg-sky-50 text-sky-700"],
  ["Telefon", "Anna Müller", "Rückfrage zur fehlenden Bewilligung.", "Personalakte · Compliance", "Gestern, 15:20", "bg-amber-50 text-amber-700"],
  ["Intern", "Backoffice Zürich", "Lohn nach Rapportprüfung freigeben.", "Lohnlauf Juli 2026", "Gestern, 11:05", "bg-violet-50 text-violet-700"],
  ["E-Mail", "Swiss Pflege AG", "Schichtplan für kommende Woche erhalten.", "Luca Rossi · Einsatz #E-1994", "01.07.2026", "bg-sky-50 text-sky-700"],
];

export default function Kommunikation() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Zentrale Historie</p><h1 className="mt-2 text-4xl font-black tracking-tight">Kommunikation</h1><p className="mt-2 text-gray-500">Gespräche pro Person und Einsatz nachvollziehbar an einem Ort.</p></div><button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">+ Kommunikation erfassen</button></div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Heute", "18", "Neue Einträge"], ["WhatsApp", "28", "Diese Woche"], ["E-Mail", "46", "Diese Woche"], ["Offene Rückfragen", "9", "Handlungsbedarf"]].map(([label, value, note]) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-gray-500">{label}</p><p className="mt-3 text-4xl font-black text-[#6D5DF6]">{value}</p><p className="mt-1 text-xs text-gray-400">{note}</p></div>)}</section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{["Alle", "WhatsApp", "E-Mail", "Telefon", "Intern"].map((item, index) => <button key={item} className={`rounded-xl px-4 py-2 text-xs font-bold ${index === 0 ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item}</button>)}</div><input className="rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#6D5DF6]" placeholder="Person, Kunde oder Einsatz …" /></div>
          <div>{messages.map(([source, name, text, relation, date, tone]) => <article key={`${name}-${text}`} className="flex gap-4 border-b border-gray-100 p-5 last:border-0 hover:bg-gray-50"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-lg">{source === "WhatsApp" ? "💬" : source === "E-Mail" ? "✉" : source === "Telefon" ? "☎" : "●"}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="font-bold">{name}</p><span className={`rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{source}</span><span className="ml-auto text-xs text-gray-400">{date}</span></div><p className="mt-2 text-sm text-gray-600">{text}</p><p className="mt-2 text-xs font-semibold text-gray-400">Bezug: {relation}</p></div></article>)}</div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Eintrag erfassen</h2><div className="mt-5 space-y-3"><select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500"><option>Quelle wählen</option><option>WhatsApp</option><option>E-Mail</option><option>Telefon</option><option>Intern</option></select><input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Person oder Kunde"/><input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Einsatz zuordnen"/><textarea className="min-h-28 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Notiz …"/><button className="w-full rounded-xl bg-[#6D5DF6] px-4 py-3 text-sm font-bold text-white">Speichern</button></div></div>
          <div className="rounded-3xl bg-slate-900 p-6 text-white"><p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">Ein System</p><h2 className="mt-2 text-xl font-bold">Keine Information geht verloren</h2><p className="mt-2 text-sm leading-6 text-slate-300">Jeder Kontakt wird einer Person und optional einem Einsatz zugeordnet.</p></div>
        </aside>
      </section>
    </AdminLayout>
  );
}
