import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      {/* 
        FIX APPLIED HERE:
        - Removed `max-w-7xl mx-auto` constraint.
        - Used `w-full` with responsive side padding (`px-4 sm:px-8 lg:px-12 xl:px-16`)
      */}
      <nav className="h-20 md:h-24 lg:h-28 w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= Extended Premium Logo ================= */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center flex-shrink-0 group">
          <div className="leading-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0d7490] tracking-tight whitespace-nowrap group-hover:text-teal-600 transition-colors duration-300">
              Yugan Screens
            </h1>
            <p className="mt-1.5 text-[9px] sm:text-[11px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-gray-500 font-bold">
              Protecting Homes
            </p>
          </div>
        </NavLink>

        {/* ================= Desktop Navigation ================= */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-base xl:text-lg font-bold transition-all duration-300 hover:text-teal-600 relative py-1 ${
                  isActive
                    ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-teal-600 after:rounded-full"
                    : "text-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ================= Extended Premium CTA Button ================= */}
        <div className="hidden lg:block flex-shrink-0">
          <NavLink
            to="/contact"
            className="bg-[#0d9488] hover:bg-[#0f766e] text-white px-7 py-3.5 xl:px-9 xl:py-4 rounded-full text-base xl:text-lg font-extrabold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] inline-block tracking-wide"
          >
            Get Quote
          </NavLink>
        </div>

        {/* ================= Mobile Hamburger Toggle ================= */}
        <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden p-2 text-gray-800 hover:text-teal-600 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* ================= Mobile Dropdown Drawer ================= */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-8 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-xl font-bold py-1.5 transition-colors ${
                  isActive ? "text-teal-600" : "text-gray-800 hover:text-teal-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="bg-[#0d9488] hover:bg-[#0f766e] text-white text-center py-4 rounded-full text-lg font-extrabold shadow-lg transition-all duration-200 w-full mt-3 tracking-wide"
          >
            Get Quote
          </NavLink>
        </div>
      )}
    </header>
  );
}