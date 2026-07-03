import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function MitarbeiterDashboard() {
  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <p className="mt-2 text-gray-500">
        Willkommen im Mitarbeiterportal von IMPULS One.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">📅 Nächster Einsatz</h2>
          <p className="mt-3 text-gray-500">
            Muster AG
          </p>
          <p>07:00 - 16:30</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">💰 Lohn</h2>
          <p className="mt-3 text-gray-500">
            Neue Abrechnung verfügbar
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">📄 Dokumente</h2>
          <p className="mt-3 text-gray-500">
            Zwei Dokumente fehlen
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">⏱ Rapport</h2>
          <p className="mt-3 text-gray-500">
            Rapport hochladen
          </p>
        </div>

      </div>

    </MitarbeiterLayout>
  );
}