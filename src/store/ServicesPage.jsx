//<section class="min-h-screen bg-[#e8d5c0] flex items-center justify-center text-gray-600 body-font mt-24">

const categories = {
  Mentally: [
    'Stress and Anxiety Management',
    'Clarity and Concentration',
    'Deep Awareness',
    'Thought Patterns',
    'Creativity Boost',
  ],
  Physically: [
    'Improve Sleep',
    'Elevate Energy',
    'Physical Performance',
    'Enhances Organ Vitality',
    'Immune Support',
    'Feeling Free and Light',
  ],
  Emotionally: [
    'Release Blocked Energies',
    'Liberation from Past Memories',
    'Emotional Liberation',
    'Clearing Past Wounds',
    'Release of Fears and Limitations',
    'Emotional Subconscious Mind Reframing',
  ],
  Spiritually: [
    'Intuition and Insights',
    'Mind-Body Connection',
    'Higher Vibrational State',
    'Alignment with Purpose',
    'Divine Connections with Self & Others',
  ],
};
const ServicesPage = () => {
  return (
    <>
      <section className="min-h-screen pt-12 pb-20 scroll-mt-16 bg-[#b4b29a] text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#3b3a2e] mb-6"   style={{ fontFamily: '"Playfair Display", serif' }}>
              How breath&<span className="italic">Body Movement</span> can help you
            </h1>
            <p className="text-xl text-gray-700">
              Dit is een beschrijving van de missie en visie van breathandbodymovement. 
              We zijn toegewijd aan het verbeteren van de kwaliteit van leven door middel van coaching, training en workshops.
              Onze aanpak is uniek en gericht op het bevorderen van persoonlijke groei en welzijn.
            </p>
          </div>
 <div className="min-h-screen  p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold  mb-4  md:text-2xl  text-[#3b3a2e] ">{category}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
         </div>
         </section>
    </>
  );
};

export default ServicesPage;

