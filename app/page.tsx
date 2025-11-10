import { MessageSquareCode, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
        </div>
        

        <div className="space-y-4 text-gray-300">
          <p>
            I`m a passionate software engineer originally from Uzbekistan, currently based in Bishkek,
            KG. I specialize in crafting modern, responsive, and user-friendly web applications using the
            latest technologies like React.js, Tailwind CSS, and JavaScript.
            From the moment I discovered programming, I knew it was more than just code — it was a way to solve real-world
            problems creatively and efficiently. I`m constantly learning and exploring new tools and
            techniques to build digital experiences that are both functional and beautifully
            designed.
            Whether it`s developing full-stack web apps, designing portfolios, or helping
            businesses grow online — I approach every project with attention to detail and a strong
            focus on user experience.
            </p>
            <p>
            In addition to coding, I`m interested in marketing, entrepreneurship, and building tools that
            make life easier. My mission is simple: 
            <span className="text-emerald-500"> turn creative ideas into impactful digital products.</span>
          </p>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold">What I`m Doing</h2>
            <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#252525] p-6 rounded-2xl shadow-[0_0_10px_rgba(0,0,0)]">
              <div className="text-5xl text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400">Building modern web applications with React, Next.js, and other cutting-edge technologies.</p>
            </div>
            
            <div className="bg-[#252525] p-6 rounded-2xl shadow-[0_0_10px_rgba(0,0,0)]">
              <div className="text-5xl text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">API Development</h3>
              <p className="text-gray-400">Creating robust and scalable APIs using Node.js, Express, and modern backend technologies.</p>
            </div>
            
            <div className="bg-[#252525] p-6 rounded-2xl shadow-[0_0_10px_rgba(0,0,0)]">
              <div className="text-5xl text-white mb-4">
                <Search width={40} height={40}/>
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
              <p className="text-gray-400">I optimize websites for better search engine visibility by improving structure, content, speed, and accessibility to help them rank higher on Google.</p>
            </div>
            
            <div className="bg-[#252525] p-6 rounded-2xl shadow-[0_0_10px_rgba(0,0,0)]">
              <div className="text-5xl text-white mb-4">
                <MessageSquareCode width={50} height={50}/>
              </div>
              <h3 className="text-xl font-bold mb-2">Blog Management</h3>
              <p className="text-gray-400">I write useful and engaging blog posts on various topics, maintaining interactive communication with my audience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}