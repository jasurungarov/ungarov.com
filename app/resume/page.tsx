import Link from "next/link"

export default function Resume() {
  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Resume</h1>
          <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="hidden md:flex">
        <Link 
          href="/resume.pdf" 
          className="flex items-center gap-2 bg-[#252525] hover:bg-[#333] transition-colors px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,0,0)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          Download CV
        </Link>
        </div>

        <div className="md:hidden">
        <Link 
          href="/resume.pdf" 
          className="flex items-center gap-2 bg-[#252525] hover:bg-[#333] transition-colors px-2 py-2 text-xs rounded-full shadow-[0_0_10px_rgba(0,0,0)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          Download CV
        </Link>
        </div>
      </div>
      
      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
              <h3 className="text-xl font-bold">Kyrgyz State University named after Ishenaly Arabaev</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>2022 - Present, Complated in 2026</span>
              </div>
              <p className="text-gray-300">
                Pursuing a Bachelor`s degree in Computer Science at Kyrgyz State University named after Ishenaly Arabaev, Bishkek. The
                course covers software engineering, data structures, algorithms, databases, networks, and
                cybersecurity. Emphasis is placed on practical problem solving, real-world application of code, and
                collaborative projects. Currently developing skills in JavaScript, Python, and system design while
                staying up-to-date with the latest trends in modern web technologies.
              </p>
            </div>
            
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="text-xl font-bold">Sammi Academy</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>2023 - 2024</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">1yr</span>
              </div>
              <p className="text-gray-300">
                Completed an intensive program in modern web development and IT fundamentals. Gained hands-on experience by building multiple projects from scratch, collaborating in teams, and mastering front-end technologies. Specialized in React.js and JavaScript development
                while learning best practices for creating responsive and accessible web applications.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
            </svg>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <h3 className="text-xl font-bold">Freelance Web Developer</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed responsive websites for small businesses and entrepreneurs</li>
                <li>Created custom e-commerce solutions with payment integration</li>
                <li>Optimized website performance and SEO for better user experience</li>
                <li>Collaborated with designers to implement visually appealing interfaces</li>
              </ul>
            </div>
            
            {/* <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-amber-500"></div>
              <h3 className="text-xl font-bold">Junior Web Developer</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>2022 - 2023</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">1yr</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Assisted in developing and maintaining client websites using React and Next.js</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                <li>Collaborated with the team on agile development processes</li>
                <li>Gained experience with version control systems and deployment pipelines</li>
              </ul>
            </div> */}
          </div>
        </section>
        
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
            </svg>
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "SQL"].map((skill) => (
                  <span key={skill} className="bg-[#252525] px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-3 mt-6">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Node.js", "Tailwind CSS", "Redux", "GraphQL"].map((skill) => (
                  <span key={skill} className="bg-[#252525] px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Docker", "Figma", "Vercel", "Netlify"].map((skill) => (
                  <span key={skill} className="bg-[#252525] px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-3 mt-6">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "MySQL", "Firebase"].map((skill) => (
                  <span key={skill} className="bg-[#252525] px-3 py-1.5 rounded-md text-sm shadow-[0_0_5px_rgba(0,0,0)]">
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