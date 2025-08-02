import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/image/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", type: "scroll", id: "hero" },
    { name: "About", type: "scroll", id: "about" },
    { name: "For Individuals", type: "route", path: "/individual" },
    { name: "For Business", type: "route", path: "/business" },
    { name: "Testimonials", type: "scroll", id: "testimonials" },
    { name: "FAQ", type: "scroll", id: "faq" },
    { name: "Contact", type: "route", path: "/contact" },
  ];

  const handleNavClick = (item) => {
    setMenuOpen(false);

    if (item.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo(item.id, {
            duration: 500,
            smooth: true,
            // De offset-regel is hier verwijderd
          });
        }, 100);
      } else {
        scroller.scrollTo(item.id, {
          duration: 500,
          smooth: true,
          // De offset-regel is hier verwijderd
        });
      }
    } else if (item.type === "route") {
      navigate(item.path);
    }
  };

  return (
    <nav className="w-full fixed top-0 items-center z-50 justify-center">
      <div className="flex items-center gap-6 text-gray-500 backdrop-blur-lg rounded-md">
        <div className="text-2xl font-bold flex items-center">
          <img src={Logo} alt="Logo" className="w-14 h-14" />
          <button
            className="mt-2 mx-2 hover:-translate-y-1 hover:text-gray-300 transition duration-200"
            onClick={() => handleNavClick({ type: "scroll", id: "hero" })}
          >
            <p
              className="font-playfair text-sm sm:text-base md:text-lg lg:text-xl text-[#d95c5c] text-center drop-shadow-sm"
            >
              Breath & <span className="italic">Body Movement</span>
            </p>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="font-playfair italic hidden md:flex flex-row gap-10 justify-center no-underline text-xl flex-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="text-gray-600 hover:text-red-400 hover:-translate-y-1 duration-500 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full px-6 py-6 backdrop-blur-lg rounded-md transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="font-fairplay italic text-left text-gray-600 text-lg hover:text-red-400 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
