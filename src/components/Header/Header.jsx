import React, { useState } from "react";
import { Link, NavLink } from "react-router";
// import logo from "../../assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-blue-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-4">
          <div className="flex flex-row">
            {/* Hamburger Icon */}
            <div
              className="sm:hidden cursor-pointer flex justify-center items-center mr-4"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                // src={logo}
                className="mr-3 h-auto"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex items-center sm:order-2 mt-2">
            <Link
              to="login"
              className="text-blue-900 bg-gray-200 hover:bg-gray-50 hover:shadow-md hover:shadow-gray-900 active:ring-4 active:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-200"
            >
              Log in
            </Link>
            <Link
              to="signup"
              className="text-gray-900 bg-blue-400 hover:bg-gray-50 hover:shadow-md hover:shadow-gray-900 active:ring-4 active:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-200"
            >
              Sign Up
            </Link>
          </div>

          <div
            className={`w-full lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-400" : "text-gray-200"
                    } border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-blue-400 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-400" : "text-gray-200"
                    } border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-blue-400 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-400" : "text-gray-200"
                    } border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-blue-400 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
