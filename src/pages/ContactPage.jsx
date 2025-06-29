
const ContactPage = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[ #d4d2c3] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact breathandbodymovement
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>
        <form className="max-w-md mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactPage;
// This code defines a ContactPage component that displays a contact form for users to reach out with
// their name, email, and message. The form includes basic styling and a submit button.
