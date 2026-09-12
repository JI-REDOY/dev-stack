import { useState, useEffect } from "react";
import { BRAND_GRADIENT } from "../theme/gradient";

const LOGO_SRC = "/src/assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeButton, setActiveButton] = useState("signin");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "home";

      navLinks.forEach((link) => {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = id;
          }
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        const lastLink = navLinks[navLinks.length - 1];
        currentSection = lastLink.href.replace("#", "");
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="grid h-16 grid-cols-3 items-center px-4 md:hidden">
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

        <div className="flex justify-center">
          <a href="#home" className="flex items-center">
            <img src={LOGO_SRC} alt="Dev Stack" className="h-7 w-auto object-contain" />
          </a>
        </div>

        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={() => setActiveButton("signin")}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-all duration-300 ${
              activeButton === "signin"
                ? `${BRAND_GRADIENT} text-white shadow-md shadow-pink-500/30`
                : "border border-slate-200 bg-white text-slate-600"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setActiveButton("signup")}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-all duration-300 ${
              activeButton === "signup"
                ? `${BRAND_GRADIENT} text-white shadow-md shadow-pink-500/30`
                : "border border-slate-200 bg-white text-slate-600"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-8 md:flex">
        <a href="#home" className="flex shrink-0 items-center">
          <img src={LOGO_SRC} alt="Dev Stack" className="h-8 w-auto object-contain" />
        </a>

        <div className="flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs font-medium transition ${
                  isActive ? "text-pink-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className={`absolute -bottom-6 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full ${BRAND_GRADIENT}`} />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveButton("signin")}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
              activeButton === "signin"
                ? `${BRAND_GRADIENT} text-white shadow-md shadow-pink-500/30`
                : "border border-slate-200 bg-white text-slate-600 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setActiveButton("signup")}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
              activeButton === "signup"
                ? `${BRAND_GRADIENT} text-white shadow-md shadow-pink-500/30`
                : "border border-slate-200 bg-white text-slate-600 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-pink-50 text-pink-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;