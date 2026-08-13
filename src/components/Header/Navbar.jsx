import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <li className="m-3 font-semibold text-base">Home</li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <li className="m-3 font-semibold text-base">About</li>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <li className="m-3 font-semibold text-base">Projects</li>
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <li className="m-3 font-semibold text-base">Resume</li>
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="navbar max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-48 sm:w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-1.5 cursor-pointer px-0"
          >
            <img
              src={logo}
              className="w-7 sm:w-8 mr-0.5"
              alt="portfolio logo"
            />
            <span className="text-lg sm:text-3xl font-bold ">aim</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="mailto:saim777m@gmail.com?subject=Let's Connect"
            aria-label="Send me an email"
            className="btn btn-sm sm:btn-md border-none text-sm sm:text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <IoMail />
            <span className="hidden sm:inline">Get In Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
