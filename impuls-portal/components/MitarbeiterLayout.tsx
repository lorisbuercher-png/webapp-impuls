"use client";
import { usePathname } from "next/navigation";
import PortalSwitcher from "./PortalSwitcher";

const menu = [
  ["⌂", "Übersicht", "/mitarbeiter/dashboard"],
  ["▣", "Mein Einsatz", "/mitarbeiter/einsaetze"],
  ["⇧", "Rapport einreichen", "/mitarbeiter/uploads"],
  ["✓", "Rapportstatus", "/mitarbeiter/rapportstatus"],
  ["▤", "Dokumente", "/mitarbeiter/dokumente"],
  ["◇", "Nachrichten", "/mitarbeiter/nachrichten"],
  ["✦", "KI-Assistent", "/mitarbeiter/assistent"],
  ["◷", "Verfügbarkeit", "/mitarbeiter/verfuegbarkeit"],
  ["♙", "Meine Daten", "/mitarbeiter/profil"],
];

export default function MitarbeiterLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return <main className="flex min-h-screen bg-[#F7F8FC] text-[#111A35]">
    <aside className="hidden w-64 shrink-0 bg-gradient-to-b from-[#0B1B34] to-[#172968] p-5 text-white lg:flex lg:flex-col">
      <a href="/" className="flex items-center gap-3 px-2 text-xl font-black"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6D5DF6]">◉</span><span>IMPULS ONE<small className="block text-xs font-medium text-blue-200">Mitarbeiter Portal</small></span></a>
      <div className="mt-7 border-y border-white/10 py-5"><p className="font-black">Max Muster</p><p className="text-xs text-blue-200">Mitarbeiter · <span className="text-green-400">● Aktiv</span></p></div>
      <nav className="mt-5 flex-1 space-y-1">{menu.map(([icon,label,href])=><a key={href} href={href} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-white/10 ${path===href?"bg-[#6D5DF6]":"text-blue-50"}`}><span className="text-lg">{icon}</span>{label}</a>)}</nav>
      <div className="rounded-2xl bg-white/10 p-4 text-sm"><p className="font-black">Fragen oder Probleme?</p><p className="text-xs text-blue-200">Wir sind für dich da.</p><a href="/mitarbeiter/assistent" className="mt-3 block rounded-xl bg-[#6D5DF6] px-3 py-2 text-center font-bold">KI-Assistent öffnen</a></div>
    </aside>
    <section className="min-w-0 flex-1"><header className="flex min-h-20 items-center justify-between border-b border-gray-200 bg-white px-5 md:px-8"><div className="flex items-center gap-4 text-sm text-gray-500"><button className="lg:hidden">☰</button><span>? Hilfe</span><span>♧ Benachrichtigungen</span></div><div className="flex items-center gap-4"><b className="text-sm">Max Muster</b><PortalSwitcher current="Mitarbeiter"/></div></header><div className="p-5 md:p-7">{children}</div></section>
  </main>;
}
