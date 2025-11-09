import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen py-16 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7e5a935b-6d8d-4db2-b24a-79c4b783d6e7/f5f8792e-1a0a-4ed0-9f8b-0b7a2b2c640e.jpg')] bg-cover bg-center blur-sm"></div>

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm md:text-base">
            Career & Education
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            My Professional Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From engineering to crafting seamless digital experiences — here's
            how my story unfolds, one chapter at a time.
          </p>

          <div className="mt-6">
            <Link
              to="/home"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded px-6 py-3 transition-all duration-300 shadow-md hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-red-700/50 ml-4 md:ml-12">
          {/* Work Experience - TCS */}
          <div className="mb-10 ml-6 group">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-red-600 rounded-full ring-4 ring-red-900/50 transition-transform group-hover:scale-125"></span>
            <div className="p-6 bg-zinc-900/70 backdrop-blur-md rounded-lg shadow-lg hover:bg-zinc-800/80 hover:shadow-red-700/20 transition-all duration-300">
              <p className="text-red-500 text-sm font-semibold">
                Feb 2022 - Present
              </p>
              <h3 className="text-2xl font-bold mt-1 mb-2">
                Tata Consultancy Services (TCS)
              </h3>
              <p className="text-gray-400 text-sm italic mb-3">
                Role: Frontend Developer — HDFC Mobile Banking Project
              </p>
              <ul className="list-disc ml-5 text-gray-300 text-sm leading-relaxed">
                <li>
                  Developed and optimized reusable React components for an enterprise application serving millions of users on a daily basis.
                </li>
                <li>
                  Implemented API integrations and dynamic features per client requirements.
                </li>
                <li>
                  Investigated and resolved issues by identifying root causes and implementing efficient fixes.
                </li>
                <li>
                  Optimized frontend performance by reducing render time and improving code maintainability.
                </li>
              </ul>
            </div>
          </div>

          {/* Education - BE */}
          <div className="mb-10 ml-6 group">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-red-600 rounded-full ring-4 ring-red-900/50 transition-transform group-hover:scale-125"></span>
            <div className="p-6 bg-zinc-900/70 backdrop-blur-md rounded-lg shadow-lg hover:bg-zinc-800/80 hover:shadow-red-700/20 transition-all duration-300">
              <p className="text-red-500 text-sm font-semibold">June 2021</p>
              <h3 className="text-2xl font-bold mt-1 mb-2">
                New Horizon Institute of Technology & Management
              </h3>
              <p className="text-gray-300 text-sm">
                Bachelor of Engineering — Mechanical Engineering
              </p>
            </div>
          </div>

          {/* Education - Diploma */}
          <div className="mb-10 ml-6 group">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-red-600 rounded-full ring-4 ring-red-900/50 transition-transform group-hover:scale-125"></span>
            <div className="p-6 bg-zinc-900/70 backdrop-blur-md rounded-lg shadow-lg hover:bg-zinc-800/80 hover:shadow-red-700/20 transition-all duration-300">
              <p className="text-red-500 text-sm font-semibold">July 2018</p>
              <h3 className="text-2xl font-bold mt-1 mb-2">
                Government Polytechnic Mumbai
              </h3>
              <p className="text-gray-300 text-sm">
                Diploma in Mechanical Engineering
              </p>
            </div>
          </div>

          {/* School */}
          <div className="mb-10 ml-6 group">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-red-600 rounded-full ring-4 ring-red-900/50 transition-transform group-hover:scale-125"></span>
            <div className="p-6 bg-zinc-900/70 backdrop-blur-md rounded-lg shadow-lg hover:bg-zinc-800/80 hover:shadow-red-700/20 transition-all duration-300">
              <p className="text-red-500 text-sm font-semibold">June 2015</p>
              <h3 className="text-2xl font-bold mt-1 mb-2">
                Amar Kor Vidyalaya
              </h3>
              <p className="text-gray-300 text-sm">
                Completed SSC with distinction — the first chapter of my learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
