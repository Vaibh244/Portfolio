import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 text-center text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6 text-center md:text-left">
        {/* Left Section */}
        <div>
          <p>© 2025 Vaibhav Sharma. All rights reserved.</p>
          <p className="text-gray-400">
            Designed & Built with React and TailwindCSS
          </p>
        </div>

        {/* Center Quote */}
        <div className="max-w-sm text-gray-300">
          “Thanks for visiting. Let’s build something amazing together!”
        </div>

        {/* Right - Social Links */}
        <div className="flex flex-wrap justify-center gap-4 text-lg cursor-pointer">
          <a
            href="https://github.com/VaibhavSharma-Developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-sharma-83a980192/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailto: "
            className="hover:text-purple-400 transition"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
