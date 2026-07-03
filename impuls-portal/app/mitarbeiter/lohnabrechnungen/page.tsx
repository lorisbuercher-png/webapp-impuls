import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Lohnabrechnungen() {
  const abrechnungen = [
    { monat: "Januar 2025", status: "Verfügbar" },
    { monat: "Februar 2025", status: "Verfügbar" },
    { monat: "März 2025", status: "Verfügbar" },
    { monat: "April 2025", status: "Neu" },
  ];

  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Lohnabrechnungen</h1>

      <p className="mt-2 text-gray-500">
        Alle deine Lohnabrechnungen an einem Ort.
      </p>

      <div className="mt-8 space-y-4">
        {abrechnungen.map((eintrag) => (
          <div
            key={eintrag.monat}
            className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm"
          >
            <div>
              <h2 className="font-bold">{eintrag.monat}</h2>
              <p className="text-gray-500">PDF herunterladen</p>
            </div>

            <button className="rounded-xl bg-[#6D5DF6] px-5 py-2 text-white">
              Öffnen
            </button>
          </div>
        ))}
      </div>
    </MitarbeiterLayout>
  );
}