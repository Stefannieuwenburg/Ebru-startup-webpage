import { useEffect } from "react";
import { Link } from "react-router-dom";
import PrivateCoachings from "../assets/image/PrivateCoaching.jpg";

const IndividualPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <section
      id="individual"
      className="bg-[#f0eae2] min-h-screen pt-16 pb-24 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <img
              src={PrivateCoachings}
              alt="Wellness and movement"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="space-y-12">
            {/* 1:1 Coaching */}
            <div>
              <h2 className="text-xl text-[#3b3a2e] font-semibold mb-4">
                1:1 Coaching
              </h2>
              <p className="text-lg italic text-[#3b3a2e] leading-relaxed mb-6">
                You’re holding it all together; but inside, you feel foggy, disconnected, or off track.
                It’s time to pause, reconnect, and realign with what truly matters to you.
              </p>
              <Link
                to="/private-coaching"
                className="inline-block bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
              >
                Read more
              </Link>
            </div>

            {/* Group Coaching */}
            <div>
              <h2 className="text-xl text-[#3b3a2e] font-semibold mb-4">
                Group Coaching Program
              </h2>
              <p className="text-lg italic text-[#3b3a2e] leading-relaxed mb-6">
                Ready to break free from what’s holding you back and step into your full power?
                Join a supportive community that guides you to release blocks, balance your emotions, and ignite your inner fire.
              </p>
              <Link
                to="/group-coaching"
                className="inline-block bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
              >
                Read more
              </Link>
            </div>

            {/* Workshops */}
            <div>
              <h2 className="text-xl text-[#3b3a2e] font-semibold mb-4">
                Workshops
              </h2>
              <p className="text-lg italic text-[#3b3a2e] leading-relaxed mb-6">
                Step into your body’s wisdom through movement, breathwork, and embodiment.
                Join my live workshops to awaken your power and release what holds you back.
              </p>
              <Link
                to="/workshops"
                className="inline-block bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Banner */}
      <section className="bg-[#d4d2c3] min-h-[30vh] pt-12 pb-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-white mb-8">
            Take the first step towards a more balanced, mindful, and vibrant life
          </p>
          <a
            href="https://hipsy.nl/breath-body-movement"
            className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
      </>
  );
};

export default IndividualPage;

