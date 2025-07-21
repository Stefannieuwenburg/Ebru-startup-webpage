import "../Styles.css";
import { Link } from 'react-router-dom';
import CorporateTrainings  from "../assets/image/CorporateTrainings.jpg";
const CorporateTraining = () => {
  return (
     <>
       <section id = "corporatetraining" className="bg-[#f0eae2] py-16">
                                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                             <div className="relative">
                                                 <img
                                                     src={CorporateTrainings}
                                                     alt="Wellness and movement"
                                                     className="rounded-lg shadow-lg w-full h-full object-cover"
                                                 />
                                             </div>
                                             <div>
                                                 <h2 className="text-lg text-[#3b3a2e] mb-6">
                                                     <strong>Corporate Trainings</strong>
                                                 </h2>
                                                 <p className="text-lg text-[#3b3a2e] mb-6">
                                                  Empower your team with embodiment-based trainings designed to build emotional intelligence, resilience, and presence in the workplace. Through somatic awareness, breathwork, and conscious movement, these sessions help teams manage stress, improve focus, and foster authentic leadership in fast-paced environments.
                                                 </p>
                   <h3 className="mb-4 mt-4" ><strong>Tools</strong></h3>
<ul className="text-lg text-[#3b3a2e] ">
  <li>Somatic Movement — ground and release tension</li>
  <li>Breathwork & Qigong — open energy flow and calm the nervous system</li>
  <li>Embodiment Rituals — ignite inner power and emotional freedom</li>
  <li>Relational Exercises — foster trust and authentic connection</li>
</ul>

<h3 className="mb-4 mt-4 "><strong>Benefits </strong></h3>
<ul className="text-lg text-[#3b3a2e] ">
  <li>Deepen body, emotional, and intuitive connection</li>
  <li>Release held tension and stress</li>
  <li>Regulate nervous system for ease and clarity</li>
  <li>Feel supported in a safe collective space</li>
  <li>Access subconscious awareness and inner vitality</li>
</ul>
                                                
                                                 <p className="text-lg text-[#3b3a2e] mb-8 mt-4">
                                                    These trainings are adaptable for team offsites, leadership retreats, and can be offered globally, both in-person and online.
                                                    Let’s co-create a more conscious, connected, and thriving workplace — one breath, one body, one leader at a time.
                                                 </p>
                                                 <Link
                                                     to="/about"
                                                     className="bg-[#3b3a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2c22] transition-colors"
                                                 >
                                                     Contact Us
                                                 </Link>
                                             </div>
                                         </div>
                                     </div>
                                 </section>  
        </>
   
  );
}   
export default CorporateTraining;