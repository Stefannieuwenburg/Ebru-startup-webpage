
import Teambuilding from "../assets/image/Teambuilding.jpg";

const TeamBuildingWorkShops = () => {
    return (
        <>
            <section id="TeamBuilding" className="bg-[#f0eae2] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={Teambuilding}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong>Team Building Workshops </strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                                Build authentic connection through breath, movement, and dance.
                            </p>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                               This energizing and joy-filled workshop invites your team to slow down, move together, and spark creativity.<br /> 
                               Through playful breath and movement practices, you'll foster trust, open communication, and deepen collaboration; all while having fun and reconnecting through shared laughter and presence.
                            </p>
                            <p className="text-lg text-[#3b3a2e] mt-4 mb-8  ">
                               Ask about tailored formats designed specifically for your team’s unique needs. 
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
