"use client"

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Footer = () => {
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

  if (!mounted) {
    return null;
  }

  return (
<div className="md:hidden">
  <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-10 w-[95%] bg-[#1a1a1a] rounded-2xl p-2 shadow-[0_0_20px_rgba(255,0,0,0.3)] overflow-x-auto no-scrollbar">
    <div className="flex justify-around">
      {navItems.map((item) => (
        <Link
  key={item.path}
  href={item.path}
  className={`px-4 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap ${
    pathname === item.path
      ? "bg-[#252525] text-white shadow"
      : "text-gray-400 hover:text-white transition-colors"
  }`}
>
  {item.label}
</Link>

      ))}
    </div>
  </div>
</div>

  )
}

export default Footer;
