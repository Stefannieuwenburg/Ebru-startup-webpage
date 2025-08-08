

const BannerJourney = () => {
    return (
        <>
            <section className="bg-[#3b3a2e] min-h-[30vh] pt-12 pb-20 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="text-5xl leading-tight fonts-playfair font-bold text-white mb-6"
                    >
                        Ready to Begin Your Journey?
                    </h2>
                    <h2 className="leading-loose italic text-xl text-white mb-10 mx-auto">
                    You want to have more clarity in your life, reconnect with your energy, and calm within? <br />
                    You don’t need to do more. You need to feel more! <br/>
                    Let your body lead you home...
                   </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:ebru.dargan@gmail.com"
                            className="bg-[#f5f3ef] text-[#3b3a2e] px-6 py-4 rounded-3xl hover:bg-[#edeae4] transition-colors text-lg"
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
