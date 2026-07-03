export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] p-10 text-[#1F2937]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-5xl font-black">IMPULS ONE</h1>
          <p className="mt-3 text-xl text-gray-500">Operations Center</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          <Card title="Aktive Einsätze" value="92" color="bg-blue-50" />
          <Card title="Rapporte fehlen" value="21" color="bg-red-50" />
          <Card title="Löhne freigeben" value="64" color="bg-green-50" />
          <Card title="Bewilligungen" value="9" color="bg-orange-50" />
          <Card title="Neue Bewerbungen" value="7" color="bg-purple-50" />
          <Card title="Offene Aufgaben" value="12" color="bg-yellow-50" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Heute erledigen</h2>

            <div className="mt-6 space-y-4">
              <Task text="21 Rapporte fehlen" />
              <Task text="64 Löhne freigeben" />
              <Task text="9 Bewilligungen prüfen" />
              <Task text="7 neue Bewerbungen ansehen" />
              <Task text="5 Einsätze enden diese Woche" />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Schnellzugriff</h2>

            <div className="mt-6 grid gap-4">
              <Button text="Mitarbeiter" href="/mitarbeiter/dashboard" />
              <Button text="Berater" href="/berater/dashboard" />
              <Button text="Backoffice" href="/admin/dashboard" />
              <Button text="Rapporte" href="/admin/rapporte" />
              <Button text="Kandidaten" href="/berater/kandidaten" />
              <Button text="Lohnfreigabe" href="/admin/lohn" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`${color} rounded-3xl p-6`}>
      <p className="text-gray-500">{title}</p>
      <h2 className="mt-4 text-5xl font-black">{value}</h2>
    </div>
  );
}

function Task({ text }: { text: string }) {
  return <div className="rounded-2xl border p-5 font-semibold">{text}</div>;
}

function Button({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl bg-[#6D5DF6] p-4 text-center font-bold text-white"
    >
      {text}
    </a>
  );
}