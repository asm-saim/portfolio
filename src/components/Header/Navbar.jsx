import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { IoMail } from "react-icons/io5";
import { EASE, tapScale } from "../../motion/variants";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

const Navbar = () => {
  // Mobile and desktop menus both render, so each needs its own layoutId.
  const renderNavItems = (group) =>
    navItems.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        end={to === "/"}
        className={({ isActive }) =>
          `relative block rounded-sm transition-colors duration-200 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
            isActive ? "text-blue-400" : ""
          }`
        }
      >
        {({ isActive }) => (
          <li className="relative m-3 font-normal text-base">
            {label}
            {isActive ? (
              <motion.span
                aria-hidden="true"
                layoutId={`nav-underline-${group}`}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute -bottom-1 left-0 h-px! w-full rounded-full bg-blue-400 p-0! shadow-[0_0_8px_rgba(59,130,246,0.7)]"
              />
            ) : null}
          </li>
        )}
      </NavLink>
    ));

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-base-100/90 border-b border-white/7"
    >
      <div className="navbar max-w-6xl min-h-0 h-[68px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-md rounded-box z-1 mt-3 w-48 sm:w-52 p-2 shadow"
            >
              {renderNavItems("mobile")}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1.5 cursor-pointer px-0">
            <img src={logo} className="w-7 sm:w-8 mr-0.5" alt="portfolio logo" />
            <span className="text-lg sm:text-3xl font-medium ">aim</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{renderNavItems("desktop")}</ul>
        </div>
        <div className="navbar-end">
          <motion.a
            href="mailto:saim777m@gmail.com?subject=Let's Connect"
            aria-label="Send me an email"
            whileHover={{ y: -2 }}
            whileTap={tapScale}
            className="btn btn-sm sm:btn-md border-none text-sm sm:text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <IoMail />
            <span className="hidden sm:inline font-medium">Get In Touch</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
