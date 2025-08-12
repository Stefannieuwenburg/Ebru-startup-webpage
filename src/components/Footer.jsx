import { CiInstagram } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import logo1 from "../assets/image/coachingcf.png";
import logo2 from "../assets/image/coachingsmalcf.png";
import logo3 from "../assets/image/coachingcfsmall.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="bg-[#3b3a2e] min-h-[20vh] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className="text-2xl font-bold font-playfair mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Breath &<span className=""> Body Movement </span>
            </h3>
            <p className="text-gray-300 mb-4">
              Your guide to awaken the deep wisdom of your body and breath; <br />
              where heart, mind, and spirit dance as one.
            </p>
            {/* Footer Images */}
            <div className="mt-8 flex flex-row items-start gap-6">
              <img src={logo1} alt="Logo 1" className="h-16 w-auto" />
              <img src={logo2} alt="Logo 2" className="h-16 w-auto" />
              <img src={logo3} alt="Logo 3" className="h-16 w-auto" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/individual" className="text-gray-300 hover:text-white transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-300 hover:text-white transition-colors">
                  For Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <ul className="space-y-2">
              <div>
                <li>
                  <a href="mailto:ebru.dargan@gmail.com" className="mb-2 flex items-center">
                    <MdOutlineEmail className="mr-2" />Email
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/breathandbodymovement/" className="mb-2 flex items-center">
                    <CiInstagram className="mr-2" />Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ebrudargan" className="mb-2 flex items-center">
                    <CiLinkedin className="mr-2" />LinkedIn
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-4 pt-4 text-center">
          <p className="text-gray-300">© 2025 breath&amp;bodymovement. All rights reserved.</p>
          <p className="text-gray-300 text-sm mt-1">
            Crafted with care by{" "}
            <a href="https://webdevstefan.nl" className="underline hover:text-gray-400 transition-colors">
              WebDevStefan.nl
            </a>
          </p>
          <p className="text-gray-300 text-sm mt-1">KvK: 92664717</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

