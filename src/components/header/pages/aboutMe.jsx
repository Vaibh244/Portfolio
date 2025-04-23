import React from "react";
import IMAGES from "../../../assets/Images/Image";

export default function aboutMe() {
  return (
    <>
    <div className="myMain flex justify-between items-center py-40 gap-10">

        <img src={IMAGES.about} alt="" className="w-1/2 h-1/2" />
        
   
      <div className=" flex flex-col w-1/2 p-6 justify-center items-center font-baloo">
        <div className="text-left w-full text-2xl my-2"><p>Who Am I?</p></div>
        <div className="text-left w-full mb-3 text-4xl text-[#61529e] "><h3>About Me</h3></div>
        <p>
          Hi! I'm Vaibhav Sharma, a passionate Frontend Developer based in
          India. I specialize in crafting clean, responsive, and interactive
          user interfaces using technologies like HTML, CSS, JavaScript, React,
          and TailwindCSS. I enjoy transforming ideas into real-world web
          experiences that are both visually appealing and highly functional.
          Whether it's building single-page applications, creating reusable
          components, or optimizing performance, I love solving problems and
          constantly learning new things. I'm currently focused on building
          full-featured frontend projects, improving my skills every day, and
          getting job-ready in the tech industry. When I’m not coding, you’ll
          probably find me exploring new tools, polishing my portfolio, or
          reading up on the latest in web development. Let’s build something
          awesome together!
        </p>
       <div className="mt-5 w-full text-left"><button className= "outline outline-1 outline-[#61529e] text-[#61529e] py-2 px-6 rounded-full text-lg hover:bg-[#443b71] hover:text-white hover:outline-none transition duration-300">
            Visit My Works
          </button></div>
      </div>
      </div>
    </>
  );
}