
const PhilosophyPage = () => {
  return (
    <>
      <section
        id="philosophy"
        className="relative bg-[#d9cbb8] min-h-screen pt-12 pb-20 scroll-mt-16 flex items-center justify-center"
      >
        {/* Decorative background layer */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="/assets/decorative-brush.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Centered content container */}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl font-bold text-[#3b3a2e] mb-10 tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            My Philosophy
          </h2>

          <blockquote className="text-xl italic text-[#3b3a2e] mb-10 leading-relaxed">
            “Every breath is an opportunity for transformation.” <br />
            “Every movement is a chance to reconnect with your authentic self.” <br />
            I believe that within each of us lies the innate wisdom to heal, grow, and thrive.
          </blockquote>

          <div className="text-lg text-gray-700 space-y-6">
            <p>
              My approach is grounded in the belief that true healing happens when we create a{" "}
              <span className="text-[#6e6c50] font-semibold">safe, nurturing space</span> for the body’s{" "}
              <span className="text-[#6e6c50] font-semibold">natural intelligence</span> to emerge.
              Through gentle guidance and compassionate support, I help my clients
              discover their own path to their own spark.
            </p>

            <p>
              Whether working with individuals or groups, my goal is always the same: to empower you
              with the tools and awareness needed to continue your healing journey long after our
              sessions together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhilosophyPage;
