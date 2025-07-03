
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'HOLDEN CAULFIELD',
    role: 'Senior Product Designer',
    image: 'https://dummyimage.com/302x302',
    text: `Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.`,
  },
  {
    name: 'ALPER KAMU',
    role: 'UI Developer',
    image: 'https://dummyimage.com/300x300',
    text: `Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid.`,
  },
  {
    name: 'HENRY LETHAM',
    role: 'CTO',
    image: 'https://dummyimage.com/305x305',
    text: `Fanny pack vaporware helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.`,
  },
  {
    name: 'JANE DOE',
    role: 'Marketing Lead',
    image: 'https://dummyimage.com/310x310',
    text: `Adaptogen squid fanny pack vaporware. Edison bulb retro cloud bread echo park.`,
  },
  {
    name: 'JOHN SMITH',
    role: 'Engineer',
    image: 'https://dummyimage.com/308x308',
    text: `DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.`,
  },
  {
    name: 'LISA RAY',
    role: 'Product Manager',
    image: 'https://dummyimage.com/306x306',
    text: `Helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.`,
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
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialsPage = () => {
  return (
    <section className="min-h-screen bg-[#e8d5c0] flex items-center justify-center text-gray-600 body-font mt-24">
      
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold font-playfair text-center text-[#3b3a2e] mb-6"   style={{ fontFamily: '"Playfair Display", serif' }}>
              Testimonals for breath&<span className="italic">Body Movement</span>
            </h1>
           <p className="text-lg text-center  text-[#3b3a2e] mb-8">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>
        <Slider {...sliderSettings}>
          {testimonials.map((t, index) => (
            <div key={index} className="p-4">
              <div className="h-full flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={t.image}
                />
                <p className="leading-relaxed text-center">{t.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-[#3b3a2e] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm text-center">{t.name}</h2>
                <p className="text-gray-500 text-center">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsPage;


//<section class="min-h-screen bg-[#e8d5c0] flex items-center justify-center text-gray-600 body-font mt-24">
//const TestimonialsPage = () =>