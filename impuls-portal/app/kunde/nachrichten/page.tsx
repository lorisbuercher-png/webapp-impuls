import KundenLayout from "../../../components/KundenLayout";

const nachrichten = [
  ["Neue Rapportfreigabe", "Bitte prüfen Sie den Rapport von Max Muster."],
  ["Neuer Einsatz geplant", "Luca Rossi startet am Montag im Einsatz."],
  ["Rechnung verfügbar", "Die Rechnung Juni 2025 ist verfügbar."],
];

export default function KundenNachrichten() {
  return (
    <KundenLayout>
      <h1 className="text-4xl font-bold">Nachrichten</h1>
      <p className="mt-2 text-gray-500">
        Kommunikation zwischen Kunde und Impuls Swiss.
      </p>

      <div className="mt-8 space-y-4">
        {nachrichten.map(([titel, text]) => (
          <div key={titel} className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">{titel}</h2>
            <p className="mt-2 text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </KundenLayout>
  );
}