"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Let's chat over a cup of tea: Who am I?",
    excerpt: "A sincere introduction about myself, my studies, my work, and what I'm passionate about....",
    image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "07/04/25",
    views: 43,
    likes: 18,
    category: "Life",
  },
  {
    id: 2,
    title: "Lost to Likes: A Generation Consumed by Reels and Fornication.",
    excerpt: "We cannot stay silent about a generation where harm is normalized and fornication is called a joke....",
    image: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03/05/25",
    views: 5,
    likes: 4,
    category: "Life",
  },
  {
    id: 3,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring upcoming trends and technologies shaping the future of web development...",
    image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "02/28/25",
    views: 92,
    likes: 35,
    category: "Tech",
  },
  {
    id: 4,
    title: "Building Trust in Professional Relationships",
    excerpt: "How to establish and maintain trust in your workplace relationships and career...",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "02/14/25",
    views: 67,
    likes: 21,
    category: "Motiv",
  },
];

const categories = ["All", "Life", "Tech", "Books", "Motiv"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="flex bg-[#252525] rounded-full p-1.5 shadow-[0_0_10px_rgba(0,0,0)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
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
      
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="group bg-[#252525] rounded-xl overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0)]">
            <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/3 md:min-h-[180px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 md:p-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <div className="bg-[#333] px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}