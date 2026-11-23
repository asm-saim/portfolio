import { motion } from "framer-motion";
import bannerImg from "../../assets/banner.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EASE, fadeIn, fadeUp, staggerContainer, tapScale } from "../../motion/variants";

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
    <div className="min-h-screen flex items-center pt-20">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-6 text-center lg:text-left w-full"
      >
        {/* Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm Saim.
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold leading-tight mt-1"
          >
            <span className="text-blue-400">Full Stack Developer</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-300 max-w-md sm:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-base leading-relaxed"
          >
            Specializing in full-stack development and scalable solutions that drive business growth — turning ideas
            into seamless, user-friendly digital experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-row gap-4 sm:gap-6 justify-center lg:justify-start w-full"
          >
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
              >
                <Icon className="text-lg" />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Image with glow */}
        <div className="flex-1 relative flex justify-center items-center">
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.8, ease: EASE }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[200px] rounded-full bg-gradient-to-br from-[#0B2F5B] via-[#3B82F6] to-cyan-400 blur-[120px] opacity-40"
            aria-hidden="true"
          />
          <motion.img
            variants={fadeUp}
            src={bannerImg}
            alt="Saim - Full Stack Developer"
            loading="eager"
            className="relative z-10 mt-6 lg:mt-11 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:h-[81vh] object-contain"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Banner;
