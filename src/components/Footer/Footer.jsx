import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
import { tapScale } from "../../motion/variants";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content bg-[#0B2F5B] px-4 sm:px-6 py-6 sm:py-8 text-center gap-2 sm:gap-3">
      <div className="flex items-center gap-4 sm:gap-6">
        <motion.a
          href="https://github.com/asm-saim"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={tapScale}
          className="rounded-full transition-colors duration-300 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2F5B]"
          aria-label="GitHub"
        >
          <BsGithub className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/asmsaim/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={tapScale}
          className="rounded-full transition-colors duration-300 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2F5B]"
          aria-label="LinkedIn"
        >
          <TiSocialLinkedinCircular className="w-8 h-8 sm:w-9 sm:h-9" />
        </motion.a>

        <motion.a
          href="mailto:saim777m@gmail.com"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={tapScale}
          className="rounded-full transition-colors duration-300 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2F5B]"
          aria-label="Email"
        >
          <ImMail4 className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>
      </div>

      <aside>
        <p className="text-sm sm:text-sm font-normal">
          © {new Date().getFullYear()} A S M Saim. All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
