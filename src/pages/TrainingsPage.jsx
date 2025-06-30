import { Link } from 'react-router-dom';
import Arenameeting from "../assets/image/arenameeting.jpg";
const TrainingsPage = () => {
  return (
    <>
    <section id="trainings" className="min-h-screen flex items-center justify-center bg-[#eae6dc]">
        
        {/* Left: Image */}
        <div className="object-cover object-center w-auto h-auto rounded-lg shadow-lg">
          <img
            src={Arenameeting}
            alt="Nuxt development illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        
        <div className="w-full md:w-1/2 text-center md:text-left">
         {/* Hero Section */}
      <section className="bg-[#eae6dc] py-20 text-[#3b3a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Trainings</h1>
          <p className="text-xl mb-8">Comprehensive programs for professionals.</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-[#d9cbb8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">What You Will Learn</h2>
          <p className="text-lg text-gray-700 mb-6">Our training programs are designed to integrate breathwork and movement.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#eae6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">Benefits of Trainings</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Professional development</li>
            <li>Integration of holistic practices</li>
            <li>Enhanced teaching skills</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#3b3a2e] py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Elevate Your Practice!</h2>
        <Link to="/contact" className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg">Contact Us</Link>
      </section>
        </div>
    </section>
  
 
      
  </>
  );
}   
export default TrainingsPage;