const NewsLetterPage = () => {
  return (
    <>
      <section className="min-h-[50vh] flex items-center justify-center bg-[#f0eae2] py-16 px-6 md:px-12 lg:px-24">
         {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-[#3b3a2e]  text-3xl md:text-4xl font-semibold mb-6">Subscribe to Life Coaching van breath&bodymovement for Our Newsletter</h1>
          <p className="text-gray-600 mb-8">Stay updated with the latest news and exclusive offers.</p>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6e6c50]"
            />
            <button
              type="submit"
              className="bg-[#6e6c50] text-white px-6 py-2 rounded-r-md hover:bg-[#5a5840] transition-colors"
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