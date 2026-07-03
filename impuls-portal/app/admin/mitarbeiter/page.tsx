import AdminLayout from "../../../components/AdminLayout";

const mitarbeiter = [
  ["Max Muster", "Produktionsmitarbeiter", "Aktiv", "Muster AG"],
  ["Anna Müller", "Logistik", "Aktiv", "Beispiel GmbH"],
  ["Luca Rossi", "Temporär", "Dokument fehlt", "Swiss Pflege AG"],
];

export default function AdminMitarbeiter() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Mitarbeiter</h1>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          + Mitarbeiter
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        {mitarbeiter.map(([name, rolle, status, kunde]) => (
          <div
            key={name}
            className="flex items-center justify-between border-b border-gray-100 p-6 last:border-b-0"
          >
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-500">{rolle}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-[#6D5DF6]">{status}</p>
              <p className="text-gray-500">{kunde}</p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}