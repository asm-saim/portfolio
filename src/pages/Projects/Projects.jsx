import React from "react";
import PageMeta from "../../components/PageMeta/PageMeta";
import ProjectCard from "../../components/Project-Card/Project-card";
import projects from "../../../src/projects-data/projects-data.json";

const Projects = () => {
  return (
    <>
      <PageMeta
        title="Projects | A S M Saim"
        description="Explore projects built by A S M Saim using React, JavaScript, Tailwind CSS, and other modern web technologies."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Section Header */}
        <span className="block text-3xl text-center font-bold tracking-widest text-blue-400 uppercase mb-1">
          Featured Projects
        </span>

        <p className="mb-10 text-center text-gray-400 italic text-sm md:text-base leading-7">
          A selection of projects I've built using modern web technologies, with a focus on clean design, responsive
          interfaces, and practical solutions.
        </p>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
