import { motion } from "framer-motion";
import projects from "../../projects-data/projects-data.json";
import Reveal from "../Reveal/Reveal";
import { fadeUp } from "../../motion/variants";

const facts = [
  { value: String(projects.length), label: "Projects built" },
  { value: "Feb 2024", label: "System Engineer · NOC" },
  { value: "B.Sc.", label: "CSE · IIUC" },
  { value: "Dhaka", label: "Bangladesh" },
];

const Stats = () => {
  return (
    <section aria-label="Quick facts" className="border-y border-white/10 bg-white/[0.02]">
      <Reveal
        variant={fadeUp}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/10 lg:py-8"
      >
        {facts.map(({ value, label }) => (
          <motion.div key={label} variants={fadeUp} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{value}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">{label}</p>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
};

export default Stats;
