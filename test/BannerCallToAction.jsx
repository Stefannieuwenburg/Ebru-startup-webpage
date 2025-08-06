const BannerCallToAction = () => {
  return (
    <div id='banner-call-to-action' className="bg-[#3b3a2e] min-h-screen pt-12 pb-20 scroll-mt-16 text-white ">
       <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
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
            <a href="#about"
              className="border-2 border-[#f5f3ef] text-[#f5f3ef] px-8 py-4 rounded-lg font-semibold hover:bg-[#f5f3ef] hover:text-[#3b3a2e] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};  

export default BannerCallToAction;