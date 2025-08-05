
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-[#d4d2c3] max-w-3xl w-full p-6 rounded-xl relative overflow-y-auto max-h-[90vh] font-sans text-base text-[#3b3a2e]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3b3a2e] text-lg hover:text-red-500"
        >
          Close
        </button>

        <h1 className="text-2xl font-bold text-center mb-4 font-playfair">
          Contact Us
        </h1>
        <p className="text-sm text-center mb-6 max-w-xl mx-auto">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <form
              action="https://formsubmit.co/ebru.dargan@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full p-3 border border-gray-500 rounded focus:outline-none focus:border-[#6e6c50] invalid:border-red-500 transition"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full p-3 border border-gray-500 rounded focus:outline-none focus:border-[#6e6c50] invalid:border-red-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                title="Please enter a valid email address"
                className="w-full p-3 border border-gray-500 rounded focus:outline-none focus:border-[#6e6c50] invalid:border-red-500 transition"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="w-full p-3 border border-gray-500 rounded focus:outline-none focus:border-[#6e6c50] transition"
              />

              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thank-you"
              />

              <button
                type="submit"
                className="bg-[#6e6c50] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#5a5840] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <a
                href="mailto:ebru.dargan@gmail.com"
                className="flex items-center"
              >
                <MdOutlineEmail className="mr-2" />
                Email
              </a>
              <a
                href="https://www.instagram.com/ebruuudrgn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <CiInstagram className="mr-2" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/ebrudargan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <CiLinkedin className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
