"use client"

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Footer = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");

   useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const navItems = [
    { label: t("about"), path: "/" },
    { label: t("resume"), path: "/resume" },
    { label: t("projects"), path: "/projects" },
    { label: t("contact"), path: "/contact" },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
  ];

  if (!mounted) return null;

        return (
        <div className="md:hidden flex justify-between items-center">
          <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-10 w-[95%] bg-card rounded-2xl p-2 overflow-x-auto no-scrollbar">
            <div className="flex justify-around ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-full text-sm ${
                  pathname === item.path
                  ? "bg-popover text-white shadow-[0_0_10px_rgba(0,0,0)]"
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
