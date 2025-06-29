import AboutImage from "../assets/image/aboutimage.jpg";

const CallToActionPage = () => {
  return (
  <>
 <section id="cta" class="min-h-screen relative flex items-center justify-center bg-[#3b3a2e] text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" bis_skin_checked="1">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" bis_skin_checked="1">
      <img class="object-cover object-center rounded" alt="hero" src={AboutImage}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" bis_skin_checked="1">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Our Founder
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center" bis_skin_checked="1">
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Let’s connect</button>
      </div>
       <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-24 font-medium text-gray-900">” Until you make the subconscious conscious,
it will rule your life and you will call it fate “
      </h1>
    </div>
  </div>
</section>
  </>
  );
};

export default CallToActionPage;
// This code defines an AboutPage component that displays information about the founder of a coaching and movement practice.
// min-h-screen relative bg-[#3b3a2e]