
const BannerPage = () => {
  return (
    <>
      {/* Banner Section - Full Screen */}
      <section className="bg-[#f5f3ef] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full text-center">
         
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#3b3a2e] mb-6"   style={{ fontFamily: '"Playfair Display", serif' }}>
              <span className="italic"> Breathe. Move. Transform.</span>
            </h1>
          <h2 className="text-3xl text-gray-700 mb-10 max-w-3xl mx-auto">
            You want to have more clarity in your life, reconnect with your energy, and calm within? <br />
            You don’t need to do more. You need to feel more! <br/>
            Let your body lead you home. 

          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPage;

