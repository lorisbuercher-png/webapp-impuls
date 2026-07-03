const jobs = [
  {
    title: "Produktionsmitarbeiter/in",
    location: "Luzern",
    type: "Temporär",
  },
  {
    title: "Logistiker/in EFZ",
    location: "Zentralschweiz",
    type: "Feststelle",
  },
  {
    title: "Sachbearbeiter/in",
    location: "Kriens",
    type: "80–100%",
  },
];

export default function JobSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
        Offene Stellen
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Aktuelle Jobs bei Impuls Swiss
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <p className="text-sm text-violet-300">{job.type}</p>
            <h3 className="mt-3 text-2xl font-bold">{job.title}</h3>
            <p className="mt-4 text-gray-400">{job.location}</p>

            <button className="mt-6 rounded-2xl border border-violet-400 px-5 py-3 hover:bg-violet-500/10">
              Details ansehen
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}