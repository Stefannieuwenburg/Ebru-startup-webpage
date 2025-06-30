 import AboutImage from "../assets/image/aboutimage.jpg";
import { Link } from "react-router-dom";

const CallToActionPage = () => {
  return (
  <>
      {/* Founder Section */}
      <section  id="cta" className="bg-[#edeae4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#3b3a2e] mb-6">
              Meet Our Founder
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The heart and soul behind breathandbodymovement
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
                src={AboutImage}
                alt="Founder portrait"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="bg-[#f5f3ef] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b3a2e] mb-4">
              Qualifications & Experience
            </h2>
            <p className="text-lg text-gray-700">
              Years of training and dedication to the art of holistic wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#6e6c50] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b3a2e] mb-3">
                Certified Breathwork Facilitator
              </h3>
              <p className="text-gray-600">
                Advanced certification in transformational breathwork and conscious breathing techniques
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#6e6c50] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b3a2e] mb-3">
                Movement Therapy Specialist
              </h3>
              <p className="text-gray-600">
                Specialized training in somatic movement and body-based healing modalities
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#6e6c50] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b3a2e] mb-3">
                Holistic Wellness Coach
              </h3>
              <p className="text-gray-600">
                Comprehensive training in mind-body wellness and integrative healing approaches
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#6e6c50] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b3a2e] mb-3">
                Years Off Experience
              </h3>
              <p className="text-gray-600">
                Over a decade of experience guiding individuals and groups in their wellness journey
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#6e6c50] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b3a2e] mb-3">
                500+ Clients Served
              </h3>
              <p className="text-gray-600">
                Helped hundreds of individuals transform their relationship with their body and breath
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-[#6e6c50] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b3a2e] mb-3">
                Trauma-Informed Approach
              </h3>
              <p className="text-gray-600">
                Specialized training in trauma-sensitive practices and creating safe healing spaces
              </p>
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
