
import { useState } from "react";

const FAQPage = () => {
  return (
    <section
      id="faq"
      className="min-h-screen pt-12 pb-20 scroll-mt-16 relative z-20 overflow-hidden pb-12 pt-20 bg-[#d4d2c3]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[620px] text-center">
              <h1
                className="mb-4 text-4xl italic font-bold text-[#3b3a2e] sm:text-[40px]/[48px]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Frequently Asked Questions
              </h1>
              <p className="text-base text-[#4b493d]">
                Here are some common questions about my coaching services. <br />
                If you have more questions, feel free to reach out!
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto -mx-4 flex flex-wrap gap-y-4">
          <div className="w-full px-4 lg:w-1/2 space-y-4">
            <AccordionItem
              header="What does 'alignment' mean in this coaching?"
              text="Alignment is about finding balance between your body, mind, emotions, and spirit. When you’re aligned, your energy flows freely, you feel grounded and present, and your actions reflect your true self and purpose. Coaching helps you discover and maintain this harmony"
            />
            <AccordionItem
              header="What is somatic and breathwork coaching?"
              text="Somatic and breathwork coaching combines movement, breath, and awareness to help you reconnect with your body, emotions, and mind. It supports healing, stress relief, and personal growth by working directly with your body’s natural intelligence."
            />
            <AccordionItem
              header="How can your coaching help with mental clarity or stress?"
              text="Through somatic and embodiment practices, we gently guide the nervous system into regulation, helping manage stress and anxiety. This fosters deeper awareness, clears thought patterns, enhances mental clarity, and boosts creativity."
            />
            <AccordionItem
              header="Is this therapy?"
              text="No, it’s not therapy — but it can be deeply therapeutic. This work complements therapy beautifully, especially if you’ve been doing mindset work and feel ready to bring the body into your healing journey."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2 space-y-4">
            <AccordionItem
              header='What do you mean when you say “the body holds the key to healing"?'
              text="Emotions, stress, and trauma don’t just live in the mind — they are stored in the body through patterns of tension, posture, breath, and sensation. When we slow down and listen to the body, we gain access to unconscious patterns and wisdom that can’t be reached through thinking alone. This is where real, lasting change begins."
            />
            <AccordionItem
              header="Can this work improve my physical health or energy levels?"
              text="Absolutely. Somatic coaching supports better sleep, boosts energy, and enhances physical performance by releasing tension and optimizing your body’s natural rhythms."
            />
            <AccordionItem
              header="What’s different about your approach?"
              text="I blend somatic coaching, conscious dance, qigong, and breathwork in a grounded, intuitive way. Each of these modalities offers a different path into the body."
            />
            <AccordionItem
              header="What kind of results can I expect?"
              text="Clients often report feeling more grounded, energized, emotionally clear, and in touch with their intuition. Over time, this creates shifts in how they show up — in relationships, leadership, creativity, and life direction. You’ll learn tools to regulate stress, express emotions, and reconnect to your body’s wisdom — even in the chaos of daily life."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
        </svg>
      </div>
    </section>
  );
};

export default FAQPage;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full">
      <button
        className="flex w-full text-left items-center gap-3"
        onClick={() => setActive(!active)}
      >
        <div className="flex h-8 w-8 items-center justify-center text-[#3b3a2e]">
          <svg
            className={`transform duration-300 ${active ? "rotate-180" : ""}`}
            width="18"
            height="10"
            viewBox="0 0 18 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="#3b3a2e"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <h4 className="text-lg font-medium text-[#3b3a2e] font-playfair">
          {header}
        </h4>
      </button>

      {active && (
        <div className="mt-2 pl-10">
          <p className="text-base text-[#4b493d] leading-relaxed">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};
