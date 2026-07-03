import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Nachrichten() {
  const nachrichten = [
    ["Neue Lohnabrechnung verfügbar", "Deine Lohnabrechnung wurde hochgeladen."],
    ["Dokument fehlt", "Bitte lade deinen aktuellen Lebenslauf hoch."],
    ["Einsatz bestätigt", "Dein Einsatz bei Muster AG wurde bestätigt."],
  ];

  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Nachrichten</h1>

      <div className="mt-8 space-y-4">
        {nachrichten.map(([titel, text]) => (
          <div key={titel} className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">{titel}</h2>
            <p className="mt-2 text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </MitarbeiterLayout>
  );
}