import About from "../assets/image/AboutBreed.jpg";

const FounderStory = () => {
  return (
    <>
      <section id="story" className="relative bg-white min-h-screen">
        {/* Ambient background brush layer */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="/assets/decorative-brush.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2
                className="text-4xl mt-16 font-bold text-[#3b3a2e]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                My Story
              </h2>

              <p className="text-lg text-gray-700">
                For years, I did everything “right.” I excelled in school, climbed the corporate ladder quickly, and ticked all the boxes of success.
                <br />
                On the outside, it looked like I was thriving.
                <br />
                But inside, I felt disconnected; never quite enough, never truly fulfilled. I kept pushing, hoping passion would follow achievement.
              </p>
              <p className="text-lg text-gray-700">
                Then my body forced me to stop. A major surgery. A burnout. A traffic accident. One after the other, each a loud and clear message: You cannot keep living this way.
              </p>
              <p className="text-lg text-gray-700">
                Unable to return to my old path, I shifted. I became a lecturer; my first real encounter with coaching; and something started to awaken in me.
                I realized I wasn’t just burned out; I was out of alignment with myself.
              </p>
              <p className="text-lg text-gray-700">
                What started as a personal journey became my calling. Each training I took cracked me open.
                Every practice helped shake something loose; old patterns, suppressed emotions, unspoken truths. Bit by bit, I shed what wasn’t mine and began hearing what was in my heart for this world.
              </p>
              <p className="text-lg text-gray-700">
                I trained as an ICF-accredited Co-Active Coach, a certified feminine embodiment and somatic coach, a breathwork facilitator, and a Qigong instructor. My years of dance and somatic movement practice gave me the language of the body, the wisdom of stillness, and the courage to hold space for others in their most tender, powerful transitions.
              </p>
              <p className="text-lg text-gray-700">
                Today, I guide individuals; especially women and professionals; who feel stuck, overwhelmed, or out of sync, and help them return to the intelligence of their bodies.
                Whether you're navigating burnout, emotional blocks, or just craving more aliveness, I offer grounded tools to support nervous system regulation, emotional release, and embodied alignment.
              </p>
              <p className="text-lg italic font-bold text-gray-700">
                My mission is simple: To help you feel more; so you can live, lead, and love with clarity, joy, and purpose.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={About}
                alt="Founder portrait"
                className="rounded-xl shadow-xl w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderStory;
