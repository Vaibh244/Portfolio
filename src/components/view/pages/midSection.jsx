import React from "react";

export default function midSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center bg-[#443b71]  w-full gap-6 p-8">
        <div>
          <h3 className="text-white font-bold text-md md:text-3xl">
            Want to work with me?
          </h3>
          <p className=" text-brandLight text-md md:text-md">
            Always feel Free to Contact & Hire me
          </p>
        </div>
        <div>
          <button className="bg-white text-black font-bold text-sm py-2 px-3 rounded-lg md:py-2 md:px-6 md:text-lg md:rounded-full  hover:bg-gray-300 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}
