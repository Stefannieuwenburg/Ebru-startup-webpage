import '../../Styles.css';
import { Link } from 'react-router-dom';

const BannerPage = () => {
  return (
    <>
      {/* Banner Section - Full Screen */}
      <section className="bg-[#f5f3ef] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3b3a2e] mb-6 leading-tight">
            Breathe. Move. Transform.
          </h1>
          <h2 className="text-3xl text-gray-700 mb-10 max-w-3xl mx-auto">
            You whant to have more clarity in your life, reconnect with your energy, and calm within. Let your body lead you home
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="contact"
              className="bg-[#6e6c50] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#5a5840] transition-colors"
            >
              Book Free Call
            </Link>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPage;

