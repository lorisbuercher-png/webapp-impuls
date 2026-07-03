import Link from "next/link";

const metrics = [
  ["Aktive Einsätze", "92", "+6 diese Woche", "↗", "bg-violet-50 text-violet-700", "/admin/dashboard"],
  ["Rapporte fehlen", "21", "8 überfällig", "!", "bg-rose-50 text-rose-700", "/admin/rapporte"],
  ["Rapporte prüfen", "14", "CHF 42’860 offen", "✓", "bg-amber-50 text-amber-700", "/admin/rapporte"],
  ["Löhne freigeben", "64", "CHF 184’320 bereit", "₣", "bg-emerald-50 text-emerald-700", "/admin/lohn"],
  ["Bewilligungen", "9", "in 30 Tagen fällig", "◇", "bg-orange-50 text-orange-700", "/admin/bewilligungen"],
  ["Neue Bewerbungen", "7", "4 noch ungelesen", "+", "bg-sky-50 text-sky-700", "/berater/kandidaten"],
];

const tasks = [
  ["8 überfällige Rapporte nachfassen", "Auszahlungen von CHF 24’780 blockiert", "Dringend", "bg-rose-50 text-rose-700"],
  ["14 Rapporte fachlich prüfen", "Lohnlauf Juli 2026", "Heute", "bg-amber-50 text-amber-700"],
  ["9 Bewilligungen kontrollieren", "Ablauf innerhalb der nächsten 30 Tage", "Diese Woche", "bg-violet-50 text-violet-700"],
  ["7 Bewerbungen qualifizieren", "Neue Profile ohne Erstprüfung", "Neu", "bg-sky-50 text-sky-700"],
];

const activity = [
  ["09:42", "Rapport eingegangen", "Max Muster · KW 27 · 42.5 Stunden", "bg-emerald-500"],
  ["09:18", "Bewilligung läuft bald ab", "Anna Müller · C-Bewilligung · 12 Tage", "bg-amber-500"],
  ["08:55", "Neue Bewerbung", "Adil Benali · Betriebsmitarbeiter", "bg-violet-500"],
  ["Gestern", "Lohn freigegeben", "Luca Rossi · CHF 5’120.40", "bg-sky-500"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="text-2xl font-black tracking-tight">IMPULS <span className="text-[#6D5DF6]">ONE</span></p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Operations Platform</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-500 md:block">Freitag, 3. Juli 2026</span>
            <Link href="/admin/dashboard" className="rounded-2xl bg-[#6D5DF6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200">Backoffice öffnen</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Operations Center</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Guten Morgen, Loris</h1>
            <p className="mt-2 text-slate-500">Das benötigt heute deine Aufmerksamkeit.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Mitarbeiter", "Berater", "Backoffice", "Kunden"].map((portal) => <span key={portal} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">{portal}</span>)}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map(([label, value, note, icon, tone, href]) => (
            <Link key={label} href={href} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">
              <div className="flex items-start justify-between"><span className={`grid h-11 w-11 place-items-center rounded-2xl text-lg font-black ${tone}`}>{icon}</span><span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#6D5DF6]">→</span></div>
              <p className="mt-5 text-sm font-semibold text-slate-500">{label}</p>
              <div className="mt-1 flex items-end justify-between gap-3"><strong className="text-4xl tracking-tight">{value}</strong><span className="pb-1 text-xs text-slate-400">{note}</span></div>
            </Link>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between"><div><h2 className="text-xl font-bold">Heute im Fokus</h2><p className="mt-1 text-sm text-slate-400">Aufgaben mit direkter Auswirkung auf den Betrieb</p></div><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">38 offen</span></div>
            <div className="mt-5 space-y-3">
              {tasks.map(([title, detail, badge, badgeClass]) => (
                <div key={title} className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-400">✓</span>
                  <div className="min-w-0 flex-1"><p className="font-semibold text-slate-800">{title}</p><p className="truncate text-sm text-slate-400">{detail}</p></div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${badgeClass}`}>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Letzte Aktivitäten</h2><p className="mt-1 text-sm text-slate-400">Live aus dem Operations Center</p>
            <div className="mt-6 space-y-5">
              {activity.map(([time, title, detail, dot]) => (
                <div key={title} className="flex gap-3"><span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} /><div className="flex-1 border-b border-slate-100 pb-4"><div className="flex justify-between gap-2"><p className="text-sm font-semibold">{title}</p><span className="text-xs text-slate-400">{time}</span></div><p className="mt-1 text-xs text-slate-500">{detail}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-4">
          {[["Mitarbeiterportal", "/mitarbeiter/dashboard"], ["Beraterportal", "/berater/dashboard"], ["Adminportal", "/admin/dashboard"], ["Kundenportal", "/kunde/dashboard"]].map(([label, href]) => <Link key={label} href={href} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-bold text-slate-600 transition hover:border-violet-300 hover:text-[#6D5DF6]">{label}</Link>)}
        </section>
      </div>
    </main>
  );
}
