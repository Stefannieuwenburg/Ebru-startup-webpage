import Roundarena from "../assets/image/roundarena.jpg";

const AboutPage = () => {
  return (
   <div id="home" className="bg-[#d9cbb8] min-h-screen py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#3b3a2e] mb-6">
              About breathandbodymovement
            </h1>
            <p className="text-xl text-gray-700">
              Your guide to holistic wellness through mindful movement and conscious breathing
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={Roundarena}
                  alt="About breathandbodymovement"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#3b3a2e] mb-4">
                  My Mission
                </h2>
                <p className="text-gray-700 mb-4">
                  I believe that every person has the innate ability to heal, transform, and thrive. Through the powerful combination of conscious breathing and mindful movement, I help individuals reconnect with their body's natural wisdom and unlock their full potential.
                </p>
                <p className="text-gray-700">
                  My approach is rooted in the understanding that true wellness encompasses not just physical health, but emotional balance, mental clarity, and spiritual connection.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-[#3b3a2e] mb-4">My Approach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Personalized guidance tailored to your unique needs
                </li>
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Integration of ancient wisdom with modern techniques
                </li>
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Focus on sustainable, long-term transformation
                </li>
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Holistic approach addressing mind, body, and spirit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-[#3b3a2e] mb-4">What You Can Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Reduced stress and increased relaxation
                </li>
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Improved physical flexibility and strength
                </li>
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Enhanced emotional regulation and resilience
                </li>
                <li className="flex items-start">
                  <span className="text-[#6e6c50] mr-2">•</span>
                  Deeper connection to your authentic self
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-[#3b3a2e] mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you're new to wellness practices or looking to deepen your existing journey, I'm here to support you every step of the way.
            </p>
            <a
              href="/contact"
              className="bg-[#6e6c50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a5840] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
  );
};

export default AboutPage;
