export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F0B18] px-8 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold">
            IMPULS <span className="text-violet-400">SWISS</span>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Recruiting, Temporärarbeit und Personalvermittlung in der Zentralschweiz.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="/jobs">Jobs</a>
          <a href="/login">Login</a>
          <a href="/register">Registrieren</a>
          <a href="https://www.impuls-swiss.ch">Website</a>
        </div>
      </div>
    </footer>
  );
}