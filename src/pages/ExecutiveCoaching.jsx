
import Executive from "../assets/image/Executive.jpg";

const ExecutiveCoachingPage = () => {
    return (
        <>
            <section id="ExecutiveCoaching" className="bg-[#f0eae2] min-h-screen pt-12 pb-20 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={Executive}
                                alt="Executive coaching and embodied leadership"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#3b3a2e] mb-6 mt-4">
                                Executive Coaching for Embodied Leadership
                            </h2>
                            <h3 className="text-xl italic text-[#3b3a2e] mb-4">
                                Lead with presence. Inspire with authenticity.
                            </h3>
                            <p className="text-[#3b3a2e] leading-loose mb-4">
                                True leadership isn’t just about strategy and decision-making — it’s about the quality of presence a leader brings to every interaction. Through embodiment and somatic coaching, executives learn to lead from a grounded, aware, and authentic place, inspiring trust and driving meaningful impact.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                Our coaching helps leaders:
                            </p>
                            <ul className="text-lg pl-4 text-[#3b3a2e] mb-6 space-y-2 list-disc">
                                <li>Develop embodied presence that commands respect without force</li>
                                <li>Navigate high-pressure situations with calm, clarity, and confidence</li>
                                <li>Build deeper connection and trust with teams and stakeholders</li>
                                <li>Access intuition and creativity beyond the limits of intellect</li>
                                <li>Model resilience and wellbeing for a healthy workplace culture</li>
                            </ul>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                This work goes beyond skill-building — it transforms how leaders show up in every room, conversation, and decision. When leaders are embodied, they lead with both strength and humanity, creating an environment where people and performance can thrive.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                Tailored executive coaching packages are available for individuals and leadership teams, designed to meet your organization’s unique challenges and goals.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-8">
                                Because leadership that starts from the body lasts far longer than leadership driven by the mind alone.
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

export default ExecutiveCoachingPage;
