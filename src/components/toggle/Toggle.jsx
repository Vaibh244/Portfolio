import React, { useState } from "react";

export default function Toggle({ toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="cursor-pointer flex items-center px-4 py-[9.4px] gap-2 rounded-md dark:text-yellow-400"
    >
      <p className="text-sm">Mode</p>
      <i className="fa-solid fa-toggle-on text-xl transition-colors duration-300"></i>
    </button>
  );
}
