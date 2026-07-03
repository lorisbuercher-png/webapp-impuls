import BeraterLayout from "../../../components/BeraterLayout";

const termine = [
  ["09:00", "Interview mit Luca Rossi", "Video Call"],
  ["11:30", "Kunde Muster AG anrufen", "Telefon"],
  ["14:00", "Max Muster Rückruf", "Telefon"],
  ["16:00", "Team-Abgleich Recruiting", "Intern"],
];

export default function Kalender() {
  return (
    <BeraterLayout>
      <h1 className="text-4xl font-bold">Kalender</h1>
      <p className="mt-2 text-gray-500">
        Deine heutigen Termine und Erinnerungen.
      </p>

      <div className="mt-8 space-y-4">
        {termine.map(([zeit, titel, typ]) => (
          <div key={titel} className="flex items-center gap-6 rounded-3xl bg-white p-6 shadow-sm">
            <div className="w-24 text-xl font-bold text-[#6D5DF6]">{zeit}</div>
            <div>
              <h2 className="text-xl font-bold">{titel}</h2>
              <p className="text-gray-500">{typ}</p>
            </div>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}