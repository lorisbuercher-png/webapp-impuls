import AdminLayout from "../../../components/AdminLayout";

export default function AdminEinstellungen() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">Einstellungen</h1>
      <p className="mt-2 text-gray-500">
        Grundkonfiguration für Benutzer, Rollen und Portal.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          ["Benutzerrollen", "Mitarbeiter, Berater, Backoffice und Admin verwalten."],
          ["Benachrichtigungen", "E-Mail, Push und interne Hinweise konfigurieren."],
          ["Dokumenttypen", "Ausweis, Bewilligung, Vertrag, Rapport und Lohn definieren."],
          ["Schnittstellen", "Später zvoove, Microsoft 365 und weitere Systeme anbinden."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-3 text-gray-500">{text}</p>
            <button className="mt-6 rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">
              Öffnen
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}