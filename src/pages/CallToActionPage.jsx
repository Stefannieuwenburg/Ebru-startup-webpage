
import About from "../assets/image/AboutBreed.jpg";
import { Link } from "react-router-dom";

const CallToActionPage = () => {
  return (
  <>
      {/* Founder Section */}
      <section  id="about" className="bg-[#d4d2c3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-center text-[#3b3a2e] mb-6"   style={{ fontFamily: '"Playfair Display", serif' }}>
              <span className="italic">Meet Ebru</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The heart and soul behind breath&bodymovement
            </p>
          </div>
        </div>
      </section>
      {/* Founder Story */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                A Journey of Transformation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
               I’m Ebru — an ICF-accredited Co-Active Coach, certified feminine embodiment and somatic coach, breathwork coach, and Qigong teacher. My work weaves together conscious movement, breathwork, somatic practices, and Qigong to guide individuals into deeper connection with their bodies, emotions, and inner wisdom.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a background in dance and extensive experience in somatic coaching, I create safe and nurturing spaces where you can explore your authentic self — Whether you're navigating emotional blocks, physical tension, or seeking clarity and alignment, I support you to release what no longer serves and reconnect with your authentic self.
              </p>
              <p className="text-lg text-gray-700">
                Through gentle yet powerful tools — including somatic movement, breathwork, and Qigong for nervous system regulation and pain release — I help you cultivate resilience, presence, and a renewed sense of aliveness.
              </p>
              <p className="text-lg text-gray-700">
              My mission is to guide you home to your body — where clarity, strength, and freedom reside.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={About}
                alt="Founder portrait"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy */}
      <section className="bg-[#d9cbb8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-8">
            My Philosophy
          </h2>
          <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
            "Every breath is an opportunity for transformation. Every movement is a chance to reconnect with your authentic self. I believe that within each of us lies the innate wisdom to heal, grow, and thrive."
          </blockquote>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              My approach is grounded in the belief that true healing happens when we create a safe, nurturing space for the body's natural intelligence to emerge. Through gentle guidance and compassionate support, I help my clients discover their own path to wellness.
            </p>
            <p className="text-lg text-gray-700">
              Whether working with individuals or groups, my goal is always the same: to empower you with the tools and awareness needed to continue your healing journey long after our sessions together.
            </p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-[#3b3a2e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'd love to support you on your path to wellness and transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors"
            >
              Start your Journey
            </Link>
            <Link
              to="/coaching"
              className="border-2 border-[#f5f3ef] text-[#f5f3ef] px-8 py-4 rounded-lg font-semibold hover:bg-[#f5f3ef] hover:text-[#3b3a2e] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      </>
  );
}

export default CallToActionPage;
