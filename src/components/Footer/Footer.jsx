import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/logo2.png"
import Home from "../Home/Home.jsx"

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-3 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to={Home} className="flex items-center">
              <img
                src={Logo}
                className="mr-2 h-20 w-70"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" mb -2 my-4 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025
            <a
              href="https://www.linkedin.com/in/harshvadher05/"
              className="hover:underline"
            >
              _ByteBusters
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
