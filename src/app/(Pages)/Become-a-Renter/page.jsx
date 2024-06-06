import Image from "next/image";
import React from "react";
import image from "../../assets/image.png";
import ima from "../../assets/ima.png";
import st from "../../assets/st.png";

const page = () => {
  const info = [
    {
      src: image,
      text: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
      name: "Charlie Johnson",
    },
    {
      src: ima,
      text: "“I have been using your services for 3 years. Your service is great, I will continue to use your service.”",
      name: "Jenny Wilson",
    },
    {
      src: image,
      text: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
      name: "Charlie Johnson",
    },
  ];

  return (
    <div className="bg-[#1572D3] bg-opacity-5 pb-32  ">
      {" "}
      <div className="flex justify-center  ">
        <button className="bg-[#1572D3] cursor-default bg-opacity-10 mt-16  text-[#1572D3] rounded-lg p-3 flex">
          TESTIMONIALS
        </button>
      </div>
      <div className="text-center text-5xl mt-20">
        What people say about us?
      </div>
      <div className="container mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {info.map((testimonial, index) => (
          <div
            key={index}
            className="border bg-white rounded-3xl flex flex-col"
          >
            <div className="relative h-40">
              <Image
                src={testimonial.src}
                alt="testimonial"
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl text-[#FEB700] mr-2">5.0</span>
                  <Image src={st} alt="rate" className="h-6" />
                </div>
                <p className="text-lg mb-6">{testimonial.text}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-xl font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">From New York, US</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
