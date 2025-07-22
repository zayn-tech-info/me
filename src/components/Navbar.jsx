import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Mail, FileText, Github, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', icon: <Home size={22} />, label: 'Home' },
  { href: '#about', icon: <User size={22} />, label: 'About' },
  { href: '#projects', icon: <Briefcase size={22} />, label: 'Projects' },
  { href: '#skills', icon: <Code size={22} />, label: 'Skills' },
  { href: '#contact', icon: <Mail size={22} />, label: 'Contact' },
  { href: '/resume.pdf', icon: <FileText size={22} />, label: 'Resume', external: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleNavClick = (e, href, external) => {
    if (external || !href.startsWith("#")) return; 
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);  
  };
 
  const githubButton = (
    <a
      href="https://github.com/zayn-tech-info"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white rounded-full px-5 py-1.5 font-medium shadow-md border border-gray-800 hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center text-base"
      style={{ minWidth: '44px' }}
      aria-label="GitHub"
    >
      <Github className="w-5 h-5 text-green-500" />
    </a>
  );
  const navGridItems = navItems.map(({ href, icon, label, external }) => (
    <a
      key={label}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex flex-col items-center justify-center rounded-full p-2 bg-transparent text-gray-700 transition-all duration-300 ease-in-out mb-2 focus:outline-none focus:ring-2 focus:ring-green-300"
      onClick={(e) => handleNavClick(e, href, external)}
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out group-hover:bg-green-100 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-green-200 group-hover:text-green-600 group-hover:scale-110">
        {icon}
      </span>
      <span className="text-xs mt-1 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-80">
        {label}
      </span>
    </a>
  ));

  return (
    <div className="w-full flex justify-center mt-7">
      <nav className="relative flex items-center bg-white border border-gray-200 shadow rounded-full px-6 py-2 space-x-4 w-full max-w-4xl">
        
        <div className="flex md:hidden w-full items-center justify-between">
          <button
            className="p-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div>{githubButton}</div>
        </div>
     
        <div className="hidden md:flex items-center flex-1 justify-between w-full">
          <div className="flex items-center justify-center space-x-1 flex-1">
            {navItems.map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group relative p-2 text-gray-600 transition-all duration-300 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 flex flex-col items-center justify-center"
                onClick={(e) => handleNavClick(e, href, external)}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out group-hover:bg-green-100 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-green-200 group-hover:text-green-600 group-hover:scale-110">
                  {icon}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 ease-in-out shadow-lg z-10">
                  {label}
                </span>
              </a>
            ))}
          </div>
    
          <span className="h-6 w-px bg-gray-200 mx-4" />
          {githubButton}
        </div>
     
        {menuOpen && (
          <div className="absolute top-full left-0 right-5 bg-white border border-gray-200 shadow rounded-b-2xl flex flex-col items-center py-4 z-20 md:hidden animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full px-4">
              {navGridItems}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar; 