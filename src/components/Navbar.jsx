import { useState } from "react";

import { assets } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-mainColor w-full fixed z-10">
      <div className="max-w-7xl m-auto flex justify-between items-center px-2 gap-8 text-white">
        <Link to="/">
          <img
            src={assets.logo}
            alt="JobPros Logo"
            className="w-[80px] md:w-[120px]"
          />
        </Link>
        <ul className="hidden md:flex gap-4 lg:gap-12">
          <li>
            <NavLink
              to="/"
              className="flex flex-col items-center justify-center"
            >
              <p>Home</p>
              <hr className="w-1/2 h-[1.5px] bg-white border-none hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="flex flex-col items-center justify-center"
            >
              <p>About Us</p>
              <hr className="w-1/2 h-[1.5px] bg-white border-none hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className="flex flex-col items-center justify-center"
            >
              <p>All Jobs</p>
              <hr className="w-1/2 h-[1.5px] bg-white border-none hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex flex-col items-center justify-center"
            >
              <p>Contact Us</p>
              <hr className="w-1/2 h-[1.5px] bg-white border-none hidden" />
            </NavLink>
          </li>
        </ul>
        <ul className="hidden md:flex gap-4 lg:gap-12 items-center justify-center">
          <li>
            <Link to="/login">
              <Button name="Login" type="hover" />{" "}
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button name="Register Now" type="hover" />
            </Link>
          </li>
        </ul>
        <LuMenu className="md:hidden" onClick={toggleMenu} />
      </div>

      {/* Menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-mainColor text-white transition-all ${
          isMenuOpen ? "w-full" : "hidden"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-4 p-4">
            <LuX onClick={toggleMenu} />
          </div>
          <ul className="p-4 flex flex-col gap-5">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" onClick={toggleMenu}>
                All Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={toggleMenu}>
                <Button name="Login" type="hover" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={toggleMenu}>
                <Button name="Register Now" type="hover" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
