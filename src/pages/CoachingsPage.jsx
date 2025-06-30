import { Link } from 'react-router-dom';

import Arenastanding from "../assets/image/arenastanding.jpg";
const CoachingsPage = () => {
  return (
  <>
  <section id="coaching" className="min-h-screen flex items-center justify-center bg-[#6e6c50] py-16 px-6 md:px-12 lg:px-24">
     
        {/* Left: Image */}
        <div className="object-cover object-center  ">
          <img
            src={Arenastanding}
            alt=" illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Hero Section */}
      <section className="bg-[#6e6c50] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Coaching</h1>
          <p className="text-xl mb-8">Personalized one-on-one sessions to help you discover your inner strength.</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-[#d9cbb8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">What You Will Gain</h2>
          <p className="text-lg text-gray-700 mb-6">Through coaching, you will learn to harness your breath and movement for personal growth.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#eae6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">Benefits of Coaching</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Improved mental clarity</li>
            <li>Enhanced physical well-being</li>
            <li>Personalized strategies for growth</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#3b3a2e] py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <Link to="/contact" className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg">Contact Us</Link>
      </section>
        </div>
    </section>
  </>
   
  );
}   
export default CoachingsPage;