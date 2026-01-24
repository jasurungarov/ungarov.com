"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Loader2 } from "lucide-react";
import { FaRegHandPointLeft } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  
    const handleDownload = () => {
    const url = "/jasur_ungarov-cv.pdf";

    // Faylni yuklab olish
    const link = document.createElement("a");
    link.href = url;
    link.download = "jasur_ungarov-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Faylni yangi oynada ochish
    window.open(url, "_blank");
  };

  if (!mounted) {
    return null;
  }
  
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 bg-card p-2 rounded-md ">
            <Menu size={24} />
          </button>
          <div className='fixed top-4 left-16 z-50 p-2 rounded-8xl animate-pulse'>
        <h3 className="flex items-center gap-1 rounded-xl bg-emerald-900 text-base px-2 py-0">
          <FaRegHandPointLeft size={13} />
          {t('imhere')}
        </h3>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm">
          <div className="bg-card h-full w-full md:w-[300px] p-6 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-popover p-2 rounded-md"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-2">
                <div className="rounded-md overflow-hidden border-2 border-gray-700">
                  <Image 
                    src="/photo_2025-05-06_08-15-39.jpg" 
                    alt="Profile Picture" 
                    width={160} 
                    height={160} 
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-emerald-600 text-xs text-white px-2 py-1 rounded-full">
                  {t('opentowork')}
                </div>
              </div>
              <h1 className="text-xl font-bold mt-2">{t('Name')}</h1>
              <div className="bg-primary text-sm px-4 py-1 rounded-full mt-2">
                {t('softwareengineer')}
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-primary hover:bg-primary/80 transition-colors px-4 py-2 rounded-md mt-4 text-sm"
              >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    <span>{t('downloadresume')}</span>
              </button>
            </div>
            
            <div className="border-t border-gray-700 my-6"></div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{t('email')}</p>
                  <p className="text-sm">jasurungarov17@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{t('contactmephone')}</p>
                  <p className="text-sm">+996 707 067 776</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{t('location')}</p>
                  <p className="text-sm">{t('locationvalue')}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-6"></div>
            
            <div className="flex justify-center gap-3">
              <Link href="https://github.com/jasurungarov" className="bg-primary p-2 rounded hover:bg-primary/80 transition-all">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com/jasurungarov" className="bg-primary p-2 rounded hover:bg-primary/80 transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="https://t.me/aliabdulwah1d" className="bg-primary p-2 rounded hover:bg-primary/80 transition-all">
                <Send size={20} />
              </Link>
              <Link href="https://wa.me/996707067776" className="bg-primary p-2 rounded hover:bg-primary/80 transition-all">
                <MessageCircle size={20} />
              </Link>
            </div>
            
            <div className="border-t border-gray-700 my-6"></div>
            
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="bg-popover px-4 py-2 rounded-md hover:bg-popover/80 transition-colors"
              >
                {t('about')}
              </Link>
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="bg-popover px-4 py-2 rounded-md hover:bg-popover/80 transition-colors"
              >
                {t('resume')}
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="bg-popover px-4 py-2 rounded-md hover:bg-popover/80 transition-colors"
              >
                {t('projects')}
              </Link>
              {/* <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="bg-[#252525] px-4 py-2 rounded-md hover:bg-[#333] transition-colors"
              >
                Blog
              </Link> */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-popover px-4 py-2 rounded-md hover:bg-popover/80 transition-colors"
              >
                {t('contact')}
              </Link>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
  );
}