import {Link} from "react-router-dom";
import WorkShops from "../assets/image/WorkShops.jpg";

const WorkShopB = () => {
    return (
        <>
            <section id="workshopmb" className="bg-[#f0eae2] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={WorkShops}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong>Workshops</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Is your team striving for deeper connection, resilience, and collaboration?
                            </p>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                These experiential workshops use breathwork and movement to help your team:
                            </p>

                            <ul className="text-lg text-[#3b3a2e] ">
                                <li>Recharge and regulate stress</li>
                                <li>Increase self-awareness and presence</li>
                                <li>Improve communication and trust</li>
                                <li>Access collective intelligence for better decisions</li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e] mt-4 mb-8">
                                Walk away with practical tools to reduce overwhelm and foster a conscious,
                                well-connected team culture.
                            </p>
                            <h3 className="mb-4 mt-4">
                                <strong>Corporate Wellness with Nervous System Approach</strong>
                            </h3>
                            <p className="text-lg text-[#3b3a2e] mt-4 mb-8">
                                Stress and burnout are common but don’t have to be normal. We offer somatic,
                                movement-based workshops to help your teams and leaders
                            </p>
                            <ul className="text-lg text-[#3b3a2e] ">
                                <li>Reconnect with their bodies</li>
                                <li>Regulate their nervous systems</li>
                                <li>Respond to pressure with calm and clarity</li>
                            </ul>

                            <p className="text-lg text-[#3b3a2e] mt-4 mb-8  ">
                                Customized wellbeing workshops; from one-off sessions to retreats; promote long-term
                                mental fitness, emotional regulation, and authentic workplace connection.
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

export default WorkShopB;
