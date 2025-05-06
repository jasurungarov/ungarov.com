"use client";

import { useState } from "react";
import { Github as GitHub, Linkedin, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after some time
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
      </div>
      
      <p className="text-gray-300 mb-8">
        Feel free to reach out to me through any of these channels. I`m always open to new
        opportunities and collaborations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div>
          <div className="bg-[#252525] p-6 rounded-xl mb-6 shadow-[0_0_20px_rgba(0,0,0)]">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#333] p-2 rounded-md">
                  <Send size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>jasurungarov@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#333] p-2 rounded-md">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+996707067776</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#252525] p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0)]">
            <h2 className="text-xl font-bold mb-4">Social Media</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <Link 
                href="https://github.com/jasurungarov" 
                className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors"
              >
                <GitHub size={20} />
                <span>GitHub</span>
              </Link>
              
              <Link 
                href="https://linkedin.com/in/jasurungarov" 
                className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Link>
              
              <Link 
                href="https://t.me/aliabdulwah1d" 
                className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors"
              >
                <Send size={20} />
                <span>Telegram</span>
              </Link>
              
              <Link 
                href="https://wa.me/996707067776" 
                className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-[#252525] p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0)]">
          <h2 className="text-xl font-bold mb-4">Send Message</h2>
          
          {formSubmitted ? (
            <div className="bg-emerald-900/30 border border-emerald-500 text-emerald-300 p-4 rounded-lg animate-pulse">
              Thanks for your message! I`ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#333] border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#333] border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#333] border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  isSubmitting 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-gradient-to-r bg-emerald-500  hover:opacity-90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}