"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "SpeedFix Plumbing Website",
    description: "At SpeedFix Plumbing, we don't just solve problems — we redefine what it means to feel safe at home.",
    image: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["JavaScript", "React", "Scss"],
    category: "React",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality, user authentication, and payment integration.",
    image: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "All",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productive task management application with drag-and-drop functionality and team collaboration features.",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather application with forecast data, location search, and interactive maps.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js"],
    category: "React",
  },
];

const categories = ["All", "React", "JavaScript", "Node.js"];

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
      
      <div className="flex justify-center mb-8">
        <div className="flex bg-[#252525] rounded-full p-1.5 shadow-[0_0_10px_rgba(0,0,0)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors  ${
                activeCategory === category
                  ? "bg-[#333] text-white"
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
          <div key={project.id} className="group bg-[#252525] rounded-xl overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0)]">
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
                  <span key={tech} className="bg-[#333] px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                href={`/projects/${project.id}`} 
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