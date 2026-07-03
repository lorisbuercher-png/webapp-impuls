import KundenLayout from "../../../components/KundenLayout";

const mitarbeitende = [
  ["Max Muster", "Produktionsmitarbeiter", "Aktiv", "Muster AG"],
  ["Anna Müller", "Logistik", "Aktiv", "Muster AG"],
  ["Luca Rossi", "Allrounder", "Geplant", "Muster AG"],
];

export default function KundenMitarbeitende() {
  return (
    <KundenLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Mitarbeitende</h1>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          Personal anfragen
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {mitarbeitende.map(([name, rolle, status, kunde]) => (
          <div key={name} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-500">{rolle}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-[#6D5DF6]">{status}</p>
                <p className="text-gray-500">{kunde}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </KundenLayout>
  );
}