import KundenLayout from "../../../components/KundenLayout";

const einsaetze = [
  ["Max Muster", "Produktion", "07:00 - 16:30", "Aktiv"],
  ["Anna Müller", "Logistik", "08:00 - 17:00", "Aktiv"],
  ["Luca Rossi", "Allrounder", "Montag Start", "Geplant"],
];

export default function KundenEinsaetze() {
  return (
    <KundenLayout>
      <h1 className="text-4xl font-bold">Einsätze</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über laufende und geplante Einsätze.
      </p>

      <div className="mt-8 space-y-4">
        {einsaetze.map(([name, rolle, zeit, status]) => (
          <div key={name} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-500">{rolle}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-[#6D5DF6]">{status}</p>
                <p className="text-gray-500">{zeit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </KundenLayout>
  );
}