


export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">

        <div className="flex flex-col justify-center px-16 max-w-xl">

          <h1 className="text-6xl font-bold mb-6">
            SmartCourse
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed">
            Learn modern technologies, build real-world projects,
            and become job-ready with industry-level courses.
          </p>

          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Learning"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        {children}
      </div>

    </div>
  );
}