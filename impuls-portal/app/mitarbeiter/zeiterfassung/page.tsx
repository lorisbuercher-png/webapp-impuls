import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Zeiterfassung() {
  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Zeiterfassung</h1>

      <p className="mt-2 text-gray-500">
        Erfasse deine Arbeitszeit oder lade einen Rapport als Foto hoch.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Arbeitszeit erfassen</h2>

          <input className="mt-6 w-full rounded-2xl bg-[#F7F8FC] px-4 py-3" placeholder="Datum" />
          <input className="mt-4 w-full rounded-2xl bg-[#F7F8FC] px-4 py-3" placeholder="Startzeit" />
          <input className="mt-4 w-full rounded-2xl bg-[#F7F8FC] px-4 py-3" placeholder="Endzeit" />
          <input className="mt-4 w-full rounded-2xl bg-[#F7F8FC] px-4 py-3" placeholder="Pause" />

          <button className="mt-6 w-full rounded-2xl bg-[#6D5DF6] py-3 font-semibold text-white">
            Stunden speichern
          </button>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Rapport hochladen</h2>

          <label className="mt-6 block rounded-3xl border-2 border-dashed border-[#6D5DF6]/40 p-10 text-center">
            <div className="text-4xl">📷</div>
            <p className="mt-4 font-semibold">Foto oder PDF hochladen</p>
            <p className="mt-2 text-sm text-gray-500">
              Später liest KI daraus Datum, Zeiten und Stunden.
            </p>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
    </MitarbeiterLayout>
  );
}