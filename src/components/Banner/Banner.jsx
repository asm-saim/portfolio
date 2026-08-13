import React from "react";
import bannerImg from "../../assets/banner.png";
import { BsGooglePlay } from "react-icons/bs";
import { RiAppStoreFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center text-start">
      <div className="flex-1 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm Saim.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
          <span className="text-blue-400">React Developer</span>
        </h2>

        <p className="mt-6 text-gray-300 italic max-w-3xl text-sm md:text-base leading-7">
          I build fast, responsive, and user-friendly web applications with
          clean, maintainable code. Currently focused on turning ideas into
          seamless digital experiences.
        </p>

        <div className="mt-8 flex justify-start flex-col sm:flex-row gap-6">
          <a
            href="https://github.com/asm-saim"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]" 
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/asmsaim/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]" 
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex-1 relative flex justify-center items-center">
        {/* Blurred gradient */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[#0B2F5B] via-[#3B82F6] to-cyan-400 blur-[120px] opacity-40"></div>

        {/* Image */}
        <img
          src={bannerImg}
          alt="Banner"
          className="relative z-10 mt-11 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:h-[81vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
