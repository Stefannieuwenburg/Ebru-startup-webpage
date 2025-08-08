import MyMission from "../assets/image/MyMission.jpg";

const MyMissionPage = ({ setShowContactModal }) => {
  return (
    <div
      id="about"
      className="relative bg-[#f0eae2] min-h-screen scroll-mt-16"
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/assets/decorative-brush.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 pb-16">
          {/* Image block */}
          <div className="relative">
            <img
              src={MyMission}
              alt="Wellness and movement"
              className="rounded-xl shadow-xl w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* Textual block */}
          <div className="text-center lg:text-left mb-6">
            <h2
              className="fonts-playfair text-4xl italic font-bold text-[#3b3a2e] mb-6"
            >
              My Mission
            </h2>

            <div className="text-lg italic text-[#3b3a2e] mb-10 leading-relaxed">
              <p>
                I am dedicated to awakening the innate power within each person to heal, transform, and embody their fullest potential.
              </p>
              <p>
                Through breathwork, movement, and qigong, I guide individuals to reconnect deeply with their body’s wisdom.
              </p>
              <p>
                My approach embraces emotional, physical, mental, and spiritual well-being, supporting authentic embodiment and lasting transformation.
              </p>
              <p>
                I believe our bodies hold the key to deep healing. When we move, breathe, and feel, we don’t just release tension — we unlock clarity, freedom, and inner power.
              </p>
              <p>
                Because movement isn’t just wellness; it’s medicine. And breath isn’t just calming; it’s a path home.
              </p>
              <p>
                Whether you're new to wellness practices or looking to deepen your journey, I'm here to support you every step of the way.
              </p>
              <p>
                My mission is to create a world where we feel more, not less; so we can live, lead, and love with truth, joy, and presence.
              </p>
            </div>

            <h3
              className="text-2xl font-bold text-[#3b3a2e] mt-8 mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Ready to Start Your Journey?
            </h3>

            <button
              onClick={() => setShowContactModal(true)}
              className="inline-block bg-[#6e6c50] text-white px-8 py-3 rounded-3xl hover:bg-[#5a5840] transition-colors"
            >
              Book a Free call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMissionPage;
