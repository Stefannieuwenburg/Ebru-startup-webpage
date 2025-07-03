
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {scroller} from "react-scroll";
import Logo from "../assets/image/Logo.png";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        scroller.scrollTo(id, {
            duration: 500,
            smooth: true,
            offset: -60,
        });
        setMenuOpen(false);
    };

    const navItems = [
        {name: "Home", id: "home"},
        {name: "About", id: "about"},
        {name: "Group Coaching", id: "groupcoaching"},
        {name: "Private Coaching", id: "privatecoaching"},
        {name: "Corporate Trainings", id: "corporatetraining"},
        {name: "Workshops", id: "workshops"},
        {name: "Contact", id: "contact"},
    ];

    return (
        <nav className="w-full fixed top-0 items-center z-50 justify-center">
            <div className="flex items-center gap-6 text-gray-500 backdrop-blur-lg rounded-md">
                <div className="text-2xl font-bold flex items-center">
                    <img src={Logo} alt="Logo" className="w-24 h-24" />
                    <button
                    className="mt-2 mx-2 hover:-translate-y-1 hover:text-gray-300 transition duration-200"
                    onClick={() => scrollToSection("hero")}
                    ><p
  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#d95c5c] font-playfair text-center drop-shadow-sm"
  style={{ fontFamily: '"Playfair Display", serif' }}
>
  Breath & <span className="italic">Body Movement</span>
</p>
                    </button>

                  
                </div>
                <div className="hidden md:flex flex-row gap-10 justify-center no-underline text-xl flex-1">
                    {navItems.map(({name, id}) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="text-gray-600 hover:text-red-400 hover:-translate-y-1 duration-500 transition"
                        >
                            {name}
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
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
                }`}
            >
                <div className="flex flex-col gap-4">
                    {navItems.map(({name, id}) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="text-left text-gray-600 text-lg hover:text-red-400 transition"
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
                    //   <button
                    //     className="mt-2 mx-2 hover:-translate-y-1 hover:text-gray-300 transition duration-200"
                    //     onClick={() => scrollToSection("hero")}
                    // >
                    //     breathandbodymovement
                    //  </button>
{/* <p
  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#d95c5c] font-playfair text-center drop-shadow-sm"
  style={{ fontFamily: '"Playfair Display", serif' }}
>
  Breath & <span className="italic">Body Movement</span>
</p> */}