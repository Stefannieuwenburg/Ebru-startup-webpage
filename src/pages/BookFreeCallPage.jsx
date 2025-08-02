import { Link } from 'react-router-dom';
const BookFreeCallPage = () => {
  return (
    <>
      <section className="min-h-[50vh] flex items-center justify-center bg-[#f0eae2] py-16 px-6 md:px-12 lg:px-24">
         <div className="max-w-7xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3b3a2e] mb-6 leading-tight"style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }} >
            Breathe. Move. Transform.
          </h1>
          <h2 className="text-3xl text-gray-700 mb-10 max-w-3xl mx-auto">
            You want to have more clarity in your life, reconnect with your energy, and calm within. <br/>
            Let your body lead you home
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="contact"
              className="bg-[#6e6c50] text-white px-6 py-4 rounded-3xl font-semibold hover:bg-[#5a5840] transition-colors"
            >
              Book a Free Call
            </Link>
           
          </div>
        </div>
      </section>
    </>
  );
};
export default BookFreeCallPage;