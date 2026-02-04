import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socials = [
  {
    href: "https://github.com/zayn-tech-info",
    icon: <Github size={20} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/zayntechinfo",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/zayntech_info",
    icon: <Twitter size={20} />,
    label: "X (Twitter)",
  },
];

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-charcoal text-center text-zinc-500">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-6 md:px-12 gap-6">
      <div className="flex flex-col items-center md:items-start text-sm">
        <span className="font-medium text-white">Yakubu Abdulbasit</span>
        <span className="mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>

      <div className="flex items-center gap-6">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-accent transition-colors duration-300"
          >
            {icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group p-3 rounded-full border border-white/5 hover:border-accent hover:text-accent transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp
          size={20}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>
    </div>
  </footer>
);

export default Footer;
