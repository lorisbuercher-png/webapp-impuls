export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#0F0B18] px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Offene <span className="text-violet-400">Stellen</span>
        </h1>

        <div className="mt-10 grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">
              Pflegefachfrau HF (80–100%)
            </h2>

            <p className="mt-2 text-gray-300">
              Zürich • Festanstellung
            </p>

            <button className="mt-6 rounded-2xl bg-violet-500 px-6 py-3 font-semibold">
              Jetzt bewerben
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">
              Produktionsmitarbeiter
            </h2>

            <p className="mt-2 text-gray-300">
              Aargau • Temporär
            </p>

            <button className="mt-6 rounded-2xl bg-violet-500 px-6 py-3 font-semibold">
              Jetzt bewerben
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}