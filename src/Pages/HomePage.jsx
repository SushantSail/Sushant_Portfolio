import React, { useState , lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const heroVideo = "/images/video.mp4";

const TrendingNow = lazy(() => import("../Components/TrendingNow"));
const TopTen = lazy(() => import("../Components/TopTen"));

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Certifications", to: "/certifications" },
  { label: "Projects", to: "/projects" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contactme" },
];

export const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ===== Top Nav Header ===== */}
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50 flex items-center justify-between px-6 sm:px-16 h-14">
        <div className="flex items-center space-x-4">
          <img src="./images/New.png" alt="Logo" className="h-10 sm:h-14 w-auto"/>
          <nav className="hidden sm:flex space-x-6 text-sm font-semibold">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="hover:text-red-600 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation menu"
        >
          {isNavOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`fixed top-14 left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800 sm:hidden ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-3 hover:text-red-600 transition-colors"
              onClick={() => setIsNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ===== Hero Banner Section ===== */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 sm:px-16 pt-14">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Hero Content moved slightly downward */}
        <div className="relative z-10 max-w-3xl pt-20 mt-40">
          <h1 className="text-6xl font-extrabold mb-4">
            Sushant <span className="text-red-600">Sail</span>
          </h1>
          <p className="max-w-xl mb-6 text-gray-300 text-lg">
            Turning ideas into interactive and scalable digital experiences — blending creativity with modern technology.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1Ah3e8Mvpk0bkkclnY4EgKYKOIa3rhZJz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-300 transition"
            >
              <FaPlay /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/sushantsail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700/80 text-white px-6 py-3 rounded font-semibold hover:bg-gray-600 transition"
            >
              <FaInfoCircle /> More Info
            </a>
          </div>
        </div>
      </section>

<Suspense fallback={
  <div className="flex items-center justify-center h-screen text-white text-xl">
  Loading...
</div>
}>
        <TrendingNow />
        <TopTen />
</Suspense>


            {/* ===== Footer Section ===== */}
<footer className="bg-black text-gray-400 mt-16 px-6 sm:px-16 py-10 border-t border-gray-800">
  <div className="max-w-6xl mx-auto text-center space-y-8">

    {/* Quote above email input */}
    <p className="text-lg sm:text-xl text-gray-200 font-medium">
      Ready to connect? Enter your email to get in touch or learn more.
    </p>

    {/* Email Connect Section */}
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

    {/* Language and Info Section */}
    <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-gray-400 gap-3 mt-6">
      <select
        name="language"
        id="language"
        className="bg-black border border-gray-600 px-3 py-2 rounded-md text-white"
      >
        <option>English</option>
        <option>हिंदी</option>
      </select>
      <p className="text-gray-500">© 2025 Sushant Sail | Portfolio India</p>
    </div>

    {/* Recaptcha-like Info */}
    <p className="text-xs text-gray-600 mt-4 max-w-2xl mx-auto">
      This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Learn more
      </a>
      .
    </p>

  </div>
</footer>

    </div>
  );
};

export default HomePage;