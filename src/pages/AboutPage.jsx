import "Styles.css"; // Assuming you have a stylesheet for custom styles
import MyMission from "../assets/image/MyMission.jpg";

const AboutPage = () => {
  return (
   <div id="about" className="bg-[#d9cbb8] min-h-screen py-16">
        <div className="max-w-48xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#3b3a2e] mb-6"   style={{ fontFamily: '"Playfair Display", serif' }}>
              About breath&<span className="italic">Body Movement</span>
            </h1>
            <p className="text-xl text-gray-700">
              Your guide to holistic wellness through mindful movement and conscious breathing
            </p>
            
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={MyMission}
                alt="Wellness and movement"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                 My Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                I am dedicated to awakening the innate power within each person to heal, transform, and embody their fullest potential. Through the intentional blend of breathwork, conscious movement, and qigong, I guide individuals to reconnect deeply with their body’s wisdom—cultivating alignment, presence, and a profound sense of feeling at home within themselves.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                My integrative approach embraces emotional, physical, mental, and spiritual well-being—supporting authentic embodiment and lasting transformation.
              </p>
              <h3 className="text-2xl font-bold text-[#3b3a2e] mb-4">
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
        </div>
      </div>
    
  );
};

export default AboutPage;



