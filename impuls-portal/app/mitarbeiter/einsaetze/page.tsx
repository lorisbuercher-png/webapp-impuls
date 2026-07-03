import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Einsaetze() {
  const einsaetze = [
    {
      kunde: "Muster AG",
      rolle: "Produktionsmitarbeiter",
      datum: "Montag, 07. Juli 2025",
      zeit: "07:00 - 16:30",
      status: "Bestätigt",
    },
    {
      kunde: "Beispiel AG",
      rolle: "Logistik",
      datum: "Dienstag, 08. Juli 2025",
      zeit: "08:00 - 17:00",
      status: "Geplant",
    },
  ];

  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Meine Einsätze</h1>

      <p className="mt-2 text-gray-500">
        Hier siehst du deine aktuellen und kommenden Einsätze.
      </p>

      <div className="mt-8 space-y-4">
        {einsaetze.map((einsatz) => (
          <div
            key={einsatz.kunde}
            className="rounded-3xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{einsatz.kunde}</h2>
                <p className="text-gray-500">{einsatz.rolle}</p>
              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {einsatz.status}
              </span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#F7F8FC] p-4">
                📅 {einsatz.datum}
              </div>

              <div className="rounded-2xl bg-[#F7F8FC] p-4">
                🕒 {einsatz.zeit}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MitarbeiterLayout>
  );
}