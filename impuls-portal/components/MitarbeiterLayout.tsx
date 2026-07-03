export default function MitarbeiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    ["Dashboard", "/mitarbeiter/dashboard"],
    ["Dokumente", "/mitarbeiter/dokumente"],
    ["Lohnabrechnungen", "/mitarbeiter/lohnabrechnungen"],
    ["Einsätze", "/mitarbeiter/einsaetze"],
    ["Zeiterfassung", "/mitarbeiter/zeiterfassung"],
    ["Uploads", "/mitarbeiter/uploads"],
    ["Profil", "/mitarbeiter/profil"],
  ];

  return (
    <main className="flex min-h-screen bg-[#F7F8FC] text-[#1F2937]">
      <aside className="w-72 border-r bg-white p-6">
        <div className="mb-10">
          <p className="text-2xl font-bold">
            IMPULS <span className="text-[#6D5DF6]">ONE</span>
          </p>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Mitarbeiterportal
          </p>
        </div>

        <nav className="space-y-2">
          {menu.map(([label, href]) => (
            <a
  key={href}
  href={href}
  className="block rounded-2xl px-4 py-3 font-medium transition hover:bg-[#6D5DF6] hover:text-white"
>
  {label}
</a>
          ))}
        </nav>
      </aside>

      <section className="flex-1">
        <header className="flex items-center justify-between border-b bg-white px-8 py-5">
          <div>
            <p className="font-semibold">Hallo Mehmet 👋</p>
            <p className="text-sm text-gray-500">Willkommen zurück</p>
          </div>

          <div className="rounded-full bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">
            Mitarbeiter
          </div>
        </header>

        <div className="p-8">{children}</div>
      </section>
    </main>
  );
}