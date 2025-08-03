
import ArenaSmal from "../assets/image/ArenaSmal.jpg";


function RhythmPage() {
   
    return (
        <>
            {/* Intro Section */}
            <section id="intro" className="bg-[#d4d2c3] min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#3b3a2e] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Return to the Rhythm of Your Being
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Wholeness is not something we chase — it’s something we return to.
                                It lives in the quiet between your breaths, in the fluidity of your movements, in the stillness of your mind.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Through intimate coaching, immersive workshops, and embodied practices, I invite you to step into a space where your body speaks, your heart softens, and your spirit feels free to expand.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Whether you’re seeking to release the weight of stress, awaken your vitality, or reconnect with your deeper essence, we’ll journey together — listening to your body’s whispers, honoring its wisdom, and creating transformation that flows into every part of your life.
                            </p>
                            <a
                                href="#story"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors"
                            >
                                My Story
                            </a>
                        </div>
                        <div className="relative group">
                            <img
                                src={ArenaSmal}
                                alt="Wellness and movement"
                                className="rounded-[2rem] w-full h-full object-cover group-hover:scale-105 group-hover:opacity-90 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RhythmPage;
