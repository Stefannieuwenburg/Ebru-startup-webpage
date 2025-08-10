
import GroupCoachings from "../assets/image/GroupCoaching.jpg";

const GroupCoaching = () => {
    return (
        <>
            <section id="groupcoaching" className="bg-[#f0eae2] min-h-screen pt-12 pb-20 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src={GroupCoachings}
                                alt="Wellness and movement"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[#3b3a2e] bold leading-loose mb-6 mt-4">
                               <strong>Ignite Your Next Chapter</strong> 
                            </p>
                            <p className="text-[#3b3a2e] leading-loose mb-6">
                                Are you feeling stuck in one phase of life, ready for change but unsure how?
                                This group program offers a supportive community, practical tools, and somatic techniques to help you regulate emotions, release blocks, and reclaim your inner fire.
                            </p>
                            <ul className="text-[#3b3a2e] bold leading-loose mb-4 mt-4 ">
                                <li>
                                    <strong>Join if you:</strong>
                                </li>
                            </ul>
                            <ul className="text-[#3b3a2e] list-disc pl-5 mb-4 space-y-2">
                                <li>Feel trapped in a chapter that no longer serves you</li>
                                <li>Want connection with others committed to growth</li>
                                <li>Need body-based tools to manage stress and overwhelm</li>
                                <li>Crave an empowering space to share and be seen</li>
                            </ul>

                            <ul className="text-[#3b3a2e] bold leading-loose mb-4 mt-4 ">
                                <li>
                                    <strong>You’ll receive:</strong>
                                </li>
                            </ul>
                            <ul className="text-[#3b3a2e] list-disc pl-5 mb-4 space-y-2">
                                <li>Weekly live coaching, movement, and sharing sessions</li>
                                <li>Guided somatic and embodiment practices to reset your nervous system</li>
                                <li>Tools to release stuck energy and cultivate resilience</li>
                                <li>Ongoing community support to celebrate your progress</li>
                            </ul>

                            <p className="text-[#3b3a2e] leading-loose mb-8  mt-4 ">
                                Together, we’ll ignite your spark and launch your next chapter with clarity and courage.
                            </p>
                            <a
                                href="mailto:ebru.dargan@gmail.com"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl hover:bg-[#2d2c22] transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default GroupCoaching;
