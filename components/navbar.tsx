"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Globe, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "About", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Projects", path: "/projects" },
    // { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center">
      <div className="hidden md:flex bg-[#1a1a1a] rounded-full p-1.5 shadow-[0_0_10px_rgba(255,0,0,0.3)]">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-4 py-2 rounded-full text-sm ${
              pathname === item.path
                ? "bg-[#252525] text-white"
                : "text-gray-400 hover:text-white transition-colors"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      <div className="flex gap-2">

        {/* Mode toggle */}
        {/* <button
          className="bg-[#1a1a1a] p-2 rounded-lg shadow-[0_0_5px_rgba(255,0,0,0.3)]"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button> */}

        <div className="relative group ml-12">
          <button className="bg-[#1a1a1a] p-2 rounded-lg flex items-center gap-1 shadow-[0_0_5px_rgba(255,0,0,0.3)]">
            <Globe size={18} />
            <span className="text-sm">{language.toUpperCase()}</span>
          </button>
          <div className="absolute right-0 mt-2 py-2 w-24 bg-[#1a1a1a] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-[#252525] transition-colors ${
                  language === lang.code ? "text-white" : "text-gray-400"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;