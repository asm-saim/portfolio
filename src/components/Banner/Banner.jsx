import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerImg from "../../assets/banner.png";
import { EASE, fadeInRight, fadeUp, staggerContainer, tapScale } from "../../motion/variants";

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
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate mx-auto flex min-h-[calc(100svh-3.75rem)] max-w-6xl items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: [0.4, 0.75, 0.4], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]"
        />
        <motion.div
          animate={reduceMotion ? undefined : { opacity: [0.3, 0.6, 0.3], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
      >
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
          >
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [1, 0.35, 1] }}
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
        </div>

        {/* Portrait */}
        <motion.div
          variants={fadeInRight}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0B2F5B]/60 via-[#0A1628] to-[#060B16] shadow-2xl shadow-blue-950/40">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(59,130,246,0.35),transparent_62%)]"
            />

            <div className="relative aspect-[10/11]">
              <img
                src={bannerImg}
                alt="Portrait of A S M Saim"
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 left-0 w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
