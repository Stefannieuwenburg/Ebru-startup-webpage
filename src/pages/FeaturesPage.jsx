import image1 from "../assets/image/PrivateCoaching.jpg";
import image4 from "../assets/image/CorporateTrainings.jpg";
import ArenaSmal from "../assets/image/ArenaSmal.jpg";
import {Link} from "react-router-dom";

function FeaturesPage() {
    const services = [
        {
            title: "For Individuals",
            description: "Reconnect to your body, Unlock your potential",
            image: image1,
            link: "/individual",
        },
        {
            title: "For Business",
            description: "Empower your leaders, Strengthen your teams",
            image: image4,
            link: "/business",
        },
    ];

    return (
        <>
            {/* Intro Section */}
            <section id="intro" className="bg-[#d9cbb8] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Your Journey to Wellness Starts Here
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                I believe that true wellness comes from the harmony between breath, body, and mind.
                                Through personalized coaching, transformative workshops, and comprehensive training
                                programs, I guide you on a journey of self-discovery and healing.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Whether you're seeking stress relief, improved physical health, or deeper spiritual
                                connection, my holistic approach will help you unlock your body's natural wisdom and
                                create lasting positive change.
                            </p>
                            <a href="#story"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                            >
                                My Story
                            </a>
                        </div>
                        <div className="relative">
                            <img
                                src={ArenaSmal}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-[#b4b29a] w-full min-h-screen py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#3b3a2e] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>How I Can Support You</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Choose the path that resonates with your current needs and wellness goals
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-[500px] w-full"
                            >
                                {/* Image fully visible */}
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />

                                {/* Overlay content */}
                                <div className="absolute inset-0 flex flex-col justify-between text-center p-4 bg-gradient-to-b from-black/60 via-black/30 to-black/60">
                                    {/* Title at the top */}
                                    <h3 className="text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: '"Playfair Display", serif' }}>{service.title}</h3>

                                    {/* Description in the middle */}
                                    <div className="flex-grow flex items-center justify-center">
                                        <p className="text-white font-medium text-lg tracking-wide max-w-[90%]" style={{ fontFamily: '"Playfair Display", serif' }}>
                                            {service.description}
                                        </p>
                                    </div>
                                    
                                    {/* Button at the bottom */}
                                    <div>
                                         <Link to={service.link}
                                            className="bg-white bg-opacity-80 text-[#3b3a2e] px-5 py-2 rounded-lg font-semibold hover:bg-opacity-100 transition"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#3b3a2e] py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>Ready to Begin Your Transformation?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Take the first step towards a more balanced, mindful, and vibrant life
                    </p>
                    <Link
                        to="/contact"
                        className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>
        </>
    );
}

export default FeaturesPage;
