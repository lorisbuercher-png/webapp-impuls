import KundenLayout from "../../../components/KundenLayout";

const rechnungen = [
  ["Rechnung Juni 2025", "CHF 12'450.00", "Offen"],
  ["Rechnung Mai 2025", "CHF 10'980.00", "Bezahlt"],
  ["Rechnung April 2025", "CHF 9'760.00", "Bezahlt"],
];

export default function KundenRechnungen() {
  return (
    <KundenLayout>
      <h1 className="text-4xl font-bold">Rechnungen</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über offene und bezahlte Rechnungen.
      </p>

      <div className="mt-8 space-y-4">
        {rechnungen.map(([titel, betrag, status]) => (
          <div key={titel} className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-bold">{titel}</h2>
              <p className="text-gray-500">PDF herunterladen</p>
            </div>

            <div className="text-right">
              <p className="font-bold">{betrag}</p>
              <p className="font-semibold text-[#6D5DF6]">{status}</p>
            </div>
          </div>
        ))}
      </div>
    </KundenLayout>
  );
}