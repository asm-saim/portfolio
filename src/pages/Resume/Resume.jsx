import React from "react";
import PageMeta from "../../components/PageMeta/PageMeta";
import {
  FaDownload,
  FaExternalLinkAlt,
  FaReact,
  FaJs,
  FaGithub,
} from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <PageMeta
        title="Resume | A S M Saim"
        description="View the resume of A S M Saim, a React Developer skilled in React, JavaScript, Tailwind CSS, and modern web technologies."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">

        {/* Header */}
        <div className="text-center mb-10">

        <span className="block text-3xl text-center font-bold tracking-widest text-blue-400 uppercase mb-1">
          My Resume
        </span>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-7">
            A quick overview of my technical skills, experience, education,
            and development journey.
          </p>
        </div>

        {/* Resume Card */}
        <div className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-[#0B2F5B]/20 to-[#3B82F6]/10 p-6 sm:p-8">

          {/* Intro */}
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              A S M Saim
            </h2>

            <p className="mt-2 text-blue-400 font-medium">
              React Developer
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
              I build responsive, user-friendly web applications using React,
              JavaScript, and modern front-end technologies. I focus on clean
              code, responsive interfaces, and creating practical solutions
              through continuous learning and problem solving.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/10"></div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Skills */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">
                Technical Skills
              </h3>

              <div className="mt-4 space-y-3 text-sm text-gray-300">

                <div className="flex items-center gap-3">
                  <FaReact className="text-blue-400" />
                  <span>React</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaJs className="text-blue-400" />
                  <span>JavaScript</span>
                </div>

                <p>Tailwind CSS</p>
                <p>React Router</p>
                <p>Git & GitHub</p>
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">
                Experience
              </h3>

              <div className="mt-4">
                <h4 className="font-semibold text-white">
                  System Engineer – NOC
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Bangla Tel Group
                </p>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Network and traffic monitoring, troubleshooting, link
                  verification, and telecom infrastructure operations.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">
                Education
              </h3>

              <div className="mt-4">
                <h4 className="font-semibold text-white">
                  B.Sc. in Computer Science & Engineering
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  International Islamic University Chattogram
                </p>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Strong foundation in software development, problem solving,
                  data structures, and computer science principles.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Interested in working together?
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Feel free to connect with me or explore my projects.
          </p>

          <div className="mt-5 flex justify-center">
            <a
              href="https://github.com/asm-saim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

      </section>
    </>
  );
};

export default Resume;