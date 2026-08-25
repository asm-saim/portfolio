import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-blue-400/30 bg-[#3B82F6]/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[380px]">

        {/* Project Content */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">

          <h3 className="text-2xl font-semibold text-white">
            {project.name}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-6">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FaGithub />
              GitHub
            </a>

          </div>
        </div>

        {/* Project Image */}
        <div className="relative min-h-[260px] md:h-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;