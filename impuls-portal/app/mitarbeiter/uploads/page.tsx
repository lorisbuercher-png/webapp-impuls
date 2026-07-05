"use client";

import { useState } from "react";
import MitarbeiterLayout from "../../../components/MitarbeiterLayout";

type Upload = { name: string; typ: string; periode: string; status: string; groesse: string };

export default function Uploads() {
  const [datei, setDatei] = useState<File | null>(null);
  const [typ, setTyp] = useState("Wochenrapport");
  const [periode, setPeriode] = useState("KW 27 / 2026");
  const [meldung, setMeldung] = useState("");
  const [uploads, setUploads] = useState<Upload[]>([
    { name: "Rapport_KW26.pdf", typ: "Wochenrapport", periode: "KW 26 / 2026", status: "Geprüft", groesse: "1.2 MB" },
    { name: "Ausweis_Vorderseite.jpg", typ: "Ausweis", periode: "–", status: "Eingegangen", groesse: "840 KB" },
  ]);

  function hochladen() {
    if (!datei) { setMeldung("Bitte zuerst eine Datei auswählen."); return; }
    setUploads((aktuell) => [{ name: datei.name, typ, periode: typ === "Wochenrapport" ? periode : "–", status: "Eingegangen", groesse: `${Math.max(1, Math.round(datei.size / 1024))} KB` }, ...aktuell]);
    setMeldung("Upload erfolgreich. Der Rapport wurde zur Prüfung eingereicht.");
    setDatei(null);
  }

  return <MitarbeiterLayout>
    <div className="mx-auto max-w-5xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">Dokumente</p>
      <h1 className="mt-2 text-4xl font-black">Rapport hochladen</h1>
      <p className="mt-2 text-gray-500">Rapporte, Ausweise und Zertifikate digital einreichen und Status verfolgen.</p>

      {meldung && <div className={`mt-5 rounded-2xl p-4 text-sm font-semibold ${meldung.startsWith("Upload") ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{meldung}</div>}

      <div className="mt-7 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-[#6D5DF6]/40 bg-violet-50/40 p-10 text-center transition hover:border-[#6D5DF6] hover:bg-violet-50">
            <div className="text-5xl">📤</div><p className="mt-4 text-xl font-bold">{datei ? datei.name : "Datei auswählen"}</p><p className="mt-2 text-sm text-gray-500">PDF, JPG oder PNG · maximal 10 MB</p>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => { setDatei(e.target.files?.[0] ?? null); setMeldung(""); }} />
          </label>
          <div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold text-gray-600">Dokumenttyp<select value={typ} onChange={(e) => setTyp(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 bg-white p-3 font-normal"><option>Wochenrapport</option><option>Ausweis</option><option>Bewilligung</option><option>Zertifikat</option><option>Anderes Dokument</option></select></label><label className="text-sm font-semibold text-gray-600">Periode<input value={periode} onChange={(e) => setPeriode(e.target.value)} disabled={typ !== "Wochenrapport"} className="mt-2 w-full rounded-xl border border-gray-200 p-3 font-normal disabled:bg-gray-100" /></label></div>
          <button onClick={hochladen} className="mt-5 w-full rounded-2xl bg-[#6D5DF6] px-5 py-3 font-bold text-white shadow-lg shadow-violet-200">Hochladen & zur Prüfung senden</button>
        </div>
        <div className="rounded-3xl bg-[#1F2937] p-6 text-white"><p className="text-sm font-bold uppercase tracking-widest text-violet-300">So geht es weiter</p><div className="mt-5 space-y-4">{[["1","Upload","Datei wird sicher eingereicht"],["2","Prüfung","Backoffice kontrolliert Stunden"],["3","Freigabe","Rapport wird für den Lohnlauf freigegeben"]].map(([nr,titel,text]) => <div key={nr} className="flex gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#6D5DF6] text-sm font-bold">{nr}</span><div><p className="font-bold">{titel}</p><p className="text-sm text-gray-300">{text}</p></div></div>)}</div></div>
      </div>

      <div className="mt-7 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"><div className="border-b border-gray-100 p-5"><h2 className="text-xl font-bold">Meine Uploads</h2></div><div className="divide-y divide-gray-100">{uploads.map((upload, index) => <div key={`${upload.name}-${index}`} className="grid gap-2 p-5 md:grid-cols-[1.4fr_1fr_1fr_.8fr] md:items-center"><div><p className="font-bold">{upload.name}</p><p className="text-xs text-gray-400">{upload.groesse}</p></div><p className="text-sm text-gray-600">{upload.typ}</p><p className="text-sm text-gray-500">{upload.periode}</p><span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${upload.status === "Geprüft" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{upload.status}</span></div>)}</div></div>
    </div>
  </MitarbeiterLayout>;
}
