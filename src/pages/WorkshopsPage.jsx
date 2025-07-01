import { Link } from 'react-router-dom';
import Sundresblack from "../assets/image/sundresblack.jpg";

const WorkshopsPage = () => {
  return (
    <>
    <section className="bg-[#d9cbb8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="relative">
              <img
                src={Sundresblack}
                alt="Wellness and movement"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg text-[#3b3a2e] mb-6">
                Workshops
              </h2>
              <h2 className="text-lg  text-[#3b3a2e] mb-6">
                A collective journey into presence, connection, and embodied transformation. These workshops are an invitation to return to your body — together.
                In each session, we create a safe, inspiring space where you can move, feel, express, and reconnect — not just with yourself, but with others in a shared field of authenticity and trust. Whether it’s a women’s circle, somatic movement journey, or a team-building experience, these gatherings awaken a deeper sense of community, emotional expression, and inner strength.
                Through a powerful blend of embodied practices, you'll be guided to:
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Somatic Movement – to ground into your body, release tension, and awaken felt presence
                Breathwork – to open energetic flow and deepen self-awareness
                Relational & Creative Exercises – to foster connection, trust, and meaningful interaction
                Embodiment Rituals – to ignite your inner power, sensuality, and emotional freedom
              </p>
              <p className="text-lg text-gray-700 mb-8">
               These workshops are open to all genders (unless otherwise specified) and can be adapted for retreats, festivals, conscious communities, or team environments — in any country.
               This is a space to feel seen, supported, and celebrated — as your most embodied self.
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

export default WorkshopsPage;
