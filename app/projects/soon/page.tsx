"use client";
import Link from "next/link"
import { FiArrowLeft, FiCode } from "react-icons/fi"
import { VscCode, VscCodeReview } from "react-icons/vsc"

export default function SoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div 
        className="flex items-center gap-3 mb-6 animate-pulse"
        style={{ textShadow: "0 0 50px rgba(255,0,0,0.3)" }}
      >
        <VscCode size={60} className=" text-white " />
        <h1 className="text-4xl font-bold ">Coming Soon...</h1>
      </div>


      <Link 
        href="/projects" 
        className="flex items-center gap-2 text-lg text-white-600 hover:underline hover:text-blue-500 transition"
        
      >
        <FiArrowLeft size={20} />
        Back to Projects
      </Link>
    </div>
  )
}
