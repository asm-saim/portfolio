import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import projects from "../../projects-data/projects-data.json";
import ProjectCard from "../Project-Card/Project-card";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import { fadeUp, hoverLift } from "../../motion/variants";

const featured = projects.slice(0, 3);

const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="featured" aria-labelledby="featured-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal variant={fadeUp} className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          id="featured-title"
          eyebrow="Selected work"
          title="Featured projects"
          description="A few builds that show how I approach product, data, and interface — from marketplace flows to dashboards."
        />

        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-blue-400/40 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          All projects
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <Reveal className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <motion.div key={project.id} variants={fadeUp} whileHover={hoverLift} className="h-full">
            <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
          </motion.div>
        ))}
      </Reveal>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedWork;
