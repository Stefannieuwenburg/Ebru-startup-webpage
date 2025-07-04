import { CiInstagram } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#3b3a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl  font-bold font-playfair mb-4"   style={{ fontFamily: '"Playfair Display", serif' }}>
              About breath&<span className="italic">Body Movement</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Transform your life through mindful movement, breathwork, and holistic wellness practices.
            </p>
            
            {/* Newsletter */}
            <div className="bg-[#f0eae2] p-4 rounded-lg">
              <h4 className="text-[#3b3a2e] font-semibold mb-3">Subscribe to Life Coaching van breat&bodymovement <br/> for Our Newsletter</h4>
              <p className="text-[#3b3a2e] text-sm mb-4">
                Stay updated with the latest news and exclusive offers.
              </p>
              <div className="flex ">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-8 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6e6c50]"
                />
                <button className="bg-[#6e6c50] text-white px-2 py-2 rounded-r-md hover:bg-[#5a5840] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/coaching" className="text-gray-300 hover:text-white transition-colors">
                  Privite Coaching
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-white transition-colors">
                  Group Coaching
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Coaching
                </Link>
              </li>
               <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">
                  Workshops
                </Link>
              </li>
            </ul>
                        
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <div className="flex justify-start"> 
                     <a href="mailto:ebru.dargan@gmail.com" className="mb-2 flex items-center"><MdOutlineEmail className="mr-2" /> </a>
                          <a href="https://www.instagram.com/ebruuudrgn/" className="mb-2 flex items-center"><CiInstagram className="mr-2"/>  </a>
                          <a href="https://www.linkedin.com/in/ebrudargan" className="mb-2 flex items-center"><CiLinkedin className="mr-2"/> </a>
                          </div>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 breath&bodymovement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
