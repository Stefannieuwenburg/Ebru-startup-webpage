
import Event from "../assets/image/Event.jpg";

const EventEnergizerPage = () => {
    return (
        <>
            <section id="EventEnergizer" className="bg-[#f0eae2] min-h-screen pt-12 pb-20 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={Event}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#3b3a2e] mb-4 mt-4">
                                Movement & Breathwork Energizer
                            </h3>
                            <p className="text-lg italic text-[#3b3a2e] mb-4 mt-4">
                                Recharge focus and energy in just 30–45 minutes.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-4">
                                At the start of an event, participants often arrive rushed and distracted. After lunch, energy drops and focus fades.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                The Movement & Breathwork Energizer is a short, impactful session that uses simple movement and breathing techniques to:
                            </p>
                            <ul className="text-[#3b3a2e] list-disc pl-5 mb-4 space-y-2 mb-6 ">
                                <li>Shake off tension and release stuck energy</li>
                                <li>Reset and regulate the nervous system</li>
                                <li>Boost energy, clarity, and engagement</li>
                                <li>Build a sense of presence and connection</li>
                            </ul>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                In just minutes, your group will return to work recharged, focused, and ready to contribute.
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                Perfect for team offsites, corporate events, conferences, and workshops — whenever your audience needs a quick, powerful reset to spark creativity and collaboration.
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

export default EventEnergizerPage;
