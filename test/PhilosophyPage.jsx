const PhilosophyPage = () => {
  return (
    <div>
      <section id="philosophy" className="bg-[#d9cbb8] min-h-screen pt-12 pb-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
            My Philosophy
          </h2>
          <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
           "Every breath is an opportunity for transformation. Every movement is a chance to reconnect with your authentic self. I believe that within each of us lies the innate wisdom to heal, grow, and thrive."
          </blockquote>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
             My approach is grounded in the belief that true healing happens when we create a safe, nurturing space for the body's natural intelligence to emerge. Through gentle guidance and compassionate support, I help my clients discover their own path to their own spark.
            </p>
            <p className="text-lg text-gray-700">
             Whether working with individuals or groups, my goal is always the same: to empower you with the tools and awareness needed to continue your healing journey long after our sessions together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PhilosophyPage;