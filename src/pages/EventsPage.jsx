import { Link } from 'react-router-dom';
import Arenameeting from "../assets/image/arenameeting.jpg";
const EventsPage = () => {
  return (
     <>
        <section className="bg-[#d4d2c3] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                    🌕 Upcoming Events 
                  </h2>
                  <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6">
                    Embodied Connection & Transformation
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                   Step into a space where movement becomes medicine, breath becomes a bridge, and presence becomes power.
                   Our events are more than just gatherings — they are sacred containers for healing, connection, and embodied transformation. Whether you're joining a workshop, retreat, or special ceremony, each experience is crafted to guide you back to your body, your truth, and your inner vitality.
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                   🌀 What to Expect:
                  A safe, supportive space to explore your inner world
Somatic movement and breathwork to release, restore, and awaken
Deep emotional integration and nervous system regulation
Authentic connection with others in a field of trust and presence
Rituals and practices that ignite your inner power and clarity
Each event is a unique journey — rooted in presence, guided by intuition, and held in community.
✨ These gatherings are for you if you’re ready to:
Let go of what no longer serves you
Reconnect with your body and emotions
Feel seen, supported, and celebrated
Awaken your creativity, sensuality, and inner strength
Experience the healing power of shared energy and intention
🌍 Events are held in beautiful, intentional spaces — from city studios to nature retreats — and are open to all who feel the call.
Come as you are. Leave more connected, more alive, more you.
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
                    src={Arenameeting}
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
export default EventsPage;