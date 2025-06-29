import Roundarena from "../assets/image/roundarena.jpg";

const AboutPage = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center bg-[#d9cbb8] py-20 px-6 mt-24 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-6">
            Welkom bij Life Coaching van breathandbodymovement
            Where humans come to connect,
            heal and transform for a positive
            life change and a real metamorphose.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Bij Life Coaching van breathandbodymovement geloven we in de kracht van beweging en dans om je innerlijke kracht te ontdekken en te transformeren. 
            Onze unieke aanpak combineert coaching met lichaamsbeweging, waardoor je niet alleen mentaal, maar ook fysiek sterker wordt.
            Of je nu wilt groeien in je persoonlijke leven of professioneel, wij zijn er om je te begeleiden op deze reis.
            Ontdek persoonlijke groei en succes met de begeleiding van breathandbodymovement. 
            Samen werken we aan jouw doelen!
          </p>
          
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={Roundarena}
            alt="Life coaching visual"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-6">
            Why stay in the cage when the door has always
            been open? It’s time to step through that door,
            spread your wings, and claim your essence!
          </h1>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
