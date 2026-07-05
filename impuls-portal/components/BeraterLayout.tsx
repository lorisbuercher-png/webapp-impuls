import PortalSwitcher from "./PortalSwitcher";

export default function BeraterLayout({ children }: { children: React.ReactNode }) {
  const menu = [["🏠","Dashboard","/berater/dashboard"],["👥","Kandidaten","/berater/kandidaten"],["🏢","Kunden","/berater/kunden"],["💼","Stellen","/berater/stellen"],["📅","Kalender","/berater/kalender"],["📋","Aufgaben","/berater/aufgaben"],["📈","Pipeline","/berater/pipeline"]];
  return <main className="flex min-h-screen bg-[#F7F8FC] text-[#1F2937]">
    <aside className="hidden w-72 shrink-0 border-r border-gray-200 bg-white p-6 lg:block"><a href="/" className="text-2xl font-black">IMPULS <span className="text-[#6D5DF6]">ONE</span></a><p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Beraterportal</p><nav className="mt-10 space-y-2">{menu.map(([icon,label,href])=><a key={href} href={href} className="flex items-center gap-3 rounded-2xl px-4 py-3 font-medium text-gray-600 transition hover:bg-[#6D5DF6] hover:text-white"><span>{icon}</span><span>{label}</span></a>)}</nav></aside>
    <section className="flex min-h-screen min-w-0 flex-1 flex-col"><header className="flex flex-col gap-4 border-b border-gray-200 bg-white px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8"><div><p className="text-sm text-gray-500">Willkommen zurück</p><h1 className="text-xl font-bold">Berater Dashboard</h1></div><PortalSwitcher current="Berater" /></header><div className="flex-1 p-5 md:p-8">{children}</div></section>
  </main>;
}
