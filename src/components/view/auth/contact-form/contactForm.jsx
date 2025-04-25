import React from "react";

export default function ContactForm({ id }) {
  return (
    <div className="my-20 px-4 " id={id}>
      <div className="text-center w-full md:text-xl my-1 text-brandLight dark:text-yellow-800">
        <p>How can you communicate?</p>
      </div>

      <div className="text-center w-full mb-12 text-2xl md:text-4xl text-[#61529e] font-bold">
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
          className="dark:outline dark:outline-1 dark:outline-[#61529e] bg-[#61529e] dark:bg-transparent dark:text-[#61529e] text-white py-2 px-4 rounded-md text-lg hover:bg-[#443b71] hover:text-white hover:outline-none transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
