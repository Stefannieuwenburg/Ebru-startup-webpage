
import Worshopsb from "../assets/image/WorkShops.jpg";

const WorkShopB = () => {
    return (
        <>
            <section id="workshopmb" className="bg-[#f0eae2] min-h-screen pt-12 pb-20 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={Worshopsb}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-[#3b3a2e] mb-4 mt-6">
                                Corporate Wellbeing with a Nervous System Approach
                            </h2>
                            <h3 className="text-xl italic text-[#3b3a2e] mb-4">
                                Resilient people. Connected teams. Better business outcomes.
                            </h3>
                            <p className="text-[#3b3a2e] leading-loose mb-4">
                                Stress, burnout, and disengagement are costing companies more than ever — in lost productivity, absenteeism, and high turnover. The truth is, no strategy, KPI, or innovation can thrive if the people behind it are running on empty.
                            </p>
                            <p className="text-lg italic text-[#3b3a2e] mb-4">
                                "The key is simple yet powerful: help people feel grounded, clear, and recharged from the inside out."
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-4">
                                We bring science-backed, experiential workshops using breathwork, qigong, and somatic movement directly into your workplace — boardrooms, Zoom meetings, and team off-sites — to help your teams and leaders:
                            </p>
                            <ul className="text-[#3b3a2e] list-disc pl-5 mb-4 space-y-2 mb-4 ">
                                <li>Recharge energy and reduce stress on the spot</li>
                                <li>Regulate under pressure for clearer thinking and better decisions</li>
                                <li>Increase self-awareness and emotional intelligence</li>
                                <li>Strengthen trust and collaboration across teams</li>
                                <li>Build resilience that lasts far beyond the session</li>
                            </ul>
                            <p className="text-[#3b3a2e] leading-loose mb-2">
                                When employees are grounded, present, and connected, they bring more creativity, focus, and engagement to their work — which means better results for your business.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-2">
                                We offer customized wellbeing programs designed to reduce overwhelm, improve retention, and foster a culture where people can truly thrive.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-2">
                                Because when your people work well, your business works better.
                            </p>
                            <a
                                href="mailto:ebru.dargan@gmail.com"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
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
