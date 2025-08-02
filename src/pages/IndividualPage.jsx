import {Link} from "react-router-dom";
import PrivateCoachings from "../assets/image/PrivateCoaching.jpg";

const individualPage = () => {
    return (
        <>
            <section id="individual" className="bg-[#f0eae2]  min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={PrivateCoachings}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-[#3b3a2e] mb-6">
                                <strong>1:1 Coaching</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            You’re holding it all together; but inside, you feel foggy, disconnected, or off track.
                            It’s time to pause, reconnect, and realign with what truly matters to you.
                            </p>
                            <Link
                                to="/private-coaching"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                                Read more
                            </Link>
                            <h2 className="text-lg text-[#3b3a2e] mb-6 mt-6">
                                <strong>Group Coaching Program</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            Ready to break free from what’s holding you back and step into your full power?
                            Join a supportive community that guides you to release blocks, balance your emotions, and ignite your inner fire.
                               
                            </p>
                            <Link
                                to="/group-coaching"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                                Read more
                            </Link>
                            <h2 className="text-lg text-[#3b3a2e] mb-6 mt-6">
                                <strong>Workshops</strong>
                            </h2>
                            <p className="text-lg text-[#3b3a2e] mb-6">
                            Step into your body’s wisdom through movement, breathwork, and embodiment.
                            Join my live workshops to awaken your power and release what holds you back. 
                                
                            </p>
                            <Link
                                to="/workshops"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors "
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
export default individualPage;
