"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "./soon",
    title: "Sammi School Website",
    description: "Online School Website (Next.js): This is a fully functional online school platform built using Next.js, React, and TypeScript.",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
    technologies: ["TypeScript", "React",  "Node.js", "MongoDB"],
    category: "React",
  },
  {
    id: "https://www.interact.uz/",
    title: "InTeract Web Platform",
    description: "InTeract is a next-generation real-time chat platform built with Next.js and MongoDB by Jasur Ungarov. Designed for speed, reliability, and seamless communication across the web.",
    image: "/interact.png",
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "MongoDB", "TailwindCss"],
    category: "All",
  },
  {
    id: "https://al-muamalat-three.vercel.app/",
    title: "Al-Muamalat",
    description: "A platform focused on Islamic finance, education, international collaboration, and Shariah compliance. The clean design organizes services into clear sections, making it easy for users to navigate and access key offerings.",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
    technologies: ["React", "TypeScript","JavaScript", "MongoDB", "TailwindCss"],
    category: "JavaScript",
  },
  {
    id: "https://library-beta-weld.vercel.app/",
    title: "Virtual Library",
    description: "A digital library dedicated to bringing literature to readers everywhere. Our curated collection covers multiple genres and topics, providing knowledge at your fingertips.",
    image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
    technologies: ["React", "TypeScript", "JavaScript", "TailwindCss"],
    category: "React",
  },
];


const categories = ["React", "JavaScript", "Node.js", "TypeScript"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory || project.technologies.includes(activeCategory));

  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
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
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}