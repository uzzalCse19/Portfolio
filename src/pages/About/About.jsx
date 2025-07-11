import HeroImg from "@/assets/images/hero2.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Full-Stack Developer & Problem Solver
          <span className="block mt-2 text-xl text-blue-400">Focused on Backend & Real-World Projects</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent bg-gradient-to-b">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block"
                alt="Md. Uzzal - Full Stack Developer"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm <span className="text-white font-medium">Md. Uzzal</span>, a passionate full-stack developer specializing in backend technologies like Python, Django, and Django REST Framework. I’ve completed multiple academic and real-world projects, and I enjoy solving practical problems through code.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-blue-400">•</div>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Competitive Programmer</span> with 300+ problems solved on LeetCode, Codeforces, and CodeChef, helping sharpen my algorithmic thinking and debugging skills.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-blue-400">•</div>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Database Practitioner</span> familiar with MySQL, PostgreSQL, and SQL Server, including writing optimized queries and managing relational schemas.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-blue-400">•</div>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Tools & Platforms</span> — Experienced with Git, GitHub, VS Code, CodeBlocks, Vercel, and Supabase.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <blockquote className="border-l-2 border-blue-500 pl-4 bg-gray-900/50 p-4 rounded-r-lg">
                <p className="text-gray-300 italic">
                  "I believe in solving real-world problems through clean, maintainable code and practical system design. I combine my backend knowledge with a mindset shaped by competitive programming and continuous learning."
                </p>
              </blockquote>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for projects & internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
