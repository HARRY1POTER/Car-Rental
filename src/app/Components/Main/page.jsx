import React from "react";
import Image from "next/image";
import car from "../../assets/car.png";
import play from "../../assets/play.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Page = () => {
  return (
    <div className="image mb-32 ">
      {" "}
      <div className=" xsm:flex-col">
        {" "}
        <div className="m-8  lg:m-0  lg:pl-36">
          <div className="">
            <p className="text-3xl lg:text-4xl font-semibold md:w-96 lg:w-auto">
              Find, book and rent a car{" "}
              <span className="text-[#1572D3]">Easily</span>
            </p>
            <p className="text-base lg:text-lg md:w-96 lg:w-auto mt-4">
              Get a car wherever and whenever you need it with your iOS and
              Android device.
            </p>
            <div className="flex flex-col md:flex-row mt-6 lg:mt-8 lg:gap-6 text-white gap-5">
              <button className="bg-black rounded-lg p-3 flex items-center mb-4 md:mb-0 w-fit">
                <Image src={play} alt="Google Play" height={26} width={30} />
                <div className="flex flex-col ml-2">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-lg">Google Play</p>
                </div>
              </button>
              <button className="bg-black rounded-lg p-3 flex items-center w-fit">
                <FaApple size={26} className="text-white" />
                <div className="flex flex-col ml-2">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-lg">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={car}
          alt="frame"
          height="150px"
          className="ml-auto mt-40 xsm:mt-0"
        />
      </div>{" "}
      <div className="container md:flex-row  mx-auto lg:m bg-white shadow-lg shadow-[#95c0eb] flex flex-col lg:flex-row lg:items-center gap-6 border rounded-3xl p-3">
        <div className="flex items-center gap-2 md:border-r-2 ">
          <FaLocationDot size={40} className="text-gray-400" />
          <div className="mr-5">
            <p className="font-black text-lg lg:text-2xl">Location</p>
            <p className="text-base lg:text-xl">Search your location</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:border-r-2">
          <FaCalendarAlt size={40} className="text-gray-400" />
          <div className="mr-5">
            <p className="font-black text-lg lg:text-2xl">Pickup Date</p>
            <p className="text-base lg:text-xl">Tue 15 Feb, 09:00</p>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <FaCalendarAlt size={40} className="text-gray-400" />
          <div className="">
            <p className="font-black text-lg lg:text-2xl">Return Date</p>
            <p className="text-base lg:text-xl">Tue 16 Feb, 11:00</p>
          </div>
        </div>
        <button className="bg-[#1572D3] rounded-lg px-6 text-white py-2 lg:ml-auto">
          Search
        </button>
      </div>
    </div>
  );
};

export default Page;
