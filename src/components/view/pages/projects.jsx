import React from "react";
import IMAGES from "../../../assets/Images/Image";

export default function projects() {
  return (
    <>
      <div className="text-center w-full text-2xl my-2  text-brandLight">
        <p>What i did ?</p>
      </div>
      <div className="text-center w-full mb-28 text-4xl text-[#61529e] ">
        <h3>My Projects</h3>
      </div>

      <div className="flex flex-row fap-6 justify-between items-center text-center pb-36">
        {/* card 1 */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-xl cursor-pointer group">
          <img
            src={IMAGES.fbImg}
            alt="Web Designing"
            className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-purple-200 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-3xl font-bold text-[#462da7]">Facebook Login Clone</h3>
            <p className="text-lg text-black ">Category: Web Templates</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-xl cursor-pointer group">
          <img
            src={IMAGES.calc}
            alt="Web Designing"
            className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-purple-200 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-3xl font-bold text-[#462da7]">Calculator</h3>
          <p className="text-lg text-black ">Category: Web Templates</p>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-xl cursor-pointer group">
          <img
            src={IMAGES.ToDo}
            alt="Web Designing"
            className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-purple-200 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-3xl font-bold text-[#462da7]">To-Do List</h3>
          <p className="text-lg text-black ">Category: Web Templates</p>
          </div>
        </div>
      </div>
    </>
  );
}
