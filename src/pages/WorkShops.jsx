
import {Link} from "react-router-dom";
import WorkShop from "../assets/image/WorkShops.jpg";

const WorkShops= () => {
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
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong>Workshops </strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Join a shared space to move, feel, and awaken your body’s wisdom. These workshops use
                                somatic movement, breathwork, and embodiment practices to cultivate presence and
                                transformation; whether in women’s circles, retreats, or conscious community
                                gatherings.
                            </p>
                            <h3 className="mb-4 mt-4">
                                <strong>Tools</strong>
                            </h3>
                            <ul className="text-lg text-[#3b3a2e] ">
                                <li>Somatic Movement — ground and release tension</li>
                                <li>Breathwork & Qigong — open energy flow and calm the nervous system</li>
                                <li>Embodiment Rituals — ignite inner power and emotional freedom</li>
                                <li>Relational Exercises — foster trust and authentic connection</li>
                            </ul>

                            <h3 className="mb-4 mt-4">
                                <strong>Benefits</strong>
                            </h3>

                            <ul className="text-lg text-[#3b3a2e] ">
                                <li>Deepen body, emotional, and intuitive connection</li>
                                <li>Release held tension and stress</li>
                                <li>Regulate nervous system for ease and clarity</li>
                                <li>Feel supported in a safe collective space</li>
                                <li>Access subconscious awareness and inner vitality</li>
                            </ul>

                            <p className="text-lg text-[#3b3a2e] mt-4 mb-8  ">
                                This is your time; to feel, explore, and transform at your own pace, with compassionate
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

export default WorkShops;
