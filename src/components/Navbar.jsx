import React, { useState, useEffect } from "react";
import { User, Briefcase, Code, Mail, Github, Monitor, Menu, X, FileDown } from "lucide-react";

const navItems = [
  { href: "#projects", icon: <Briefcase size={18} />, label: "Work" },
  { href: "#skills", icon: <Code size={18} />, label: "Skills" },
  { href: "#about", icon: <User size={18} />, label: "About" },
  { href: "#contact", icon: <Mail size={18} />, label: "Contact" },
];

const handleNavClick = (e, href, closeMenu) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
  if (typeof closeMenu === "function") closeMenu();
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setMobileMenuOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`w-full md:w-fit mx-auto flex items-center justify-between md:justify-center gap-4 p-2 rounded-full border border-white/20 bg-charcoal/80 backdrop-blur-xl shadow-2xl animate-fade-in ${mobileMenuOpen ? "relative z-[60]" : ""}`}>
        {/* Icon / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-accent hover:text-white text-zinc-400 transition-all duration-300 shrink-0"
        >
          <Monitor size={20} />
        </a>

        {/* Desktop: center links + GitHub */}
        <div className="hidden md:flex items-center gap-4">
          <div className="h-6 w-px bg-white/10"></div>
          <div className="flex items-center gap-1">
            {navItems.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <a
            href="/resume.pdf"
            download
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-accent hover:text-white text-zinc-400 transition-all duration-300"
            aria-label="Download CV"
          >
            <FileDown size={20} />
          </a>
          <div className="h-6 w-px bg-white/10"></div>
          <a
            href="https://github.com/zayn-tech-info"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-white hover:text-black text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile: CV + GitHub + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-accent hover:text-white text-zinc-400 transition-all duration-300"
            aria-label="Download CV"
          >
            <FileDown size={20} />
          </a>
          <a
            href="https://github.com/zayn-tech-info"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-white hover:text-black text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-white/10 text-zinc-400 hover:text-white transition-all duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-24 left-4 right-4 rounded-2xl border border-white/20 bg-charcoal/90 backdrop-blur-xl shadow-2xl py-4 transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {navItems.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href, () => setMobileMenuOpen(false))}
              className="flex items-center gap-3 px-5 py-3 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {icon}
              <span className="font-medium">{label}</span>
            </a>
          ))}
          <div className="my-2 border-t border-white/10" />
          <a
            href="/resume.pdf"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-5 py-3 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <FileDown size={20} />
            <span className="font-medium">Download CV</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
