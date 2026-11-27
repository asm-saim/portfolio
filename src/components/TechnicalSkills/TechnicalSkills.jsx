import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import { EASE, chipIn, fadeUp, staggerContainer } from "../../motion/variants";

const stack = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Better Auth"] },
  { label: "Data", items: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL"] },
  { label: "Delivery", items: ["Git", "GitHub", "Docker", "Vercel"] },
];

const TechnicalSkills = () => {
  return (
    <section id="stack" aria-labelledby="stack-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal variant={fadeUp}>
          <SectionHeading
            id="stack-title"
            eyebrow="Toolbox"
            title="The stack I ship with"
            description="A focused set of tools I use end to end — from the component layer to the database and deployment."
          />
        </Reveal>

        <Reveal className="space-y-5">
          {stack.map(({ label, items }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                  {label}
                </span>

                <motion.ul variants={staggerContainer} className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <motion.li
                      key={item}
                      variants={chipIn}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-gray-300 transition-colors duration-300 hover:border-blue-400/40 hover:text-blue-200 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)]"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </Reveal>
      </div>

      <p className="mt-6 text-xs leading-6 text-gray-500">
        Also using Claude, GitHub Copilot, and Cursor for AI-assisted development — reviewed and tested.
      </p>
    </section>
  );
};

export default TechnicalSkills;
