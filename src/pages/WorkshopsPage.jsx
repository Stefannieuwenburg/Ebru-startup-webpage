import { Link } from 'react-router-dom';
import Sundresblack from "../assets/image/sundresblack.jpg";
import Arenastanding from "../assets/image/arenastanding.jpg";
const WorkshopsPage = () => {
  return (
    <section id="workshops" className="min-h-screen flex items-center justify-center bg-[#e6ddcf]">
       
        {/* Left: Image */}
                <div className="object-cover object-center  ">
                  <img
                    src={Sundresblack}
                    alt=" illustration"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
         {/* Hero Section */}
      <section className="bg-[#e6ddcf] py-20 text-[#3b3a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Workshops</h1>
          <p className="text-xl mb-8">Interactive group sessions for stress relief and mindfulness.</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-[#d9cbb8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">What You Will Experience</h2>
          <p className="text-lg text-gray-700 mb-6">Join us for workshops that foster community and personal growth.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#eae6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">Benefits of Workshops</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Community support</li>
            <li>Practical techniques for mindfulness</li>
            <li>Enhanced body awareness</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#3b3a2e] py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Join a Workshop Today!</h2>
        <Link to="/contact" className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg">Contact Us</Link>
      </section>
        </div>
    </section>
  );
}   

export default WorkshopsPage;
