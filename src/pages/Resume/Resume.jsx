import { motion } from "framer-motion";
import PageMeta from "../../components/PageMeta/PageMeta";
import Reveal from "../../components/Reveal/Reveal";
import { fadeUp, hoverLift, tapScale } from "../../motion/variants";
import {
  FaDownload,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPhoneAlt,
  FaLinkedin,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { ImMail4 } from "react-icons/im";

const Resume = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "Better Auth", icon: <FaLock /> },
      ],
    },
    {
      title: "Tools & Engineering",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <>
      <PageMeta
        title="Resume | A S M Saim"
        description="View the resume of A S M Saim, a Full Stack Web Developer skilled in React, JavaScript, TypeScript, Node.js, MongoDB, and modern web technologies."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pt-24 md:pt-24 lg:pt-24">
        {/* Header */}
        <Reveal variant={fadeUp} className="text-center mb-8">
          <span className="block text-3xl text-center font-bold tracking-widest text-blue-400 uppercase mb-1">
            My Resume
          </span>

          <p className="mt-1 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-7 italic">
            A quick overview of my technical skills, experience, education, and development journey.
          </p>
        </Reveal>

        {/* Resume Card */}
        <Reveal className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-[#0B2F5B]/20 to-[#3B82F6]/10 p-6 sm:p-8">
          {/* Intro */}
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">A S M Saim</h2>

            <p className="mt-2 text-blue-400 font-medium">Full Stack Developer</p>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
              I build responsive, user-friendly web applications using modern frontend and backend technologies. I focus
              on clean code, scalable architecture, responsive interfaces, and practical solutions through continuous
              learning and problem-solving.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={hoverLift}
              whileTap={tapScale}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Resume
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={hoverLift}
              whileTap={tapScale}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-[border-color,color,box-shadow] duration-300 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="my-8 border-t border-white/10"></div>

          {/* Highlights */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Technical Skills */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">Technical Skills</h3>

              <div className="mt-4 space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">{category.title}</h4>

                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-2 text-sm text-gray-300 min-w-0">
                          <span className="text-blue-400 text-base shrink-0">{skill.icon}</span>

                          <span className="truncate">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">Experience</h3>

              <div className="mt-4">
                <h4 className="font-semibold text-white">System Engineer – NOC</h4>

                <p className="mt-1 text-sm text-gray-400">Bangla Tel Group</p>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Network and traffic monitoring, troubleshooting, link verification, and telecom infrastructure
                  operations.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">Education</h3>

              <div className="mt-4">
                <h4 className="font-semibold text-white">B.Sc. in Computer Science & Engineering</h4>

                <p className="mt-1 text-sm text-gray-400">International Islamic University Chattogram</p>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Strong foundation in software development, problem solving, data structures, and computer science
                  principles.
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal className="my-14 pt-4 text-center">
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold text-white">
            Interested in working together?
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-2 text-sm text-gray-400">
            Feel free to get in touch with me.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-3">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/asmsaim/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-[border-color,color] duration-300 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FaLinkedin />
              LinkedIn
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:saim777m@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-[border-color,color] duration-300 hover:border-blue-400/40 hover:text-blue-400"
            >
              <ImMail4 />
              saim777m@gmail.com
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+8801768692766"
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-[border-color,color] duration-300 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FaPhoneAlt className="text-xs" />
              +880 1768-692766
            </motion.a>
          </motion.div>
        </Reveal>
      </section>
    </>
  );
};

export default Resume;
