import React from "react";

export default function MobileMenu({
  menuOpen,
  toggleMenu,
  closeMenu,
  navLinks,
}) {
  return (
    <>
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="text-3xl text-black dark:text-yellow-600">
              &times;
            </span>
          ) : (
            <span className="text-3xl text-black dark:text-yellow-600">
              &#9776;
            </span>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden  bg-[#443b71] px-6 py-4 absolute top-20 z-10 right-0 w-full rounded-lg">
          <ul className="flex flex-col gap-4 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block w-full px-4 py-2 rounded hover:bg-[#61529e] hover:text-[#181132] transition duration-300"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
