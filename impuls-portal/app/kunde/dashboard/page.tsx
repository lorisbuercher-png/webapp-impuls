import KundenLayout from "../../../components/KundenLayout";

export default function KundenDashboard() {
  return (
    <KundenLayout>
      <h1 className="text-4xl font-bold">Kunden Dashboard</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über Einsätze, Mitarbeitende und offene Rapporte.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          ["👷", "Aktive Mitarbeitende", "12"],
          ["📅", "Laufende Einsätze", "8"],
          ["⏱️", "Rapporte offen", "5"],
          ["📄", "Rechnungen", "3"],
        ].map(([icon, title, value]) => (
          <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{icon}</div>
            <p className="mt-4 text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 text-4xl font-bold">{value}</h2>
          </div>
        ))}
      </div>
    </KundenLayout>
  );
}