import React from 'react';
import { Link } from 'react-router-dom';
import { FaqSection } from './FaqSection';

export const LandingPage = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-20 bg-transparent shadow-md px-4 sm:px-[9.25rem] h-16 sm:h-[7rem] flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="./images/New.png"
            alt="Logo"
            className="h-10 sm:h-40 w-auto"
          />
        </div>

        {/* Right: Language + Get Started */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative border border-gray-400 rounded-md pt-1 pr-5 pb-1 pl-4 sm:pl-[28px] flex items-center">
            <svg
              className="text-white absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"></path>
            </svg>
            <select className="bg-transparent text-white text-sm sm:text-base font-normal pl-4 sm:pl-2 pr-2 sm:pr-1">
              <option>English</option>
            </select>
          </div>
          <Link to="/home">
          <button className="bg-red-600 text-white text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-1.5 rounded hover:bg-red-700 transition font-semibold">
            Get Started
          </button>
          </Link>
        </div>
      </nav>

      {/* ================= Landing Section ================= */}
      <section
        style={{
          backgroundImage: "url('/images/landing_Bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative flex items-center justify-center text-center text-white min-h-screen pt-[7rem]" // 👈 added padding-top = navbar height
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-7">
            Ideas, Projects, Innovation, and more
          </h1>
          <h3 className="text-lg sm:text-lg md:text-xl mb-5">
            Explore my portfolio. Learn. Connect.
          </h3>
          <p className="text-base sm:text-sm md:text-md mb-3 font-semibold">
            Ready to collaborate? Enter your email to get in touch.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:w-96 px-4 py-3 rounded-md text-white focus:outline-none border border-gray-700 backdrop-blur-md shadow-lg hover:bg-zinc-800/80 bg-transparent"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition w-auto">
              Connect
            </button>
          </div>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="relative z-10 bg-black">
        <FaqSection />
      </section>
    </>
  );
};
