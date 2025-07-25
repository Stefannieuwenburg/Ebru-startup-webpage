
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
   {
    text: `I have had the pleasure of working closely with Ebru. Her guidance has been transformative, enhancing both my personal and professional life.
           Ebru possesses a unique ability to create a safe and supportive environment, allowing me to explore and understand my emotions deeply. Her empathetic and non-judgmental approach made it easy for me to open up and discuss my challenges, which was a crucial first step in my journey toward emotional balance.
           Her insights, support, and encouragement have been invaluable to me, and I have witnessed significant improvements in my emotional health and overall happiness.`,
    name: 'Linda van D.',
    role: 'HR Business Partner',
    county: 'The Netherlands',
  },
  {
    text: `Life can be full of unexpected encounters, and one of the most fortunate for me was meeting Ebru in Amsterdam. Our initial conversation sparked something special, and it naturally developed into a coaching relationship. I am writing to wholeheartedly recommend Ebru as a life coach.
           When I first started working with her, I felt lost and unsure about my direction. With all honesty, I still do not know it for sure, but that is not so relevant.
           She helped me to gain a deeper understanding of my own feelings, goals, and values. This process of self-discovery was instrumental in being more compassionate towards myself and consider my feelings and intuition more to make decisions.
           Ebru has a remarkable ability to ask insightful questions, create a safe space for exploration and make a smooth swift to the source of the conflicting behaviour when she spots it. Through her guidance, I learned to identify limiting beliefs and how to work on negative thought patterns.
           I highly recommend her to anyone seeking a supportive and insightful coach who can help them navigate self-discovery and personal growth.`,
    name: 'Inci B.',
    role: 'eCommerce Partner & IP Counsel',
    county: 'The Netherlands',
  },
  {
    text: `I was going through a time when I felt I had to leave behind my 15-year-long corporate and managerial career. I was physically and mentally exhausted. Yet I believed I didn’t have the luxury to be tired—because I was about to start something entirely new. Constant productivity and overworking were wired deep into my system.
           That’s when I met Ebru. She gently walked me through the stages I might face on the path ahead and created spacious, compassionate containers for each one of them. Every time I felt like giving up, she reminded me that rest was not failure—it was wisdom. She taught me how to trust my body again and listen to the signals it was sending me.
           "If you're not well, the work you dream of creating won’t come to life the way you imagine it," she repeated to me more than once. And in my most difficult moments, she always made me feel she was truly there. That kind of presence built a safe and grounding connection for me.
           We’ve been walking this journey together for 14 months now. Ebru doesn’t just coach—she leads by example. She dares to step outside the conventional frame, sharing her own growth process with sincerity and courage. She brings her training into action, shares generously, experiments immediately, and welcomes feedback. That kind of richness is rare—and incredibly valuable as a client.
           For years, our generation was taught to "manage time efficiently" through the lens of a 24-hour, masculine system. But with Ebru, I discovered the wisdom of cyclical time—the intelligence of living in sync with the body’s 28-day rhythms.
           We haven’t met in person yet. All our sessions were held through screens. But I deeply wish to meet her face-to-face soon—to sit together in a circle.
           What we experienced together was far beyond a traditional coaching journey.
           If you are ready to look at your life—and yourself—with truth and tenderness, I hope your path crosses with Ebru’s one day.`,
    name: 'Elif B.',
    role: 'Astrolog & Cacaoista',
    county: 'Germany',
  },
  {
    text: `When I met Ebru and listened to her talking about the workshop one day before, I immediately knew I had to get things done to be able to participate. Her motivation, kindness and love flows directly from her heart into us women.
           I felt comfortable and encouraged to be and feel myself from the first to the last second. Thanks for giving us a safe place, inspiring us to be more us and be at the same time part of the group.
           After the workshop I felt even more connected to myself and all the other lovely women. I felt happy, free and powerful.
           During the workshop I have experienced a clear understanding of something that is going on in my life. Something I have already known by my mind and now there was kind of a release through my body. I am thankful for the flow I can feel in my body.`,
    name: 'Ramona K.',
    role: 'Physiotherapist',
    county: 'Thailand',
  },
  {
    text: `I met Ebru at one of the HUTAC (Huygens Talent Circle) events, where she gave an impressive presentation. After which I decided to work with her. Ebru is a compassionate listener and a true advocate for her clients' well-being.
           She is able to ask the right questions to get to the heart of the issue. And provides encouragement and support needed to foster meaningful growth and transformation.
           Her communication style in regards to appointments is clear and accommodating, and she will always give you the time to end the session organically. Making you feel less like just another client.
           In summary, I highly recommend Ebru to anyone seeking a skilled and compassionate coach who is committed to helping them thrive personally and professionally.`,
    name: 'Arno S.',
    role: 'Technical Art Director',
    county: 'The Netherlands',
  },
  {
    text: `I’ve really enjoyed your workshop, a very safe space to land and express.
           Your guidance is powerfully yet gentle, inviting to explore and deeply listen to the wisdom of our bodies.
           It was a very yummy place to be in, connecting, moving freely, feeling safe and seen by other women, in deep reverence for our femininity and shared path.
           In the light. We are one.`,
    name: 'Aurora S.',
    role: 'Healer',
    county: 'Belgium',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

// ✅ Extract into a separate component with local state
const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);

  const getShortText = (text) => {
    const sentences = text.split('. ');
    return sentences.slice(0, 5).join('. ') + (sentences.length > 4 ? '...' : '');
  };

  const isLong = testimonial.text.split('. ').length > 4;

  return (
    <div className="p-4">
      <div className="h-full flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
        <p className="text-gray-900 font-medium tracking-wider text-sm text-center">
          {expanded ? testimonial.text : getShortText(testimonial.text)}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#3b3a2e] mt-2 text-sm hover:underline focus:outline-none"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
        <span className="inline-block h-1 w-10 rounded bg-[#3b3a2e] mt-2 mb-2"></span>
        <h2 className="text-gray-900 font-medium tracking-wider text-sm text-center">{testimonial.name}</h2>
        <h2 className="text-gray-900 font-medium tracking-wider text-sm text-center">{testimonial.role}</h2>
        <h2 className="text-gray-900 font-medium tracking-wider text-sm text-center">{testimonial.county}</h2>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <section className="min-h-screen bg-[#e8d5c0] flex items-center justify-center text-gray-600 body-font mt-24">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold font-playfair text-center text-[#3b3a2e] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
          Testimonials for breath&<span className="italic">Body Movement</span>
        </h1>
        <p className="text-lg text-center text-[#3b3a2e] mb-8">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>
        <Slider {...sliderSettings}>
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsPage;


// const testimonials = [
//   {
//     text: `I have had the pleasure of working closely with Ebru. Her guidance has been transformative, enhancing both my personal and professional life.
//            Ebru possesses a unique ability to create a safe and supportive environment, allowing me to explore and understand my emotions deeply. Her empathetic and non-judgmental approach made it easy for me to open up and discuss my challenges, which was a crucial first step in my journey toward emotional balance.
//            Her insights, support, and encouragement have been invaluable to me, and I have witnessed significant improvements in my emotional health and overall happiness.`,
//     name: 'Linda van D.',
//     role: 'HR Business Partner',
//     county: 'The Netherlands',
//   },
//   {
//     text: `Life can be full of unexpected encounters, and one of the most fortunate for me was meeting Ebru in Amsterdam. Our initial conversation sparked something special, and it naturally developed into a coaching relationship. I am writing to wholeheartedly recommend Ebru as a life coach.
//            When I first started working with her, I felt lost and unsure about my direction. With all honesty, I still do not know it for sure, but that is not so relevant.
//            She helped me to gain a deeper understanding of my own feelings, goals, and values. This process of self-discovery was instrumental in being more compassionate towards myself and consider my feelings and intuition more to make decisions.
//            Ebru has a remarkable ability to ask insightful questions, create a safe space for exploration and make a smooth swift to the source of the conflicting behaviour when she spots it. Through her guidance, I learned to identify limiting beliefs and how to work on negative thought patterns.
//            I highly recommend her to anyone seeking a supportive and insightful coach who can help them navigate self-discovery and personal growth.`,
//     name: 'Inci B.',
//     role: 'eCommerce Partner & IP Counsel',
//     county: 'The Netherlands',
//   },
//   {
//     text: `I was going through a time when I felt I had to leave behind my 15-year-long corporate and managerial career. I was physically and mentally exhausted. Yet I believed I didn’t have the luxury to be tired—because I was about to start something entirely new. Constant productivity and overworking were wired deep into my system.
//            That’s when I met Ebru. She gently walked me through the stages I might face on the path ahead and created spacious, compassionate containers for each one of them. Every time I felt like giving up, she reminded me that rest was not failure—it was wisdom. She taught me how to trust my body again and listen to the signals it was sending me.
//            "If you're not well, the work you dream of creating won’t come to life the way you imagine it," she repeated to me more than once. And in my most difficult moments, she always made me feel she was truly there. That kind of presence built a safe and grounding connection for me.
//            We’ve been walking this journey together for 14 months now. Ebru doesn’t just coach—she leads by example. She dares to step outside the conventional frame, sharing her own growth process with sincerity and courage. She brings her training into action, shares generously, experiments immediately, and welcomes feedback. That kind of richness is rare—and incredibly valuable as a client.
//            For years, our generation was taught to "manage time efficiently" through the lens of a 24-hour, masculine system. But with Ebru, I discovered the wisdom of cyclical time—the intelligence of living in sync with the body’s 28-day rhythms.
//            We haven’t met in person yet. All our sessions were held through screens. But I deeply wish to meet her face-to-face soon—to sit together in a circle.
//            What we experienced together was far beyond a traditional coaching journey.
//            If you are ready to look at your life—and yourself—with truth and tenderness, I hope your path crosses with Ebru’s one day.`,
//     name: 'Elif B.',
//     role: 'Astrolog & Cacaoista',
//     county: 'Germany',
//   },
//   {
//     text: `When I met Ebru and listened to her talking about the workshop one day before, I immediately knew I had to get things done to be able to participate. Her motivation, kindness and love flows directly from her heart into us women.
//            I felt comfortable and encouraged to be and feel myself from the first to the last second. Thanks for giving us a safe place, inspiring us to be more us and be at the same time part of the group.
//            After the workshop I felt even more connected to myself and all the other lovely women. I felt happy, free and powerful.
//            During the workshop I have experienced a clear understanding of something that is going on in my life. Something I have already known by my mind and now there was kind of a release through my body. I am thankful for the flow I can feel in my body.`,
//     name: 'Ramona K.',
//     role: 'Physiotherapist',
//     county: 'Thailand',
//   },
//   {
//     text: `I met Ebru at one of the HUTAC (Huygens Talent Circle) events, where she gave an impressive presentation. After which I decided to work with her. Ebru is a compassionate listener and a true advocate for her clients' well-being.
//            She is able to ask the right questions to get to the heart of the issue. And provides encouragement and support needed to foster meaningful growth and transformation.
//            Her communication style in regards to appointments is clear and accommodating, and she will always give you the time to end the session organically. Making you feel less like just another client.
//            In summary, I highly recommend Ebru to anyone seeking a skilled and compassionate coach who is committed to helping them thrive personally and professionally.`,
//     name: 'Arno S.',
//     role: 'Technical Art Director',
//     county: 'The Netherlands',
//   },
//   {
//     text: `I’ve really enjoyed your workshop, a very safe space to land and express.
//            Your guidance is powerfully yet gentle, inviting to explore and deeply listen to the wisdom of our bodies.
//            It was a very yummy place to be in, connecting, moving freely, feeling safe and seen by other women, in deep reverence for our femininity and shared path.
//            In the light. We are one.`,
//     name: 'Aurora S.',
//     role: 'Healer',
//     county: 'Belgium',
//   },
// ];


//<section class="min-h-screen bg-[#e8d5c0] flex items-center justify-center text-gray-600 body-font mt-24">
//const TestimonialsPage = () =>