import BeraterLayout from "../../../components/BeraterLayout";

export default function BeraterDashboard() {
  return (
    <BeraterLayout>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über Bewerbungen, Kandidaten und offene Aufgaben.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          ["👥", "Neue Bewerbungen", "12"],
          ["📞", "Rückrufe heute", "7"],
          ["📅", "Interviews", "4"],
          ["💼", "Offene Stellen", "34"],
        ].map(([icon, title, value]) => (
          <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{icon}</div>
            <p className="mt-4 text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 text-4xl font-bold">{value}</h2>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}