import AdminLayout from "../../../components/AdminLayout";

const bewilligungen = [
  ["Max Muster", "B-Bewilligung", "31.08.2025", "OK"],
  ["Anna Müller", "C-Bewilligung", "15.07.2025", "Läuft bald ab"],
  ["Luca Rossi", "EU/EFTA", "01.09.2025", "OK"],
  ["Sarah Keller", "B-Bewilligung", "Fehlt", "Fehlt"],
];

export default function AdminBewilligungen() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">Bewilligungen</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über Aufenthalts- und Arbeitsbewilligungen.
      </p>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        {bewilligungen.map(([name, typ, ablauf, status]) => (
          <div
            key={name}
            className="flex items-center justify-between border-b border-gray-100 p-6 last:border-b-0"
          >
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-500">{typ}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-[#6D5DF6]">{status}</p>
              <p className="text-sm text-gray-500">Ablauf: {ablauf}</p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}