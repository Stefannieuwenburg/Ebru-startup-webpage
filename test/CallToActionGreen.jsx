const CallToActionGreen = () => {
  return (
    <div className="">
     <section className="bg-[#3b3a2e] min-h-screen pt-12 pb-20 scroll-mt-16 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Ready to Begin Your Transformation?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Take the first step towards a more balanced, mindful, and vibrant life
                    </p>
                    <a
                        href="mailto:ebru.dargan@gmail.com"
                        className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>
      <button className="cta-button">Get Started</button>
    </div>
  );
};

export default CallToActionGreen;