import Link from "next/link";

const jobs = [
  {
    title: "Temporärstellen",
    text: "Schnell passende Einsätze in Luzern und der Zentralschweiz finden.",
  },
  {
    title: "Feststellen",
    text: "Langfristige Perspektiven bei passenden Unternehmen entdecken.",
  },
  {
    title: "Mitarbeiterportal",
    text: "Profil, Dokumente, Bewerbungen und Status zentral verwalten.",
  },
];

const features = [
  "Jobs suchen",
  "Online bewerben",
  "CV hochladen",
  "Dokumente verwalten",
  "Bewerbungsstatus prüfen",
  "Kundenportal",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0b18] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-2xl font-black tracking-tight">
            impuls<span className="text-[#B794F4]"> swiss</span>
          </p>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Portal
          </p>
        </div>

        <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#jobs" className="hover:text-white">
            Jobs
          </a>
          <a href="#portal" className="hover:text-white">
            Portal
          </a>
          <a href="#kunden" className="hover:text-white">
            Unternehmen
          </a>
          <Link
            href="/login"
            className="rounded-full border border-white/15 px-5 py-2 text-white hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#B794F4]">
            Schweizer Recruiting-Plattform für moderne Personaldienstleistung
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Arbeit finden. <br />
            Personal finden. <br />
            Alles digital.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Das neue Impuls Swiss Portal verbindet Bewerbende, Mitarbeitende,
            Unternehmen und Personalberater auf einer modernen Plattform.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/jobs"
              className="rounded-2xl bg-[#B794F4] px-7 py-4 text-center font-bold text-[#2D0A57] transition hover:scale-[1.02]"
            >
              Jobs ansehen
            </Link>
            <Link
              href="/register"
              className="rounded-2xl border border-white/15 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              Kostenlos registrieren
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] bg-[#B794F4] p-6 text-[#2D0A57]">
            <p className="text-sm font-bold uppercase tracking-[0.25em]">
              Live Dashboard
            </p>
            <h2 className="mt-4 text-3xl font-black">
              Bewerbungen, Jobs und Dokumente an einem Ort.
            </h2>
          </div>

          <div className="mt-5 grid gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-between rounded-2xl bg-white/10 p-4"
              >
                <span>{feature}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-[#B794F4]">
                  aktiv
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B794F4]">
              Für Bewerbende
            </p>
            <h2 className="mt-3 text-4xl font-black">Schneller zum passenden Job</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-7 transition hover:-translate-y-1 hover:bg-white/[0.14]"
            >
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portal" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B794F4]">
            Portal
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
            Mitarbeiter, Kunden und Admins arbeiten in einem System.
          </h2>
          <p className="mt-5 max-w-3xl text-white/60">
            Login, Registrierung, Profile, Bewerbungen, Dokumente,
            Kundenanfragen und Admin-Dashboard werden Schritt für Schritt mit
            Supabase verbunden.
          </p>
        </div>
      </section>

      <section id="kunden" className="mx-auto max-w-7xl px-6 py-16 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Mitarbeitende", "Bewerben, Dokumente hochladen und Status prüfen."],
            ["Unternehmen", "Personal anfragen, Einsätze verwalten und Dokumente abrufen."],
            ["Admin", "Jobs, Bewerbungen, Kandidaten und Kunden zentral steuern."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] bg-white p-7 text-[#1a1028]">
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
