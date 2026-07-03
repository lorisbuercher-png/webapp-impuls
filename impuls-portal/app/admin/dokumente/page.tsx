import AdminLayout from "../../../components/AdminLayout";

const dokumente = [
  ["Max Muster", "Lebenslauf", "Fehlt", "Hoch"],
  ["Anna Müller", "Bewilligung B", "Läuft bald ab", "Mittel"],
  ["Luca Rossi", "Arbeitsvertrag", "Unterzeichnet", "Normal"],
  ["Sarah Keller", "Rapport KW 27", "Neu hochgeladen", "Hoch"],
];

export default function AdminDokumente() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dokumente</h1>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          + Dokument hochladen
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        {dokumente.map(([person, dokument, status, prioritaet]) => (
          <div
            key={`${person}-${dokument}`}
            className="flex items-center justify-between border-b border-gray-100 p-6 last:border-b-0"
          >
            <div>
              <h2 className="text-xl font-bold">{dokument}</h2>
              <p className="text-gray-500">{person}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-[#6D5DF6]">{status}</p>
              <p className="text-sm text-gray-500">Priorität: {prioritaet}</p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}