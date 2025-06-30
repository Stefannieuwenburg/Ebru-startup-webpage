import image1 from "../assets/image/arenameeting.jpg";
import image2 from "../assets/image/arenastanding.jpg";
import image3 from "../assets/image/sundresblack.jpg";

import { Link } from "react-router-dom";


function FeaturesPage() {
  const services = [
    {
      title: "Coaching",
      description: "Personalized one-on-one sessions to help you discover your inner strength and achieve your wellness goals through mindful movement and breathwork.",
      image: image1,
      link: "/coaching"
    },
    {
      title: "Workshops",
      description: "Interactive group sessions where you'll learn practical techniques for stress relief, mindfulness, and body awareness in a supportive community setting.",
      image: image2,
      link: "/workshops"
    },
    {
      title: "Trainings",
      description: "Comprehensive training programs for professionals looking to integrate breathwork and movement practices into their own practice or teaching.",
      image: image3,
      link: "/trainings"
    }
  ];

  return (
  <>
  
    
      <section className="bg-[#f5f3ef] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

   
      <section className="bg-[#d9cbb8] py-16">
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
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Wellness and movement"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#3b3a2e] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="bg-[#6e6c50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5a5840] transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
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

