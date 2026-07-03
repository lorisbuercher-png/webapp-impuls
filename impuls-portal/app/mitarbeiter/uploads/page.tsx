import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

export default function Uploads() {
  return (
    <MitarbeiterLayout>
      <h1 className="text-4xl font-bold">Uploads</h1>

      <p className="mt-2 text-gray-500">
        Lade Rapporte, Ausweise, Zertifikate oder andere Dokumente hoch.
      </p>

      <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <label className="block rounded-3xl border-2 border-dashed border-[#6D5DF6]/40 p-12 text-center">
          <div className="text-5xl">📤</div>
          <p className="mt-4 text-xl font-bold">
            Datei hierher ziehen oder klicken
          </p>
          <p className="mt-2 text-gray-500">
            PDF, JPG, PNG
          </p>
          <input type="file" className="hidden" />
        </label>
      </div>
    </MitarbeiterLayout>
  );
}