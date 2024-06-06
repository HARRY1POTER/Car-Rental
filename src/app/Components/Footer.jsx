"use client";
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from "next/image";
import logo from "../assets/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Footer = () => {
  const getPath = usePathname();
  return (
    <div
      className={`${
        getPath === "/Sign-Up" || getPath === "/Sign-In" ? "hidden" : " "
      }`}
    >
      <footer className="bg-[#051C34] text-white p-12   px-6 md:px-12 lg:px-24 xl:px-32  md:text-sm ">
        <div className=" mx-auto flex flex-col md:flex-row justify-between min-w-fit ">
          <div className=" items-center mb-4  ">
            <Image src={logo} alt="logo" height={40} />
            <div className="ml-4 mt-3 text-lg  mb-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <IoLocationOutline />
                  <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
                </div>
                <div className="flex items-center gap-2">
                  <LuPhone />
                  <p>+603 4784 273 12</p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailOutline />
                  <p>rentcars@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl lg:text-lg  lg:p-2 md:p-2 ">
            Our Product
            <div className="text-xl text-gray-500 mt-4  md:mt-2 lg:p-2 md:p-2">
              <p className="cursor-pointer hover:text-white">Career</p>
              <p className="mt-2 cursor-pointer hover:text-white">Car</p>
              <p className="mt-2 cursor-pointer hover:text-white">Packages</p>
              <p className="mt-2 cursor-pointer hover:text-white">Features</p>
              <p className="mt-2 cursor-pointer mb-5 hover:text-white">
                Priceline
              </p>
            </div>
          </div>

          <div className="text-2xl lg:text-lg   lg:p-2 md:p-2">
            Resources
            <div className="text-xl text-gray-500 mt-4  md:mt-0.5 lg:p-2 md:p-2">
              <p className="mt-2 cursor-pointer hover:text-white">Download</p>
              <p className="mt-2 cursor-pointer hover:text-white">
                Help Centre
              </p>
              <p className="mt-2 cursor-pointer hover:text-white">Guides</p>
              <p className="mt-2 cursor-pointer hover:text-white">
                Partner Network
              </p>
              <p className="mt-2 cursor-pointer hover:text-white">Cruises</p>
              <p className="mt-2 cursor-pointer mb-5 hover:text-white">
                Developer
              </p>
            </div>
          </div>
          <div className="text-2xl lg:text-lg lg:p-2 md:p-2">
            About Renycars
            <div className="text-xl text-gray-500 mt-4  md:mt-0.5 lg:p-2 md:p-2">
              <p className="mt-2 cursor-pointer hover:text-white">
                Why choose us
              </p>
              <p className="mt-2 cursor-pointer hover:text-white">Our Story</p>
              <p className="mt-2 cursor-pointer hover:text-white">
                Investor Relations
              </p>
              <p className="mt-2 cursor-pointer hover:text-white">
                Press Center
              </p>
              <p className="mt-2 cursor-pointer mb-5 hover:text-white">
                Advertise
              </p>
            </div>
          </div>
          <div className="text-2xl lg:text-lg lg:p-2 md:p-2">
            Follow Us
            <div className="flex gap-3 cursor-pointer mt-4  md:mt-2 lg:p-2 md:p-2">
              <AiOutlineFacebook className="hover:text-white text-gray-500" />
              <FaInstagram className="hover:text-white text-gray-500" />
              <AiOutlineYoutube className="hover:text-white text-gray-500" />
            </div>
          </div>
        </div>
        <div className="border-b border-gray-600 m-5 mt-12"></div>
        <div>
          <p className="ml-16 mt-10 lg:text-lg xsm:ml-0">
            Copyright 2023 ・ Rentcars, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

