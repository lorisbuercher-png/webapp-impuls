import AdminLayout from "../../../components/AdminLayout";

const facts = [
  ["Aktueller Einsatz", "Produktion Frühschicht", "Muster AG", "bg-violet-50 text-violet-700"],
  ["Rapportstatus", "Eingegangen", "KW 27 · 42.5 Stunden", "bg-sky-50 text-sky-700"],
  ["Lohnstatus", "Freigabe offen", "Juli 2026", "bg-amber-50 text-amber-700"],
  ["Bewilligung", "Gültig", "B-Ausweis · 31.03.2027", "bg-emerald-50 text-emerald-700"],
];

const documents = [
  ["Arbeitsvertrag.pdf", "Vertrag", "Gültig"],
  ["Bewilligung_B.pdf", "Bewilligung", "Gültig"],
  ["Lebenslauf.pdf", "Bewerbung", "Aktuell"],
  ["Rapport_KW27.pdf", "Rapport", "Zu prüfen"],
];

const messages = [
  ["WhatsApp", "Rapport für KW 27 gesendet.", "Heute, 09:42", "bg-emerald-50 text-emerald-700"],
  ["Telefon", "Einsatzverlängerung bis Ende August besprochen.", "Gestern, 15:20", "bg-sky-50 text-sky-700"],
  ["E-Mail", "Neue Schichtzeiten bestätigt.", "30.06.2026", "bg-violet-50 text-violet-700"],
];

const timeline = [
  ["Rapport eingegangen", "Heute, 09:42", "42.5 Stunden · KW 27"],
  ["Einsatz verlängert", "02.07.2026", "Neu bis 31.08.2026"],
  ["Lohn Juni ausbezahlt", "28.06.2026", "CHF 5’120.40"],
  ["Bewilligung geprüft", "14.06.2026", "B-Ausweis gültig"],
];

export default function Mitarbeiterakte() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-20 w-20 place-items-center rounded-3xl bg-violet-100 text-xl font-black text-violet-700">MM</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Mitarbeiterakte · IO-10284</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">Max Muster</h1>
            <p className="mt-1 text-sm text-gray-500">Produktionsmitarbeiter · Zürich</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">● Aktiv im Einsatz</span>
          <button className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold">Akte bearbeiten</button>
          <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">+ Schnellaktion</button>
        </div>
      </div>

      <nav className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {["Übersicht", "Einsatz", "Rapporte", "Lohn", "Dokumente", "Kommunikation", "Timeline"].map((item, index) => <button key={item} className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold ${index === 0 ? "bg-violet-100 text-violet-700" : "bg-white text-gray-500 ring-1 ring-gray-200"}`}>{item}</button>)}
      </nav>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {facts.map(([label, value, note, tone]) => <div key={label} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-gray-400">{label}</p><p className="mt-3 text-lg font-bold">{value}</p><span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{note}</span></div>)}
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between"><div><h2 className="text-xl font-bold">Personendaten</h2><p className="mt-1 text-sm text-gray-400">Stammdaten und Erreichbarkeit</p></div><button className="text-sm font-bold text-[#6D5DF6]">Bearbeiten</button></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[["Geburtsdatum", "18.04.1992"], ["Nationalität", "Deutschland"], ["Telefon", "+41 79 555 18 24"], ["E-Mail", "max.muster@email.ch"], ["Adresse", "Badenerstrasse 24, Zürich"], ["Eintritt", "14.03.2024"]].map(([label, value]) => <div key={label} className="rounded-2xl bg-[#F7F8FC] p-4"><p className="text-xs font-semibold text-gray-400">{label}</p><p className="mt-1 text-sm font-bold text-gray-700">{value}</p></div>)}</div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between"><div><h2 className="text-xl font-bold">Dokumente</h2><p className="mt-1 text-sm text-gray-400">4 aktuelle Dateien</p></div><button className="rounded-xl bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">+ Hochladen</button></div>
            <div className="mt-4 divide-y divide-gray-100">{documents.map(([name, type, status]) => <div key={name} className="flex items-center gap-3 py-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50">📄</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{name}</p><p className="text-xs text-gray-400">{type}</p></div><span className={`rounded-full px-3 py-1 text-xs font-bold ${status === "Zu prüfen" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>{status}</span><button className="text-sm font-bold text-[#6D5DF6]">Öffnen</button></div>)}</div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between"><div><h2 className="text-xl font-bold">Kommunikation</h2><p className="mt-1 text-sm text-gray-400">Personen- und einsatzbezogener Verlauf</p></div><button className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-bold text-white">Eintrag erfassen</button></div>
            <div className="mt-5 space-y-4">{messages.map(([source, text, date, tone]) => <div key={text} className="flex gap-4 rounded-2xl border border-gray-100 p-4"><span className={`h-fit rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{source}</span><div className="flex-1"><p className="text-sm font-semibold text-gray-700">{text}</p><p className="mt-1 text-xs text-gray-400">{date} · Bezug: Einsatz Muster AG</p></div></div>)}</div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Aktueller Einsatz</h2>
            <div className="mt-5 space-y-4">{[["Kunde", "Muster AG"], ["Funktion", "Produktionsmitarbeiter"], ["Zeitraum", "01.06.–31.08.2026"], ["Pensum", "100 %"], ["Berater", "Loris Bürcher"]].map(([label, value]) => <div key={label} className="flex justify-between gap-4 border-b border-gray-100 pb-3 text-sm last:border-0"><span className="text-gray-400">{label}</span><strong className="text-right text-gray-700">{value}</strong></div>)}</div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Timeline</h2>
            <div className="mt-6">{timeline.map(([title, date, detail]) => <div key={title} className="relative ml-2 border-l border-violet-200 pb-6 pl-6 last:pb-0"><span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#6D5DF6] ring-4 ring-violet-50" /><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-gray-400">{date}</p><p className="mt-1 text-xs text-gray-500">{detail}</p></div>)}</div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">Nächster Schritt</p><h2 className="mt-2 text-xl font-bold">Rapport KW 27 prüfen</h2><p className="mt-2 text-sm text-slate-300">Nach der Prüfung kann der Lohn zur Auszahlung freigegeben werden.</p><button className="mt-5 w-full rounded-2xl bg-[#6D5DF6] p-3 text-sm font-bold">Rapport öffnen</button>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
}
