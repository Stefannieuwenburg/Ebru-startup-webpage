import image1 from "../assets/image/PrivateCoaching.jpg";
import image4 from "../assets/image/CorporateTrainings.jpg";
    
import { Link } from "react-router-dom";

const ServicePage = () => {   
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
            {/* Services Section */}
            <section className="bg-[#f0eae2] w-full min-h-screen py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#3b3a2e] mb-4" style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>
                            How I Can Support You
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-[2rem] overflow-hidden h-[500px] w-full group"
                            >
                                <div className="relative w-full h-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 group-hover:opacity-90 transition duration-500"
                                    />
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-gradient-to-b from-black/60 via-black/30 to-black/60">
                                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-white font-medium text-lg mb-4" style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>
                                        {service.description}
                                    </p>
                                    <Link
                                        to={service.link}
                                        className="bg-[#f7f7f7] text-[#3b3a2e] px-5 py-2 rounded-3xl font-semibold 
                                                   hover:bg-[#e5e5e5] hover:shadow-xl hover:scale-105 
                                                   transition-all duration-300 ease-in-out"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> 
      </>
    );
}

export default ServicePage;