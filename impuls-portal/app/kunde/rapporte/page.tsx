import KundenLayout from "../../../components/KundenLayout";

const rapporte = [
  {
    name: "Max Muster",
    woche: "KW 27",
    stunden: "45.5 h",
    status: "Zur Freigabe",
  },
  {
    name: "Anna Müller",
    woche: "KW 27",
    stunden: "42 h",
    status: "Freigegeben",
  },
  {
    name: "Luca Rossi",
    woche: "KW 27",
    stunden: "38 h",
    status: "Offen",
  },
];

export default function KundenRapporte() {
  return (
    <KundenLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Rapporte</h1>
          <p className="mt-2 text-gray-500">
            Stundenrapporte prüfen und freigeben.
          </p>
        </div>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          Rapport hochladen
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {rapporte.map((rapport) => (
          <div
            key={rapport.name}
            className="rounded-3xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  {rapport.name}
                </h2>

                <p className="text-gray-500">
                  {rapport.woche}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  {rapport.stunden}
                </p>

                <p className="font-semibold text-[#6D5DF6]">
                  {rapport.status}
                </p>

                <button className="mt-3 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                  Freigeben
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </KundenLayout>
  );
}