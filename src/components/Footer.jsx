import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";

const socials = [
  {
    href: "https://github.com/zayn-tech-info",
    icon: <Github className="w-5 h-5" />, label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/zayntechinfo", // 
    icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn"
  }
];


const Footer = () => (
  <footer className="mt-16 py-8 border-t border-gray-200 bg-white text-center text-brand-gray">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-2xl mx-auto px-4 gap-4">
      <div className="flex flex-col items-center md:items-start">
        <span className="font-bold text-lg text-brand-dark">Yakubu Abdulbasit</span>
        <span className="text-sm mt-1">Building web experiences with passion & precision.</span>
        <span className="text-xs mt-1">&copy; {new Date().getFullYear()} Yakubu Abdulbasit. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-green-600 transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-1 px-3 py-2 rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition-colors text-sm font-medium mt-2 md:mt-0"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" /> Top
      </button>
    </div>
  </footer>
);

export default Footer; 