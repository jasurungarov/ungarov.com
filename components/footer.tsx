"use client"

import { useTheme } from 'next-themes';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  if (!mounted) {
    return null;
  }

  return (
      <div className="md:hidden">
  <div className="fixed z-10 m-5 bg-[#1a1a1a] bottom-0.5 rounded-2xl p-1.5 shadow-[0_0_10px_rgba(255,0,0,0.3)] overflow-x-auto no-scrollbar">
    <div className="flex justify-around">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            pathname === item.path
              ? "bg-[#252525] text-white"
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
