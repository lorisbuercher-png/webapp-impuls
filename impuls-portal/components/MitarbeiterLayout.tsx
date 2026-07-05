import PortalSwitcher from "./PortalSwitcher";

export default function MitarbeiterLayout({ children }: { children: React.ReactNode }) {
  const menu = [["Dashboard","/mitarbeiter/dashboard"],["Dokumente","/mitarbeiter/dokumente"],["Lohnabrechnungen","/mitarbeiter/lohnabrechnungen"],["Einsätze","/mitarbeiter/einsaetze"],["Zeiterfassung","/mitarbeiter/zeiterfassung"],["Uploads","/mitarbeiter/uploads"],["Profil","/mitarbeiter/profil"]];
  return <main className="flex min-h-screen bg-[#F7F8FC] text-[#1F2937]">
    <aside className="hidden w-72 shrink-0 border-r bg-white p-6 lg:block"><a href="/" className="text-2xl font-bold">IMPULS <span className="text-[#6D5DF6]">ONE</span></a><p className="text-xs uppercase tracking-widest text-gray-400">Mitarbeiterportal</p><nav className="mt-10 space-y-2">{menu.map(([label,href])=><a key={href} href={href} className="block rounded-2xl px-4 py-3 font-medium transition hover:bg-[#6D5DF6] hover:text-white">{label}</a>)}</nav></aside>
    <section className="flex min-h-screen min-w-0 flex-1 flex-col"><header className="flex flex-col gap-4 border-b bg-white px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8"><div><p className="font-semibold">Hallo Mehmet 👋</p><p className="text-sm text-gray-500">Willkommen zurück</p></div><PortalSwitcher current="Mitarbeiter" /></header><div className="flex-1 p-5 md:p-8">{children}</div></section>
  </main>;
}
