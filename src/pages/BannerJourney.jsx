

const BannerJourney = () => {
    return (
        <>
            <section className="bg-[#3b3a2e] py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="text-4xl font-bold text-white mb-6"
                        style={{fontFamily: '"Playfair Display", serif'}}
                    >
                        Ready to Begin Your Journey?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:ebru.dargan@gmail.com"
                            className="bg-[#f5f3ef] text-[#3b3a2e] px-8 py-4 rounded-3xl font-semibold hover:bg-[#edeae4] transition-colors text-lg"
                        >
                            Start your Journey
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerJourney;
