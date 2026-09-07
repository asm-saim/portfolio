import React from "react";
import { FaGithub } from "react-icons/fa";

const skills = {
  Frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  "Backend & Database": ["Node.js", "Express.js", "MongoDB", "Mongoose", "Better Auth"],
  "Tools & Engineering": ["Git", "GitHub"],
};

const experience = [
  {
    role: "System Engineer – NOC",
    company: "Bangla Tel Group",
    description:
      "Network and traffic monitoring, troubleshooting, link verification, and telecom infrastructure operations.",
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "International Islamic University Chattogram",
    description:
      "Strong foundation in software development, problem solving, data structures, and computer science principles.",
  },
];

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="about">
      {/* Hook + Narrative + CTA (Dashboard side) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center mb-16">
        {/* Left: Headline + narrative + CTA */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Hi, I'm A S M Saim.</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mt-1">
            I build full-stack applications that bridge solid backend logic with seamless user experiences.
          </h3>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            I build responsive, user-friendly web applications using modern frontend and backend technologies. I focus
            on clean code, scalable architecture, responsive interfaces, and practical solutions through continuous
            learning and problem-solving.
          </p>

          <div className="mt-6 flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="http://localhost:5173/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
            >
              View Resume
            </a>
            <a
              href="http://localhost:5173/resume.pdf"
              download
              className="btn btn-sm md:btn-md rounded-lg border border-blue-400 text-blue-400 bg-transparent transition-all duration-300 ease-out hover:bg-blue-400 hover:text-white"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/asm-saim"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm md:btn-md rounded-lg border border-gray-600 text-gray-300 bg-transparent transition-all duration-300 ease-out hover:border-blue-400 hover:text-blue-400"
            >
              <FaGithub className="text-lg" />
              View GitHub
            </a>
          </div>
        </div>

        {/* Right: Terminal-style identity card (the "Engine") */}
        <div className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/30 to-transparent p-6 font-mono text-sm order-1 lg:order-2">
          <div className="flex gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-400">const</span> developer = {"{"}
          </p>
          <p className="pl-4 text-gray-300">
            name: <span className="text-green-400">'A S M Saim'</span>,
          </p>
          <p className="pl-4 text-gray-300">
            role: <span className="text-green-400">'Full Stack Developer'</span>,
          </p>
          <p className="pl-4 text-gray-300">
            status: <span className="text-green-400">'Open to Work'</span>,
          </p>
          <p className="pl-4 text-gray-300">
            stack: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>,{" "}
            <span className="text-green-400">'MongoDB'</span>],
          </p>
          <p className="text-gray-400">{"}"}</p>
        </div>
      </div>

      {/* Toolkit grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/20 to-transparent p-5"
            >
              <h4 className="text-blue-400 font-semibold mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#0B2F5B]/60 text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Experience</h3>
        <div className="space-y-6">
          {experience.map(({ role, company, description }) => (
            <div
              key={role}
              className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/20 to-transparent p-5"
            >
              <h4 className="text-lg font-semibold">{role}</h4>
              <p className="text-blue-400 text-sm mb-2">{company}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Education</h3>
        <div className="space-y-6">
          {education.map(({ degree, institute, description }) => (
            <div
              key={degree}
              className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/20 to-transparent p-5"
            >
              <h4 className="text-lg font-semibold">{degree}</h4>
              <p className="text-blue-400 text-sm mb-2">{institute}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
