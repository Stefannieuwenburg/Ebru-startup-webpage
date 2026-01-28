import { useEffect } from "react";
import { Link } from "react-router-dom";
import CorporateTrainings from "../assets/image/CorporateTrainings.jpg";

const BusinessPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section
        id="business"
        className="bg-[#f0eae2] min-h-screen pt-16 pb-24 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <img
                src={CorporateTrainings}
                alt="Wellness and movement"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            <div className="space-y-12">
              {/* Event Energizer */}
              <div>
                <h2 className="text-xl text-[#3b3a2e] font-semibold mb-4">
                  Event Energizer
                </h2>
                <p className="text-lg italic text-[#3b3a2e] leading-relaxed mb-6">
                  Energize your event with a 30–45 minute breath and movement reset.
                  Help your group release tension and return refreshed and focused.
                </p>
                <Link
                  to="/event-energizer"
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
                  Want your team to connect deeper and handle stress better?
                  These breath and movement workshops build trust, presence, and clear communication.
                </p>
                <Link
                  to="/workshopb"
                  className="inline-block bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
                >
                  Read more
                </Link>
              </div>

              {/* Team Building */}
              <div>
                <h2 className="text-xl text-[#3b3a2e] font-semibold mb-4">
                  Team Building Workshop
                </h2>
                <p className="text-lg italic text-[#3b3a2e] leading-relaxed mb-6">
                  Your team’s wellbeing powers your success: let’s help them feel happier,
                  healthier, and more connected. These immersive breath and movement workshops
                  recharge your group and deepen their bonds.
                </p>
                <Link
                  to="/team-building-workshops"
                  className="inline-block bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
                >
                  Read more
                </Link>
              </div>

              {/* Executive Coaching */}
              <div>
                <h2 className="text-xl text-[#3b3a2e] font-semibold mb-4">
                  Executive Coaching
                </h2>
                <p className="text-lg italic text-[#3b3a2e] leading-relaxed mb-6">
                  Is your organization ready to develop leaders who lead with presence and authenticity?
                  Discover coaching that unlocks deeper layers of strength and resilience.
                </p>
                <Link
                  to="/executive-coaching"
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
             Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            You want to have more clarity in your life, reconnect with your energy, and calm within? <br />
            You don’t need to do more. You need to feel more! <br/>
            Let your body lead you home...
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

export default BusinessPage;


