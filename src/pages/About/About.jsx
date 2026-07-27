import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {/* Section label */}
      <span className="block text-sm font-medium tracking-widest text-blue-400 uppercase mb-3">
        About Me
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* Main copy */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl sm:text-xl font-semibold text-white leading-tight">
            I'm Saim, a React Developer who turns ideas into clean, functional
            web applications.
          </h2>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            My focus is on writing efficient code and building interfaces that
            are not just visually appealing, but genuinely easy and enjoyable to
            use.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            I work primarily with React, JavaScript, and modern front-end tools,
            and I care a lot about the small details — smooth interactions,
            responsive layouts, and code that stays easy to read and maintain as
            projects grow.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Outside of building projects, I'm constantly learning — exploring
            new tools, patterns, and best practices to sharpen my skills and
            stay current with how the web keeps evolving. I'm driven by
            curiosity and enjoy figuring out how to make things work better.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            I'm currently looking for opportunities to apply what I've learned,
            contribute to real projects, and keep growing alongside people who
            care about quality and collaboration.
          </p>
        </div>

        {/* Side info card */}
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0B2F5B]/20 to-[#3B82F6]/10 p-6">
            <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase mb-2">
              Education
            </h3>
            <p className="text-white font-medium">
              B.Sc. in Computer Science & Engineering
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Strong foundation in problem-solving, data structures, and
              software development principles.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0B2F5B]/20 to-[#3B82F6]/10 p-6">
            <h3 className="text-sm font-medium tracking-widest text-blue-400 uppercase mb-2">
              Focus
            </h3>
            <p className="text-white font-medium">React & JavaScript</p>
            <p className="text-sm text-gray-400 mt-1">
              Building clean, responsive, and user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
