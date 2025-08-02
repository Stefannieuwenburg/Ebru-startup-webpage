import {Link} from "react-router-dom";
import WorkShops from "../assets/image/WorkShops.jpg";

const ExecutiveCoachingPage = () => {
    return (
        <>
            <section id="ExecutiveCoaching" className="bg-[#f0eae2]  min-h-screen py-16">
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
                                <strong>Executive Coaching </strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Empower your leaders and teams with coaching that integrates embodiment, somatic tools,
                                and the essential practice of embodied leadership; leading with presence, awareness, and
                                authenticity.
                                <br /> Cultivate resilience, deeper connection, and lasting impact from the inside out.
                            </p>

                            <p className="text-lg text-[#3b3a2e] mt-4 mb-8  ">
                               Contact us to explore tailored coaching packages designed to elevate your leadership and team dynamics.
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

export default ExecutiveCoachingPage;
