import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <section className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-6 text-center lg:text-left">
      {/* Text content */}
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Hi, I'm Saim.</h1>

        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
          <span className="text-blue-400">Full Stack Developer</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-md sm:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
          Specializing in full-stack development and scalable solutions that drive business growth — turning ideas into
          seamless, user-friendly digital experiences.
        </p>

        <div className="mt-8 flex flex-row gap-4 sm:gap-6 justify-center lg:justify-start w-full">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
            >
              <Icon className="text-lg" />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Image with glow */}
      <div className="flex-1 relative flex justify-center items-center">
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[#0B2F5B] via-[#3B82F6] to-cyan-400 blur-[120px] opacity-40"
          aria-hidden="true"
        />
        <img
          src={bannerImg}
          alt="Saim - Full Stack Developer"
          loading="eager"
          className="relative z-10 mt-6 lg:mt-11 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:h-[81vh] object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
