import AdminLayout from "../../../components/AdminLayout";

export default function Mitarbeiterakte() {
  return (
    <AdminLayout>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-[#6D5DF6]">Mitarbeiterakte</p>
          <h1 className="mt-2 text-4xl font-bold">Max Muster</h1>
          <p className="mt-2 text-gray-500">Produktionsmitarbeiter · Muster AG</p>
        </div>

        <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
          Aktiv im Einsatz
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          ["🏢", "Kunde", "Muster AG"],
          ["👨‍💼", "Berater", "Loris Bürcher"],
          ["📄", "Rapport", "Eingegangen"],
          ["💰", "Lohn", "Freigabe offen"],
          ["🛂", "Bewilligung", "Gültig bis 31.03.2027"],
          ["📂", "Dokumente", "15 Dateien"],
          ["💬", "Kommunikation", "3 Nachrichten"],
          ["✅", "Aufgaben", "1 offen"],
        ].map(([icon, title, value]) => (
          <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{icon}</div>
            <p className="mt-4 text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 font-bold">{value}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Timeline</h2>

          <div className="mt-6 space-y-5">
            {[
              "Einsatz bei Muster AG gestartet",
              "Rapport KW 27 hochgeladen",
              "Backoffice prüft Stunden",
              "Lohnfreigabe ausstehend",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#F7F8FC] p-4">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Aktionen</h2>

          <div className="mt-6 grid gap-4">
            <button className="rounded-2xl bg-[#6D5DF6] p-4 font-bold text-white">
              Rapport prüfen
            </button>
            <button className="rounded-2xl border border-gray-200 p-4 font-bold">
              Lohn freigeben
            </button>
            <button className="rounded-2xl border border-gray-200 p-4 font-bold">
              Dokumente öffnen
            </button>
            <button className="rounded-2xl border border-gray-200 p-4 font-bold">
              Nachricht senden
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}