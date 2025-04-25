import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Toggle from "../toggle/Toggle";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contactForm", label: "Contact" },
  ];

  return (
    <header
      className={`dark:text-white fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-white  dark:bg-yellow-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold font-baloo text-black dark:text-yellow-600 cursor-pointer"
        >
          Vaibhav
        </a>

        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:bg-[#61529e] hover:text-white px-4 py-2 rounded transition duration-300 text-black font-medium dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Toggle
          className="hidden md:block"
          toggleDarkMode={props.toggleDarkMode}
        />

        <MobileMenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          navLinks={navLinks}
        />
      </div>
    </header>
  );
}
