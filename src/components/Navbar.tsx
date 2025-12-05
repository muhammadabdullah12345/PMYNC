import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white font-normal py-3.5 px-4 lg:px-10 ">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto w-full">
        {/* Logo Section */}
        <img
          src="/assets/images/pmyncLogo.png"
          alt="PMYNC LOGO"
          className="w-12 lg:w-[75px]"
        />
        <img
          src="/assets/images/pmyncLogo2.png"
          alt="PMYNC LOGO 2"
          className="hidden sm:block w-[120px] lg:w-[170px]"
        />

        {/* Desktop Navigation */}
        {/* <img
          src="/assets/images/emblem.png"
          alt="EMBLEM"
          className="w-[100px]"
        /> */}
        <img
          src="/assets/images/inlights.svg"
          alt="INLIGHTS"
          className="h-[27.5px]"
        />
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex items-center justify-center gap-8 uppercase text-[18px] font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "border-b-2 border-[#088E48]"
                    : "hover:text-[#088E48]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "border-b-2 border-[#088E48]"
                    : "hover:text-[#088E48]"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/members"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "border-b-2 border-[#088E48]"
                    : "hover:text-[#088E48]"
                }`
              }
            >
              Members
            </NavLink>
            <NavLink
              to="/partners"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "border-b-2 border-[#088E48]"
                    : "hover:text-[#088E48]"
                }`
              }
            >
              Partners
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "border-b-2 border-[#088E48]"
                    : "hover:text-[#088E48]"
                }`
              }
            >
              Projects
            </NavLink>
          </div>
          <Link
            to="/contact"
            className="bg-[#088E48] px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-[#0a6e3a]"
          >
            Contact Us
            <img src="/assets/images/anchorArrow.svg" width={20} alt="arrow" />
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-[60] lg:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 bg-black transition-all duration-300 overflow-hidden z-40 lg:hidden ${
          isMenuOpen
            ? "top-[57px] max-h-screen opacity-100"
            : "top-[57px] max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-6 gap-6">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 ${isActive ? "text-[#088E48]" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 ${isActive ? "text-[#088E48]" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/members"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 ${isActive ? "text-[#088E48]" : ""}`
            }
          >
            Members
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 ${isActive ? "text-[#088E48]" : ""}`
            }
          >
            Projects
          </NavLink>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#088E48] px-6 py-3 rounded-xl inline-flex items-center gap-2"
          >
            Contact Us
            <img src="/assets/images/anchorArrow.svg" width={20} alt="arrow" />
          </Link>
        </nav>
      </div>
    </nav>
  );
}
