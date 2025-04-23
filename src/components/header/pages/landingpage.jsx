import React from "react";

export default function landingpage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center px-4 space-y-6">
        <div className="w-full max-w-xl text-left ">
          <h1 className=" text-7xl font-extrabold font-baloo text-brandDark">
            HI!
          </h1>
        </div>
        <div className="w-full max-w-xl text-left m-0 ">
          <p className="text-7xl font-extrabold font-baloo text-brandName leading-tight">
            I am Vaibhav
            <br />
            Sharma
          </p>
        </div>
        <div className="w-full max-w-xl text-left ">
          <p className="text-3xl tracking-[0.6rem] text-brandLight">
            FRONTEND WEB DESIGNER
          </p>
        </div>
        <div className="w-full max-w-xl text-left ">
        <button className="bg-[#61529e] text-white py-2 px-6 rounded-full text-lg hover:bg-[#443b71] transition duration-300">
            Visit My Works
          </button>
        </div>
      </div>
    </>
  );
}
