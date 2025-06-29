import React from 'react';

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-[#b4b29a] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Heading and Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How breathandbodymovement can help you
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          Dit is een beschrijving van de missie en visie van breathandbodymovement. 
          We zijn toegewijd aan het verbeteren van de kwaliteit van leven door middel van coaching, training en workshops.
          Onze aanpak is uniek en gericht op het bevorderen van persoonlijke groei en welzijn.
        </p>

        {/* Grid with Cards and Center Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Top Left Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mentally</h3>
            <ul className="text-gray-600">
              <li>Coaching</li>
              <li>Training</li>
              <li>Workshops</li> 
              <li>Training</li>
              <li>Workshops</li>
              <li>Coaching</li>
            </ul>
          </div>

          {/* Top Right Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Physically</h3>
           <ul className="text-gray-600">
              <li>Coaching</li>
              <li>Training</li>
              <li>Workshops</li> 
              <li>Training</li>
              <li>Workshops</li>
              <li>Coaching</li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="md:col-span-2 flex justify-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="rotationg ying yang symbol illustration"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Bottom Left Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Emotionally</h3>
          <ul className="text-gray-600">
              <li>Coaching</li>
              <li>Training</li>
              <li>Workshops</li> 
              <li>Training</li>
              <li>Workshops</li>
              <li>Coaching</li>
            </ul>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Spiritually</h3>
           <ul className="text-gray-600">
              <li>Coaching</li>
              <li>Training</li>
              <li>Workshops</li> 
              <li>Training</li>
              <li>Workshops</li>
              <li>Coaching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
