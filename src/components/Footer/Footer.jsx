import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content bg-[#0B2F5B] px-4 py-6 text-center gap-3">
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/asm-saim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/asmsaim/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          LinkedIn
        </a>

        <a
          href="mailto:saim777m@gmail.com"
          className="hover:text-blue-500 transition-colors"
        >
          Email
        </a>
      </div>
      <aside>
        <p className="text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} - A S M Saim. All rights
          reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
