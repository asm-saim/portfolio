import { useState } from "react";
import projects from "../../projects-data/projects-data.json";
import ProjectCard from "../../components/Project-Card/Project-card";
import ProjectDetailsModal from "../../components/ProjectDetailsModal/ProjectDetailsModal";
import PageMeta from "../../components/PageMeta/PageMeta";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <PageMeta
        title="Projects | A S M Saim"
        description="Explore projects built by A S M Saim, a Full Stack Web Developer, showcasing real-world applications using React, JavaScript, TypeScript, Node.js, and MongoDB."
      />

      <section className="max-w-6xl mx-auto px-4 pb-16 pt-24 md:pt-28 lg:pt-24" id="projects">
        <div className="text-center mb-7">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            <span className="text-blue-400">{"<"}</span>
            Projects
            <span className="text-blue-400">{" />"}</span>
          </h2>
          <p className="mt-1 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A few things I've built while learning, experimenting, and solving real problems with code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </>
  );
};

export default Projects;
