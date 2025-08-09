
import Teambuilding from "../assets/image/Teambuilding.jpg";

const TeamBuildingWorkShops = () => {
    return (
        <>
            <section id="TeamBuilding" className="bg-[#f0eae2] min-h-screen pt-12 pb-20 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={Teambuilding}
                                alt="Team building through movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#3b3a2e] mb-6 mt-4">
                                Team Building Through Breath, Movement & Dance
                            </h2>
                            <h3 className="text-xl italic text-[#3b3a2e] mb-4">
                                Where connection meets creativity and trust meets collaboration.
                            </h3>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                This uplifting, interactive workshop gets your team moving, laughing, and connecting in ways that go far beyond everyday work conversations.
                            </p>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Through a blend of playful breathwork, movement, and dance, participants are invited to:
                            </p>
                            <ul className="text-lg pl-4 text-[#3b3a2e] mb-6 space-y-2 list-disc">
                                <li>Slow down and be fully present</li>
                                <li>Move together in a fun, energizing way</li>
                                <li>Spark creativity and fresh ideas</li>
                                <li>Build trust and open communication</li>
                                <li>Strengthen collaboration through shared experiences</li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Tailored formats are available to match your group’s size, goals, and energy — from short energizers to full-length workshops.
                            </p>
                            <p className="text-lg text-[#3b3a2e] mb-8">
                                Because when people connect beyond their roles, they work together better.
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

export default TeamBuildingWorkShops;
