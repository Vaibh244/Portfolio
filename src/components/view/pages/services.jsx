import React from "react";
import IMAGES from "../../../assets/Images/Image";

export default function services() {
  return (
    <>
    <div className="text-center w-full text-2xl my-2  text-brandLight"><p>What I Do ?</p></div>
    <div className="text-center w-full mb-28 text-4xl text-[#61529e] "><h3>Service</h3></div>

      <div className="flex flex-wrap gap-6 justify-between items-center text-center pb-36">
        <div className=" p-6 max-w-sm rounded-2xl overflow-hidden shadow-3xl border bg-white hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
          <div className="p-6 flex flex-col items-center transition-all duration-300">
            <img
              src={IMAGES.ss2}
              alt=""
              className="w-28 h-28 mb-2 transition-transform duration-300 group-hover:-translate-y-2"
            />
            <h2 className="text-xl text-[#61529e] my-2 font-semibold mb-2 transition-transform duration-300 group-hover:-translate-y-2">
              Responsive Web Designs
            </h2>
            <p className="text-gray-600 text-sm mb-0 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 text-center">
              I build responsive websites that look great on all devices — from
              mobile phones to desktops — ensuring an optimal user experience.
            </p>
          </div>
        </div>

        <div className=" p-6 max-w-sm rounded-2xl overflow-hidden shadow-3xl border bg-white hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
          <div className="p-6 flex flex-col items-center transition-all duration-300">
            <img
              src={IMAGES.ss1}
              alt=""
              className="w-28 h-28 mb-2 transition-transform duration-300 group-hover:-translate-y-2"
            />
            <h2 className="text-xl text-[#61529e] my-2 font-semibold mb-2 transition-transform duration-300 group-hover:-translate-y-2">
            Frontend Development
            </h2>
            <p className="text-gray-600 text-sm mb-0 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 text-center">
            I create fast, interactive user interfaces using modern technologies like React, JavaScript, and TailwindCSS.
            </p>
          </div>
        </div>


        <div className=" p-6 max-w-sm rounded-2xl overflow-hidden shadow-3xl border bg-white hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
          <div className="p-6 flex flex-col items-center transition-all duration-300">
            <img
              src={IMAGES.ss3}
              alt=""
              className="w-28 h-28 mb-2 transition-transform duration-300 group-hover:-translate-y-2"
            />
            <h2 className="text-xl text-[#61529e] my-2 font-semibold mb-2 transition-transform duration-300 group-hover:-translate-y-2">
            UI/UX Implementation
            </h2>
            <p className="text-gray-600 text-sm mb-0 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 text-center">
            I translate UI/UX designs into clean, functional code that aligns with brand identity and user needs.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
