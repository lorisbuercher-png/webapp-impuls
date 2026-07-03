import BeraterLayout from "../../../components/BeraterLayout";

const kunden = [
  ["Muster AG", "Industrie", "12 aktive Einsätze"],
  ["Beispiel GmbH", "Logistik", "4 offene Stellen"],
  ["Swiss Pflege AG", "Gesundheit", "3 Interviews geplant"],
];

export default function Kunden() {
  return (
    <BeraterLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Kunden</h1>

        <button className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">
          + Neuer Kunde
        </button>
      </div>

      <div className="mt-8 grid gap-5">
        {kunden.map(([name, branche, status]) => (
          <div key={name} className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="mt-2 text-gray-500">{branche}</p>
            <p className="mt-4 font-semibold text-[#6D5DF6]">{status}</p>
          </div>
        ))}
      </div>
    </BeraterLayout>
  );
}