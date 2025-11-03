import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  FileText,
  Github,
} from "lucide-react";

const navItems = [
  { href: "#home", icon: <Home size={20} />, label: "Home" },
  { href: "#about", icon: <User size={20} />, label: "About" },
  { href: "#projects", icon: <Briefcase size={20} />, label: "Projects" },
  { href: "#skills", icon: <Code size={20} />, label: "Skills" },
  { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
  {
    href: "/resume.pdf",
    icon: <FileText size={20} />,
    label: "Resume",
    download: true,
  },
];

// Smooth scroll handler used by nav links
const handleNavClick = (e, href, external, download) => {
  if (external || download || !href.startsWith("#")) return;
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const githubButton = (
    <a
      href="https://github.com/zayn-tech-info"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white rounded-full px-4 py-4 font-medium shadow-md border border-gray-800 hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center text-sm"
      style={{ minWidth: "44px" }}
      aria-label="GitHub"
    >
      <Github className="w-5 h-5 text-green-500" />
    </a>
  );

  return (
    <div className="w-full flex justify-center">
      <nav className="relative flex items-center bg-white/30 backdrop-blur-md border border-gray-200/40 shadow-lg rounded-full px-6 sm:px-8 py-2 w-full max-w-5xl fall-in overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center space-x-6 sm:space-x-3">
            {navItems.map(({ href, icon, label, external, download }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                download={download ? "resume.pdf" : undefined}
                className="group relative p-0.5 sm:p-1 text-gray-600 transition-all duration-300 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 flex items-center justify-center"
                onClick={(e) => handleNavClick(e, href, external, download)}
              >
                <span className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full transition-all duration-300 ease-in-out group-hover:bg-green-100 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-green-200 group-hover:text-green-600 group-hover:scale-110">
                  {icon}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 ease-in-out shadow-lg z-10 hidden sm:block">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <span className="h-6 w-px bg-gray-200 mx-4 hidden sm:inline-block" />
          <div className="ml-2">{githubButton}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
