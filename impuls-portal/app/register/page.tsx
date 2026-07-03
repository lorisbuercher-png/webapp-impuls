export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0F0B18] px-8 py-20 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">Registrierung</h1>
        <p className="mt-2 text-gray-400">Erstelle dein Bewerberkonto.</p>

        <input className="mt-8 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Vorname Nachname" />
        <input className="mt-4 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="E-Mail" />
        <input className="mt-4 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Passwort" type="password" />

        <button className="mt-6 w-full rounded-2xl bg-violet-500 py-3 font-semibold">
          Konto erstellen
        </button>
      </div>
    </main>
  );
}