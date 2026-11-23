import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import PageMeta from "../../components/PageMeta/PageMeta";
import Reveal from "../../components/Reveal/Reveal";
import { fadeUp, hoverLift, staggerContainer, tapScale } from "../../motion/variants";

const skills = {
  Frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  "Backend & Database": ["Node.js", "Express.js", "MongoDB", "Mongoose", "Better Auth"],
  "Tools & Engineering": ["Git", "GitHub"],
};

const experience = [
  {
    role: "System Engineer – NOC",
    company: "Bangla Tel Group",
    description:
      "Network and traffic monitoring, troubleshooting, link verification, and telecom infrastructure operations.",
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "International Islamic University Chattogram",
    description:
      "Strong foundation in software development, problem solving, data structures, and computer science principles.",
  },
];

const About = () => {
  return (
    <>
      <PageMeta
        title="About | A S M Saim"
        description="Learn more about A S M Saim, a Full Stack Web Developer skilled in React, JavaScript, TypeScript, Node.js, MongoDB, and modern web technologies."
      />

      <section
        className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 py-16 pt-24 md:pt-28 lg:pt-48"
        id="about"
      >
        {/* Hook + Narrative + CTA (Dashboard side) */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center mb-16">
          {/* Left: Headline + narrative + CTA */}
          <motion.div variants={fadeUp} className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Hi, I'm A S M Saim.</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mt-1">
              I build full-stack applications that bridge solid backend logic with seamless user experiences.
            </h3>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
              I build responsive, user-friendly web applications using modern frontend and backend technologies. I focus
              on clean code, scalable architecture, responsive interfaces, and practical solutions through continuous
              learning and problem-solving.
            </p>

            <div className="mt-6 flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
              >
                View Resume
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                className="btn btn-sm md:btn-md rounded-lg border border-blue-400 text-blue-400 bg-transparent transition-colors duration-300 ease-out hover:bg-blue-400 hover:text-white"
              >
                Download Resume
              </motion.a>
              <motion.a
                href="https://github.com/asm-saim"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                className="btn btn-sm md:btn-md rounded-lg border border-gray-600 text-gray-300 bg-transparent transition-colors duration-300 ease-out hover:border-blue-400 hover:text-blue-400"
              >
                <FaGithub className="text-lg" />
                View GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Terminal-style identity card (the "Engine") */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/30 to-transparent p-6 font-mono text-sm order-1 lg:order-2"
          >
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <motion.p variants={fadeUp} className="text-gray-400">
                <span className="text-blue-400">const</span> developer = {"{"}
              </motion.p>
              <motion.p variants={fadeUp} className="pl-4 text-gray-300">
                name: <span className="text-green-400">'A S M Saim'</span>,
              </motion.p>
              <motion.p variants={fadeUp} className="pl-4 text-gray-300">
                role: <span className="text-green-400">'Full Stack Developer'</span>,
              </motion.p>
              <motion.p variants={fadeUp} className="pl-4 text-gray-300">
                status: <span className="text-green-400">'Open to Work'</span>,
              </motion.p>
              <motion.p variants={fadeUp} className="pl-4 text-gray-300">
                stack: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>
                , <span className="text-green-400">'MongoDB'</span>],
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400">
                {"}"}
              </motion.p>
            </motion.div>
          </motion.div>
        </Reveal>

        {/* Toolkit grid */}
        <Reveal className="mb-12">
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-bold mb-6 text-center lg:text-left pt-8 md:pt-12 lg:pt-16"
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={fadeUp}
                whileHover={hoverLift}
                className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/20 to-transparent p-5 transition-[border-color,box-shadow] duration-300 hover:border-blue-400/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                <h4 className="text-blue-400 font-semibold mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#0B2F5B]/60 text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Experience */}
        <Reveal className="mb-12">
          <motion.h3 variants={fadeUp} className="text-2xl font-bold mb-6 text-center lg:text-left pt-6 md:pt-6 lg:pt-8">
            Experience
          </motion.h3>
          <div className="space-y-6">
            {experience.map(({ role, company, description }) => (
              <motion.div
                key={role}
                variants={fadeUp}
                className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/20 to-transparent p-5"
              >
                <h4 className="text-lg font-semibold">{role}</h4>
                <p className="text-blue-400 text-sm mb-2">{company}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Education */}
        <Reveal>
          <motion.h3 variants={fadeUp} className="text-2xl font-bold mb-6 text-center lg:text-left pt-6 md:pt-6 lg:pt-8">
            Education
          </motion.h3>
          <div className="space-y-6">
            {education.map(({ degree, institute, description }) => (
              <motion.div
                key={degree}
                variants={fadeUp}
                className="rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#0B2F5B]/20 to-transparent p-5"
              >
                <h4 className="text-lg font-semibold">{degree}</h4>
                <p className="text-blue-400 text-sm mb-2">{institute}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default About;
