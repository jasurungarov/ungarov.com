"use client";

import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false); 
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return (
        <div className="flex flex-col justify-center items-center h-screen rounded-2xl">
          <Loader2 className="animate-spin text-sky-500 w-12 h-12 mb-4 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
          <span className="text-sm text-gray-400 tracking-widest uppercase animate-pulse">
            {t('loading')}
          </span>
        </div>
      );
    }
    
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

  return (
    <div className="p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">{t('viewresume')}</h1>
          <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="hidden md:flex">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-primary hover:bg-primary/80 transition-colors px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,0,0)]  overflow-hidden"
          >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                <span>{t('downloadresume')}</span>
          </button>
        </div>

        <div className="md:hidden">
        <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-primary hover:bg-primary/80 transition-colors px-2 py-2 text-xs rounded-full shadow-[0_0_10px_rgba(0,0,0)]"
          >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                <span>{t('downloadresume')}</span>
          </button>
        </div>
      </div>
      
      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg>
            <h2 className="text-2xl font-bold">{t('education')}</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
              <h3 className="text-xl font-bold">{t('educationplace')}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>{t('educationdate')}</span>
              </div>
              <p className="text-gray-300">{t('educationdescription')}</p>
            </div>
            
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="text-xl font-bold">{t('educationplace2')}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>{t('educationdate2')}</span>
                {/* <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs"></span> */}
              </div>
              <p className="text-gray-300">{t('educationdescription2')}</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
            </svg>
            <h2 className="text-2xl font-bold">{t('experience')}</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <h3 className="text-xl font-bold">{t('freelance')}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>{t('freelancedate')}</span>
                {/* <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">1yr</span> */}
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>{t('internship')}</li>
                <li>{t('internship2')}</li>
                <li>{t('internship3')}</li>
                <li>{t('internship4')}</li>
              </ul>
            </div>
            
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-amber-500"></div>
              <h3 className="text-xl font-bold">{t('webdegree')}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>{t('webdegreedate')}</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">{t('webdegreetime')}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>{t('internship5')}</li>
                <li>{t('internship6')}</li>
                <li>{t('internship7')}</li>
                <li>{t('internship8')}</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
            </svg>
            <h2 className="text-2xl font-bold">{t('skills')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-3">{t('programinglanguage')}</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java"].map((skill) => (
                  <span key={skill} className="bg-primary px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-3 mt-6">{t('frameworks')}</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Node.js", "Tailwind CSS", "Redux", "VeuJs"].map((skill) => (
                  <span key={skill} className="bg-primary px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-3">{t('tools')}</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Vercel", "Netlify"].map((skill) => (
                  <span key={skill} className="bg-primary px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-3 mt-6">{t('databases')}</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "Firebase"].map((skill) => (
                  <span key={skill} className="bg-primary px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}