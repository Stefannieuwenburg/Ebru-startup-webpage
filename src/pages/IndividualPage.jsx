import {Link} from "react-router-dom";
import PrivateCoachings from "../assets/image/PrivateCoaching.jpg";

const individualPage = () => {
    return (
        <>
            <section id="individual" className="bg-[#f0eae2] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={PrivateCoachings}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong>For Individuals</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Step into a safe, supportive space created just for you. Rooted in Co-Active coaching,
                                these tailored sessions integrate somatic tools, breathwork, and conscious movement to
                                meet you exactly where you are. Whether you’re navigating emotional blocks, seeking
                                clarity, or reconnecting with your body and inner wisdom, you’ll be gently guided to
                                transform from within.
                            </p>

                            <ul className="text-lg text-[#3b3a2e] mb-6">
                                <li>
                                  <h3 className="mb-4 mt-4"><strong >Tools</strong></h3>  
                                    <ul>
                                        <li>Co-Active Coaching — explore your inner landscape and evoke insight</li>
                                        <li>Conscious Movement — awaken body awareness and release tension</li>
                                        <li>Breathwork — regulate your nervous system and open energy flow</li>
                                        <li>Somatic Inquiry — access deeper emotional layers and memories</li>
                                    </ul>
                                </li>
                                <li>
                                  <h3 className="mb-4 mt-4"><strong>Benefits</strong></h3>  
                                    <ul>
                                        <li>Emotional release and integration</li>
                                        <li>Nervous system regulation and stress relief</li>
                                        <li>Deepened connection to body and intuition</li>
                                        <li>Increased clarity, vitality, and presence</li>
                                    </ul>
                                </li>
                            </ul>
                            <Link
                                to="/contact"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                            >
                                Contact Us
                            </Link>
                            <ul>
                                <li></li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e]  mb-8">
                                This is your time — to feel, explore, and transform at your own pace, with compassionate
                                support every step of the way.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default individualPage;
