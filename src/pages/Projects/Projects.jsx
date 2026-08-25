import React from "react";
import PageMeta from "../../components/PageMeta/PageMeta";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <PageMeta
        title="Projects | A S M Saim"
        description="Explore projects built by A S M Saim using React, JavaScript, Tailwind CSS, and other modern web technologies."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Section Header */}
        <span className="block text-3xl text-center font-bold tracking-widest text-blue-400 uppercase mb-1">
          Featured Projects
        </span>

        <p className="mb-10 text-center text-gray-300 italic text-sm md:text-base leading-7">
          A selection of projects I've built using modern web technologies,
          with a focus on clean design, responsive interfaces, and practical
          solutions.
        </p>

        <div className="space-y-8">

          {/* ================= Simplico ================= */}

          <div className="group overflow-hidden rounded-xl border border-blue-400/30 bg-[#3B82F6]/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[380px]">

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white">
                  Simplico
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-6">
                  A modern and responsive React application that showcases
                  popular mobile applications in an App Store-style interface.
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Search and explore popular mobile applications.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    View detailed information for individual applications.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Install and manage applications with interactive charts.
                  </li>
                </ul>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    React
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    JavaScript
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    React Router
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    Tailwind CSS
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    Recharts
                  </span>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://simplico-v1.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/asm-saim/simplico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-blue-400/40 hover:text-blue-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[260px] md:h-full overflow-hidden">
                <img
                  src="/projects-img/simplico-home.png"
                  alt="Simplico project preview"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ================= Customer Support Zone ================= */}

          <div className="group overflow-hidden rounded-xl border border-blue-400/30 bg-[#3B82F6]/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[380px]">

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white">
                  Customer Support Zone
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-6">
                  A responsive React application for managing customer support
                  tickets through an interactive workflow.
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Manage and assign customer support tickets.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Track in-progress and resolved tickets in real time.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    Complete tasks with duplicate-assignment prevention.
                  </li>
                </ul>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    React
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    JavaScript
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    Tailwind CSS
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    DaisyUI
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    React Toastify
                  </span>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://project-customer-support-zone.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/asm-saim/customer-support-zone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-blue-400/40 hover:text-blue-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[260px] md:h-full overflow-hidden">
                <img
                  src="/projects-img/customer-support-zone.png"
                  alt="Customer Support Zone project preview"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;