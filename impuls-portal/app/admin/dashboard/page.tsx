import AdminLayout from "../../../components/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-gray-500">
        Überblick für Backoffice, Leitung und Verwaltung.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          ["👷", "Mitarbeiter", "126"],
          ["📄", "Dokumente offen", "18"],
          ["💰", "Lohnabrechnungen", "42"],
          ["⚠️", "Bewilligungen laufen ab", "5"],
        ].map(([icon, title, value]) => (
          <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{icon}</div>
            <p className="mt-4 text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 text-4xl font-bold">{value}</h2>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}