import {Link} from "react-router-dom";
import PrivateCoachings from "../assets/image/PrivateCoaching.jpg";

const PrivateCoaching = () => {
    return (
        <>
            <section id="privatecoaching" className="bg-[#f0eae2] min-h-screen py-16">
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
                            <h2 className="text-2xl font-bold text-[#3b3a2e] mb-4">1-1 Coaching</h2>

                            <p className="text-lg text-[#3b3a2e] mb-4">
                                Do you feel foggy, stuck in your head or disconnected from your body — like you’re just
                                going through the motions? Maybe emotions feel confusing or distant, and you’re
                                overwhelmed or questioning your purpose.
                            </p>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                You don’t have to carry this alone. Together, we’ll create a safe space where you can
                                soften, reset, and realign with your true self. This isn’t about quick fixes — it’s a
                                holistic journey blending somatic awareness, coaching, nervous system regulation, and
                                breathwork.
                            </p>

                            <h3 className="text-lg font-semibold text-[#3b3a2e] mb-4">In our work together, you’ll:</h3>
                            <ul className="list-disc pl-4 text-[#3b3a2e] mb-4 space-y-2">
                                <li>Gain clarity on what’s no longer working in your life</li>
                                <li>Regulate your nervous system to find calm and stability</li>
                                <li>Build habits that support your energy and emotional resilience</li>
                                <li>Learn to listen deeply to your body’s wisdom</li>
                                <li>Reconnect with your joy, power, and feminine energy</li>
                                <li>Step into your embodied self with confidence and presence</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-[#3b3a2e] mb-4">Coaching Journeys</h3>
                            <ul className="list-none text-[#3b3a2e] mb-6 space-y-4">
                                <li>
                                    <p className="text-lg font-semibold">The Return - Coaching Journey 1</p>
                                    <p>Come home to yourself while cultivating presence and vitality.</p>
                                    <p>
                                        A 3-month journey with bi-weekly 1:1 sessions.
                                        <br />
                                        Ideal if you're ready to slow down, reconnect with your body, and realign with
                                        your inner truth.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-lg font-semibold">The Revival - Coaching Journey 2</p>
                                    <p>Re-energize your whole being while embracing upward movement and power.</p>
                                    <p>
                                        A 6-month journey with bi-weekly 1:1 sessions.
                                        <br />
                                        Perfect if you’re ready for deeper transformation and lasting change in how you
                                        live, lead, and show up.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-lg font-semibold">The Power Hour</p>
                                    <p>A shot of clarity to move through what’s keeping you stuck.</p>
                                    <p>
                                        90 min focused session with coaching, somatic movement, and breathwork.
                                        <br />
                                        Choose breathwork, somatic movement, or a combined session.
                                    </p>
                                </li>
                            </ul>

                            <h3 className="text-lg font-semibold text-[#3b3a2e] mb-4">1:1 Somatic Movement Session</h3>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                Are you stuck in your head and disconnected from your body? In this space, we slow down
                                and listen deeply — to your breath, your body’s sensations, your inner voice.
                            </p>
                            <ul className="text-lg pl-6 text-[#3b3a2e] mb-4 space-y-2">
                                <li>Reconnect with intuition, boundaries, and emotional truth</li>
                                <li>Move through emotional patterns held in the body</li>
                                <li>Cultivate softness, clarity, and self-trust</li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                This is not talk therapy — this is body-led transformation. You begin to feel again and
                                learn to trust what you feel.
                            </p>

                            <h3 className="text-lg font-semibold text-[#3b3a2e] mb-4">1:1 Breathwork Session</h3>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                Embark on a deeply personal journey in a private, supportive space. These breathwork
                                sessions guide you to:
                            </p>
                            <ul className="text-lg pl-4 text-[#3b3a2e] mb-4 space-y-2">
                                <li>Access inner wisdom</li>
                                <li>Heal emotional wounds</li>
                                <li>Find emotional balance and clarity</li>
                                <li>Embrace holistic well-being</li>
                            </ul>
                            <p className="text-lg text-[#3b3a2e] mb-4">
                                This is your unique path to transformation through breath.
                            </p>
                            <a
                                href="mailto:ebru.dargan@gmail.com"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivateCoaching;
