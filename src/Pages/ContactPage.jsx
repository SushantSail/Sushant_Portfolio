import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <section className="text-white py-20 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen py-16 relative overflow-hidden">
      {/* ===== Title / Quote Section ===== */}
      <div className="text-center mb-16">
        <p className="text-red-600 uppercase tracking-widest font-semibold text-sm md:text-base">
          Let’s Connect
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Contact Me
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg italic">
          “Meaningful collaborations begin with a simple ‘Hello’. Let’s build
          something inspiring together.”
        </p>
      </div>

      {/* ===== Profile Image ===== */}
      <div className="w-52 h-52 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-red-600 shadow-lg shadow-red-900/40 mb-10">
        <img
          src="../images/ProfilePic.jpg" // 👈 Replace with your actual image
          alt="Sushant Sail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== Profile Summary ===== */}
      <div className="max-w-3xl text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Hi, I’m <span className="text-red-600">Sushant Sail</span>
        </h3>

        <p className="text-[#a9a9a9] text-lg leading-relaxed mb-4">
          A passionate Front-End Developer dedicated to building interactive,
          responsive, and user-focused digital experiences. With a love for
          modern JavaScript frameworks and clean design systems, I turn ideas
          into fast and functional web apps.
        </p>

        <p className="text-[#a9a9a9] text-lg leading-relaxed">
          My journey blends creativity and code — from crafting seamless UIs to
          building scalable full-stack applications. I believe great design
          happens when logic meets imagination.
        </p>
      </div>

      {/* ===== Contact Info ===== */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#a9a9a9]">
        {/* Gmail */}
        <a
          href="mailto:sushantsail.dev@gmail.com"
          className="flex items-center gap-3 hover:text-red-600 transition"
        >
          <FaEnvelope className="text-2xl" />
          <span className="text-lg">sushantsail1522@gmail.com</span>
        </a>

        {/* Divider */}
        <span className="hidden sm:block text-gray-600">|</span>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sushant-sail-20182615a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-red-600 transition"
        >
          <FaLinkedin className="text-2xl" />
          <span className="text-lg">linkedin.com/in/sushantsail</span>
        </a>
      </div>

       <div className="mt-14">
          <Link
            to="/home"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded px-6 py-3 transition-all duration-300 shadow-md hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
    </section>
  );
};
