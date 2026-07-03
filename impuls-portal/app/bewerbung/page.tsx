export default function BewerbungPage() {
  return (
    <main className="min-h-screen bg-[#0F0B18] px-8 py-20 text-white">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">Online Bewerbung</h1>
        <p className="mt-2 text-gray-400">
          Sende deine Bewerbung direkt an Impuls Swiss.
        </p>

        <input className="mt-8 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Vorname Nachname" />
        <input className="mt-4 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="E-Mail" />
        <input className="mt-4 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none" placeholder="Telefon" />

        <textarea
          className="mt-4 min-h-32 w-full rounded-2xl bg-white/10 px-4 py-3 outline-none"
          placeholder="Kurze Nachricht"
        />

        <label className="mt-4 block rounded-2xl border border-dashed border-violet-400 p-6 text-center text-gray-300">
          Lebenslauf hochladen
          <input type="file" className="hidden" />
        </label>

        <button className="mt-6 w-full rounded-2xl bg-violet-500 py-3 font-semibold">
          Bewerbung senden
        </button>
      </div>
    </main>
  );
}