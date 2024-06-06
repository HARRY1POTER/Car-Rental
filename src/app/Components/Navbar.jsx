"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
   
  const getPath = usePathname();

  return (
    <div
      className={`${
        getPath === "/Sign-Up" || getPath === "/Sign-In"
          ? "hidden"
          : "bg-white "
      }`}
    >
      <div className="text-lg flex justify-between items-center py-4 px-6 md:px-10 lg:px-16 transition-all duration-500">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold transition-all duration-500 ">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden items-center 2xl:ml-96 xl:ml-20 lg:text-sm  lg:flex  md:hidden gap-9 text-gray-700 transition-all duration-500">
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/Become-a-Renter" onClick={closeMenu}>
                Become a Renter
              </Link>
            </li>
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/Rental-Deals" onClick={closeMenu}>
                Rental Deals
              </Link>
            </li>
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/How-It-Works" onClick={closeMenu}>
                How It Works
              </Link>
            </li>
            <li className="text-gray-500 hover:scale-105 hover:text-black duration-500 link-underline">
              <Link href="/Why-Choose-Us" onClick={closeMenu}>
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link href="/Sign-In" onClick={closeMenu}>
                <button className="hover:scale-105 hover:text-black duration-200 link-underline bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-all 2xl:ml-40 ">
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link href="/Sign-Up" onClick={closeMenu}>
                <button className="hover:scale-105 hover:text-black duration-200 link-underline bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all ">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="lg:hidden transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-all duration-300 transform rotate-180 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-all duration-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Mobile Menu */}
        <ul
          className={`${
            showMenu ? "block" : "hidden"
          } lg:hidden absolute  top-16 right-6 bg-white z-[50] transition-all duration-500 w-80 h-96 flex flex-col justify-center items-center   `}
        >
          <li className="text-gray-500  hover:scale-105  ml-2 hover:text-black duration-200 link-underline">
            <Link href="/Become-a-Renter" onClick={closeMenu}>
              Become a Renter
            </Link>
          </li>
          <li className="text-gray-500 mt-5 w-[505px]  xsm:w-52   ml-24  hover:scale-105 hover:text-black duration-200 link-underline">
            <Link href="/Rental-Deals" onClick={closeMenu}>
              Rental Deals
            </Link>
          </li>
          <li className="text-gray-500 mt-5 w-[505px]  xsm:w-52  ml-[5.5rem]  hover:scale-105 hover:text-black duration-200 link-underline">
            <Link href="/How-It-Works" onClick={closeMenu}>
              How It Works
            </Link>
          </li>
          <li className="text-gray-500 mt-5 w-[505px] xsm:w-52  ml-[4rem]  hover:scale-105 hover:text-black duration-200 link-underline">
            <Link href="/Why-Choose-Us" onClick={closeMenu}>
              Why Choose Us
            </Link>
          </li>

          <li>
            <Link href="/Sign-In" onClick={closeMenu}>
              <button className="hover:scale-105 mt-5 ml-2 w-[155px]  hover:text-black duration-200 link-underline bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-all ">
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <Link href="/Sign-Up" onClick={closeMenu}>
              <button className="hover:scale-105 mt-5 ml-2 mb-5 w-[155px]  hover:text-black duration-200 link-underline bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all ">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
