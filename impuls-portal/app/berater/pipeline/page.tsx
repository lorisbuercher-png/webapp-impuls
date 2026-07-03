import BeraterLayout from "../../../components/BeraterLayout";

const spalten = [
  {
    titel: "Neue Bewerbung",
    kandidaten: ["Max Muster", "Nora Meier"],
  },
  {
    titel: "Telefoninterview",
    kandidaten: ["Ali Demir"],
  },
  {
    titel: "Gespräch",
    kandidaten: ["Luca Rossi"],
  },
  {
    titel: "Beim Kunden",
    kandidaten: ["Sarah Keller"],
  },
  {
    titel: "Einsatz",
    kandidaten: ["Marco Frei"],
  },
];

export default function Pipeline() {
  return (
    <BeraterLayout>
      <h1 className="text-4xl font-bold">Bewerber-Pipeline</h1>
      <p className="mt-2 text-gray-500">
        Übersicht über den Recruiting-Prozess – später mit Drag & Drop.
      </p>

      <div className="mt-8 grid gap-5 overflow-x-auto lg:grid-cols-5">
        {spalten.map((spalte) => (
          <div key={spalte.titel} className="min-h-[500px] rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="font-bold">{spalte.titel}</h2>

            <div className="mt-5 space-y-4">
              {spalte.kandidaten.map((name) => (
                <div key={name} className="rounded-2xl border border-gray-100 bg-[#F7F8FC] p-4">
                  <p className="font-semibold">{name}</p>
                  <p className="mt-1 text-sm text-gray-500">Produktionsmitarbeiter</p>
                  <button className="mt-4 rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">
                    Öffnen
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}