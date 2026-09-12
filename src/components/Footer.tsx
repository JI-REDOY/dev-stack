const LOGO_SRC = "/src/assets/logo-text.png";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Home", href: "#home" },
      { name: "Technologies", href: "#technologies" },
      { name: "Projects", href: "#projects" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

        {/* ========== TOP SECTION ========== */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Brand Column — সব device এ দেখাবে */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">

            {/* ✅ Logo Image */}
            <a href="#home" className="flex items-center">
              <img
                src={LOGO_SRC}
                alt="Dev Stack"
                className="h-7 w-auto object-contain sm:h-8"
              />
            </a>

            {/* Description */}
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500 sm:max-w-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <span key={social.name} className="flex items-center gap-2">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-slate-600 transition hover:text-pink-600"
                  >
                    {social.name}
                  </a>
                  {index !== socialLinks.length - 1 && (
                    <span className="text-slate-300">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* ✅ Link Columns — শুধু Desktop/Tablet এ দেখাবে, Mobile এ লুকানো */}
          <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8 lg:col-span-7 lg:contents">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="lg:col-span-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                  {title}
                </h4>

                <ul className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-500 transition hover:text-pink-600"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ========== DIVIDER + BOTTOM BAR ========== */}
        <div className="mt-8 border-t border-slate-100 pt-5 lg:mt-10 lg:pt-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">

            {/* Copyright */}
            <p className="text-[11px] text-slate-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-5">
              <a
                href="#privacy"
                className="text-[11px] text-slate-400 transition hover:text-pink-600"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-[11px] text-slate-400 transition hover:text-pink-600"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;