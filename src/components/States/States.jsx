import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "20+",
      title: "Projects",
      description: "Projects built",
    },
    {
      value: "15+",
      title: "Technologies",
      description: "Tools and technologies",
    },
    {
      value: "120+",
      title: "GitHub Repos",
      description: "Repositories",
    },
    {
      value: "B.Sc.",
      title: "CSE Graduate",
      description: "Computer Science & Engineering",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0000002d] via-[#04142e48] to-[#04254b3a]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="block text-sm font-medium tracking-widest text-blue-400 uppercase mb-2">At a Glance</span>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">A Few Highlights</h2>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-7">
            A quick overview of my development journey, projects, and technical background.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#0B2F5B]/20 to-[#3B82F6]/10 p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm sm:text-base font-semibold text-white">{stat.title}</p>

              <p className="mt-1 text-xs sm:text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;
