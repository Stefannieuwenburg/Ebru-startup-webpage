import {Link} from "react-router-dom";
import GroupCoachings from "../assets/image/GroupCoaching.jpg";

const GroupCoaching = () => {
    return (
        <>
            <section id="groupcoaching" className="bg-[#f0eae2] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={GroupCoachings}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong> Group Coaching</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Harness the power of community in a supportive group setting where you cheer,
                                strengthen, and empower each other to access embodied presence. Rooted in Co-Active
                                coaching, somatic tools, and breathwork, these sessions blend personal growth with
                                collective healing — helping you move through life with flow, joy, and passion.
                            </p>

                            <ul className="mb-4 mt-4 ">
                                <li>
                                    <strong>Tools</strong>
                                </li>
                            </ul>
                            <ul className="text-lg text-[#3b3a2e] ">
                                <li>Co-Active Coaching — explore your inner landscape and evoke insight</li>
                                <li>Conscious Movement — awaken body awareness and release tension</li>
                                <li>Breathwork — regulate your nervous system and open energy flow</li>
                                <li>Somatic Inquiry — access deeper emotional layers and memories</li>
                            </ul>

                            <ul className="mb-4 mt-4 ">
                                <li>
                                    <strong>Benefits</strong>
                                </li>
                            </ul>
                            <ul className="text-lg text-[#3b3a2e]">
                                <li>Emotional release and integration</li>
                                <li>Nervous system regulation and stress relief</li>
                                <li>Deepened connection to body and intuition</li>
                                <li>Increased clarity, vitality, and presence</li>
                            </ul>

                            <p className="text-lg text-[#3b3a2e] mb-8  mt-4 ">
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
export default GroupCoaching;
