import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

type NavbarProps = {
  dark: boolean;
  onToggleTheme: () => void;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = `rounded-lg px-3 py-2 text-sm transition ${dark ? "text-gray-300 hover:bg-white/5 hover:text-lime-300" : "text-gray-600 hover:bg-gray-100 hover:text-lime-700"}`;

  const iconButtonClass = `rounded-xl border p-2.5 transition ${dark ? "border-white/15 hover:bg-white/10" : "border-gray-200 hover:bg-gray-100"}`;

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${dark ? "border-white/10 bg-gray-950/90 text-white" : "border-gray-200 bg-white/90 text-gray-900"}`}>
      <nav aria-label="Navigasi utama" className="flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        {/* Logo dan nama */}
        <a href="#beranda" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 font-extrabold text-gray-950">W.</span>

          <span className="text-base font-bold sm:text-lg">
            Willy<span className="text-lime-400">.</span>
          </span>
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Tombol desktop */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <button type="button" onClick={onToggleTheme} aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"} className={iconButtonClass}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-semibold text-gray-950 transition hover:bg-lime-200">
            Contact Me
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Tombol HP dan tablet */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button type="button" onClick={onToggleTheme} aria-label="Ganti tema" className={iconButtonClass}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} className={iconButtonClass}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Dropdown menu HP dan tablet */}
      {menuOpen && (
        <div className={`border-t px-4 py-4 sm:px-6 lg:hidden ${dark ? "border-white/10" : "border-gray-200"}`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className={linkClass}>
                {item.label}
              </a>
            ))}

            <a href="#kontak" onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-4 py-3 font-semibold text-gray-950 transition hover:bg-lime-200">
              Hubungi Saya
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
