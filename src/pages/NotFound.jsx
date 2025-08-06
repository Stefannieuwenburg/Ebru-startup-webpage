export default function NotFound() {
  return (
    <div className="flex min-h-screen pt-12 pb-20 scroll-mt-16 flex-col items-center justify-center bg-gray-950 text-white text-center px-4">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-lg text-gray-400">Page not found. The journey ends here.</p>
        <p className="mt-2 text-sm text-gray-500">But don't worry, you can always go back to the homepage.</p>
       <Link
                                to="/"
                                className="bg-[#3b3a2e] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#2d2c22] transition-colors "
                            >
                               Go back to the homepage
                            </Link>
    </div>
  );
}
