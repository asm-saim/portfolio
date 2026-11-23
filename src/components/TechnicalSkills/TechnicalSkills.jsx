import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLock } from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

import { RiRobot2Line, RiBrainLine } from "react-icons/ri";
import Reveal from "../Reveal/Reveal";
import { fadeUp, hoverLift } from "../../motion/variants";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
      ],
    },

    {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "Mongoose",
          icon: <SiMongoose />,
        },
        {
          name: "Better Auth",
          icon: <FaLock />,
        },
      ],
    },

    {
      title: "Tools & Engineering",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "AI-Assisted Coding",
          icon: <RiRobot2Line />,
        },
        {
          name: "AI Mindset & Engineering",
          icon: <RiBrainLine />,
        },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Section Heading */}
      <Reveal variant={fadeUp} className="text-center mb-10">
        <span className="block text-sm font-medium tracking-widest text-blue-400 uppercase mb-2">
          Modern Development Stack
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>

        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-7">
          Comprehensive expertise across a modern development stack, with a focus on building scalable, responsive, and
          maintainable web applications.
        </p>
      </Reveal>

      {/* Skill Cards */}
      <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            whileHover={hoverLift}
            className="h-full rounded-xl border border-white/10 bg-gradient-to-br from-[#0B2F5B]/20 to-[#3B82F6]/10 p-6 transition-[border-color,box-shadow] duration-300 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            {/* Category Title */}
            <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase">{category.title}</h3>

            {/* Skills */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-3 transition-[border-color,background-color] duration-300 hover:border-blue-400/30 hover:bg-blue-400/5"
                >
                  <span className="text-lg text-blue-400 shrink-0">{skill.icon}</span>

                  <span className="text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
};

export default TechnicalSkills;
