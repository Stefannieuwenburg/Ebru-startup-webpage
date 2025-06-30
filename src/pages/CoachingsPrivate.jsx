import { Link } from 'react-router-dom';

import Arenastanding from "../assets/image/arenastanding.jpg";
const  CoachingsPrivate = () => {
  return (
   <>
          <section className="bg-[#f0eae2] py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                   <div className="relative">
                    <img
                      src={Arenastanding}
                      alt="Wellness and movement"
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                      CoachingsPrivate
                    </h2>
                    <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                      Your Journey to Wellness Starts Here
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      I believe that true wellness comes from the harmony between breath, body, and mind. Through personalized coaching, transformative workshops, and comprehensive training programs, I guide you on a journey of self-discovery and healing.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                     Ready to Start Your Journey?
                    </p>
                    <Link
                      to="/about"
                      className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
 
   
  );
}   
export default CoachingsPrivate;