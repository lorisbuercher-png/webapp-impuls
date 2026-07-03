import BeraterLayout from "../../../components/BeraterLayout";

const kandidaten = [
  {
    name: "Max Muster",
    beruf: "Polymechaniker",
    status: "Neue Bewerbung",
    ort: "Bern",
  },
  {
    name: "Luca Rossi",
    beruf: "Logistiker",
    status: "Interview",
    ort: "Zürich",
  },
  {
    name: "Sarah Keller",
    beruf: "Kauffrau",
    status: "Beim Kunden",
    ort: "Solothurn",
  },
];

export default function Kandidaten() {
  return (
    <BeraterLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Kandidaten</h1>

        <button className="rounded-xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          + Neuer Kandidat
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {kandidaten.map((kandidat) => (
          <div
            key={kandidat.name}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold">{kandidat.name}</h2>
                <p className="text-gray-500">{kandidat.beruf}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-[#6D5DF6]">
                  {kandidat.status}
                </p>
                <p className="text-gray-500">{kandidat.ort}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}