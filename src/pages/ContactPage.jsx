function Contact() {
  return (
    
      <div className="bg-[#d4d2c3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#3b3a2e] mb-8"> Contact breathandbodymovement</h1>
           <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-[#3b3a2e] mb-4">Contact Form</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-500 rounded" required />
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-500 rounded" required />
                <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-500 rounded" required />
                <textarea placeholder="Message" className="w-full p-3 border border-gray-500 rounded" rows="4" required></textarea>
                <button type="submit" className="bg-[#6e6c50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a5840] transition-colors">Send Message</button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#3b3a2e] mb-4">Contact Information</h2>
              <p className="mb-2">Email: info@example.com</p>
              <p className="mb-2">Instagram: @breathandbodymovement</p>
              <p className="mb-2"></p>
              <div className="mt-6">
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Contact;

