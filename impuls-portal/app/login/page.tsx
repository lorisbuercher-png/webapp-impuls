"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [rolle, setRolle] = useState("mitarbeiter");

  function login() {
    if (rolle === "mitarbeiter") router.push("/mitarbeiter/dashboard");
    if (rolle === "berater") router.push("/berater/dashboard");
    if (rolle === "admin") router.push("/admin/dashboard");
    if (rolle === "kunde") router.push("/kunde/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8FC]">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black">
            IMPULS <span className="text-[#6D5DF6]">ONE</span>
          </h1>
          <p className="mt-3 text-gray-500">Bitte anmelden</p>
        </div>

        <input
          className="mb-4 w-full rounded-2xl border p-4"
          placeholder="E-Mail"
        />

        <input
          className="mb-4 w-full rounded-2xl border p-4"
          placeholder="Passwort"
          type="password"
        />

        <select
          className="mb-6 w-full rounded-2xl border p-4"
          value={rolle}
          onChange={(e) => setRolle(e.target.value)}
        >
          <option value="mitarbeiter">Mitarbeiter</option>
          <option value="berater">Berater</option>
          <option value="admin">Backoffice / Admin</option>
          <option value="kunde">Kunde</option>
        </select>

        <button
          onClick={login}
          className="w-full rounded-2xl bg-[#6D5DF6] py-4 font-bold text-white"
        >
          Anmelden
        </button>

        <button className="mt-3 w-full rounded-2xl border border-gray-200 py-4 font-semibold">
          Mit Microsoft anmelden
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Passwort vergessen?
        </p>
      </div>
    </main>
  );
}