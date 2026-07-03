import AdminLayout from "../../../components/AdminLayout";

const rapporte = [
  ["Max Muster", "KW 27", "Muster AG", "Neu hochgeladen"],
  ["Anna Müller", "KW 27", "Beispiel GmbH", "In Prüfung"],
  ["Luca Rossi", "KW 26", "Swiss Pflege AG", "Bestätigt"],
  ["Sarah Keller", "KW 27", "Logistik AG", "Fehlt"],
];

export default function AdminRapporte() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">Rapporte</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über hochgeladene Stundenrapporte.
      </p>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        {rapporte.map(([name, woche, kunde, status]) => (
          <div
            key={`${name}-${woche}`}
            className="flex items-center justify-between border-b border-gray-100 p-6 last:border-b-0"
          >
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-500">
                {woche} · {kunde}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-[#6D5DF6]">{status}</p>
              <button className="mt-2 rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">
                Prüfen
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}