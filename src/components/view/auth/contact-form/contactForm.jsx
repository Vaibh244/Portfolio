import React from "react";

export default function ContactForm() {
  return (
    <div className="my-20 px-4">
      <div className="text-center w-full text-xl my-1 text-brandLight">
        <p>How can you communicate?</p>
      </div>

      <div className="text-center w-full mb-12 text-4xl text-[#61529e] font-bold">
        <h3>Contact Me</h3>
      </div>

      <form className="flex flex-col justify-center items-center gap-6 w-full max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <input
            type="text"
            className="flex-1 border rounded-md px-4 py-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#61529e]"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="flex-1 border rounded-md px-4 py-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#61529e]"
            placeholder="Your Email"
          />
        </div>

        <textarea
          name="message"
          className="w-full border rounded-md px-4 py-3 text-lg font-medium resize-none focus:outline-none focus:ring-2 focus:ring-[#61529e]"
          rows={5}
          placeholder="Your Message"
        ></textarea>

        <button
          type="submit"
          className="bg-[#61529e] hover:bg-[#443b71] text-white py-3 px-4 rounded-md text-lg transition duration-300 mb-20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
