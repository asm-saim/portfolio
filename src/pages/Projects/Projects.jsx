import React from "react";
import projects from "../../projects-data/projects-data.json";
import ProjectCard from "../../components/Project-Card/Project-card";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16  "id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-blue-400">{"<"}</span>
          Projects
          <span className="text-blue-400">{" />"}</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          A few things I've built while learning, experimenting, and solving
          real problems with code.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;