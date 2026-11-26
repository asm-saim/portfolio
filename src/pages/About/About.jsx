import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaRocket,
  FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";
import PageMeta from "../../components/PageMeta/PageMeta";
import aboutPhoto from "../../assets/about-photo.jpeg";
import { EASE, fadeUp, hoverLift, staggerContainer, tapScale } from "../../motion/variants";

const focusAreas = [
  {
    title: "Frontend engineering",
    icon: FaLaptopCode,
    description:
      "Responsive, accessible interfaces in React and Next.js, built from reusable components with Tailwind CSS and real interaction states.",
  },
  {
    title: "Backend & APIs",
    icon: FaServer,
    description:
      "Node.js and Express APIs with authentication, role-based access, server-side validation, and data models in MongoDB and PostgreSQL.",
  },
  {
    title: "Product-minded delivery",
    icon: FaRocket,
    description:
      "Git-based workflows, Docker, and Vercel deployments, with AI-assisted coding used deliberately — reviewed, tested, and documented.",
  },
];

const experience = [
  {
    role: "System Engineer – NOC",
    company: "Bangla Tel Group",
    location: "Dhaka, Bangladesh",
    start: { label: "Feb 2024", dateTime: "2024-02" },
    current: true,
    bullets: [
      "Monitor and troubleshoot telecom network infrastructure across IGW, ITC, IIG, ICX, and ISP operations, analyzing traffic, connectivity, optical power, and system alarms.",
      "Prepare technical reports and coordinate with technical teams to maintain service availability and network reliability.",
    ],
  },
];

const toolbox = [
  { label: "Core languages", items: ["JavaScript (ES6+)", "TypeScript", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "React Router"] },
  { label: "Backend & data", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"] },
  { label: "Tools & delivery", items: ["Git", "GitHub", "Docker", "Vercel", "Postman"] },
];

const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institute: "International Islamic University Chittagong (IIUC)",
  location: "Chittagong, Bangladesh",
  start: { label: "2018", dateTime: "2018" },
  end: { label: "2023", dateTime: "2023" },
  cgpa: "3.34 / 4.00",
};

const SectionHeading = ({ id, eyebrow, title, description }) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p>
    <h2 id={id} className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {title}
    </h2>
    {description ? <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">{description}</p> : null}
  </div>
);

