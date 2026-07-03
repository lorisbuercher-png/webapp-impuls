import BeraterLayout from "../../../components/BeraterLayout";

const aufgaben = [
  {
    titel: "Max Muster zurückrufen",
    prioritaet: "Hoch",
    faellig: "Heute 14:00",
  },
  {
    titel: "Interview mit Luca Rossi",
    prioritaet: "Mittel",
    faellig: "Morgen 09:00",
  },
  {
    titel: "Bewilligung von Sarah Keller prüfen",
    prioritaet: "Hoch",
    faellig: "Diese Woche",
  },
  {
    titel: "Neue Stelle publizieren",
    prioritaet: "Normal",
    faellig: "Freitag",
  },
];

export default function Aufgaben() {
  return (
    <BeraterLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Aufgaben</h1>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          + Aufgabe
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {aufgaben.map((aufgabe) => (
          <div
            key={aufgabe.titel}
            className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm"
          >
            <div>
              <h2 className="text-xl font-bold">{aufgabe.titel}</h2>
              <p className="mt-2 text-gray-500">
                Fällig: {aufgabe.faellig}
              </p>
            </div>

            <span className="rounded-full bg-[#6D5DF6]/10 px-4 py-2 text-sm font-semibold text-[#6D5DF6]">
              {aufgabe.prioritaet}
            </span>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}