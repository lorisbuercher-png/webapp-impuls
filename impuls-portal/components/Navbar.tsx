export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#0F0B18]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="text-2xl font-bold text-white">
          IMPULS <span className="text-violet-400">SWISS</span>
        </div>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="/">Home</a>
<a href="/jobs">Jobs</a>
<a href="/bewerbung">Bewerbung</a>
<a href="/register">Registrieren</a>
<a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}