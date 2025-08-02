import {CiInstagram} from "react-icons/ci";
import {MdOutlineEmail} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#3b3a2e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3
                            className="text-2xl  font-bold font-playfair mb-4"
                            style={{fontFamily: '"Playfair Display", serif'}}
                        >
                            Breath&<span className="italic">Body Movement</span>
                        </h3>
                        <p className="text-gray-300 mb-6">
                            new text ??
                        </p>
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

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Socials</h4>
                        <ul className="space-y-2">
                            <div className="">
                                <li>
                                    <a href="mailto:ebru.dargan@gmail.com" className="mb-2 flex items-center">
                                        <MdOutlineEmail className="mr-2" />Email
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ebruuudrgn/" className="mb-2 flex items-center">
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
                <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p className="text-gray-300">© 2025 breath&bodymovement. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
