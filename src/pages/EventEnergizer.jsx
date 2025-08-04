
import Event from "../assets/image/Event.jpg";

const EventEnergizerPage = () => {
    return (
        <>
            <section id="EventEnergizer" className="bg-[#f0eae2] min-h-screen">
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
                            <h2 className="text-2xl font-bold text-[#3b3a2e] mb-6">Event Energizer</h2>
                            <h3 className="text-xl font-semibold text-[#3b3a2e] mb-4">
                                Movement & Breathwork Energizer
                            </h3>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                Participants often arrive rushed and unfocused, or hit a mid-day energy slump.
                            </p>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                This dynamic 15–30 minute session uses movement and breathwork to help your group:
                            </p>
                            <ul className="text-lg pl-4 text-[#3b3a2e] mb-6 space-y-2">
                                <li>Shake off tension and release stuck energy</li>
                                <li>Reset and regulate the nervous system</li>
                                <li>Boost energy, focus, and mental clarity</li>
                                <li>Foster collective presence and connection</li>
                                <li>Return to meetings or activities feeling recharged and engaged</li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Ideal for meetings, conferences, or team offsites that need a quick, powerful reset to
                                enhance creativity and collaboration.
                            </p>
                            <a
                                href="mailto:ebru.dargan@gmail.com"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors"
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
