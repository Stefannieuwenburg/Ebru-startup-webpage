import image1 from "../assets/image/PrivateCoaching.jpg";
import image2 from "../assets/image/GroupCoaching.jpg";
import image3 from "../assets/image/WorkShops.jpg";
import image4 from "../assets/image/CorporateTrainings.jpg";
import ArenaSmal from "../assets/image/ArenaSmal.jpg";
import { Link } from "react-router-dom";

function FeaturesPage() {
  const services = [
    {
      title: "Private Coaching",
      description:
        "Unlock Your Personalized Journey",
      image: image1,
      link: "/coaching",
    },
    {
      title: "Group Coaching",
      description:
        "A Collective Journey to Embodied Empowerment",
      image: image2,
      link: "/workshops",
    },
    {
      title: "Workshops",
      description:
        "Breathe, Move, and Reconnect with Your Body's Wisdom",
      image: image3,
      link: "/trainings",
    },
    {
      title: "Corporate Trainings",
      description:
        "Strengthen Resilience and Cultivate Balance",
      image: image4,
      link: "/trainings",
    },
  ];

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="bg-[#f5f3ef] h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-[#3b3a2e] mb-6">
        Breathe. Move. Transform.
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
        Reconnect with your body’s innate wisdom through conscious movement and breath, and cultivate deep, lasting well-being from within.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="bg-[#6e6c50] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a5840] transition-colors"
        >
          Start Your Journey
        </Link>
        <Link
          to="/about"
          className="border-2 border-[#6e6c50] text-[#6e6c50] px-8 py-4 rounded-lg font-semibold hover:bg-[#6e6c50] hover:text-white transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Intro Section */}
      <section id="intro" className="bg-[#d9cbb8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                Your Journey to Wellness Starts Here
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                I believe that true wellness comes from the harmony between breath, body, and mind. Through personalized coaching, transformative workshops, and comprehensive training programs, I guide you on a journey of self-discovery and healing.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're seeking stress relief, improved physical health, or deeper spiritual connection, my holistic approach will help you unlock your body's natural wisdom and create lasting positive change.
              </p>
              <Link
                to="/about"
                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
              >
                My Story
              </Link>
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
      <section className="bg-[#b4b29a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b3a2e] mb-4">
              How I Can Support You
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose the path that resonates with your current needs and wellness goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-2xl font-bold text-white mb-28 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white text-start font-stretch-normal font-bold mb-32 drop-shadow-md text-sm max-w-xs">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="bg-white bg-opacity-80 text-[#3b3a2e] px-5 py-2 rounded-lg font-semibold hover:bg-opacity-100 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#3b3a2e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Transformation?
          </h2>
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
