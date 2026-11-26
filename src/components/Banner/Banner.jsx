import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerImg from "../../assets/banner.png";
import { EASE, fadeUp, staggerContainer, tapScale } from "../../motion/variants";

const socialLinks = [
  {
    href: "https://github.com/asm-saim",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/asmsaim/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

const Banner = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl items-center px-4 pb-16 pt-24 sm:px-6 lg:pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
      >
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
          >
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            Available for full-stack roles
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl"
          >
            I build fast, accessible{" "}
            <span className="text-blue-400">
              <span className="whitespace-nowrap">full-stack</span> web apps.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-pretty text-sm leading-7 text-gray-300 sm:text-base">
            I'm <span className="font-medium text-white">A S M Saim</span>, a full-stack developer in Dhaka, Bangladesh.
            I take products from interface to API to deployment with React, Next.js, Node.js, and MongoDB.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={tapScale} transition={{ duration: 0.2, ease: EASE }}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-950/30 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                View projects
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={tapScale}
              transition={{ duration: 0.2, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FaDownload className="text-sm" />
              Download CV
            </motion.a>

            <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />

            {socialLinks.map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                transition={{ duration: 0.2, ease: EASE }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors duration-300 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 lg:justify-start"
          >
            <span>Currently System Engineer (NOC) at Bangla Tel Group</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-gray-700 sm:block" />
            <span>B.Sc. CSE, IIUC</span>
          </motion.p>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] xl:max-w-[420px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/25 via-cyan-400/10 to-transparent blur-2xl"
          />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0B2F5B]/60 via-[#0A1628] to-[#060B16] shadow-2xl shadow-blue-950/40">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(59,130,246,0.35),transparent_62%)]"
            />

            <div className="relative aspect-[4/5]">
              <img
                src={bannerImg}
                alt="Portrait of A S M Saim"
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 left-1/2 w-[132%] max-w-none -translate-x-1/2 object-contain"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060B16] to-transparent"
              />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">A S M Saim</p>
                  <p className="text-[11px] text-gray-400">Full-stack developer</p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300 backdrop-blur-md">
                  Dhaka, BD
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-10 hidden rounded-xl border border-white/10 bg-[#0A0F1E]/90 px-3 py-2 text-[11px] font-medium text-gray-300 shadow-lg backdrop-blur-md sm:block">
            React · Next.js
          </div>
          <div className="absolute -right-3 bottom-24 hidden rounded-xl border border-white/10 bg-[#0A0F1E]/90 px-3 py-2 text-[11px] font-medium text-gray-300 shadow-lg backdrop-blur-md sm:block">
            Node · MongoDB
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
