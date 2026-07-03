import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Dokumente() {
  return (
    <MitarbeiterLayout>

      <h1 className="text-4xl font-bold">
        Dokumente
      </h1>

      <p className="mt-2 text-gray-500">
        Hier findest du alle deine Dokumente.
      </p>

      <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">

        <button className="rounded-2xl bg-[#6D5DF6] px-6 py-3 text-white">
          Dokument hochladen
        </button>

      </div>

    </MitarbeiterLayout>
  );
}