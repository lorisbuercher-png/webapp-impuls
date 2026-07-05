"use client";

import { useState } from "react";
import Link from "next/link";
import BeraterLayout from "../../../components/BeraterLayout";

type Kandidat = { name: string; beruf: string; status: string; ort: string };
type Einsatz = { person: string; kunde: string; stelle: string; start: string; pensum: string };

const initialKandidaten: Kandidat[] = [
  { name: "Max Muster", beruf: "Polymechaniker", status: "Neue Bewerbung", ort: "Bern" },
  { name: "Luca Rossi", beruf: "Logistiker", status: "Interview", ort: "Zürich" },
  { name: "Sarah Keller", beruf: "Kauffrau", status: "Beim Kunden", ort: "Solothurn" },
  { name: "Adil Benali", beruf: "Betriebsmitarbeiter", status: "Verfügbar", ort: "Zürich" },
];

export default function Kandidaten() {
  const [kandidaten, setKandidaten] = useState(initialKandidaten);
  const [offen, setOffen] = useState(false);
  const [meldung, setMeldung] = useState("");
  const [einsatz, setEinsatz] = useState<Einsatz>({ person: "Max Muster", kunde: "Muster AG", stelle: "Produktion Frühschicht", start: "2026-07-06", pensum: "100%" });
  const [einsaetze, setEinsaetze] = useState<Einsatz[]>([]);

  function erstellen() {
    setEinsaetze((aktuell) => [einsatz, ...aktuell]);
    setKandidaten((aktuell) => aktuell.map((person) => person.name === einsatz.person ? { ...person, status: "Aktiv im Einsatz" } : person));
    setMeldung(`${einsatz.person} wurde ${einsatz.kunde} zugewiesen.`);
    setOffen(false);
  }

  return (
    <BeraterLayout>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Disposition</p><h1 className="mt-2 text-3xl font-black">Kandidaten & Einsätze</h1><p className="mt-2 text-gray-500">Personen direkt einem Kunden und einer offenen Stelle zuweisen.</p></div>
          <div className="flex gap-2"><Link href="/bewerbung" className="rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold hover:border-violet-300">+ Neuer Kandidat</Link><button onClick={() => setOffen(true)} className="rounded-2xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white shadow-lg shadow-violet-200">Einsatz erstellen</button></div>
        </div>

        {meldung && <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700"><span>✓ {meldung}</span><button onClick={() => setMeldung("")} className="px-2">×</button></div>}

        {offen && <div className="mt-6 rounded-3xl border border-violet-200 bg-white p-6 shadow-xl shadow-violet-100">
          <div className="flex items-center justify-between"><div><h2 className="text-xl font-bold">Neuen Einsatz zuweisen</h2><p className="text-sm text-gray-500">Mockup – wird noch nicht dauerhaft gespeichert.</p></div><button onClick={() => setOffen(false)} className="rounded-full bg-gray-100 px-3 py-1">×</button></div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <label className="text-sm font-semibold text-gray-600">Person<select value={einsatz.person} onChange={(e) => setEinsatz({ ...einsatz, person: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 bg-white p-3 font-normal">{kandidaten.map((k) => <option key={k.name}>{k.name}</option>)}</select></label>
            <label className="text-sm font-semibold text-gray-600">Kunde<select value={einsatz.kunde} onChange={(e) => setEinsatz({ ...einsatz, kunde: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 bg-white p-3 font-normal"><option>Muster AG</option><option>Helvetia Logistik</option><option>CarePlus Bern</option></select></label>
            <label className="text-sm font-semibold text-gray-600">Stelle<select value={einsatz.stelle} onChange={(e) => setEinsatz({ ...einsatz, stelle: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 bg-white p-3 font-normal"><option>Produktion Frühschicht</option><option>Logistik Wareneingang</option><option>Pflegeassistenz</option></select></label>
            <label className="text-sm font-semibold text-gray-600">Startdatum<input type="date" value={einsatz.start} onChange={(e) => setEinsatz({ ...einsatz, start: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 p-3 font-normal" /></label>
            <label className="text-sm font-semibold text-gray-600">Pensum<select value={einsatz.pensum} onChange={(e) => setEinsatz({ ...einsatz, pensum: e.target.value })} className="mt-2 w-full rounded-xl border border-gray-200 bg-white p-3 font-normal"><option>100%</option><option>80%</option><option>60%</option><option>50%</option></select></label>
          </div>
          <div className="mt-5 flex justify-end gap-2"><button onClick={() => setOffen(false)} className="rounded-xl border border-gray-200 px-5 py-3 font-semibold">Abbrechen</button><button onClick={erstellen} className="rounded-xl bg-[#6D5DF6] px-5 py-3 font-semibold text-white">Zuweisung bestätigen</button></div>
        </div>}

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {kandidaten.map((kandidat) => <div key={kandidat.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between gap-4"><div><h2 className="text-xl font-bold">{kandidat.name}</h2><p className="text-gray-500">{kandidat.beruf} · {kandidat.ort}</p></div><span className={`rounded-full px-3 py-1 text-xs font-bold ${kandidat.status === "Aktiv im Einsatz" ? "bg-emerald-50 text-emerald-700" : "bg-violet-50 text-violet-700"}`}>{kandidat.status}</span></div><div className="mt-5 flex gap-2"><button onClick={() => { setEinsatz({ ...einsatz, person: kandidat.name }); setOffen(true); }} className="flex-1 rounded-xl bg-[#6D5DF6] px-4 py-2 text-sm font-semibold text-white">Einsatz zuweisen</button><Link href="/berater/pipeline" className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold">Pipeline</Link></div></div>)}
        </div>

        {einsaetze.length > 0 && <div className="mt-7 rounded-3xl border border-gray-200 bg-white p-6"><h2 className="text-xl font-bold">Neu erstellte Einsätze</h2><div className="mt-4 space-y-3">{einsaetze.map((item, index) => <div key={`${item.person}-${index}`} className="flex flex-col gap-2 rounded-2xl bg-gray-50 p-4 md:flex-row md:items-center md:justify-between"><div><p className="font-bold">{item.person} → {item.kunde}</p><p className="text-sm text-gray-500">{item.stelle} · ab {item.start} · {item.pensum}</p></div><span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Einsatz erstellt</span></div>)}</div></div>}
      </div>
    </BeraterLayout>
  );
}
