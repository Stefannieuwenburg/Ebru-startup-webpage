import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { CgMail } from "react-icons/cg";

export const Footer = () => {
  return (
    <>
      <div id="Informatie" className="bg-[#f7f7f7] text-black">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className="w-full md:w-1/4 place-items-center justify-center">
            <h2 className="mb-6 text-2xl font-bold">
              Go4<span className="text-[#d8aa46]">Hair</span>
            </h2>
          </div>
          <div>
            <h1 className="text-[#9b7d3e] font-medium text-xl pb-4 pt-5 md:pt-0">
              Behandelmethodes
            </h1>
            <nav className="flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" href="#Behandelmethodes">
                Follicular Unit Transplantation (FUT)
              </a>
              <a className="hover:underline cursor-pointer" href="#Behandelmethodes">
                Follicular Unit Extraction (FUE)
              </a>
              <a className="hover:underline cursor-pointer" href="#Behandelmethodes">
                Sapphire (FUE)
              </a>
              <a className="hover:underline cursor-pointer" href="#Behandelmethodes">
                Ice (FUE)
              </a>
              <a className="hover:underline cursor-pointer" href="#Behandelmethodes">
                Direct Hair Implantation (DHI)
              </a>
            </nav>
          </div>
          <div>
            <h1 className="text-[#9b7d3e] font-medium text-xl pb-4 pt-5 md:pt-0">
              Contact
            </h1>
            <nav className="flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" href="#Contact">
                Email
              </a>
              <a className="hover:underline cursor-pointer" href="#Contact">
                WhatsApp
              </a>
              <a className="hover:underline cursor-pointer" href="#Contact">
                Afspraak maken
              </a>
            </nav>
          </div>
          <div>
            <h1 className="text-[#9b7d3e] font-medium text-xl pb-4 pt-5 md:pt-2">
              Media
            </h1>
            <nav className="flex flex-col items-start md:items-center gap-2">
              <a
                target="_blank"
                aria-label="Instagram"
                href="https://www.instagram.com/go4hair_clinic/"
              >
                <BsInstagram
                  size={30}
                  className="hover:cursor-pointer"
                  style={{ color: "purple" }}
                />
              </a>
              <a
                target="_blank"
                aria-label="Chat on WhatsApp"
                href="https://wa.me/31630360329"
              >
                <ImWhatsapp
                  className="hover:cursor-pointer"
                  size={30}
                  style={{ color: "Green" }}
                />
              </a>
              <a href="mailto:Go4hairclinic@gmail.com?body=Beste go4hair">
                <CgMail
                  className="hover:cursor-pointer"
                  size={35}
                  style={{ color: "Red" }}
                />
              </a>
            </nav>
          </div>
        </div>
        <div>
          <p className="text-center py-4">
            Crafted with care by{" "}
            <a
              href="https://webdevstefan.nl"
              className="underline hover:text-gray-400 transition-colors"
            >
              WebDevStefan.nl
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;

