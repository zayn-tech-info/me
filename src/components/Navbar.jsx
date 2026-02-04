import React from "react";
import { User, Briefcase, Code, Mail, Github, Monitor } from "lucide-react";

const navItems = [
  { href: "#projects", icon: <Briefcase size={18} />, label: "Work" },
  { href: "#skills", icon: <Code size={18} />, label: "Skills" },
  { href: "#about", icon: <User size={18} />, label: "About" },
  { href: "#contact", icon: <Mail size={18} />, label: "Contact" },
];

const handleNavClick = (e, href) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <nav className="w-fit mx-auto flex items-center gap-4 p-2 rounded-full border border-white/20 bg-charcoal/80 backdrop-blur-xl shadow-2xl animate-fade-in">
      {/* Icon / Logo */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, "#home")}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-accent hover:text-white text-zinc-400 transition-all duration-300"
      >
        <Monitor size={20} />
      </a>

      <div className="h-6 w-px bg-white/10 mx-1"></div>

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

      <div className="h-6 w-px bg-white/10 mx-1"></div>

      <a
        href="https://github.com/zayn-tech-info"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-white hover:text-black text-white transition-all duration-300"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
    </nav>
  );
};

export default Navbar;
