import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { EASE, fadeUp, tapScale } from "../../motion/variants";

const ContactCTA = ({ className = "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" }) => (
  <motion.section
    aria-labelledby="contact-title"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    className={className}
  >
    <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#0B2F5B]/50 via-[#0A1628] to-[#3B82F6]/10 p-6 sm:p-10">
      <div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Let's work together</p>

        <h2 id="contact-title" className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Open to full-stack and software engineering roles.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
          I'm based in Dhaka and open to on-site, hybrid, and remote opportunities. The fastest way to reach me is email.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.a
            href="mailto:saim777m@gmail.com?subject=Let's Connect"
            whileHover={{ y: -2 }}
            whileTap={tapScale}
            transition={{ duration: 0.2, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaEnvelope className="text-sm" />
            Email me
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={tapScale}
            transition={{ duration: 0.2, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaDownload className="text-sm" />
            Download CV
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/asmsaim/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={tapScale}
            transition={{ duration: 0.2, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-300 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  </motion.section>
);

export default ContactCTA;
