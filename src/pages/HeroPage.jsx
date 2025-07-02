import SlowDance from "../assets/video/SlowVideo.mp4";
const HeroPage = () => {
  return (
    <>
     <section id="hero" className=" bg-[#d9cbb8]  relative w-full min-h-screen md:h-[80vh]  flex items-center justify-center text-white overflow-hidden mt-16 md:mt-0"> {/* mt-16 om ruimte te maken voor de fixed navbar */}
      {/* Video Placeholder */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={SlowDance} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay voor betere leesbaarheid */}
      {/* Inhoud Hero */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl italic md:text-6xl font-extrabold leading-tight md:leading-snug mb-4">
       Breathe. Move. Transform.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
         Reconnect with your body’s innate wisdom through conscious movement and breath and discover your inner strength.
        </p>
        <a
          href="#contact"
         className=" text-white px-6 py-4 rounded-3xl border-1 border-white hover:bg-[#6e6c50] transition"
        rel="noopener noreferrer">
          Start your journey
        </a>
      </div>
    </section>
   
    </>
  );
}       


export default HeroPage;
