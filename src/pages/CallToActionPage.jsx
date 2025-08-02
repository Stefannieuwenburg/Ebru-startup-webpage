{
    /* This page is a Call to Action Page that includes sections for the founder, story, philosophy, and
   a call to action. It is designed to introduce the founder and their philosophy, and encourage
   visitors to join the movement. */
}
{
    /* Founder Section */
}
{
    /* Founder Story */
}
{
    /* Philosophy */
}
{
    /* Call to Action */
}

import About from "../assets/image/AboutBreed.jpg";
import {Link} from "react-router-dom";

const CallToActionPage = () => {
    return (
        <>
            {/* Founder Section */}
            <section id="about" className="bg-[#d4d2c3] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1
                            className="text-5xl md:text-6xl font-bold font-playfair text-center text-[#3b3a2e] mb-6"
                            style={{fontFamily: '"Playfair Display", serif'}}
                        >
                            <span className="italic">Meet Ebru Dargan</span>
                        </h1>
                        <p className="text-xl italic text-gray-700 max-w-3xl mx-auto" style={{fontFamily: '"Playfair Display", serif'}}>
                            Movement is my language. Dance is my medicine. <br />
                            My mission is to hold a space where you can move with power, embody your truth, and live
                            with presence; fully and freely.
                        </p>
                    </div>
                </div>
            </section>
            {/* Founder Story */}
            <section id="story" className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 lg:order-1">
                            <h2
                                className="text-4xl font-bold text-[#3b3a2e] mb-6"
                                style={{fontFamily: '"Playfair Display", serif'}}
                            >
                                My Story
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                For years, I did everything “right.” I excelled in school, climbed the corporate ladder
                                quickly, and ticked all the boxes of success.
                                <br />
                                On the outside, it looked like I was thriving.
                                <br />
                                But inside, I felt disconnected; never quite enough, never truly fulfilled. <br />I kept
                                pushing, hoping passion would follow achievement.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Then my body forced me to stop. A major surgery. A burnout. A traffic accident. One
                                after the other, each a loud and clear message: You cannot keep living this way.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Unable to return to my old path, I shifted. I became a lecturer; my first real encounter
                                with coaching; and something started to awaken in me.
                                <br />I realized I wasn’t just burned out; I was out of alignment with myself.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                What started as a personal journey became my calling. Each training I took cracked me
                                open.
                                <br />
                                Every practice helped shake something loose; old patterns, suppressed emotions, unspoken
                                truths. Bit by bit, I shed what wasn’t mine and began hearing what was in my heart for
                                this world.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                I trained as an ICF-accredited Co-Active Coach, a certified feminine embodiment and
                                somatic coach, a breathwork facilitator, and a Qigong instructor. My years of dance and
                                somatic movement practice gave me the language of the body, the wisdom of stillness, and
                                the courage to hold space for others in their most tender, powerful transitions.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Today, I guide individuals; especially women and professionals; who feel stuck,
                                overwhelmed, or out of sync, and help them return to the intelligence of their bodies.
                                Whether you're navigating burnout, emotional blocks, or just craving more aliveness, I
                                offer grounded tools to support nervous system regulation, emotional release, and
                                embodied alignment.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                My mission is simple: To help you feel more; so you can live, lead, and love with
                                clarity, joy, and purpose.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img
                                src={About}
                                alt="Founder portrait"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Philosophy */}
            <section id="philosophy" className="bg-[#d9cbb8] py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="text-4xl font-bold text-[#3b3a2e] mb-8"
                        style={{fontFamily: '"Playfair Display", serif'}}
                    >
                        My Philosophy
                    </h2>
                    <blockquote className="text-lg text-gray-700 mb-6 ">
                        Every breath is an opportunity for transformation.<br />  
                         Every movement is a chance to reconnect with
                        your authentic self. <br />
                        I believe that within each of us lies the innate wisdom to heal, grow, and
                        thrive.
                    </blockquote>
                    <div >
                        <p className="text-lg text-gray-700 mb-6">
                            My approach is grounded in the belief that true healing happens when we create a safe,
                            nurturing space for the body's natural intelligence to emerge. <br />
                            Through gentle guidance and
                            compassionate support, I help my clients discover their own path to their own spark.
                        </p>
                        <p className="text-lg text-gray-700">
                            Whether working with individuals or groups, my goal is always the same: to empower you with
                            the tools and awareness needed to continue your healing journey long after our sessions
                            together.
                        </p>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="bg-[#3b3a2e] py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="text-4xl font-bold text-white mb-6"
                        style={{fontFamily: '"Playfair Display", serif'}}
                    >
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                       new txt ??
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:ebru.dargan@gmail.com"
                            className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-lg font-semibold hover:bg-[#edeae4] transition-colors text-lg"
                        >
                            Start your Journey
                        </a>
                        <a
                            href="#about"
                            className="border-2 border-[#f5f3ef] text-[#f5f3ef] px-8 py-4 rounded-lg font-semibold hover:bg-[#f5f3ef] hover:text-[#3b3a2e] transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToActionPage;
