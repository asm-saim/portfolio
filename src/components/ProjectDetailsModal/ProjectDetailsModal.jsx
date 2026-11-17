import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetailsModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const { name, description, features, technologies, image, liveUrl, githubUrl } = project;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="project-details-title"
    >
      <div className="modal-box max-w-3xl max-h-[90vh] overflow-y-auto p-0 bg-[#0A0F1E] border border-blue-500/40">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="aspect-video w-full object-cover object-top"
          />
          <button
            type="button"
            onClick={() => dialogRef.current.close()}
            aria-label="Close details"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <h3 id="project-details-title" className="text-xl sm:text-2xl font-semibold text-white">
            {name}
          </h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-300">{description}</p>

          <div className="mt-6">
            <h4 className="font-semibold text-blue-400">Features</h4>
            <ul className="mt-2 space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-0.5 text-blue-400">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-blue-400">Tech stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#0B2F5B]/60 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-action">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm rounded-lg border-none bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
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
    </dialog>
  );
};

export default ProjectDetailsModal;
