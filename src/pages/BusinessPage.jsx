import {Link} from "react-router-dom";
import CorporateTrainings from "../assets/image/CorporateTrainings.jpg";
const BusinessPage = () => {
    return (
        <>
            <section id="business" className="bg-[#f0eae2] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={CorporateTrainings}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong>Event Energizer</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            Energize your event with a 15–30 minute breath and movement reset.
                            Help your group release tension and return refreshed and focused.

                            </p>
                            <Link
                                to="/event-energizer"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                                Read more
                            </Link>
                            <h2 className="text-lg text-[#3b3a2e] mb-6 mt-6">
                                <strong>Workshops</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            Want your team to connect deeper and handle stress better?
                            These breath and movement workshops build trust, presence, and clear communication. 
                               
                            </p>
                            <Link
                                to="/workshopb"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                                Read more
                            </Link>
                            <h2 className="text-lg text-[#3b3a2e] mb-6 mt-6">
                                <strong>Team Building Workshop</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            Your team’s wellbeing powers your success: let’s help them feel happier, healthier, and more connected.
                            These immersive breath and movement workshops recharge your group and deepen their bonds.
                            </p>
                            <Link
                                to="/team-building-workshops"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                                Read more
                            </Link>
                             <h2 className="text-lg text-[#3b3a2e] mb-6 mt-6">
                                <strong>Executive Coaching</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            Is your organization ready to develop leaders who lead with presence and authenticity?
                            Discover coaching that unlocks deeper layers of strength and resilience.  
                            </p>
                            <Link
                                to="/executive-coaching"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default BusinessPage;