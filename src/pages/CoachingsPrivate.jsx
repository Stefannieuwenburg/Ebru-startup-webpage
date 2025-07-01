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
                    <h2 className="text-lg text-[#3b3a2e] mb-6">
                      Private Coaching
                    </h2>
                    <p className="text-lg text-[#3b3a2e] mb-6">
                     Step into a sacred space created just for you — a place of safety, presence, and deep transformation.
                     These personalized sessions are designed to meet you exactly where you are on your journey. Whether you’re navigating emotional blocks, seeking inner clarity, or longing to reconnect with your body and inner essence, this one-on-one experience invites you to return home to yourself.
                     Through a combination of powerful practices, you’ll be gently guided to access your body’s wisdom and activate your natural capacity for healing and balance. Each session may include:
                     Conscious Movement – to awaken embodied awareness and release tension
                     Breathwork – to deepen presence, open energy pathways, and regulate your nervous system

                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      I believe that true wellness comes from the harmony between breath, body, and mind. Through personalized coaching, transformative workshops, and comprehensive training programs, I guide you on a journey of self-discovery and healing.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                      This is your time — to feel, explore, and transform at your own pace, with compassionate support every step of the way.
                     
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