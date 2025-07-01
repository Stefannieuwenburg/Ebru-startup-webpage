import { Link } from 'react-router-dom';

import Arenastanding from "../assets/image/arenastanding.jpg";
const CoachingsGroup = () => {
  return (
   <>
          <section className="bg-[#f0eae2] py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                     Coachings Group 
                    </h2>
                    <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                      Welcome to Your Embodied Journey
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                    This is more than coaching — it’s a return to your body, your truth, and your inner clarity.
                    In this sacred space, we invite you to slow down, breathe deeply, and reconnect with the wisdom that already lives within you. Whether you're seeking emotional release, deeper self-awareness, or simply a moment of stillness in a busy world, this journey is designed to meet you exactly where you are.
                    Through a powerful blend of somatic practices, conscious movement, and breathwork, you’ll be gently guided back to your center — where healing begins and transformation unfolds.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                    This is your space to:
                     Reclaim your body as a source of wisdom and strength
                     Release tension and emotional blocks held deep within
                     Cultivate presence, clarity, and inner resilience
                     Awaken your authentic expression and embodied power
                     Every session, every breath, every movement is an invitation to come home — to yourself.
                     Let this be the beginning of a new chapter: one rooted in presence, guided by intuition, and held in compassion.
                    </p>
                    <Link
                      to="/about"
                      className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="relative">
                    <img
                      src={Arenastanding}
                      alt="Wellness and movement"
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
 
   
  );
}   
export default CoachingsGroup;