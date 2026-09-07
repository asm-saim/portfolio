import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { name, description, features, technologies, image, liveUrl, githubUrl } = project;

  return (
    <div className="rounded-xl border border-blue-500/40 bg-[#0A0F1E] overflow-hidden flex flex-col transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
      {/* Project image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>

        <p className="mt-1.5 text-gray-300 text-sm leading-snug line-clamp-2">{description}</p>

        {/* Features */}
        {features?.length > 0 && (
          <ul className="mt-2 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="text-gray-400 text-xs flex items-start gap-1.5">
                <span className="text-blue-400 mt-0.5">▹</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-[#0B2F5B]/60 text-blue-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-3 flex gap-3 pt-3 border-t border-blue-500/30">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-xs sm:btn-sm border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Site
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-xs sm:btn-sm rounded-lg border border-gray-600 text-gray-300 bg-transparent transition-all duration-300 ease-out hover:border-blue-400 hover:text-blue-400"
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
