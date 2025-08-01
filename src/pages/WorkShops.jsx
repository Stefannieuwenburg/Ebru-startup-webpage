import {Link} from "react-router-dom";
import WorkShop from "../assets/image/WorkShops.jpg";

const WorkShops = () => {
    return (
        <>
            <section id="workshops" className="bg-[#f0eae2] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={WorkShop}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#3b3a2e] mb-6">Workshops</h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                I am passionate about bringing embodiment, movement, and breathwork workshops to
                                communities worldwide. These spaces are sacred invitations to step fully into your
                                body’s intelligence, awaken your inner wisdom, and embrace transformation.
                            </p>
                            <h3 className="text-xl font-semibold text-[#3b3a2e] mb-4">Workshop Options:</h3>
                            <ul className="list-disc pl-6 text-[#3b3a2e] mb-6 space-y-2">
                                <li>
                                    Somatic Movement: Gentle, conscious movement to increase body awareness and release
                                    tension
                                </li>
                                <li>
                                    Feminine Embodiment: Embrace your feminine strength, sensuality, and grace with
                                    breath and presence
                                </li>
                                <li>
                                    Breathwork: Use the power of breath to calm the mind, regulate emotions, and
                                    energize your being
                                </li>
                                <li>
                                    Nervous System Regulation with Qigong: Learn techniques to reduce stress and
                                    cultivate vitality
                                </li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e] mb-8">
                                Interested in hosting a workshop or joining upcoming sessions? Reach out anytime.
                            </p>
                            <a
                                href="mailto:ebru.dargan@gmail.com"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkShops;
