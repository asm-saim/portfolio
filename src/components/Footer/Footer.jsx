import React from "react";
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content bg-[#0B2F5B] px-4 sm:px-6 py-6 sm:py-8 text-center gap-2 sm:gap-3">
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="https://github.com/asm-saim"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-blue-400 hover:scale-110"
          aria-label="GitHub"
        >
          <BsGithub className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>

        <a
          href="https://www.linkedin.com/in/asmsaim/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-blue-400 hover:scale-110"
          aria-label="LinkedIn"
        >
          <TiSocialLinkedinCircular className="w-8 h-8 sm:w-9 sm:h-9" />
        </a>

        <a
          href="mailto:saim777m@gmail.com"
          className="transition-all duration-300 hover:text-blue-400 hover:scale-110"
          aria-label="Email"
        >
          <ImMail4 className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>

      <aside>
        <p className="text-base sm:text-lg font-semibold">A S M Saim.</p>
        <p className="text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
