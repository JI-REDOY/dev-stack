import { useState } from "react";

// ✅ একটাই logo src — Desktop + Mobile দুই জায়গায়
const LOGO_SRC = "/src/assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

      {/* ========== MOBILE HEADER ========== */}
      <div className="grid h-16 grid-cols-3 items-center px-4 md:hidden">

        {/* LEFT — Hamburger */}
        <div className="flex justify-start">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* CENTER — Logo (একই src) */}
        <div className="flex justify-center">
          <a href="#home" className="flex items-center">
            <img
              src={LOGO_SRC}
              alt="Dev Stack"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>

        {/* RIGHT — Sign In + Sign Up */}
        <div className="flex items-center justify-end gap-1.5">
          <button className="text-[10px] font-medium text-slate-600">
            Sign In
          </button>
          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-[10px] font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* ========== DESKTOP HEADER ========== */}
      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-8 md:flex">

        {/* Logo (বামে — একই src) */}
        <a href="#home" className="flex shrink-0 items-center">
          <img
            src={LOGO_SRC}
            alt="Dev Stack"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Menu (মাঝে) */}
        <div className="flex items-center gap-7">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-xs font-medium transition ${
                index === 0 ? "text-pink-600" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.name}
              {index === 0 && (
                <span className="absolute -bottom-5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600" />
              )}
            </a>
          ))}
        </div>

        {/* Buttons (ডানে) */}
        <div className="flex items-center gap-3">
          <button className="px-2 py-2 text-xs font-medium text-slate-600 hover:text-slate-950">
            Sign In
          </button>
          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-pink-500/20">
            Sign Up
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  index === 0
                    ? "bg-pink-50 text-pink-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;