"use client";

import {  useEffect, useState  } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'




const categories = ["React", "JavaScript", "Node.js", "TypeScript"];

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
  // {
  //   id: "./soon",
  //   title: "Sammi School Website",
  //   description: "Online School Website (Next.js): This is a fully functional online school platform built using Next.js, React, and TypeScript.",
  //   image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
  //   technologies: ["TypeScript", "React",  "Node.js", "MongoDB"],
  //   category: "React",
  // },
  {
    id: "https://www.interact.uz/",
    title: t('projecttitle'),
    description: t('projectdescription'),
    image: "/interact.png",
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "MongoDB", "TailwindCss"],
    category: "All",
  },
  {
    id: "https://al-muamalat-three.vercel.app/",
    title:  t('projecttitle2'),
    description: t('projectdescription2'),
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
    technologies: ["React", "TypeScript","JavaScript", "MongoDB", "TailwindCss"],
    category: "JavaScript",
  },
  {
    id: "https://library-beta-weld.vercel.app/",
    title:  t('projecttitle3'),
    description: t('projectdescription3'),
    image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
    technologies: ["React", "TypeScript", "JavaScript", "TailwindCss"],
    category: "React",
  },
];

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory || project.technologies.includes(activeCategory));

  const [isLoading, setIsLoading] = useState(true);
  
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

  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">{t('projectstitle')}</h1>
        <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
      </div>
      
      <div className="flex justify-center mb-8 ml-3 mr-3">
        <div className="flex bg-[#252525] rounded-full p-1.5 shadow-[0_0_10px_rgba(0,0,0)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors   ${
                activeCategory === category
                  ? "bg-[#333] text-white shadow-[0_0_10px_rgba(0,0,0)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group bg-[#252525] rounded-xl overflow-hidden transform hover:scale-105
            transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0)]">
            <div className="relative h-48 overflow-hidden">
              {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 backdrop-blur-sm">
                <Loader2 className="animate-spin text-sky-400 w-10 h-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
              </div>
            )}
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#333] px-2 py-1 rounded text-xs shadow-[0_0_2px_rgba(0,0,0)]">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
              
              
              href={String(project.id).startsWith("http") ? project.id : "/projects/soon"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat bg-left-bottom pb-1 transition-all duration-300 group-hover:bg-[length:100%_2px]"
              >
                {t('viewproject')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}