import Link from "next/link";

const portals = [
  ["Operations", "/"],
  ["Admin", "/admin/dashboard"],
  ["Berater", "/berater/dashboard"],
  ["Mitarbeiter", "/mitarbeiter/dashboard"],
  ["Kunde", "/kunde/dashboard"],
];

export default function PortalSwitcher({ current }: { current: string }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 xl:inline">
        Portal wechseln
      </span>
      {portals.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className={`rounded-full px-3 py-2 text-xs font-bold transition ${
            current === label
              ? "bg-[#6D5DF6] text-white shadow-md shadow-violet-200"
              : "bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-[#6D5DF6]"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
