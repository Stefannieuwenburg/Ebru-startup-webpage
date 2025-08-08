import { useState } from "react";
import PrivateCoachings from "../assets/image/PrivateCoaching.jpg";

const PrivateCoaching = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleText = () => setShowMore(!showMore);

    return (
        <section id="privatecoaching" className="bg-[#f0eae2] min-h-screen pt-12 pb-20 scroll-mt-16 text-base text-[#3b3a2e]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img
                            src={PrivateCoachings}
                            alt="Wellness and movement"
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="font-playfair italic text-2xl font-bold mb-2">1-1 Coaching</h2>

                        <p className="text-[#3b3a2e] leading-relaxed mb-2">
                            Do you feel foggy, stuck in your head or disconnected from your body — like you’re just
                            going through the motions? Maybe emotions feel confusing or distant, and you’re
                            overwhelmed or questioning your purpose.
                        </p>
                        <p className="text-[#3b3a2e] leading-relaxed mb-2">
                            You don’t have to carry this alone. Together, we’ll create a safe space where you can
                            soften, reset, and realign with your true self. This isn’t about quick fixes — it’s a
                            holistic journey blending somatic awareness, coaching, nervous system regulation, and
                            breathwork.
                        </p>
                        <h3 className="text-lg font-semibold mb-2">In our work together, you’ll:</h3>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                            <li>Gain clarity on what’s no longer working in your life</li>
                            <li>Regulate your nervous system to find calm and stability</li>
                            <li>Build habits that support your energy and emotional resilience</li>
                            <li>Learn to listen deeply to your body’s wisdom</li>
                            <li>Reconnect with your joy, power, and feminine energy</li>
                            <li>Step into your embodied self with confidence and presence</li>
                        </ul>
                        <p className="text-[#3b3a2e] leading-relaxed mb-4">
                            Whether you’re seeking a deep, ongoing journey or a powerful one-time reset, I offer different
                            1:1 coaching and somatic packages to meet you where you are. Explore the options and find the
                            path that feels right for you.
                        </p>

                      

                        <div className="text-[#3b3a2e] leading-relaxed mt-4">
                            {!showMore ? (
                                <button
                                    onClick={toggleText}
                                    className="underline hover:text-[#2d2c22] transition"
                                >
                                    Read More
                                </button>
                            ) : (
                                <button
                                    onClick={toggleText}
                                    className="underline hover:text-[#2d2c22] transition"
                                >
                                    Read Less
                                </button>
                            )}
                        </div>

                        {showMore && (
                            
                            <div className="text-[#3b3a2e] leading-relaxed space-y-6 mt-4">
                                  <h3 className="text-lg font-semibold mb-2">Coaching Options</h3>
                                <div>
                                    <strong>The Return - Coaching Journey 1</strong><br />
                                    Come home to yourself while cultivating presence and vitality.<br />
                                    A 3-month journey with bi-weekly 1:1 sessions.<br />
                                    Ideal if you're ready to slow down, reconnect with your body, and realign with your inner truth.
                                </div>
                                <div>
                                    <strong>The Revival - Coaching Journey 2</strong><br />
                                    Re-energize your whole being while embracing upward movement and power.<br />
                                    A 6-month journey with bi-weekly 1:1 sessions.<br />
                                    Perfect if you’re ready for deeper transformation and lasting change in how you live, lead, and show up.
                                </div>
                                <div>
                                    <strong>The Power Hour</strong><br />
                                    A shot of clarity to move through what’s keeping you stuck.<br />
                                    A 90 min focused 1:1 session where we dive into your most pressing challenge.<br />
                                    Includes coaching, somatic movement, and breathwork to help you shift, reset, and move forward with confidence.<br />
                                    You are free to choose a single focused somatic movement session or a focused breathwork session too.
                                </div>
                                <div>
                                    <strong>1:1 Somatic Movement Session</strong><br />
                                    Are you stuck in your head and disconnected from your body? In this space, we slow down and listen deeply — to your breath, your body’s sensations, your inner voice.
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Reconnect with intuition, boundaries, and emotional truth</li>
                                        <li>Move through emotional patterns held in the body</li>
                                        <li>Cultivate softness, clarity, and self-trust</li>
                                    </ul>
                                    <p className="mt-2">
                                        This is not talk therapy — this is body-led transformation. You begin to feel again and learn to trust what you feel.
                                    </p>
                                </div>
                                <div>
                                    <strong>1:1 Breathwork Session</strong><br />
                                    Embark on a deeply personal journey in a private, supportive space. These breathwork sessions guide you to:
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Access inner wisdom</li>
                                        <li>Heal emotional wounds</li>
                                        <li>Find emotional balance and clarity</li>
                                        <li>Embrace holistic well-being</li>
                                    </ul>
                                    <p className="text-[#3b3a2e] leading-relaxed mt-2">
                                        This is your unique path to transformation through breath.
                                    </p>
                                </div>
                            </div>
                        )}

                        <a
                            href="mailto:ebru.dargan@gmail.com"
                            className="mt-4 inline-block bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivateCoaching;