const About = () => {
  return (
    <>
      <PageMeta
        title="About | A S M Saim"
        description="About A S M Saim — a full-stack software engineer in Dhaka, Bangladesh, building web applications with React, Next.js, Node.js, MongoDB, and PostgreSQL."
      />

      {/* Intro */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="relative mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400"
            >
              About me
            </motion.p>

            <motion.h1
              id="about-title"
              variants={fadeUp}
              className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Full-stack developer building{" "}
              <span className="text-blue-400">practical web products.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              I'm A S M Saim, a software engineer based in Dhaka, Bangladesh. I build end-to-end web applications with
              React, Next.js, and Node.js — from accessible interfaces and reusable component systems to secure APIs and
              data models.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              I currently work as a System Engineer (NOC) at Bangla Tel Group, monitoring high-availability telecom
              infrastructure. Outside of that, I design and ship full-stack products with authentication, payments,
              role-based access, and deployment baked in. I'm looking for a product-focused engineering team where I can
              keep growing.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="mailto:saim777m@gmail.com?subject=Let's Connect"
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                transition={{ duration: 0.2, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-950/30 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
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
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300"
              >
                <FaDownload className="text-sm" />
                Download CV
              </motion.a>

              <motion.a
                href="https://github.com/asm-saim"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                transition={{ duration: 0.2, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-300 hover:border-white/25 hover:text-white"
              >
                <FaGithub />
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/asmsaim/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                transition={{ duration: 0.2, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-300 hover:border-white/25 hover:text-white"
              >
                <FaLinkedin />
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Portrait + quick facts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="relative mx-auto w-full max-w-md"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-blue-950/40">
              <img
                src={aboutPhoto}
                alt="Portrait of A S M Saim in graduation attire"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-center lg:aspect-auto lg:h-[clamp(20rem,52vh,34rem)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B16]/85 via-transparent to-transparent"
              />

              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                Open to opportunities
              </span>
            </div>

            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">Based in</dt>
                <dd className="mt-1 text-sm text-gray-200">Dhaka, Bangladesh</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">Current role</dt>
                <dd className="mt-1 text-sm text-gray-200">System Engineer · NOC</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">Education</dt>
                <dd className="mt-1 text-sm text-gray-200">B.Sc. CSE, IIUC</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">Focus</dt>
                <dd className="mt-1 text-sm text-gray-200">Full-stack web apps</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* What I do */}
      <motion.section
        aria-labelledby="focus-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            id="focus-title"
            eyebrow="What I do"
            title="From interface to infrastructure"
            description="I like owning a feature end to end — shaping the interface, designing the data, and making sure it holds up in production."
          />
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-8 grid gap-4 sm:grid-cols-3">
          {focusAreas.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={hoverLift}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-[border-color,box-shadow] duration-300 hover:border-blue-400/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10 text-blue-400">
                <Icon />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience */}
      <motion.section
        aria-labelledby="experience-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've worked" />
        </motion.div>

        <div className="mt-8 border-l border-white/10 pl-6 sm:pl-8">
          {experience.map(({ role, company, location, start, current, bullets }) => (
            <motion.article key={role} variants={fadeUp} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-400 bg-[#0A0F1E] shadow-[0_0_12px_rgba(59,130,246,0.6)] sm:-left-[38px]"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-white">{role}</h3>
                {current ? (
                  <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                    Current
                  </span>
                ) : null}
              </div>

              <p className="mt-1 text-sm text-gray-400">
                {company} · {location}
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-400">
                <time dateTime={start.dateTime}>{start.label}</time>
                {" – "}
                {current ? "Present" : null}
              </p>

              <ul className="mt-4 space-y-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-6 text-gray-300">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Toolbox */}
      <motion.section
        aria-labelledby="toolbox-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            id="toolbox-title"
            eyebrow="Toolbox"
            title="Tools I reach for"
            description="A focused stack rather than a list of everything I've tried."
          />
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map(({ label, items }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">{label}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-blue-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-4 text-xs leading-6 text-gray-500">
          AI-assisted development: Claude, GitHub Copilot, and Cursor — used with review, testing, and documentation.
        </motion.p>
      </motion.section>

      {/* Education */}
      <motion.section
        aria-labelledby="education-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading id="education-title" eyebrow="Education" title="Academic background" />
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.5fr_1fr]">
          <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
              <span className="text-xs font-medium uppercase tracking-wider text-blue-400">
                <time dateTime={education.start.dateTime}>{education.start.label}</time>
                {" – "}
                <time dateTime={education.end.dateTime}>{education.end.label}</time>
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-400">
              {education.institute} · {education.location}
            </p>

            <p className="mt-3 text-sm text-gray-300">
              CGPA <span className="font-medium text-white">{education.cgpa}</span>
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Foundation in software engineering, data structures, algorithms, databases, and computer networks.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Spoken languages</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center justify-between gap-3 text-sm">
                <span className="text-gray-200">Bangla</span>
                <span className="text-xs text-gray-500">Native</span>
              </li>
              <li className="flex items-center justify-between gap-3 text-sm">
                <span className="text-gray-200">English</span>
                <span className="text-xs text-gray-500">Professional</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        aria-labelledby="contact-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6"
      >
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#0B2F5B]/50 via-[#0A1628] to-[#3B82F6]/10 p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Let's work together</p>

            <h2 id="contact-title" className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Open to full-stack and software engineering roles.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
              I'm based in Dhaka and open to on-site, hybrid, and remote opportunities. The fastest way to reach me is
              email.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="mailto:saim777m@gmail.com?subject=Let's Connect"
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                transition={{ duration: 0.2, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
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
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-300"
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
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-300 hover:border-white/25 hover:text-white"
              >
                <FaLinkedin />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
