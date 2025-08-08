
const BannerBookFreeCall = ({ setShowContactModal }) => {
  return (
    <>
      <section className="min-h-[50vh] pt-12 pb-20 scroll-mt-16 flex items-center justify-center bg-[#f0eae2]  px-6 md:px-12 lg:px-24">
         <div className="max-w-7xl w-full text-center">
          <h1 className="text-5xl font-bold text-[#3b3a2e] mb-6 leading-tight"style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }} >
            Breathe. Move. Transform.
          </h1>
          <h2 className="leading-loose italic text-xl text-gray-700 mb-10 mx-auto">
            You want to have more clarity in your life, reconnect with your energy, and calm within. <br/>
            Let your body lead you home...
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <button
           onClick={() => setShowContactModal(true)}
           className="bg-[#6e6c50] text-white px-6 py-4 rounded-3xl hover:bg-[#5a5840] transition-colors"
          >
           Book a Free Call
          </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerBookFreeCall;