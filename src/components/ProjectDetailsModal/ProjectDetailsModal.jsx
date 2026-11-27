import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { EASE } from "../../motion/variants";
import { freezeScroll } from "../../motion/scroll";

const ProjectDetailsModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const { name, description, features, technologies, image, liveUrl, githubUrl } = project;

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    freezeScroll();

    // A native `dialog` blocks interaction but not page scrolling, and Lenis
    // drives wheel scrolling. Swallow scroll input aimed at the page while the
    // modal owns the viewport; the modal box keeps scrolling natively through
    // `data-lenis-prevent`. Locking with `overflow` would remove the scrollbar
    // and shift the layout.
    const isInsideScroller = (target) =>
      target instanceof Element && Boolean(target.closest("[data-lenis-prevent]"));

    const blockWheel = (event) => {
      // Keep browser zoom (ctrl + wheel) working.
      if (event.ctrlKey || isInsideScroller(event.target)) return;
      event.preventDefault();
      event.stopPropagation();
    };

    const blockTouch = (event) => {
      // Keep pinch zoom working.
      if (event.touches.length > 1 || isInsideScroller(event.target)) return;
      event.preventDefault();
    };

    const scrollKeys = new Set([
      " ",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      "ArrowUp",
      "ArrowDown",
    ]);

    const blockKeys = (event) => {
      if (!scrollKeys.has(event.key) || isInsideScroller(event.target)) return;
      event.preventDefault();
    };

    document.addEventListener("wheel", blockWheel, { capture: true, passive: false });
    document.addEventListener("touchmove", blockTouch, { capture: true, passive: false });
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("wheel", blockWheel, { capture: true });
      document.removeEventListener("touchmove", blockTouch, { capture: true });
      document.removeEventListener("keydown", blockKeys);
      // Removing the dialog from the DOM closes it; calling close() here would
      // hide it before AnimatePresence can finish the exit animation.
    };
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <motion.dialog
      ref={dialogRef}
      className="modal"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: EASE }}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="project-details-title"
    >
      <div
        className="modal-box max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain p-0 bg-[#0A0F1E] border border-blue-500/40"
        data-lenis-prevent
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="aspect-video w-full object-cover object-top"
          />
          <button
            type="button"
            onClick={onClose}
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
              className="btn btn-sm rounded-lg border-none bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Site
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm rounded-lg border border-gray-600 text-gray-300 bg-transparent transition-colors duration-300 ease-out hover:border-blue-400 hover:text-blue-400"
            >
              <FaGithub className="text-sm" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.dialog>
  );
};

export default ProjectDetailsModal;
