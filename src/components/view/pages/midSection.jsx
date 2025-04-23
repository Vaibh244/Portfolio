import React from "react";

export default function midSection() {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center bg-[#443b71] w-full gap-6 p-8">
        <div>
          <h3 className="text-white font-bold text-3xl">Want to work with me?</h3>
          <p className=" text-brandLight text-md">Always feel Free to Contact & Hire me</p>
        </div>
        <div>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-300 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}
