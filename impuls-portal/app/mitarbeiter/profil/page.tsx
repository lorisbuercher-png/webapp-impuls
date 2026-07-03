import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Profil() {
  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Mein Profil</h1>

      <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="text-sm text-gray-500">Vorname</label>
            <input
              className="mt-2 w-full rounded-2xl border p-3"
              defaultValue="Max"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Nachname</label>
            <input
              className="mt-2 w-full rounded-2xl border p-3"
              defaultValue="Muster"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">E-Mail</label>
            <input
              className="mt-2 w-full rounded-2xl border p-3"
              defaultValue="max@muster.ch"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Telefon</label>
            <input
              className="mt-2 w-full rounded-2xl border p-3"
              defaultValue="+41 79 123 45 67"
            />
          </div>

        </div>

        <button className="mt-8 rounded-2xl bg-[#6D5DF6] px-6 py-3 font-semibold text-white">
          Änderungen speichern
        </button>
      </div>
    </MitarbeiterLayout>
  );
}