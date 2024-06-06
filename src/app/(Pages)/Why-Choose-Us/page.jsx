import Image from "next/image";
import React from "react";
import audi from "../../assets/audi.png";
import i from "../../assets/i.png";
import ii from "../../assets/ii.png";
import iii from "../../assets/iii.png";
import iiii from "../../assets/iiii.png";

const page = () => {
  const data = [
    {
      item: "Best price guaranteed",
      content: " Find a lower price? We’ll refund you 100% of the difference.",
      src: i,
    },
    {
      item: "Experience driver",
      content:
        " Don’t have driver? Don’t worry, we have many experienced driver for you.",
      src: ii,
    },
    {
      item: "24 hour car delivery",
      content: " Book your car anytime and we will deliver it directly to you.",
      src: iii,
    },
    {
      item: "24/7 technical support",
      content:
        " Have a question? Contact Rentcars support any time when you have problem.",
      src: iiii,
    },
  ];

  return (
    <div className=" xl:flex   xsm:flex-row items-center justify-between md:mx-auto md:mt-10 md:pb-5 md:mb-32 ">
      <div className="mb-8 md:mb-0 md:mr-8">
        <Image src={audi} alt="car" />
      </div>
      <div className="lg:mr-24">
        <div className="flex justify-center  ">
          <button className="bg-[#1572D3] cursor-default bg-opacity-10 mt-16  text-[#1572D3] rounded-lg p-3 flex">
            WHY CHOOSE US
          </button>
        </div>
        <div className="text-center text-5xl mt-20">
          We offer the best experience with our rental deals
        </div>
        <div className="mt-8 md:mt-16  p-3">
          {data.map((data, index) => (
            <div key={index} className="flex mt-4">
              <div>
                <Image src={data.src} alt="icon" width={70} height={70} />
              </div>
              <div className="ml-3">
                <p className="font-black text-xl md:text-2xl">{data.item}</p>
                <p className="text-lg md:text-xl">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
