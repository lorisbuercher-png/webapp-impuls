import AdminLayout from "../../../components/AdminLayout";

const lohnfreigaben = [
  ["Max Muster", "Muster AG", "42.5 h", "Rapport geprüft", "Bereit"],
  ["Anna Müller", "Beispiel GmbH", "38.0 h", "Rapport fehlt", "Blockiert"],
  ["Luca Rossi", "Swiss Pflege AG", "41.0 h", "In Prüfung", "Prüfen"],
  ["Sarah Keller", "Logistik AG", "44.0 h", "Rapport geprüft", "Bereit"],
];

export default function AdminLohn() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">Lohnfreigabe</h1>
      <p className="mt-2 text-gray-500">
        Übersicht, wer gearbeitet hat und wer ausbezahlt werden muss.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-green-50 p-6">
          <p className="text-gray-500">Bereit zur Auszahlung</p>
          <h2 className="mt-3 text-5xl font-black">2</h2>
        </div>
        <div className="rounded-3xl bg-yellow-50 p-6">
          <p className="text-gray-500">In Prüfung</p>
          <h2 className="mt-3 text-5xl font-black">1</h2>
        </div>
        <div className="rounded-3xl bg-red-50 p-6">
          <p className="text-gray-500">Blockiert</p>
          <h2 className="mt-3 text-5xl font-black">1</h2>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        {lohnfreigaben.map(([name, kunde, stunden, rapport, status]) => (
          <div
            key={name}
            className="grid gap-4 border-b border-gray-100 p-6 last:border-b-0 md:grid-cols-5"
          >
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-500">{kunde}</p>
            </div>

            <p className="font-semibold">{stunden}</p>
            <p className="text-gray-500">{rapport}</p>

            <p className="font-semibold text-[#6D5DF6]">{status}</p>

            <button className="rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">
              Öffnen
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}