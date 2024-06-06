import Image from "next/image";
import React from "react";
import j from "../../assets/car/j.png";
import s from "../../assets/s.png";
import h from "../../assets/h.png";
import g from "../../assets/g.png";
import sn from "../../assets/sn.png";
import d from "../../assets/d.png";
import a from "../../assets/car/a.png";
import b from "../../assets/car/b.png";
import l from "../../assets/car/l.png";

const page = () => {
  const car = [
    {
      src: j,
      name: "Jaguar XE L P250",
      rate: "4.8",
      review: "(2.436 reviews)",
      seat: "4 Passagers",
      door: "4 Doors",
      price: "$1,800 ",
    },
    {
      src: a,
      name: "Audi R8",
      rate: "4.6 ",
      review: "(1.936 reviews)",
      seat: "2 Passagers",
      door: "2 Doors",
      price: "$2,100",
    },
    {
      src: b,
      name: "BMW M3",
      rate: "4.5 ",
      review: "(2.036 reviews)",
      seat: "4 Passagers",
      door: "4 Doors",
      price: "$1,600 ",
    },
    {
      src: l,
      name: "Lamborghini Huracan",
      rate: "4.3 ",
      review: "(2.236 reviews)",
      seat: "2 Passagers",
      door: "2 Doors",
      price: "$2,300",
    },
  ];

  return (
    <div>
      {" "}
      <div className="flex justify-center  ">
        <button className="bg-[#1572D3] cursor-default bg-opacity-10 mt-16  text-[#1572D3] rounded-lg p-3 flex">
          POPULAR RENTAL DEALS
        </button>
      </div>
      <div className="text-center text-5xl mt-20">
        Most popular cars rental deals
      </div>
      <div className="justify-center mx-auto mt-16 grid grid-cols-1 lg:mr-20 md:grid-cols-2 lg:grid-cols-3 xl:flex gap-16">
        {car.map((car, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-200 w-fit p-5  md:mt-20 xsm:ml-10 xsm:mr-1 xsm:justify-center md:ml-9  md:mx-0 items-center bg-white shadow-lg shadow-[#95c0eb] border rounded-3xl"
          >
            <Image src={car.src} alt="car" />
            <div className="mt-5">
              <p className="text-[20px] font-black">{car.name}</p>
              <div className="flex text-[15px] mt-1">
                <Image src={s} alt="star" />
                <p>
                  <span className="font-black">{car.rate}</span>{" "}
                  <span className="text-gray-500">{car.review}</span>
                </p>
              </div>
            </div>
            <div className="text-[px]">
              <div className="flex mt-5">
                <div className="flex">
                  <Image src={h} alt="icon" />
                </div>
                <p>{car.seat}</p>
                <div className="flex ml-12">
                  <Image src={g} alt="icon" width={20} />
                </div>
                <p>Auto</p>
              </div>
              <div className="flex mt-3">
                <div className="flex">
                  <Image src={sn} alt="icon" />
                </div>
                <p>Air Conditioning</p>
                <div className="flex ml-5">
                  <Image src={d} alt="icon" width={10} />
                </div>
                <p>{car.door}</p>
              </div>
              <div className="border-b-2 mt-5" />
              <div className="flex gap-24 mt-5 text-[px]">
                <p>Price</p>
                <p>
                  <span className="font-black">{car.price}</span>/day
                </p>
              </div>
              <div className="mt-5">
                <button className="bg-[#1572D3] w-full md:w-60 text-white p-2 rounded-lg items-center">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16 mb-20 ">
        <button className="hover:scale-105 hover:text-[#1572D3] duration-200 border mt-16  text-black rounded-lg p-3 flex">
          Show all vehicles
        </button>
      </div>
    </div>
  );
};

export default page;
