import Sundresblack from "../assets/image/sundresblack.jpg";
const WorkshopsPage = () => {
  return (
    <section id="workshops" className="min-h-screen flex items-center justify-center bg-[#e6ddcf]">
       
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Sundresblack}
            alt="Nuxt development illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Workshops
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="text-gray-700 text-lg">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
          </p>
        </div>
      
     
    </section>
  );
}   

export default WorkshopsPage;
