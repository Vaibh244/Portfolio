import React from "react";
import IMAGES from "../../../assets/Images/Image";

export default function Landingpage({ id, isDarkMode }) {
  const backgroundStyle = {
    backgroundImage: isDarkMode
      ? `url(${IMAGES.firstDark})`
      : `linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%), url(${IMAGES.bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center px-4 space-y-6 relative pt-24"
      id={id}
      style={backgroundStyle}
    >
      <div className="w-full max-w-xl text-left">
        <h1 className="text-4xl lg:text-7xl font-extrabold font-baloo text-brandDark dark:text-[#61529e]">
          HI!
        </h1>
      </div>
      <div className="w-full max-w-xl text-left m-0">
        <p className="text-4xl lg:text-7xl font-extrabold font-baloo text-brandName leading-tight dark:text-white">
          I am Vaibhav
          <br />
          Sharma
        </p>
      </div>
      <div className="w-full max-w-xl text-left">
        <p className="text-xl lg:text-3xl tracking-[0.6rem] text-brandLight dark:text-yellow-800">
          FRONTEND DEVELOPER
        </p>
      </div>
      <div className="w-full max-w-xl text-left">
        <button className="bg-[#61529e] outline outline-1 outline-transparent text-white py-2 px-6 rounded-full text-sm lg:text-lg hover:bg-[#443b71] transition duration-300 dark:bg-transparent dark:outline-yellow-800 dark:hover:bg-yellow-800">
          Download Resume
        </button>
      </div>
    </div>
  );
}
