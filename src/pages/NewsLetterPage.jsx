const NewsLetterPage = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[#f0eae2] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Life Coaching van breathandbodymovement for Our Newsletter</h1>
          <p className="text-gray-600 mb-8">Stay updated with the latest news and exclusive offers.</p>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default NewsLetterPage;