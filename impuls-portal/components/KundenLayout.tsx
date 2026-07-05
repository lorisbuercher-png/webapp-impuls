import PortalSwitcher from "./PortalSwitcher";

const menu = [
  ["⌂", "Übersicht", "/kunde/dashboard"],
  ["▣", "Einsätze", "/kunde/einsaetze"],
  ["♙", "Mitarbeitende", "/kunde/mitarbeitende"],
  ["✓", "Rapporte", "/kunde/rapporte"],
  ["▤", "Rechnungen", "/kunde/rechnungen"],
  ["◌", "Nachrichten", "/kunde/nachrichten"],
];

export default function KundenLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen bg-[#F7F8FC] text-[#101828]">
      <aside className="hidden w-64 shrink-0 flex-col bg-gradient-to-b from-[#0B1B34] to-[#182763] text-white lg:flex">
        <div className="border-b border-white/10 px-6 py-6">
          <a href="/" className="text-xl font-black">◉ IMPULS ONE</a>
          <p className="mt-1 text-xs text-blue-200">Kundenportal</p>
        </div>
        <div className="border-b border-white/10 px-6 py-5">
          <p className="font-bold">ABB Schweiz AG</p>
          <p className="text-xs text-blue-200">Unternehmenskonto</p>
        </div>
        <nav className="flex-1 space-y-2 p-4">
          {menu.map(([icon, label, href], index) => (
            <a key={href} href={href} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-white/15 ${index === 0 ? "bg-[#6D5DF6]" : "text-blue-50"}`}>
              <span className="text-lg">{icon}</span>{label}
            </a>
          ))}
        </nav>
        <div className="m-4 rounded-2xl bg-white/10 p-4 text-sm">
          <p className="font-bold">Brauchen Sie Hilfe?</p>
          <p className="mt-1 text-xs text-blue-200">Ihr Berater ist für Sie da.</p>
          <a href="/kunde/nachrichten" className="mt-3 block rounded-xl bg-[#6D5DF6] px-3 py-2 text-center font-bold">Nachricht senden</a>
        </div>
      </aside>
      <section className="min-w-0 flex-1">
        <header className="flex min-h-20 items-center justify-between border-b border-gray-200 bg-white px-5 md:px-8">
          <div><p className="text-xs text-gray-500">Kundenportal</p><p className="font-bold">ABB Schweiz AG</p></div>
          <PortalSwitcher current="Kunde" />
        </header>
        <div className="p-5 md:p-8">{children}</div>
      </section>
    </main>
  );
}
