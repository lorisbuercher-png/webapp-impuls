export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Linke Seite */}
        <div>
          <span className="rounded-full bg-violet-500/20 px-4 py-2 text-sm text-violet-300">
            Impuls Swiss Recruiting
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Arbeit finden.
            <br />
            Personal finden.
            <br />
            Digital.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Willkommen auf dem neuen Impuls Swiss Portal.
            Hier verwalten Bewerber, Mitarbeitende,
            Unternehmen und Personalberater alle Prozesse
            an einem zentralen Ort.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-violet-500 px-6 py-3 font-semibold hover:bg-violet-400 transition">
              Jobs finden
            </button>

            <button className="rounded-2xl border border-violet-400 px-6 py-3 hover:bg-violet-500/10 transition">
              Unternehmen
            </button>
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold">
            Das Portal bietet
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-white/10 p-5">
              📄 Lebenslauf hochladen
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              💼 Jobs durchsuchen
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              👤 Mitarbeiterportal
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              🏢 Kundenportal
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              📊 Admin Dashboard
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}