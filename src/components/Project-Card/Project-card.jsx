import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { name, description, features, technologies, image, liveUrl, githubUrl } = project;

  return (
    <div className="rounded-xl border border-blue-600/40 bg-[#0A0F1E] overflow-hidden flex flex-col transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:-translate-y-1">
      {/* Terminal top bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0B2F5B]/30 border-b border-blue-900/40">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-gray-500 font-mono">
          ~/projects/{name.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      {/* Project image */}
      <div className="relative overflow-hidden border-b border-blue-900/40">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-semibold text-white">{name}</h3>

        <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>

        {/* Features */}
        {features?.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {features.map((feature, idx) => (
              <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1 rounded-full bg-[#0B2F5B]/60 text-blue-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-3 pt-4 border-t border-blue-900/40">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Site
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm rounded-lg border border-gray-600 text-gray-300 bg-transparent transition-all duration-300 ease-out hover:border-blue-400 hover:text-blue-400"
          >
            <FaGithub className="text-sm" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
