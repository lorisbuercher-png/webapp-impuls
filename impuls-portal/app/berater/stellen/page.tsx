import BeraterLayout from "../../../components/BeraterLayout";

const stellen = [
  ["Produktionsmitarbeiter/in", "Muster AG", "Temporär", "5 Kandidaten"],
  ["Logistiker/in EFZ", "Beispiel GmbH", "Feststelle", "3 Kandidaten"],
  ["Pflegehelfer/in SRK", "Swiss Pflege AG", "80–100%", "7 Kandidaten"],
];

export default function Stellen() {
  return (
    <BeraterLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Offene Stellen</h1>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          + Neue Stelle
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {stellen.map(([titel, kunde, typ, kandidaten]) => (
          <div key={titel} className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">{titel}</h2>
            <p className="mt-2 text-gray-500">{kunde}</p>

            <div className="mt-5 flex gap-3">
              <span className="rounded-full bg-[#6D5DF6]/10 px-4 py-2 text-sm text-[#6D5DF6]">
                {typ}
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
                {kandidaten}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}